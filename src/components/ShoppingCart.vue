<template>
  <table class="table is-fullwidth">
    <tr>
      <th>Item Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th></th>
    </tr>
    <tr v-for="item in cart" :key="item.details.id">
      <td>{{item.details.name}}</td>
      <td>{{item.details.price | currency}}</td>
      <td>{{item.quantity}}</td>
      <td><button @click="removeFromCart(item.details.id)" class="button is-link">-</button></td>
    </tr>
    <tfoot>
      <tr>
        <td class="is-info" colspan="4">
          Total Belanja : {{total | currency}}
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import {Store} from '../store/store.js'
export default {
  name: 'ShoppingCart',
  computed: {
    cart () {
      return Store.$data.cart
    },
    total () {
      return Store.total
    }
  },
  methods: {
    removeFromCart (id) {
      Store.removeFromCart(id)
    }
  }
}
</script>

