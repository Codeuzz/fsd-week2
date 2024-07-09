function AddProduct({handleChange, saveInfos, categorie, prix, nom}) {
    return (
        <form onSubmit={saveInfos}>
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