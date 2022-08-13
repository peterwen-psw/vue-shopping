<template>
  <div class="detail-right">
    <h1>{{ obj.title }}</h1>
    <div class="priceall">
      <div class="price">
        <span>价格</span><i>￥{{ obj.price }}</i>
      </div>
      <div class="num">
        <div class="num-left">
          累计销量：<i>{{ obj.num }}</i>
        </div>
        <div class="num-right">
          累计评价：<i>{{ obj.comment }}</i>
        </div>
      </div>
    </div>
    <div class="local">
      <div class="block">
        <span class="demonstration">选择收货地址</span>
        <el-cascader placeholder="没有数据，不要点" filterable></el-cascader>
      </div>
    </div>
    <div class="numall">
      <span>数量</span>
      <div class="num-price">
        <button @click="rel">-</button>
        <input type="text" v-model="num" />
        <button @click="add">+</button>
      </div>
      <span>库存234件</span>
    </div>
    <div class="btn">
      <button class="now-pay" @click="nowpay">立即购买</button>
      <button class="get-shopcar" @click="gotoshopcar">加入购物车</button>
    </div>
    <div class="tag">
      <i>服务承诺</i>
      <span>七天无理由退货</span>
      <span>正品保障</span>
      <span>48小时发货</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data: function () {
    return {
      num: 1,
      id: this.$route.query.id,
      obj: {},
    };
  },
  created: async function () {
    let res = await this.$store.dispatch("getid", this.id);
    this.obj = res[0];
  },
  methods: {
    ...mapMutations(["getnums"]),
    ...mapActions(["getname", "setshop", "getshopdata"]),
    add() {
      this.num++;
    },
    rel() {
      if (this.num > 1) {
        this.num--;
      }
    },
    async gotoshopcar() {
      let val = await this.getname();
      if (val != null) {
        let id = this.obj._id;
        let obj = {
          name: val.name,
          id: id,
          num: this.num,
        };
        this.setshop(obj);
        this.getnums(this.num);
        this.$message({
          showClose: true,
          message: "商品添加成功",
          type: "success",
        });
      } else {
        this.$message({
          showClose: true,
          message: "请先登陆哦",
          type: "warning",
        });
      }
    },
    nowpay() {
      this.$message({
        message: "功能暂未开放",
        type: "warning",
      });
    },
  },
  watch: {
    num: function (newval, oldval) {
      if (isNaN(newval)) {
        this.num = oldval;
      } else if (newval < 0) {
        this.num = Math.abs(newval);
      } else if (newval == 0) {
        this.num = 1;
      } else {
        this.num = Number(newval);
      }
    },
  },
};
</script>

<style scoped>
.detail-top .detail .detail-right {
  width: 800px;
  height: 100%;
  padding-left: 20px;
  margin-bottom: 30px;
  box-sizing: border-box;
  float: left;
  overflow: hidden;
}

.detail-top .detail .detail-right h1 {
  margin: 0;
  font-size: 16px;
  color: #333;
  margin-bottom: 6px;
  font-weight: bold;
  line-height: 26px;
  margin-top: 6px;
}

.detail-top .detail .detail-right .priceall {
  width: 780px;
  padding-top: 10px;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
  background: url(https://gr.gxyj.com/images/pro-bg.png) no-repeat top left;
}

.detail-top .detail .detail-right .priceall .price {
  width: 780px;
  height: 38px;
  padding: 0 19px 0 10px;
}

.detail-top .detail .detail-right .priceall .price span {
  display: inline-block;
  font-size: 12px;
  width: 67px;
  color: #888;
  margin-top: 10px;
}

.detail-top .detail .detail-right .priceall .price i {
  min-width: 150px;
  color: #f23030;
  font-size: 26px;
  font-weight: 900;
  padding-bottom: 4px;
}

.detail-top .detail .detail-right .priceall .num {
  width: 780px;
  height: 35px;
  display: flex;
  justify-content: space-between;
}

.detail-top .detail .detail-right .priceall .num .num-left {
  width: 50%;
  box-sizing: border-box;
  border-right: 1px solid #333;
  text-align: center;
  line-height: 35px;
  font-size: 12px;
}

.detail-top .detail .detail-right .priceall .num .num-left i {
  color: #f23030;
}

.detail-top .detail .detail-right .priceall .num .num-right {
  width: 50%;
  text-align: center;
  line-height: 35px;
  font-size: 12px;
}

.detail-top .detail .detail-right .priceall .num .num-right i {
  color: #f23030;
}

.detail-top .detail .block {
  width: 751px;
  height: 50px;
  margin: 15px 0;
  padding: 0 19px 0 10px;
  border-bottom: 1px solid #ddd;
}
.detail-top .detail .block span {
  margin-right: 20px;
  font-size: 14px;
  color: #333;
}

.detail-top .detail .numall {
  width: 780px;
  height: 31px;
  margin: 30px 0;
  padding: 0 19px 0 10px;
  display: flex;
  align-items: center;
}

.detail-top .detail .numall span {
  padding-top: 13px;
  color: #888;
  width: 67px;
  font-size: 12px;
}

.detail-top .detail .numall .num-price {
  width: 136px;
  height: 31px;
  display: flex;
  align-items: center;
  margin: 0 10px;
}

.detail-top .detail .numall .num-price button {
  width: 20px;
  height: 24px;
  line-height: 24px;
  border: 1px solid #f2f2f2;
  display: inline-block;
  background-color: #f9f9f9;
  text-align: center;
  font-size: 16px;
  border-radius: 2px;
  margin-left: 5px;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  color: #333;
}

.detail-top .detail .numall .num-price input {
  width: 60px;
  height: 24px;
  line-height: 24px;
  border: 1px solid #eee;
  display: inline-block;
  background-color: #fff;
  padding: 0 10px;
  border-radius: 2px;
  font-size: 14px;
  text-align: center;
  color: #333;
}

.detail-top .detail .btn {
  width: 746px;
  height: 50px;
  margin: 24px 0 26px 34px;
  margin-top: 10px;
}

.detail-top .detail .btn .now-pay {
  background-color: #ffd8d8;
  border: 1px solid #f23030;
  color: #f23030;
  width: 118px;
  height: 48px;
  margin: 0;
  margin-right: 20px;
}

.detail-top .detail .btn .get-shopcar {
  float: left;
  width: 118px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  background: #f23030;
  margin-right: 20px;
}

.detail-top .detail .tag {
  margin: 30px 0;
  padding: 0 19px 0 10px;
}

.detail-top .detail .tag i {
  color: #888;
  width: 87px;
}

.detail-top .detail .tag span {
  margin: 0 22px 0 22px;
  padding-bottom: 10px;
  color: #333;
  cursor: default;
}
</style>