const Member = require("../Model/Member");

const addMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);

    res.status(201).json({
      success: true,
      member,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMembers = async (req, res) => {
  try {
    const members = await Member.find();

    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMember = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({
        message: "Member not found",
      });
    }

    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteMember = async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Member Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  addMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember,
};
