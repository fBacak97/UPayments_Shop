import axios from 'axios'

export const getAvailableCategories = async () => {
  return axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/')
}

export const getProducts = async () => {
  return axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/')
}

export const createNewProduct = async (name, description, imageUrl, category, price) => {
  return axios.post('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/', {
    name: name,
    description: description,
    avatar: imageUrl,
    price: price,
    category: category,
    developerEmail: 'fBacak97@outlook.com'
  })
}

export const deleteProduct = async (productId) => {
  return axios.delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${productId}`)
}
