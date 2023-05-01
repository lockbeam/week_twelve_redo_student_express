<template>
    <div>
        <div class="card student-list m-2 p-2">
            <h4 class="card-title">Student List</h4>

            <!--Creating a button to allow user to edit (delete) a student from the table
            This box should be checked before the delete button does anything-->
            <div class="edit-table-toggle form-check">
                <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
                <label for="edit-table" class="form-check-label">Edit table?</label>
            </div>

            <div id="student-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                        <th v-show="editTable">Delete?</th>
                        <!--v-show will show the Delete? column header only when the edit table checkbox value is true-->
                    </tr>

                   <!-- TODO create table rows 
                   Each row will have a checkbox, bound to the app's data 
                   When the checkbox is checked/unchecked, the student will be signed in/out -->

                   <!--Instead of looping and creating student rows we're passing that responsibility to child
                    StudentRow and instead looping and creating student COMPONENTS-->

                    <student-row
                        v-for="student in students"
                        v-bind:student="student"
                        v-bind:key="student.starID"
                        v-bind:edit="editTable"
                        v-on:student-arrived-or-left="arrivedOrLeft"
                        v-on:delete-student="deleteStudent"> <!--Needs this to be able to handle the event from child and to pass it up the chain to Table's parent-->
                    </student-row>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

//this is now also a parent so need to import data too
import StudentRow from '@/components/StudentRow.vue'

export default {
//StudentTable is going to be given the data from App which will be given a message with New Student data from NewStudentInfo
    name: 'StudentTable',
    components: {
        StudentRow
    },
    emits: ['student-arrived-or-left'],
    props: {
        students: Array
        //will take the data given to it by App and place it into an Array type data set
    },
    data() {
        return {
            editTable: false
            // start with an unchecked box but when true the delete row data should show if it exists
        }
    },
    methods : {
        arrivedOrLeft(student, present) {
           //StudentTable's only just is to display the students, if a student enteres or leaves a different component should manage that so:
           // TODO emit message to parent
           this.$emit('student-arrived-or-left', student, present)
           //sends a message to parent with name of student-arrived-or-left containing payload info of
           //current student info -> name and starID
           //and the new info of the status change to the check box
        },
        deleteStudent(student) {
            this.$emit('delete-student', student) //basically just passing the event from child to parent
        }
    }

}
</script>

<style scoped>

</style>