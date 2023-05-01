<template>
    <div>

        <div v-if="student.name"> <!--creating a 'is there something here? if not just ignore it' situation-->
            <div class = "alert alert-success" v-if="student.present"> <!--if the student is selected as present-->
                Welcome, {{student.name}}
            </div>
            <div class = "alert alert-dark" v-else> <!--just need an else condition because if they aren't arriving they must be leaving-->
                So long for now {{student.name}}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'StudentMessage',
    props: {
        student: Object
    }

}
</script>

<style scoped>

</style>