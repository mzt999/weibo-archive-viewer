<template>
  <footer>
    <p>- {{weibo_name}}的微博 -<br></p>
    <div class="go-top" @click="toTop">
        <div class="arrow"></div>
        <div class="stick"></div>
    </div>
    <div class="go-bottom" @click="toBottom">
        <div class="stick"></div>
        <div class="arrow"></div>
    </div>
  </footer>
</template>

<script type="text/javascript">
export default {
  props: {
    weibo_name: {
      type: String,
      required: true
    },
  },
	methods: {
		toTop: function() {
			document.querySelector("#app").scrollIntoView({behavior: 'smooth'})
		},
		toBottom: function() {
			document.querySelector("footer").scrollIntoView({behavior: 'smooth'})
		}
	}
}
</script>
