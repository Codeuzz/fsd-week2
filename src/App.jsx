import { useEffect, useState } from 'react'
import './App.css'
import AddProduct from "./Components/AddProduct"
import ProductList from './Components/ProductList';
import ProductFilter from './Components/ProductFilter';

function App() {
  const [products, setProducts] = useState([]);
  const [prix, setPrix] = useState(0);
  const [nom, setNom] = useState('');
  const [categorie, setCategorie] = useState('')
  const [filtre, setFiltre] = useState('tous');
  const [filtrePrix, setFiltrePrix] = useState('croissant');


  const handleChange = (e) => {
    if(e.target.name === "nom") {
      setNom(e.target.value)
    } else if( e.target.name === "categorie") {
      setCategorie(e.target.value)
    } else if(e.target.name === "prix") {
      setPrix(e.target.value)
    } 
  }

  const saveInfos = (e) => {
    e.preventDefault();
    const newProduct = {"nom": nom, "prix": prix, "categorie": categorie}
    setProducts([...products, newProduct]);
    
    resetState()
  }

  const resetState = () => {
    setNom('');
    setPrix(0);
    setCategorie('')
  };

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
      <AddProduct nom={nom} prix={prix} categorie={categorie} handleChange={handleChange} saveInfos={saveInfos} />
      <ProductFilter  filtrePrix={filtrePrix} handleFilterPrixChange={handleFilterPrixChange} handleFilterChange={handleFilterChange} filtre={filtre} />
      <ProductList setProducts={setProducts} filtrePrix={filtrePrix} filtre={filtre} products={products} />


    </>
  )
}

export default App
