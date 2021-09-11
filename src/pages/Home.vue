<template>
  <div class="flex flex-col justify-center min-h-screen">
    <h1 class="text-center text-8xl">Heart Challenge 💕</h1>
    <Auth />
  </div>
</template>

<script>
import { supabase } from '../supabase';
export default {
  name: 'Home',
  beforeRouteEnter() {
    if (supabase.auth.user()) {
      return '/reviews';
    } else {
      return true;
    }
  },
};
</script>
