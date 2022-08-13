<template>
  <!-- 购物车 -->
  <div class="shopping">
    <div class="shopTop">
      <ul>
        <li class="item">
          <input type="checkbox" name="checkboxAll" v-model="checkall" /><i
            style="margin-left: 5px"
            >全选</i
          >
        </li>
        <li class="item">商品信息</li>
        <li class="item">单价</li>
        <li class="item">数量</li>
        <li class="item">金额</li>
        <li class="item">操作</li>
      </ul>
    </div>
    <shop-com @sendarr="getarr"></shop-com>
    <!-- 底部 -->
    <div class="shopFoot">
      <div class="shopLeft">
        共计：<i>{{ numall }}</i> 件商品
      </div>
      <div class="shopRight">
        <div class="allShop">
          已选商品<i id="allNUM">{{ numshop }}</i
          >件
        </div>
        <div class="allPrice">
          共计：<span id="allPRICE">{{ numprice.toFixed(2) }}</span>
        </div>
        <el-popover
          class="math"
          placement="left"
          width="350"
          title="仅限微信支付"
          trigger="click"
          v-model="visible"
          ><div style="width: 350px; height: 350px; text-algin: center">
            <img :src="url" style="width: 100%; height: 100%" />
          </div>
          <el-button slot="reference" class="math" ref="button">结算</el-button>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../../assets/2022.jpg";
import { mapState, mapMutations } from "vuex";
import ShopCom from "./ShopCom.vue";
export default {
  components: { ShopCom },
  data: function () {
    return {
      name: "",
      newarr: [],
      numall: 0,
      visible: false,
      url: image,
    };
  },
  methods: {
    getarr(arg) {
      this.newarr = arg;
      this.newarr.forEach((item) => {
        this.numall += item.num;
      });
    },
    // topay(){

    // }
  },
  computed: {
    ...mapState(["shopnums"]),
    ...mapMutations(["getnums"]),
    checkall: {
      get() {
        if (this.newarr.length) {
          return this.newarr.every((item) => item.ischeck);
        }
        return false;
      },
      set(newval) {
        this.newarr.forEach((item) => {
          item.ischeck = newval;
        });
      },
    },
    numshop() {
      let list = this.newarr.filter((item) => item.ischeck == true);
      if (list.length) {
        return list.map((item) => item.num).reduce((a, b) => a + b);
      }
      return 0;
    },
    numprice() {
      let list = this.newarr.filter((item) => item.ischeck == true);
      if (list.length) {
        return list
          .map((item) => item.num * item.price)
          .reduce((a, b) => a + b);
      }
      return 0;
    },
  },
};
</script>

<style scoped>
/* 购物车 */
.shopping {
  width: 1170px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
}

.shopTop {
  width: 1170px;
  height: 50px;
  border-bottom: 1px solid #eee;
  /* position: sticky;
  top: 128px; */
  z-index: 100;
  background-color: #fff;
}

.shopTop ul {
  display: flex;
  align-items: center;
  width: 1170px;
  height: 50px;
}

.shopTop ul li {
  color: #666;
  text-align: center;
  height: 100%;
  line-height: 50px;
}

.shopTop ul li:nth-child(1) {
  width: 80px;
}

.shopTop ul li:nth-child(2) {
  width: 535px;
  text-align: left;
  text-indent: 26px;
}

.shopTop ul li:nth-child(3) {
  width: 130px;
}

.shopTop ul li:nth-child(4) {
  width: 140px;
}

.shopTop ul li:nth-child(5) {
  width: 140px;
}

.shopTop ul li:nth-child(6) {
  width: 164px;
}

.shopFoot {
  width: 1170px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
  position: sticky;
  bottom: 0;
  z-index: 100;
  background-color: #fff;
}

.shopLeft {
  /* width: 188px; */
  height: 56px;
  line-height: 56px;
  font-size: 14px;
}
.shopLeft i {
  color: #2e8ae4;
  padding: 0 10px;
}

.shopRight {
  height: 56px;
  line-height: 56px;
  display: flex;
  text-align: center;
}

.shopRight .allShop {
  margin-right: 20px;
  min-width: 110px;
}

.shopRight .allShop i {
  color: #2e8ae4;
  padding: 0 10px;
}

.shopRight .allPrice {
  margin-right: 10px;
  min-width: 110px;
}

.shopRight .allPrice span {
  font-weight: 400;
  font-size: 20px;
  font-family: Arial;
  vertical-align: middle;
  margin-right: 10px;
  margin-left: 5px;
  color: #e83733;
}

.shopRight .math {
  width: 130px;
  height: 56px;
  background-color: #e83733;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  border-radius: 3px;
}
</style>