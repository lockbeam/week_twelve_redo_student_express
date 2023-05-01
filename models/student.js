// this file is going to describe our student objects

module.exports = (sequelize, DataTypes) => {

    let Student = sequelize.define('Student', {
        //describing how a student Object is structured and how the sata is structured inside the Student Database
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^[a-z]{2}\d{4}[a-z]{2}$/
            }
        },

        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
    //this line creates the tables in our database and force: true will overwrite any old database tables
    Student.sync( {force: false} ).then( () => {
        console.log('Synched student table ')
    })

    return Student

}