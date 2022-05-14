<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete" class="delete">Delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue"
import getPost from '../composables/getPost'
import { useRoute, useRouter } from "vue-router"
import { projectFirestore } from '../firebase/config'

export default {
  props: ['id'],
  components: {
    Spinner
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()

    // const { post, error, loadData } = getPost(props.id)
    const { post, error, loadData } = getPost(route.params.id)
    loadData()

    const handleDelete = async () => {
      // delete documents
      await projectFirestore.collection('posts').doc(props.id).delete()

      // router.push({ name: 'Home' })
      router.push('/')
    }

    return { post, error, handleDelete }
  }
}
</script>

<style>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete {
    margin: 10px auto;
  }
</style>
