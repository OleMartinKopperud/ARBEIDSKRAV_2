import { useState } from 'react'
import AddForm from './AddForm'
import ShoppingList from './ShoppingList'

export default function App() {
  const [items, setItems] = useState([
    {id: 2, name: 'Egg', quantity: 1, isBought: true },
    {id: 1, name: 'Melk', quantity: 2, isBought: false },
  ])

  const handleAddItem = (newItem) => {
    setItems([newItem, ...items])
  }

  const handleUpdateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item))
  }

  return (
    <main className='app-container'>
      <section className='shopping-card'>
        <h1>Handleliste</h1>
        <AddForm onAddItem={handleAddItem} />
        <ShoppingList items={items} onUpdateItem={handleUpdateItem} />
      </section>
    </main>
  )
}