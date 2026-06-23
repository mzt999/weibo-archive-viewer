<template>
  <div class="main-content">
    <div v-if="!isReady" id="upload-container" style="margin: 0 auto;width:800px;">
      <div>
        <p><label for="weibo_name">微博昵称 <input id="weibo_name" v-model="weiboProfile.weibo_name"></label></p> 
        <p><label for="weibo_id">id <input id="weibo_id" v-model="weiboProfile.weibo_id"></label></p>
        <p><label for="weibo_intro">介绍 <input id="weibo_intro" v-model="weiboProfile.weibo_intro"></label></p>
        <p><label for="weibo_bg_img">背景 <input id="weibo_bg_img" v-model="weiboProfile.weibo_bg_img"></label></p>
        <p><label for="weibo_profile_img">头像 <input id="weibo_profile_img" v-model="weiboProfile.weibo_profile_img"></label></p>
        <p><label for="perPage">每页条数 <input id="perPage" v-model="weiboProfile.perPage"></label></p>
      </div>
      <label for="csvUpload">Upload CSV File:</label>
      <input type="file" id="csvUpload" name="csvUpload" accept=".csv" @change="parseFile">
    </div>
    <div class="blog-wrap">
      <router-view v-if="isReady"  @triggerToggle="togglePopUpApp"/>
      <Footer v-if="isReady"
      :weibo_name="weiboProfile.weibo_name"
      ></Footer>
    </div>
    <PopUp ref="PopUp">
      <ul>
        <li
        v-for="month in myMonths"
        :key="'jumpToMonth'+month.num"
        >{{month.num}}(<router-link @click.native="jumpToMonth(month.pageNum)"
          :to="'/page/'+month.pageNum+'?nth='+month.nth"
          >{{month.count}}</router-link>)
        </li>
      </ul>
    </PopUp>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import PopUp from "./components/PopUp.vue";
import zoompicBasic from "./js/zoompic-basic.js";
import getPostByYear from "./js/getPostByYear.js";
import parseCSVToObjects from "./js/parseCSVToObjects";

export default {
  components: {
    Footer,
    PopUp
  },
  data() {
    var weiboProfile = __PRESET_PROFILE__;
    return {
      weiboProfile,
      postsByYear:[],
      myMonths: [],
      isReady: false
    }
  },
  methods: {
    togglePopUpApp(index) {
      this.myMonths = this.postsByYear[index].months;
      this.$refs.PopUp.toggle();
    },
    jumpToMonth(targetPage) {
      this.$refs.PopUp.toggle();
      var pageUrl = window.location.href;
      if (pageUrl.indexOf("?")!=-1) {
        var myPageNum = pageUrl.split("?")[0].split("/").pop();
        if (myPageNum==targetPage) {
          var nth = pageUrl.split("?")[1].split("=")[1];
          document.querySelectorAll(".desk-unit:not(.featured)")[nth-1].scrollIntoView({behavior: 'smooth'});
        }
      }
    },
    parseFile() {
      var weiboProfile = this.weiboProfile;
      var that = this;
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const csvText = e.target.result;
        // 解析为对象数组
        const csvData = parseCSVToObjects(csvText);
        // 挂载到 window 对象上
        window.csvData = csvData;
        window.weiboProfile = weiboProfile;
        //更新数据
        that.postsByYear = getPostByYear();
        that.isReady = true;
      };
      reader.onerror = function() {
        console.error('文件读取失败');
        alert('文件读取失败，请重试');
      };
      // 以 UTF-8 读取
      reader.readAsText(file, 'UTF-8');
    }
  },
  mounted: function(){
    var that = this;
    that.$nextTick(() => {
      zoompicBasic();
    });
  }
};
</script>