module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    Name: {
      type: Sequelize.STRING
    },
    Age: {
      type: Sequelize.INTEGER
    },
    Class: {
      type: Sequelize.STRING
    },
    Address: {
      type: Sequelize.STRING
    }
  });

  return Student;
};
