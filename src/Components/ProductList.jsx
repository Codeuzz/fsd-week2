
function ProductList({products, setProducts, filtre, filtrePrix}) {
    let productsSorted = [...products];

    if(filtrePrix === "croissant") {
        productsSorted.sort((a, b) => a.prix - b.prix);
    } else if(filtrePrix === "decroissant") {
        productsSorted.sort((a, b) => b.prix - a.prix);
    }

    return (
        <div id="product-list">
            {filtre === 'tous' ? (
                <ul>
                {productsSorted.map((product, index) => (
                    <li key={index}>{product.nom}: {product.prix}€</li>
                ))}
                </ul>
            ) : (
                <ul>
                {productsSorted
                    .filter((product) => product.categorie === filtre)
                    .map((item, index) => (
                    <li key={index}>{item.nom}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ProductList


