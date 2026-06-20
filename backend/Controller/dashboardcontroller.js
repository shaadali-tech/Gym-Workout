const Member = require("../Model/Member");
const Contact = require("../Model/Contact");

const getDashboardStats = async (req, res) => {
  try {
    const totalMembers = await Member.countDocuments();
    const totalMessages = await Contact.countDocuments();

    res.status(200).json({
      totalMembers,
      totalMessages,
      totalPlans: 3,
      totalTrainers: 3,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};
