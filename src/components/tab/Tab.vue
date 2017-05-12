
<template>
	<div class="tab">
		<router-link to="/goods" class="tab-item">商品</router-link>
		<router-link to="/ratings" class="tab-item">评价</router-link>
		<router-link to="/seller" class="tab-item">商家</router-link>
	</div>
</template>

<style lang="scss">
	
	@import "../../common/scss/index";
	.tab {
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
	}
	.tab-item {
		flex: 1;
		text-align: center;
		@include border-1px(rgba(7, 17, 27, 0.1));
	}
	.router-link-active {
		color: red;
	}

</style>

<script>

</script>
