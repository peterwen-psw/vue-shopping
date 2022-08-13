let mongoose = require("./mongoose.js")

//搭骨架
let schema = mongoose.Schema({
  name: String,
  shopid: String,
  num: Number,
  ischeck:Boolean,
})
let shops = mongoose.model("shops", schema);
module.exports = {
  Create: async function (name, shopid, num) {
    return await shops.create({ name: name, shopid: shopid, num: num,ischeck:false }).then(res => {
      return console.log("增加成功", res);
    })
  },
  Find: async function (name, shopid) {
    return await shops.find({ name: name, shopid: shopid }).then(res => {
      return res
    })
  },
  Finds: async function (name) {
    return await shops.find({ name: name }).then(res => {
      return res
    })
  },
  Updata: async function (oldid, nums) {
    return await shops.update({ _id: oldid }, { $set: { num: nums } })
  },
  Delete: async function (shopid) {
    return await shops.remove({ shopid: shopid })
  }
}