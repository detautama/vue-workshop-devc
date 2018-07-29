<template>
  <div id="app">
    <div class="container">
      <NavBar />
      <div class="columns">
        <div class="column">
          <h1 class="title is-5">Product List</h1>
          <ProductList />
        </div>
        <div class="column">
          <h1 class="title is-5">Shopping cart</h1>
          <ShoppingCart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NavBar,
    ProductList,
    ShoppingCart
  }
}
</script>
