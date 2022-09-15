<template>
    <div class="filmlist">
      <sortBtn
        @sort="el => sortFilm(el)"
      />
      <hr>
      <vList
        :filmList="allfilms"

      />
    </div>
</template>

<script>
import sortBtn from '@/components/sort-btn'
import vList from '@/components/v-listitem'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'listFilm',
  components: {
    sortBtn,
    vList,
  },
  data(){
    return {
    }
  },
  methods:{
    ...mapActions(['loadfilms']),
    ...mapMutations(['sortYearfilms','sortNamefilms']),
    sortFilm(sortby){
      if(sortby === 'name'){
        this.sortNamefilms()
      }else {
        this.sortYearfilms()
      }
    }
  },
  computed:{
    ...mapState(['allfilms',])
  },
  created(){
    this.loadfilms(this.$route)
  }
}
</script>

<style lang="scss">

hr {
  width: 100%;
  margin-bottom: 39px;
  margin-top: 19px;
}
</style>
