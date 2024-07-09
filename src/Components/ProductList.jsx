
function ProductList({products, setProducts, filtre, filtrePrix}) {
    let productsSorted = [...products];

    if(filtrePrix === "croissant") {
        productsSorted.sort((a, b) => a.prix - b.prix);
    } else if(filtrePrix === "decroissant") {
        productsSorted.sort((a, b) => b.prix - a.prix);
    }

    const deleteProduct = (indexToDelete) => {
        const updatedProducts = products.filter((product, index) => indexToDelete !== index);
        setProducts(updatedProducts)
    }

    return (
        <div id="product-list">
            {filtre === 'tous' ? (
                <ul>
                {productsSorted.map((product, index) => (
                    <li key={index}>
                        {product.nom}: {product.prix}€
                        <button onClick={() => deleteProduct(index)}>Delete</button>
                    </li>
                ))}
                </ul>
            ) : (
                <ul>
                {productsSorted
                    .filter((product) => product.categorie === filtre)
                    .map((item, index) => (
                    <li key={index}>
                        {item.nom}: {item.prix}
                        <button onClick={() => deleteProduct(index)}>Delete</button>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ProductList


