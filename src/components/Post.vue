<template>
  <div class="desk-unit">
    <div class="desk-unit-main">
      <div class="post-author">
        <div class="profile-pic"><img :src="profile_img"/></div>
        <div>
          <div class="author">{{author}}</div>
          <div class="time">{{time}}</div>
        </div>
      </div>
      <div class="content" v-if="repostMsg">
        <div v-html="repostMsg"></div>
      </div>
      <div :class="{repost:repostSrc}">
        <div v-if="repostSrc" class="repost-src">
          <div v-html="repostSrc"></div>
        </div>
        <div class="content">
          <div v-html="content"></div>
        </div>
        <div class="picture" v-if="repostPicIds">
          <div class="img" 
          :class="imgClass2"
          v-for="(pic2,j) in picArr2" :key="'pic'+j">
            <img :src="pic2">
          </div>
        </div>
        <div>
          <a style="color:silver;" v-if="repostSrcId" 
          :href="'https://weibo.com/'+weibo_id+'/'+repostSrcId">
            原微博<i class="fa fa-external-link"></i>
          </a>
        </div>
      </div>
      <div class="picture" v-if="picture">
        <div class="img" 
        :class="imgClass"
        v-for="(pic,i) in picArr" :key="'pic'+i">
          <img :src="pic">
        </div>
      </div>
      <div class="interaction">
        <div>
          <i class="fa fa-external-link"></i>&nbsp;{{repostCount2}}
        </div>
        <div>
          <i class="fa fa-commenting-o"></i>&nbsp;{{commentCount2}}
        </div>
        <div>
          <i class="fa fa-thumbs-o-up"></i>&nbsp;{{likeCount2}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var imgClass = "";
    var picArr = [];
    if (this.picture) {
      picArr = this.picture.split(";");
      for (let i = 0; i < picArr.length; i++) {
        picArr[i] = "https://wx4.sinaimg.cn/orj360/"+picArr[i];
      }

      imgClass = picArr.length==1?"col-1"
      :picArr.length==2?"col-2"
      :picArr.length==4?"col-2"
      :"col-3";
    }
    var imgClass2 = "";
    var picArr2 = [];
    if (this.repostPicIds) {
      picArr2 = this.repostPicIds.split(";");
      for (let i = 0; i < picArr2.length; i++) {
        picArr2[i] = "https://wx4.sinaimg.cn/orj360/"+picArr2[i];
      }
      imgClass2 = picArr2.length==1?"col-1"
      :picArr2.length==2?"col-2"
      :picArr2.length==4?"col-2"
      :"col-3";
    }
    return {
      imgClass,
      picArr,
      imgClass2,
      picArr2,
    }
  },
  props: {
    author: {
      type: String,
      required: true
    },
    weibo_id: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    picture: {
      type: String,
    },
    repostSrc: {
      type: String,
    },
    repostMsg: {
      type: String,
    },
    repostSrcId: {
      type: String,
    },
    repostPicIds: {
      type: String
    },
    repostCount: {
      type: String,
      required: true
    },
    commentCount: {
      type: String,
      required: true
    },
    likeCount: {
      type: String,
      required: true
    },
    profile_img: {
      type: String,
      required: true
    },
  },
  computed: {
    repostCount2() {
      let count = this.repostCount;
      if (count==0) return "转发";
      return count>10000?Math.floor(count/1000)/10+"万":count;
    },
    commentCount2() {
      let count = this.commentCount;
      if (count==0) return "评论";
      return count>10000?Math.floor(count/1000)/10+"万":count;
    },
    likeCount2() {
      let count = this.likeCount;
      if (count==0) return "赞";
      return count>10000?Math.floor(count/1000)/10+"万":count;
    },
  }
}
</script>

<style>
.desk-unit {
  margin: 0px 0px 10px 0px;
  padding: 10px;
  background: white;
}
.desk-unit-main {
  width: 100%;
}
.featured:before {
  margin: 0px 0px 6px 2px;
  width: 100%;
  content: "👑 置顶";
  font-weight: bold;
  color: #ff7a04;
  display: block;
}
.post-author {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
}
.post-author .profile-pic {
  width: 60px;
  height: 60px;
  border-radius: 80px;
  border: 1px solid silver;
  overflow: hidden;
}
.post-author .profile-pic img {
  max-width: 100%;
}
.desk-unit .author {
  margin-left: 10px;
  padding: 2px 0px 4px 0px;
  font-size: 18px;
}
.desk-unit .time {
  margin-left: 10px;
  padding: 0px 0px 10px 0px;
  color: silver;
}
.repost {
  padding: 10px;
  background: #f9f9f9;
}
.repost-src {
  margin-bottom: 10px;
}
.desk-unit .content {
  padding: 0px 0px 10px 0px;
}
.desk-unit .content p {
  text-align: justify;
}
.main-color {
  color: #182b54;
}
.desk-unit .interaction {
  padding: 5px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
  border-top: solid 1px silver;
}
.desk-unit .interaction div {
  width: 33.3%;
  text-align: center;
}
/* 九宫格图片 */
.desk-unit .picture {
  margin-bottom: 8px;
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
}
.desk-unit .picture .img {
  height: 0px;
  position: relative;
  margin: 0px 10px 10px 0px;
}
.desk-unit .picture .img {
  height: 0px;
  position: relative;
  margin: 0px 10px 10px 0px;
}
.desk-unit .picture .col-1 {
  width: 60%;
  padding-bottom: 60%;
}
.desk-unit .picture .col-2 {
  width: 40%;
  padding-bottom: 40%;
}
.desk-unit .picture .col-3 {
  width: 30%;
  padding-bottom: 30%;
}
.desk-unit .repost .picture .col-1, .desk-unit .repost .picture .col-2 {
  width: 30%;
  padding-bottom: 30%;
}
.desk-unit .picture .img img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 九宫格图片 */

@media all and (max-width: 425px) {
  .desk-unit .author {
    font-size: 18px;
  }
  .desk-unit .picture .img {
    margin: 0px 5px 5px 0px;
  }
}
</style>
