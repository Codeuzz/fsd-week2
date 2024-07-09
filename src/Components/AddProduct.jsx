import { useState } from 'react'


function AddProduct({saveInfos}) {
    const [prix, setPrix] = useState(0);
    const [nom, setNom] = useState('');
    const [categorie, setCategorie] = useState('')
    
    const handleChange = (e) => {
        if (e.target.name === "nom") {
          setNom(e.target.value);
        } else if (e.target.name === "categorie") {
          setCategorie(e.target.value);
        } else if (e.target.name === "prix") {
          setPrix(e.target.value);
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { nom, prix, categorie };
        saveInfos(newProduct);
        resetState();
      }; 

      const resetState = () => {
        setNom('');
        setPrix(0);
        setCategorie('');
      };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nom-produit">Ajouter un produit:</label>
            <input value={nom} onChange={handleChange} name="nom" id="nom-produit" type="text" placeholder="Nom du produit" />
            <select value={categorie} onChange={handleChange} name="categorie" >
                <option value="">Catégorie</option>
                <option value="nourriture">nourriture</option>
                <option value="vetement">vêtement</option>
                <option value="produit-ménage">produit de ménage</option>
            </select>
            <input onChange={handleChange} value={prix} name="prix" type="number" placeholder="Prix" />
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default AddProduct

// mettre a jour state ici
// renommer save infos avec on ok