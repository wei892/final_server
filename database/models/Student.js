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

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
  },

  gpa: {
    type: Sequelize.FLOAT
  }
});

// Export the student model
module.exports = Student;