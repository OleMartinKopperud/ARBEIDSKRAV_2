export default function ShoppingItem({ item, onUpdateItem }) {

    const handleCheckboxChange = (e) => {
        onUpdateItem({ ...item, isBought: e.target.checked })
    }

    const handleQuantityChange = (e) => {
        const newQuantity = Number(e.target.value)
        if (newQuantity > 0) {
            onUpdateItem({ ...item, quantity: newQuantity })
        }
    }

    return (
        <li className="shopping-item">
            <label className="checkbox-label">
                <input 
                    type="checkbox"
                    checked={item.isBought}
                    onChange={handleCheckboxChange} 
                />
                <span className="item-name">{item.name}</span>
            </label>

            <input 
                type="number"
                className="quantity-input"
                value={item.quantity}
                onChange={handleQuantityChange}
                min="1" 
            />
        </li>
    )
}