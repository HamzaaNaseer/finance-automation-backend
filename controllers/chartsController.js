const Model = require("../models/modulesSchema");
exports.piechart = async (req, res) => {
  try {
    const docs = await Model.find();

    let chartData = docs.map((doc) => {
      return {
        x: doc.title,
        y: doc.progress,
        text: `${doc.progress} %`,
      };
    });

    //trying the logic here

    //   let chartData = await Promise.all(
    //     types.map(async (element, index) => {
    //       let count = await Complaints.find({ complaintType: element }).count();
    //       let percentage = Math.round((count / totalComplaints) * 100); // calculating percentage

    //       //the data is in this format simply because at the frontend
    //       //syncfusion is expecting this format
    //       return {
    //         x: element,
    //         y: percentage, // calculating the percentage
    //         text: percentage + "%",
    //       };
    //     })
    //   );

    return res.json({
      sucess: true,
      chartData,
      docs,
    });
  } catch (error) {
    console.log("error is ", error.message);
    return res.status(500).json({
      success: false,
      messaage: error.message,
    });
  }
};

exports.moduleFinances = async (req, res) => {
  try {
    const docs = await Model.find();

    const result = await Model.aggregate([
      {
        $group: {
          _id: null,
          totalFinanceGiven: { $sum: "$financeGiven" },
        },
      },
    ]);

    const total = result[0].totalFinanceGiven;

    let chartData = docs.map((doc) => {
      let percentage = ((doc.financeGiven / total) * 100).toFixed(2);
      return {
        x: doc.title,
        y: percentage, // calculating the percentage
        text: percentage + "%",
      };
    });

    return res.json({ total, chartData });
  } catch (error) {
    console.log("error is ", error.message);
    return res.status(500).json({
      success: false,
      messaage: error.message,
    });
  }
};
