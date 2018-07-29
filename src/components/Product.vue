<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.imageSrc" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{product.name}}</p>
          <div class="content">
            {{product.desc}}
            <br>
          </div>
          <h5>{{product.price | currency}}</h5>
          <button @click="addToCart(product)" class="button is-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Store} from '../store/store.js'

export default {
  name: 'Product',
  props: {
    product: Object
  },
  methods: {
    addToCart (product) {
      Store.addToCart(product)
    }
  }
}
</script>

