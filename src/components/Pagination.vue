<template>
  <div class="page-container">
  	<div style="text-align: center;">
  		<input @keyup.enter="goToPage" type="number" style="font-size:16px;width:50px;height:22px;" v-model="jumpPageNum">
  		<button @click="goToPage" style="width: 50px;height: 26px;border-radius: 2px;border: solid 1px silver;">跳转</button>
  		{{currentPage}}/{{totalPages}}页
  	</div>
  	<div class="pagination">
  		<span v-if="currentPage === 1" :class="disabledStyle">
		  首页
		</span>

		<router-link
		  v-else
		  to="/"
		  :class="buttonStyles"
		>
		  首页
		</router-link>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<span class="page-prev-next-container">
		<span v-if="currentPage === 1" :class="disabledStyle">
		  上页
		</span>
		<router-link
		  v-else
		  :to="'/page/'+prevPage"
		  :class="buttonStyles"
		>
		  上页
		</router-link>
		&nbsp;
		<span v-if="currentPage === totalPages" :class="disabledStyle">
		  下页
		</span>
		<router-link
		  v-else
		  :to="'/page/'+nextPage"
		  :class="buttonStyles"
		>
		  下页
		</router-link>
		</span>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<span v-if="currentPage === totalPages" :class="disabledStyle">
		  尾页
		</span>

		<router-link
		  v-else
		  :to="'/page/'+totalPages"
		  :class="buttonStyles"
		>
		  尾页
		</router-link>
  	</div>
  </div>
</template>

<script>

export default {
	data() {
		return {
			buttonStyles: "page-prev-next",
			disabledStyle: "page-prev-next-disabled",
      jumpPageNum:1
		}
	},
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    totalPages() {
      return this.total;
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  },
  methods: {
  	goToPage() {
  		this.$router.push('/page/'+this.jumpPageNum);
  	}
  }
};
</script>

<style>
.page-container {
	margin-bottom: 10px;
	padding: 5px 0px;
	background: white;
}
.pagination {
	display: flex;
	justify-content: space-between;
}
.page-prev-next {
	padding: 4px;
	text-decoration: none;
}
.page-prev-next:hover {
	color: black;
}
.page-prev-next-disabled {
	padding: 4px;
	color: #ddd;
}
.page-prev-next-container {
	transform: translateY(4px);
}
 @media all and (max-width: 768px) {
 	.pagination {
 		display: block;
 		text-align: center;
 	}
 }
</style>
