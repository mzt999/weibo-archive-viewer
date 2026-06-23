<template>
  <div class="desk-banner">
    <div class="upper">
      <img :src="weibo_bg_img"/>
    </div>
    <div class="lower">
      <div class="profile-pic"><img :src="weibo_profile_img"/></div>
      <div class="profile-name">{{weibo_name}}</div>
    </div>
    <div class="below-name">
      <span class="txt">{{weibo_intro}}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    weibo_name: {
      type: String,
      required: true
    },
    weibo_intro: {
      type: String,
      required: true
    },
    weibo_bg_img: {
      type: String,
      required: true
    },
    weibo_profile_img: {
      type: String,
      required: true
    },
  }
}
</script>

<style>
.desk-banner {
  width: 100%;
  font-weight: bold;
  background: white;
}
.desk-banner .upper {
  height: 200px;
  overflow: hidden;
}
.desk-banner .upper img {
  min-width: 100%;
/*  transform: translateY(-45%);*/
}
.desk-banner .lower {
  position: relative;
  padding-left: 10px;
}
.desk-banner .lower .profile-pic {
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 110px;
  border: 1px solid silver;
  box-shadow: 0px 0px 0px 4px white;
  overflow: hidden;
  transform: translateY(-50%);
}
.desk-banner .lower .profile-pic img {
  max-width: 100%;
}
.desk-banner .profile-name {
  margin-left: 130px;
  padding-top: 10px;
  font-size: 24px;
  font-weight: bold;
}
.desk-banner .txt {
  color: silver;
}
.desk-banner .below-name {
  padding: 20px;
  font-size: 16px;
}

@media all and (max-width: 768px) {
  .desk-banner {
    width: 100%;
    font-size: 18px;
  }
  .desk-banner .lower .profile-pic {
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }
  .desk-banner .profile-name {
    margin-left: 80px;
    padding-top: 10px;
    font-size: 20px;
  }
  .desk-banner .below-name {
    padding: 10px;
    font-size: 14px;
  }
}
@media all and (max-width: 425px) {
  .desk-banner .upper {
    height: 150px;
    font-size: 20px;
  }
}
</style>
