<script setup>
import MHKHeader from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container">
    <header>
      <MHKHeader />
    </header>

    <main>
      <Content />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style src="./assets/sassStyles/customStyles.scss"></style>
