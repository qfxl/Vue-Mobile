<template>
	<div class="hello">
		<van-button type="primary" @click="clickBtn">主要按钮</van-button>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		methods: {
			clickBtn() {			
				this.$toast("click me")
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
