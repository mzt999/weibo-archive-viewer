<template>
  <div class="pop-up desk-fix" 
  :class="{'show': isShow}">
    <slot></slot>
    <div class="close"
    @click="toggle">
      <i class="fa fa-window-close-o"></i>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
	name:'pop-up',
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    toggle() {
      this.isShow = this.isShow?false:true;
    }
  }
}
</script>
<style type="text/css">
.pop-up {
  background: white;
  border: solid 1px silver;
}
.pop-up ul {
  list-style: none;
}
.pop-up .close {
  position: absolute;
  top: 4px;
  right: 18px;
  font-size: 24px;
  cursor: pointer;
  display: none;
}
.desk-fix {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  padding: 10px;
  width: 400px;
  height: 320px;
  overflow-y: overlay;
  display: none;
}
.desk-fix .close {
  display: block;
}
@media all and (max-width: 768px) {
  .pop-up {
    position: fixed;
    top: 0px;
    left: 0px;
    margin: 60px 10px 40px 10px;
    padding: 10px;
    width: calc(100vw - 20px);
    height: calc(100vh - 200px);
    overflow-y: scroll;
    display: none;
	}
  .pop-up .close{
    display: block;
  }
}
.show {
  display: block;
}
</style>