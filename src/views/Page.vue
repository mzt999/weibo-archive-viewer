<template>
  <main class="blog-main">
    <Pagination :total="page_total" :perPage="weiboProfile.perPage"></Pagination>
    <div style="margin: 6px;">
      <p>全部微博({{totalArticles}}), 每页{{weiboProfile.perPage}}条</p>
      <p><span v-for="(year, index) in postsByYear" 
        :key="'year'+year.num"><span class="year-btn" @click="togglePopUp(index)">{{year.num}}年({{year.count}})
        </span>
        <span>&nbsp;</span>
      </span>
      </p>
    </div>
    <Post 
    :author= "weiboProfile.weibo_name"
    v-for="(post) in posts" 
    :key="post.postId"
    :weibo_id="weiboProfile.weibo_id"
    :time="post.postTime" :content="post.postContent"
    :picture="post.picIds"
    :profile_img="weiboProfile.weibo_profile_img"
    ></Post>
    <Pagination :total="page_total" :perPage="weiboProfile.perPage"></Pagination>
  </main>
</template>

<script>
import Post from "/src/components/Post2.vue";
import Pagination from "/src/components/Pagination.vue";
import zoompic from "/src/js/zoompic.js";
import getPostByPage from "/src/js/getPostByPage.js";
import getPostByYear from "/src/js/getPostByYear.js";

export default {
  layout: "page",
  components: {
    Post,
    Pagination
  },
  data(context) {
    var tempNum = this.$route.params.page;
    var weiboProfile = window.weiboProfile;
    var myPosts = getPostByPage({page:tempNum});
    var postsByYear = getPostByYear();
    return {
      weiboProfile,
      postsByYear,
      myMonths: postsByYear[0].months,
      page_total: myPosts.page_total,
      totalArticles: myPosts.totalArticles
    }
  },
  computed: {
    pageNum() {
      return this.$route.params.page;
    },
    posts() {
      var pageNum = this.pageNum;
      return getPostByPage({page:pageNum}).paginatedArticles;
    }
  },
  methods: {
    togglePopUp(index) {
      this.$emit("triggerToggle", index);
    },
  },
  mounted: function(){
    var that = this;
    that.$nextTick(() => {
      setTimeout(function() {
        //add zoompic for imgs
        zoompic([[".desk-unit .picture", true, true, "img"]]);
        var aTag = document.querySelectorAll(".desk-unit a");
        for (let i = 0; i <aTag.length; i++) {
          aTag[i].target = "_blank";
          if (aTag[i].hostname == window.location.hostname) {
            aTag[i].href = "https://weibo.cn"+aTag[i].href.replace(window.location.origin,"");
          }
        }
        window.requestAnimationFrame(() => {
          var pageUrl = window.location.href;
          if (pageUrl.indexOf("?")!=-1) {
            var nth = pageUrl.split("?")[1].split("=")[1];
            document.querySelectorAll(".desk-unit:not(.featured)")[nth-1].scrollIntoView({behavior: 'smooth'});
          } else {
            document.querySelector("body").scrollIntoView({behavior: 'instant'})
          }
        });
      },500); 
    });
  },
  watch: {
    pageNum(newPage, oldPage) {
      setTimeout(function() {
        //add zoompic for imgs
        zoompic([[".desk-unit .picture", true, true, "img"]]);
        var aTag = document.querySelectorAll(".desk-unit a");
        for (let i = 0; i <aTag.length; i++) {
          aTag[i].target = "_blank";
          if (aTag[i].hostname == window.location.hostname) {
            aTag[i].href = "https://weibo.cn"+aTag[i].href.replace(window.location.origin,"");
          }
        }
        window.requestAnimationFrame(() => {
          var pageUrl = window.location.href;
          if (pageUrl.indexOf("?")!=-1) {
            var nth = pageUrl.split("?")[1].split("=")[1];
            document.querySelectorAll(".desk-unit:not(.featured)")[nth-1].scrollIntoView({behavior: 'smooth'});
          } else {
            document.querySelector("body").scrollIntoView({behavior: 'instant'})
          }
        });
      },500); 
    },
  }
};
</script>
