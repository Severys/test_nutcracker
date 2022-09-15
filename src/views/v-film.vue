<template>
  <div class="film">
    <router-link 
      class="film_link" 
      to="/"
    >
      Назад к списку
    </router-link>
    <hr>
    <v-list
      v-if="(allfilms.length || currfilm ? Object.keys(currfilm).length : false) && !isLoaded"
      :currFilm="currfilm"
    />
    <h1 v-else-if="!isLoaded">К сожалению, по вашему запросу ничего не найдено...</h1>
  </div>
</template>

<script>
import vList from "@/components/v-listitem.vue"
import { mapActions, mapMutations, mapState } from "vuex"

export default {
  components: { vList },
  data(){
    return {
      fromPage: ''
    }
  },
  computed:{
    ...mapState(['allfilms','currfilm','isLoaded'])
  },
  methods:{
    ...mapActions(['loadfilms']),
    ...mapMutations(['setcurrFilm']),
    getFilm(){
      if(this.fromPage === 'net'){
        var foundFilm = this.allfilms.find(film => film.id === this.$route.params.id)
        this.setcurrFilm(foundFilm)
      }else{
        this.loadfilms(this.$route)
      }
    }
  },
  mounted(){
    this.getFilm()
  },
  beforeRouteEnter:(to,from,next)=>{
    if(from.name !== 'listFilm') next(vm => vm.fromPage = 'yes')
    else next(vm => vm.fromPage = 'net')
  }
}
</script>

<style lang="scss">
  .film{
    width: 100%;
    margin-top: 40px;
    &_link {
      color: #FF5252;
      position: relative;
      padding-left: 32px;
      font-size: 20px;
      &::before{
        content: '';
        position: absolute;
        left: 0px;
        top: -3px;
        width: 24px;
        height: 24px;
        background: url(@/assets/arrow_back_ios-24px\ 1.svg);
      }
    }
  }
</style>
