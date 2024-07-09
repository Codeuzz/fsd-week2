import { useState } from 'react'
import './App.css'
import AddProduct from "./Components/AddProduct"

function App() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <h1>Hi</h1>
      <AddProduct />

    </>
  )
}

export default App
