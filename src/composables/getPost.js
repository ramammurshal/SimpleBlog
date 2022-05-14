import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const loadData = async () => {
    try {
      // how to get single data from firestore
      let response = await projectFirestore.collection('posts').doc(id).get()

      if (!response.exists) {
        throw Error('That post does not exist')
      }
      post.value = { ...response.data(), id: response.id }
    } 
    catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  }

  return { post, error, loadData }
}

export default getPost
