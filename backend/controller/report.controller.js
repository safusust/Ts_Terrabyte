const reportSchema = require("../Schema/reportSchema");
const express = require("express");

exports.getReport = async (req, res) => {
  try {
    const report = await reportSchema.findOne();
    res.status(200).json(report);
  } catch (error) {
    console.error("Error fetching ", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.postReport = async (req, res) => {
  try {
    const report = req.body;
    const newReport = await reportSchema(report);
    console.log("Successfully posted");
    res.status(200).send(newReport);
  } catch (error) {
    console.error("Error fetching ", error);
    res.status(500).json({ error: "Server error" });
  }
};
