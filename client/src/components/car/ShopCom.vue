<template>
  <div class="shopContent">
    <ul v-for="(item, key) in arr" :key="key" :id="item._id">
      <li class="item"><input type="checkbox" v-model="item.ischeck" /></li>
      <li class="item">
        <div class="dates">
          <div class="tu">
            <img :src="item.image" />
          </div>
          <div class="xinxi">{{ item.title }}</div>
        </div>
      </li>
      <li class="item">{{ item.price }}</li>
      <li class="item">
        <button id="rdeBtn" @click="reduce(key)">-</button>
        <!-- <input type="text" id="num" v-model="item.num" /> -->
        <span id="num">{{ item.num }}</span>
        <button id="addBtn" @click="add(key)">+</button>
      </li>
      <li class="item">{{ (item.price * item.num).toFixed(2) }}</li>
      <li class="item" @click="undock(key)">移除商品</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: function () {
    return {
      arr: [],
    };
  },
  created: async function () {
    let val = await this.$store.dispatch("getname");
    let name = val.name;
    let res = await this.$store.dispatch("getshopdata", name);
    for (let i = 0; i < res.data.length; i++) {
      let info = await this.$store.dispatch("getid", res.data[i].shopid);
      res.data[i].title = info[0].title;
      res.data[i].price = info[0].price;
      res.data[i].image = info[0].image;
    }
    this.arr = res.data;
    this.$emit("sendarr", this.arr);
  },
  methods: {
    ...mapActions(["setshop", "deletedata"]),
    reduce(key) {
      if (this.arr[key].num > 1) {
        this.arr[key].num--;
        let obj = {
          name: this.arr[key].name,
          id: this.arr[key].shopid,
          num: -1,
        };
        this.setshop(obj);
      }
    },
    add(key) {
      this.arr[key].num++;
      let obj = {
        name: this.arr[key].name,
        id: this.arr[key].shopid,
        num: 1,
      };
      this.setshop(obj);
    },
    undock(key) {
      let shopid = this.arr[key].shopid;
      this.deletedata(shopid);
      this.arr.splice(key, 1);
    },
  },
  watch: {
    "this.item.ischeck": function (newval) {
      this.item.ischeck = newval;
    },
  },
};
</script>

<style scoped>
.shopContent {
  flex: 1;
}
.shopContent ul {
  display: flex;
  align-items: center;
  width: 1170px;
  height: 120px;
  margin-bottom: 15px;
}

.shopContent ul li {
  color: #666;
  text-align: center;
  height: 100%;
}

.shopContent ul li:nth-child(1) {
  width: 80px;
  line-height: 134px;
}

.shopContent ul li:nth-child(2) {
  width: 535px;
  text-align: left;
}

.dates {
  display: flex;
  align-items: center;
}

.dates .tu {
  width: 90px;
  height: 90px;
  margin-top: 20px;
}

.dates .tu img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.dates .xinxi {
  width: 420px;
  height: 60px;
  line-height: 60px;
  color: #444;
  padding-left: 5px;
  margin-top: 20px;
  margin-left: 10px;
}

.shopContent ul li:nth-child(3) {
  width: 130px;
  font-size: 16px;
  color: #e83733;
  line-height: 100px;
}

.shopContent ul li:nth-child(4) {
  width: 140px;
  line-height: 100px;
}
#rdeBtn,
#addBtn {
  height: 25px;
  width: 18px;
  border: 1px solid #e5e5e5;
  background: #f0f0f0;
  text-align: center;
  line-height: 23px;
  color: #444;
}

#num {
  display: inline-block;
  width: 49px;
  height: 17px;
  line-height: 17px;
  border: 1px solid #e5e5e5;
  color: #343434;
  text-align: center;
  padding: 4px 0;
  background-color: #fff;
}

.shopContent ul li:nth-child(5) {
  width: 140px;
  font-size: 16px;
  color: #e83733;
  line-height: 100px;
}

.shopContent ul li:nth-child(6) {
  width: 164px;
  line-height: 100px;
}
</style>