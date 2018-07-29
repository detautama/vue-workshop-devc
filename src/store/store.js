import Vue from 'vue'
import products from '../Api/product'

export const Store = new Vue ({
  data () {
    return {
      products: products,
      cart: []
    }
  },
  computed: {
    total () {
      return this.cart.reduce((accumulator,product) => {
          return accumulator + product.details.price * product.quantity
      },0)
    }
  },
  methods: {
    removeFromCart (id) {
      const index = this.cart.findIndex((item) => {
        return item.details.id === id
      })

      if (this.cart[index].quantity <= 1) {
        this.cart.splice(index, 1)
      } else {
        this.cart[index].quantity--
      }
    },
    addToCart (product) {
      const index = this.cart.findIndex((item) => {
        return item.details.id === product.id
      })
      if (index === -1) {
        this.cart.push({
          details: product,
          quantity: 1
        })
      } else {
        if (product.stok > this.cart[index].quantity) {
          this.cart[index].quantity ++
        } else {
          return
        }
      }

    }
  }
})