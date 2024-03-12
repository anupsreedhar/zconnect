module.exports = (sequelize, Sequelize) => {
  const Candidate = sequelize.define("candidate", {
    candidateName: {
      type: Sequelize.STRING
    },
    jobApplied: {
      type: Sequelize.STRING
    },
    noticePeriod: {
      type: Sequelize.INTEGER
    },
    currentCTC: {
      type: Sequelize.INTEGER
    },
    expectedCTC: {
      type: Sequelize.INTEGER
    },
    emailID: {
      type: Sequelize.STRING
    },
    mobileNo: {
      type: Sequelize.STRING
    }
  });

  return Candidate;
};
