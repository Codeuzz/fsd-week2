function IsVendor({isVendor, handleChange}) {
    return (
        <div>
            <p>Êtes-vous vendeur ?</p>
            <select onChange={handleChange} value={isVendor ? true: false} name="select" id="is-vendor-select">
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>
        </div>
    )
}

export default IsVendor