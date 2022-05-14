<template>
  <div class="realtime">
    <h1>Real Time Data</h1>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";
export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log(docs);
        posts.value = docs;
      });
    // onSnapshot() method yang dapat digunakan untuk mendapatkan snapshot (snap) yang berisi response dari db (user akan selalu dapat secara real time data berubah)

    return { posts };
  },
};
</script>

<style>
.realtime {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
