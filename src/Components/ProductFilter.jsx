function ProductFilter({filtre, handleFilterChange, handleFilterPrixChange, filtrePrix}) {
    return (
        <div>
            <label htmlFor="filter">Filtrer des produits :  </label>
            <select value={filtre} id="filter" onChange={handleFilterChange}>
                <option value="">Catégorie de produit</option>
                <option value="tous">Tous</option>
                <option value="nourriture">nourriture</option>
                <option value="vetement">vêtement</option>
                <option value="produit-ménage">produit de ménage</option>
            </select>
            <select value={filtrePrix} id="filter-prix" onChange={handleFilterPrixChange}>
                <option value="">Prix</option>
                <option value="croissant">Ordre croissant</option>
                <option value="decroissant">Ordre décroissant</option>
            </select>
        </div>
        
    )
}

export default ProductFilter