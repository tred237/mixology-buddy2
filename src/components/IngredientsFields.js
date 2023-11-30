export default function IngredientsFields({ formData, inputFieldNumber, setInputFieldNumber, onFieldChange, handleIngredients }) {
    const handleAddIngredient = () => {
        setInputFieldNumber(inputFieldNumber + 1)
    }

    const handleDeleteIngredient = () => {
        if (inputFieldNumber > 1) {
            setInputFieldNumber(inputFieldNumber - 1)
            handleIngredients(true)
        }
    }

    return (
        <>
            {[...Array(inputFieldNumber)].map((e, i) => {
                return (
                    <div key={i} className="ingredients-fields">
                        <input type="text" required={i === 0 ? true : false} id={`ingredients${i+1}`} className="ingredients" name="ingredients" onChange={onFieldChange} value={formData.ingredients[i]} />
                    </div>
                )
            })}
            <div id="ingredient-button-container">
                <button type="button" className="flex-button" onClick={handleAddIngredient}>Add Ingredient</button>
                {inputFieldNumber > 1 ? <button type="button" className="flex-button" onClick={handleDeleteIngredient}>Delete Ingredient</button> : null}
            </div>
        </>
    )
}