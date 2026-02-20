import { useState } from "react";

export default function AddForm({ onAddItem }) {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name.trim() || !quantity) {
            setError('Feil: Du må fylle ut både varenavn og antall.')
            return
        }

        if (Number(quantity) <= 0) {
            setError('Feil: Antall må være 1 eller høyere.')
            return
        }

        onAddItem({
            id: crypto.randomUUID(),
            name: name.trim(),
            quantity: Number(quantity),
            isBought: false
        })

        setName('')
        setQuantity('')
        setError('')
    }

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <fieldset>
                <label htmlFor="itemName">Vare</label>
                <input
                    id="itemName" 
                    type="text"
                    placeholder="Egg.."
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
            </fieldset>

            <fieldset>
                <label htmlFor="ItemQuantity">Antall</label>
                <input
                    id="itemQuantity" 
                    type="number"
                    placeholder="2"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1" 
                />
            </fieldset>

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Legg til vare</button>
        </form>
    )
}