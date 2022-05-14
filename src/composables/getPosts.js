import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const loadData = async () => {
    try {
      const response = await projectFirestore.collection("posts").orderBy("createdAt", "desc").get();
      // collection() for connect what collection names
      // orderBy utk mengurutkan pengambilan data (arg1: field apa, arg2: secara apa)
      // get to get response

      posts.value = response.docs.map((doc) => {
        // docs to get the list of data
        return { ...doc.data(), id: doc.id };
        // data() to get the actual data
        // id() to get the id of documents
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, loadData };
};

export default getPosts;
