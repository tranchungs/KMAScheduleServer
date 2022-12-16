const Schedule = require("../ModelSchedule");

module.exports.getData = async (req, res) => {
  let { cookie } = req.body;

  if (cookie != null) {
    const scheduleData = new Schedule(cookie);
    let result = await scheduleData.getData();
    if (scheduleData.name.length <= 0) {
      res.json({ status: false, message: "Cookie not found" });
    } else {
      res.json({ status: true, user: scheduleData.name, data: result });
    }
  } else {
    res.json({ status: false, message: "Cookie not found" });
  }
};
