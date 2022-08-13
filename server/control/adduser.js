let mongoose = require("./mongoose.js")

let schema = mongoose.Schema({
  title: String,
  Url: String,
  image: String,
  price: Number,
  num: Number,
  comment: Number,
  type: String,
})

let datas = mongoose.model("datas", schema)
module.exports = {
  getdata: async function (type, page) {
    let data = await datas.find({ type: type }).skip((page - 1) * 10).limit(10)
    return data
  },
  gettype: async function (types) {
    let data = await datas.find({ type: types })
    return data
  },
  getdatas: async function () {
    let data = await datas.find()
    return data
  },
  getid: async function (id) {
    let data = await datas.find({ _id: id })
    return data
  },
  getsort: async function (type, parameter,page) {
    if (parameter == "num") {
      let data = await datas.find({ type: type }).sort({ num: 1 }).skip((page - 1) * 10).limit(10)
      return data
    }
    if (parameter == "price") {
      let data = await datas.find({ type: type }).sort({ price: 1 }).skip((page - 1) * 10).limit(10)
      return data
    }
    if (parameter == "comment") {
      let data = await datas.find({ type: type }).sort({ comment: 1 }).skip((page - 1) * 10).limit(10)
      return data
    }
  },
}

// datas.create(data).then(res => {
//   console.log(res);
// })