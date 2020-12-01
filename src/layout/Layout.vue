<template>
  <div>
    <Header></Header>
    <div class="layout-content">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Header from './header/Header.vue'
import Footer from './footer/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
  },
}
</script>
<style></style>
