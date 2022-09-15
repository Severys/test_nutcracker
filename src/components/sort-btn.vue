<template>
    <div class="sort">
      <h2 class="sort_title" >Фильмы</h2>
      <div class="sort_list">
        <input 
          class="sort_list_checkbox" 
          type="checkbox" 
          id="name"
          v-model="inpName"
          @change="sorttype($event.target.id)"
        >
        <label 
          for="name"
        >
          Сортировка по названию
        </label>
        <input 
          class="sort_list_checkbox" 
          type="checkbox" 
          id="year"
          v-model="inpYear"
          @change="sorttype($event.target.id)"
        >
        <label 
          for="year"
        >
          Сортировка по году
        </label>
      </div>
    </div>
</template>

<script>
export default {
  name: 'sortBtn',
  props:{},
  data(){
    return{
      inpName: false,
      inpYear: false
    }
  },
  methods:{
    sorttype(choise){
      if(choise === 'name'){
        this.inpYear = false
        this.$emit('sort','name')
      }else{
        this.inpName = false
        this.$emit('sort','year')
      }
    }
  }
}
</script>

<style lang="scss">
  .sort {
    &_title {
      padding: 0px;
      margin-top: 40px;
      font-size: 32px;
    }
    &_list {
      display: flex;
      list-style-type: none;
      color: #C4C4C4;
      & :nth-child(2) {
        margin-right: 30px;
      }
      &_checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
        &+label {
          display: inline-flex;
          align-items: center;
          user-select: none;
          &::before {
            content: '';
            display: inline-block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #C4C4C4;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
          }
        }
        &:checked+label::before {
          border-color: #FF5252;
          background-color: #FF5252;
          background-image: url(@/assets/arrow_btn.svg);
          background-size: 10px 10px;
        }
      }
    }
  }


</style>