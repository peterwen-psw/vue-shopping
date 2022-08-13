import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { Tag } from 'element-ui'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: { //存放公共数据的地方
    shopnums: 0,
    coms: "",
    page: 1
  },
  mutations: {
    //获取数组里num之和
    getnums(state, num) {
      // state.shopnums=arr.reduce((a,b)=>{a.num+b.num})
      state.shopnums = state.shopnums * 1 + num * 1
    },
    //获取商品数量
    setnums(state, shu) {
      state.shopnums = shu * 1
    },
    //修改com
    setcom(state, newcom) {
      state.coms = newcom
    },
    //修改page
    setpage(state, newval) {
      state.page=newval
    }
  },
  actions: {
    //获取type对应的商品列表总数
    async getList(ctx, type) {
      let { data } = await axios.get("/api/getlist/?type=" + type);
      return data;
    },
    //获取列表第一页
    async getonepage(ctx, type) {
      return axios({
        method: "post",
        url: "/api/setpages",
        data: {
          type: type,
          page: 1
        }
      })
    },
    //排序
    async sort(ctx, setting) {
      return axios({
        method: "post",
        url: "/api/getsort",
        data: {
          choose: setting,
          page: this.state.page
        }
      });
    },
    //获取id对应的商品列表
    async getid(ctx, id) {
      let { data } = await axios.get("/api/getbyid/?" + id);
      return data
    },
    //获取用户名
    async getname() {
      let info = await JSON.parse(localStorage.getItem("user"));
      return info
    },
    //购物车数据增加和修改
    async setshop(ctx, obj) {
      return axios({
        method: "post",
        url: "/api/setshop",
        data: obj
      })
    },
    //获取购物车数据库的数据
    async getshopdata(ctx, name) {
      let data = await axios.get("/api/getshopdata/?name=" + name)
      return data
    },
    //购物车数据的删除
    async deletedata(ctx, shopid) {
      return axios.get("/api/deletedata/?shopid=" + shopid)

    }

  }
})


export default store