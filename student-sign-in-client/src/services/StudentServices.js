//service directories are a general common terminology for functions or methods that can make API calls to a server

import axios from 'axios'

let base_url = '/api/students'

export default {

    getAllStudents() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },

    addStudent(student) {
        return axios.post(base_url, student).then(response => {
            return response.data
        }) // axios will handle the student Object and converting it to json
    },

    updateStudent(student) {
        // creating a URL /api/students/X
        return axios.patch(`${base_url}/${student.id}`, student).then(response => {
            return response.data
        })
    },

    deleteStudent(id) {
        return axios.delete(`${base_url}/${id}`).then(response => {
            return response.data
        })
    }

}