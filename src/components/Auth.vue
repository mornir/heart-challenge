<template>
  <div class="flex justify-center mt-20 gap-x-4">
    <button
      @click="signInWithDiscord"
      class="flex items-center px-4 pt-3 pb-2 text-lg font-medium rounded-sm bg-primary gap-x-2"
    >
      <img src="../assets/discord.svg" alt="" width="20" />Sign In with Discord
    </button>
    <!--  <button @click="logout" class="px-4 py-2 border">Log out</button> -->
  </div>
</template>

<script>
import { supabase } from '../supabase';

export default {
  name: 'Auth',
  data() {
    return {
      user: null,
      session: null,
    };
  },
  methods: {
    signInWithDiscord() {
      supabase.auth.signIn(
        {
          provider: 'discord',
        },
        { redirectTo: 'http://localhost:3000/reviews' }
      );
    },
    logout() {
      supabase.auth.signOut();
    },
  },
  created() {
    supabase.auth.onAuthStateChange(async (event, session) => {
      this.user = session?.user ?? null;
    });
  },
};
</script>
