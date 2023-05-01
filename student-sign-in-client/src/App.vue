<template>
  <div>

    <new-student-form v-on:student-added="newStudentAdded"></new-student-form>
    <student-table
      v-bind:students="students"
      v-on:student-arrived-or-left="studentArrivedOrLeft"
      v-on:delete-student="studentDeleted">
    </student-table>
    <student-message v-bind:student="mostRecentStudent"></student-message>

    <!--v-on: is making sure that parent can recieve messages from child components and then calls a method to deal with the message-->
    <!--v-bind: syntax after v-bind is name of prop="name of data"-->

  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from './components/StudentMessage.vue'
import StudentTable from './components/StudentTable.vue'


export default {
  name: 'App',
  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable
  },
  data() {
    return {
      students: [], //setting array that will recieve messages from NewStudentForm and send to StudentTable
      mostRecentStudent: {}
    }
  },
  mounted() {
    //load all the students, make request to API
    this.updateStudents()
  },
  methods:{
    //updateStudent new for this version of the project
    // should get the very latest updated list of the students
    updateStudents() {
        this.$student_api.getAllStudents().then( students => {
          this.students = students
          // this.students is the Vue data and students is the list of students that's returned from the API
        })
        .catch( () => alert('Unable to fetch student list'))
    },
    newStudentAdded(student) {
      this.$student_api.addStudent(student).then( () => {
        this.updateStudents()
      })
      // error messaging that displays directly to user
      .catch( err => {
        let msg = err.response.data.join(',')
        alert('Error adding student\n' + msg)
      })
    },
    studentArrivedOrLeft(student, present) {
      student.present = present // update present value
      this.$student_api.updateStudent(student).then( () => {
        this.mostRecentStudent = student
        this.updateStudents()
      })
      .catch( () => alert('Unable to update student'))
    },
    studentDeleted(student) {
      this.$student_api.deleteStudent(student.id).then( () =>{
        this.updateStudents()
        this.mostRecentStudent = {} //clear the goodbye message
      })
      .catch( () => alert('Unable to delete student'))
    }
  }
}
</script>

<style>

@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css";

</style>
