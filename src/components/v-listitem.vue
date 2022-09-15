<template>
	<div class="list">
		<div class="list_item"
			v-for="film in ($route.path === '/'? filmList : [currFilm])"
			:key="film.id"
		>
			<div class="list_item_img">
				<img :src=film.img alt="Постер фильма" height="168px" width="112px">
			</div>
			<div class="list_item_description">
				<div class="list_item_description_title">
					<router-link 
						v-if="typeof film.id !== 'undefined'"
						:to="{ name: 'film', params: { id: film.id }}"
					>
						{{film.title}}
					</router-link>
				</div>
				<div class="list_item_description_year">
					{{film.year}}, {{film.genres}}
				</div>
				<div class="list_item_description_producer" >
					Режисер: {{film.directors}}
				</div>
				<div class="list_item_description_actors">
					Актёры:
					<div class="list_item_description_actors_names">
						{{film.actors}}
					</div>
				</div>
				<div class="list_item_description_text">
					{{film.description}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'listItem',
	props: ['filmList', 'currFilm'],
}
</script>

<style lang="scss">
.list {
	display: flex;
	flex-direction: column;
	gap: 24px;
	&_item {
		display: flex;
		background-color: #4D4747;
		box-shadow: 0px 6px 8px -5px rgba(0, 0, 0, 0.6);

		&_img {
			background-color: #C4C4C4;
			width: 168px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex: none;
		}
		&_description {
			display: flex;
			flex-direction: column;
			gap: 10px;
			font-size: 12px;
			color: #988F8F;
			text-transform: uppercase;
			padding-block: 32px;
			padding-inline: 24px 32px;
			&_title a{
				font-size: 36px;
				font-weight: 600;
				color: white;
				text-transform: none;
				text-decoration: none;
			}
			&_actors {
				display: flex;
				gap: 8px;
				&_names {
					text-transform: none;
					color: #E5E5E5;
				}
			}
			&_text {
				text-transform: none;
				color: #E5E5E5;
			}
		}
		&:hover{
			transition: 0.2s ease ;
			transform: translateY(-6px);
			box-shadow: 0px 11px 8px -5px rgba(0, 0, 0, 0.6);

		}
	}
}
</style>