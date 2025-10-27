<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import { useScrollReveal } from '@/composables/useScrollReveal';

useScrollReveal()
</script>

<template>
  <div class="font-inter text-gray-800 bg-light min-h-screen flex flex-col">
    <!-- Global Header -->
    <Header />

    <!-- Main Content rendered by Vue Router -->
    <main>
      <router-view />
    </main>

    <!-- Global Footer -->
    <Footer />
  </div>
</template>

<style>
/* you can put site-wide styles here if needed */
</style>
