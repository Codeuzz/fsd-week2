function AddProduct() {
    return (
        <form>
            <input type="text" placeholder="Nom du produit" />
            <select>
                <option value="" disabled selected>Catégorie</option>
                <option value="nourriture">nourriture</option>
                <option value="vetement">vêtement</option>
                <option value="produit-ménage">produit de ménage</option>
            </select>
            <input type="number" placeholder="Prix" />

        </form>
    )
}

export default AddProduct