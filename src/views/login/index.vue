<template>
	<div class="hello">
		<van-collapse v-model="activeNames">
			<van-collapse-item title="标题1" name="1">内容</van-collapse-item>
			<van-collapse-item title="标题2" name="2">内容</van-collapse-item>
			<van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
		</van-collapse>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeNames: ['1']
			};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
