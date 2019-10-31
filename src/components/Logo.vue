<template>
	<div class='logo'>
		<a href="https://rgbplace.com" target="_self">
			<img src='/img/RGB_place.png' alt="RGB place Logo"/>
		</a>
	</div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.logo {
	img {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width:75%;
		margin: auto;
	}
}
</style>
