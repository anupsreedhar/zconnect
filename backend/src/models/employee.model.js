module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      empFirstName: {
        type: Sequelize.STRING
      },
      empLastName: {
        type: Sequelize.STRING
      },
      DoB: {
        type: Sequelize.DATE
      },
      sex: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      mobileNo: {
        type: Sequelize.STRING
      },
      hireDate: {
        type: Sequelize.DATE
      }
    });
  
    return Employee;
  };
  