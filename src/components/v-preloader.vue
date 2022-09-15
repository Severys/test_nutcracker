<template>
	<div class="preloader"></div>
</template>

<script>
export default {
	name: 'preLoader'

}
</script>
<style lang="scss">
	.preloader {
		width: 100vw;
		height: 100vh;
		position: fixed;
		display: flex;
		justify-content: center;
		align-content: center;
		overflow: hidden;
		&::before{
			content: '';
			position: absolute;
			height: 56px;
			width: 80px;
			top: 500px;
			background: url(@/assets/Subtract.svg);
			animation: 1s linear 0s reverse  none infinite running rot;
			@keyframes rot {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(-360deg);
				}
				}
		}
		&::after{
			content: '';
			position: absolute;
			height: 77px;
			width: 88px;
			top: 500px;
			background: url(@/assets/Subtract-1.svg);
			animation: 1s linear 0s normal none infinite running rot;
			@keyframes rot {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
				}
		}
	}
</style>