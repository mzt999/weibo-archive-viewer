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
      <div>
        <div class="content">
          <div v-html="content"></div>
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
          <i class="fa fa-external-link"></i>&nbsp;转发
        </div>
        <div>
          <i class="fa fa-commenting-o"></i>&nbsp;评论
        </div>
        <div>
          <i class="fa fa-thumbs-o-up"></i>&nbsp;赞
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
    return {
      imgClass,
      picArr,
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
    profile_img: {
      type: String,
      required: true
    },
  },
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
