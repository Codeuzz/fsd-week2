import { useEffect, useState } from 'react'
import './App.css'
import AddProduct from "./Components/AddProduct"
import ProductList from './Components/ProductList';
import ProductFilter from './Components/ProductFilter';

function App() {
  const [products, setProducts] = useState([]);
  
  const [filtre, setFiltre] = useState('tous');
  const [filtrePrix, setFiltrePrix] = useState('croissant');

  const saveInfos = (newProduct) => {
    setProducts([...products, newProduct]);
  }

  const handleFilterChange = (e) => {
    setFiltre(e.target.value)
  };

  const handleFilterPrixChange = (e) => {
    setFiltrePrix(e.target.value)
  }

  useEffect(() => {
    console.log(products);
    console.log("filtre :", filtre)
    console.log("filtre prix:", filtrePrix)
  },[products])

  return (
    <>
      <AddProduct saveInfos={saveInfos} />
      <ProductFilter  filtrePrix={filtrePrix} handleFilterPrixChange={handleFilterPrixChange} handleFilterChange={handleFilterChange} filtre={filtre} />
      <ProductList setProducts={setProducts} filtrePrix={filtrePrix} filtre={filtre} products={products} />


    </>
  )
}

export default App
