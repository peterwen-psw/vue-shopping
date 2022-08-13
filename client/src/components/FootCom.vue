<template>
  <div id="footer">
    <hr style="margin-top: 50px" />
    <div class="footer-top">
      <div class="container">
        <div class="clearfix visual">
          <div class="footer-left" style="float: left">
            <div class="qrcode">
              <h5>小程序</h5>
              <i style="background: none">
                <img
                  width="100"
                  height="100"
                  src="https://cdn.oudianyun.com/gxej-bco/prod/osc/1646719529317_45.8124085614749.jpg"
                />
              </i>
            </div>
            <div class="tel">
              <ul>
                <li>
                  <p>服务热线电话</p>
                  <p style="font-size: 14px; font-weight: normal">4000068383</p>
                </li>
                <li>
                  <p>工作日</p>
                  <p>8:30-17:30</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-right" style="float: left">
            <div class="bt-nav">
              <i class=""></i>
              <a style="padding-left: 54px" class="first-a">新手上路</a>
              <ul style="padding-left: 54px" class="trade-ul common-ul">
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
              </ul>
            </div>
            <div class="bt-nav">
              <i class=""></i>
              <a style="padding-left: 54px" class="first-a">新手上路</a>
              <ul style="padding-left: 54px" class="trade-ul common-ul">
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
              </ul>
            </div>
             <div class="bt-nav">
              <i class=""></i>
              <a style="padding-left: 54px" class="first-a">新手上路</a>
              <ul style="padding-left: 54px" class="trade-ul common-ul">
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
              </ul>
            </div>
             <div class="bt-nav">
              <i class=""></i>
              <a style="padding-left: 54px" class="first-a">新手上路</a>
              <ul style="padding-left: 54px" class="trade-ul common-ul">
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
              </ul>
            </div>
             <div class="bt-nav">
              <i class=""></i>
              <a style="padding-left: 54px" class="first-a">新手上路</a>
              <ul style="padding-left: 54px" class="trade-ul common-ul">
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
              </ul>
            </div>
             <div class="bt-nav">
              <i class=""></i>
              <a style="padding-left: 54px" class="first-a">新手上路</a>
              <ul style="padding-left: 54px" class="trade-ul common-ul">
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
                <li ng-repeat="item in cate.pageArticleVOList.listObj">
                  <a>请多关照</a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <p class="footerNav clearfix visual"></p>
        <div class="clearfix">
          <div style="margin: 30px auto 0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
  background-color: #fff;
  overflow: hidden;
  clear: both;
  *zoom: 1;
}
#footer .footer-top {
  width: 100%;
  padding: 40px 0 30px 0;
  box-sizing: border-box;
}
#footer .footer-top .tel {
  display: inline-block;
  font-size: 14px;
  margin-left: 20px;
}
#footer .footer-top .tel li p {
  text-align: left;
  font-size: 16px;
  color: #666;
  font-weight: bold;
}
#footer .footer-top .tel li:first-child {
  color: #d00f00;
}
#footer .footer-top .tel li:first-child p {
  color: #666;
}
#footer .footer-top .tel li:first-child p:nth-child(2) {
  font-size: 14px;
  font-weight: normal;
}
#footer .footer-top .tel li:last-child {
  color: #d00f00;
}
#footer .footer-top .tel li:last-child p {
  color: #666;
}
#footer .footer-top .tel li:last-child p:nth-child(2) {
  font-size: 14px;
  font-weight: normal;
}
#footer .bt-nav {
  position: relative;
  float: left;
}
#footer .bt-nav .first-a {
  display: block;
  padding-left: 88px;
  color: #666;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 19px;
}
#footer .bt-nav .common-ul {
  padding-left: 94px;
  font-size: 12px;
  box-sizing: border-box;
}
#footer .bt-nav .uls {
  margin-left: 73px !important;
}
#footer .bt-nav li {
  margin-bottom: 10px;
}
#footer .bt-nav i {
  position: absolute;
  top: -3px;
  left: 0;
  margin-top: -5px;
  margin-right: 14px;
}
#footer .bt-nav a {
  color: #666;
}
#footer .bt-nav a:hover {
  color: #d00f00;
}
#footer .qrcode {
  float: left;
  width: 110px;
  text-align: center;
}
#footer .qrcode h5 {
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  padding-bottom: 10px;
  color: #666;
  font-weight: bold;
}
#footer .qrcode .icon-qrcode {
  margin-top: 12px;
}
#footer .qrcode p {
  color: #999999;
  font-size: 12px;
  margin: 12px 0 0 0;
}
#footer p {
  clear: both;
  text-align: center;
  font-size: 12px;
  margin: 0 0 12px 0;
  color: #666;
}
#footer .footer-text {
  min-width: 103px;
  height: 32px;
  display: inline-block;
  line-height: 32px;
  background: #eee;
  padding: 0;
  text-align: left;
}
#footer .footer-text img {
  vertical-align: middle;
  padding: 0;
  float: left;
  margin-top: 2px;
  margin-right: 5px;
}
#footer .footer-text .footer-text-img {
  margin-top: 3px;
  margin-left: 5px;
}
#footer .footer-text span {
  float: left;
}
</style>