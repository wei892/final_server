/*==================================================
/database/utils/configDB.js

It declares and exports the variables for database name, username, and password.
==================================================*/
// Declare the variables for database name, username, and password.
const dbName = 'Campus-Management-System';
const dbUser = 'postgres';
const dbPwd = '';

// Export the variables 
module.exports = {
  dbName,
  dbUser,
  dbPwd
};

// host=127.0.0.1 port=5432 dbname='Campus Management System' user=postgres password=xxxxxxx sslmode=prefer connect_timeout=10