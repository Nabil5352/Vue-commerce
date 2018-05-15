<template>
	<div>
		<h1>Shopping Cart</h1>
		<ul>
			<li v-for="product in products">
				{{product.title}} - {{product.price | currency}} - {{product.quantity}}
			</li>
		</ul>
		<p>Total: {{total | currency}}</p>
		<!-- <button @click="$store.dispatch('checkout')">Checkout</button> -->
		<button @click="checkout">Checkout</button>
		
		<!-- <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p>
		 -->
		<p v-if="checkoutStatus">{{checkoutStatus}}</p>
		
	</div>
</template>

<script>
	import {mapState, mapGetters, mapActions} from 'vuex'

	export default {
		computed: {
			...mapGetters('cart',{
				products: 'cartProducts',
				total: 'cartTotal'
			}),
			...mapState('cart',{
				checkoutStatus: state => state.checkoutStatus
			})
			// products () {
			// 	return this.$store.getters.cartProducts
			// },
			// total () {
			// 	return this.$store.getters.cartTotal
			// }
		},

		methods: {
			...mapActions ('cart',['checkout'])
		}
	}
</script>
<style scoped></style>