import ShoppingItem from './ShoppingItem'

export default function ShoppingList({ items, onUpdateItem }) {
    return (
        <ul className='Shopping-list'>
            {items.map(item => (
                <ShoppingItem
                    key={item.id}
                    item={item}
                    onUpdateItem={onUpdateItem}
                />
            ))}
        </ul>
    )
}