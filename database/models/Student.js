/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    defaultValue: 'Email Not Added',
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://static.vecteezy.com/system/resources/previews/028/754/338/original/graduate-student-3d-icon-illustration-png.png",
  },

  gpa: {
    type: Sequelize.FLOAT
  }
});

// Export the student model
module.exports = Student;