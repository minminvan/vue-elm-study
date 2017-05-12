
<template>
	<div class="header">
    <div class="content-wrapper">
      <div class="avatar">
     		<!-- v-bind 指令被用来响应地更新 HTML 属性  src是v-bind的参数 -->
        <img v-bind:src="seller.avatar" width="64" height="64" />
      </div>
      <div class="content">
        <div class="title">
        	<span class="brand"></span>
        	<span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
        	{{seller.description + ' / ' + seller.deliveryTime + '分钟送达'}}
        </div>
        <div class="supports" v-if="seller.supports">
        	<div class="supports_desc">
        		<span class="icon" v-bind:class="iconClassMap[seller.supports[0].type]"></span>
        		<span class="text">{{seller.supports[0].description}}</span>
        	</div>
        </div>
				<div class="support-count" v-if="seller.supports" v-on:click="showDetails">
					<span class="count">{{seller.supports.length+'个'}}</span>
					<i class="icon-keyboard_arrow_right"></i>
				</div>
      </div>

    </div>

	</div>
</template>

<style lang="scss">
	.header {
		position: relative;
		background: rgba(7,17,27,0.5);
		color: #fff;
		blur: 10px;
		overflow: hidden;
	}

  .content-wrapper {
  	position: relative;
  	display: flex;
  	padding: 24px 12px 18px 24px;
  	font-size: 12px;
  }

  .avatar {
  	img {
  		border-radius: 2px;
  	}
  }

  .content {
  	margin-left: 16px;
  }
  .title {
  	margin: 2px 0 8px 0;
  	font-size: 16px;
  }
  .brand {
  	display: inline-block;
  	vertical-align: top;
  	width: 30px;
  	height: 18px;
  	background-image: url('../../assets/brand.png');
  	background-size: cover;
  	background-repeat: no-repeat;
  }
  .name {
  	margin-left: 6px;
  	font-size: 16px;
  	line-height: 18px;
  	font-weight: bold;
  }
  .description {
  	font-size: 12px;
  	margin-bottom: 10px;
  }
  .supports {
  	.icon {
  		display: inline-block;
  		vertical-align: top;
  		width: 12px;
  		height: 12px;
  		margin-right: 4px;
  		background-size: cover;
  		background-repeat: no-repeat;
  		&.decrease {
				background-image: url('../../assets/jian.png')
  		}
  		&.discount {

  		}
  		&.guarantee {

  		}
  		  
  		&.invoice {

  		}
  		&.special {

  		}
  	}
  	.text {
  		line-height: 12px;
  		font-size: 10px;
  	}

  }
	.support-count {
		position: absolute;
		right: 12px;
		bottom: 18px;
		padding: 0 8px;
		height: 24px;
		line-height: 24px;
		border-radius: 14px;
		background-color: rgba(0,0,0,0.2);
		text-align: center;
		.count {
			vertical-align: top;
			font-size: 10px;
		}
		.icon-keyboard_arrow_right {
			font-size: 10px;
			margin-left: 2px;
			line-height: 24px;
		}

	}




</style>

<script>
	export default {
		// header组件里面就会通过propS属性去接受传过来的seller
		props: { 
			seller: {
				type: Object
			}
		},
		data() {
			return {
				detailShow: false
			}
		},
		created() {
			this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		},
		methods: {
			showDetails() {
				this.detailShow = true;
			},
			hideDetail() {
	      this.detailShow = false;
	    }
		}
	}
</script>
