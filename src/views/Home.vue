<template>
  <div>
    <h1>Posts</h1>

    <router-link to="/create">Crear post</router-link>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.get("title") }}</h3>
        <p>{{ post.get("body") }}</p>

        <router-link :to="`/edit/${post.id}`">Editar</router-link>
        <button @click="remove(post.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPosts, deletePost } from "../services/PostService";

export default {
  name: "HomeView",
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    this.posts = await getPosts();
  },
  methods: {
    async remove(id) {
      await deletePost(id);
      this.posts = await getPosts();
    },
  },
};
</script>