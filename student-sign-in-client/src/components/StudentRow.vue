<template>

    <!--THIS IS A CHILD OF THE StudentTable COMPONENT-->
    <!--We're using this to deal with each individual student row's data-->

    <tr v-bind:class=" {present: student.present, absent: !student.present} " >
        <td>{{student.name}}</td>
        <td>{{student.starID}}</td>
        <td>
        <input type="checkbox" v-bind:checked="student.present" v-on:change="arrivedOrLeft(student, $event.target.checked)">
        </td>
        <td v-show="edit"><img v-on:click="deleteStudent" src="@/assets/delete.png"></td>
    </tr>

</template>

<script>
export default {
    name: 'StudentRow',
    emits: ['student-arrived-or-left'],
    props: {
        student: Object,
        edit: Boolean
    },
    methods: {
        arrivedOrLeft(student, present) {
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent() {
            // creating a confirm on the delete button to reduce human error
            if (confirm(`Delete ${this.student.name}?`))
                //need to tell parent to delete this student (which will tell it's parent)
                this.$emit('delete-student', this.student)
        }
    }
}

</script>

<style scoped>

.present {
    color: grey;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

img {
    height: 25px;
}

</style>