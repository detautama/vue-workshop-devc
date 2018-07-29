<template>
  <div class="columns">
    <div class="column" v-for="product in products" :key="product.id">
      <Product :product="product" />
    </div>
  </div>
</template>

<script>
import { Store } from '../store/store'
import Product from './Product.vue'

export default {
  name: 'ProductList',
  components: {
    Product
  },
  data () {
    return {
      products: Store.$data.products
    }
  }
}
</script>

