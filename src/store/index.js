import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import cart from './modules/cart'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		cart,
		product
	},

	state: { // = data
		
	},

	getters: { // = computed property
		
	},

	actions,

	mutations: {
		
	}
})