let mongoose = require("./mongoose.js")

//搭骨架
let schema = mongoose.Schema({
  name: String,
  pwd: String
})
let test = mongoose.model("names", schema);
module.exports = {
  //查
  Serach: async function (name,) {
    return await test.find({ name: name,}).then(res => {
      return res
    })
  },
  //增
  Create: async function (name, pwd) {
    return await test.create({ name: name, pwd: pwd }).then(res => {
      return console.log("增加成功");
    })
  }
}