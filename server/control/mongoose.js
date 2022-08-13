//连接数据库
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/test", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("连接成功");
});
module.exports = mongoose

