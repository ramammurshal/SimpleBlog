import { ref } from 'vue'

const useTags = (posts) => {
  const tags = ref([])
  const tagSet = new Set()

  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag)) // Set() tidak akan menambahkan data yang duplikat
  })

  tags.value = [...tagSet]

  return { tags }
}

export default useTags
