import shop from '@/api/shop';

export default {
	namespaced: true,
	state: {
		// {id, quantity}
		items: [],
		checkoutStatus: null
	},

	getters: {
		cartProducts (state, getters, rootState, rootGetters){
			return state.items.map(cartItem => {
				const product = rootState.product.items.find(product => product.id == cartItem.id)
				return{
					title: product.title,
					price: product.price,
					quantity: cartItem.quantity

				}
			})
		},

		cartTotal (state, getters){
			return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
		}
	},

	actions: {
		addProductToCart ({state, getters, commit, rootState, rootGetters}, product){
			if(rootGetters['product/productIsInStock'](product)){
				const cartItem = state.items.find(item => item.id === product.id)
				//find cartItem
				if(!cartItem){
					commit('pushProductToCart', product.id)
				}else{
					commit('incrementItemQuantity', cartItem)
				}

				commit('product/decrementProductInventory', product, {root: true})
			}
		},

		checkout ({state, commit}) {
			shop.buyProducts(
				state.items,
				() => {
					commit('emptyCart')
					commit('setCheckoutStatus', 'success')
				},
				() => {
					commit('setCheckoutStatus', 'fail')
				}
			)
		}
	},

	mutations: {
		pushProductToCart(state, productId){
			state.items.push({
				id: productId,
				quantity: 1
			})
		},
		setCheckoutStatus(state, status){
			state.checkoutStatus = status
		},
		incrementItemQuantity(state, cartItem){
			cartItem.quantity++
		},
		emptyCart (state){
			state.items = []
		}
	}
}