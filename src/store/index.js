import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allfilms: [],
    currfilm: [],
    isLoaded: true

  },
  getters: {
  },
  mutations: {
    setfilms(state,films){
      let arr = []
      if(typeof films === 'object')
      films.forEach(el=>{
        const cur = {
          year: el.year,
          title: el.title,
          genres: el.genres.join(', '),
          directors: el.directors?.length ? el.directors.join(', ') : '',
          actors: el.actors?.length ? el.actors.join(', ') : '',
          description: el.description,
          id: el.id,
          img: (`https:${el.poster}`)
        }
        arr.push(cur)
      })
      if(arr.length === '1') state.currfilm = arr
      else state.allfilms = arr
    },
    loadcurFilm(state,film){
      state.currfilm = film
      state.currfilm.actors = state.currfilm.actors?.length ? state.currfilm.actors.join(', ') : ''
      state.currfilm.genres = state.currfilm.genres.join(', ')
      state.currfilm.directors = state.currfilm.directors?.length ? state.currfilm.directors.join(', ') : ''
    },
    setcurrFilm(state,foundFilm){
      state.currfilm = foundFilm
    },
    setLoaded(state,val){
      state.isLoaded = val
    },
    sortYearfilms(state){
      state.allfilms = state.allfilms.sort(function(a, b) {
        return a.year - b.year;
      })
    },
    sortNamefilms(state){
      state.allfilms = state.allfilms.sort(function(a, b) {
        return a.title.localeCompare(b.title, 'en')
      })
    }
  },
  actions: {
    async loadfilms({commit}, path){
      commit('setLoaded',true)
      if(path.name === 'listFilm') {
        await axios.get('https://floating-sierra-20135.herokuapp.com/api/movies')
        .then(response => {
          if(response.data.data){
            commit('setfilms',response?.data?.data)
          }
          commit('setLoaded',false)
        })
      }else {
        await axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${path.params.id}`)
        .then(response => {
          console.log('thnenenen')
          if(response.data.data){
            commit('loadcurFilm',response?.data?.data)
          }
          commit('setLoaded',false)
        })
      }
    }
  }
})
