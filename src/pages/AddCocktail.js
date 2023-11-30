import { useState, useContext } from "react"
import { CocktailContext } from "../context/Cocktail"
import IngredientsFields from "../components/IngredientsFields"

export default function AddCocktail() {
    const defaultFormData = {
        drink: '',
        drinkThumb: '',
        instructions: '',
        ingredients: ['']
    };

    const { cocktails, maxCocktailId, setCocktails, setCocktailMaxId } = useContext(CocktailContext);
    const [formData, setFormData] = useState({...defaultFormData});
    const [inputFieldNumber,  setInputFieldNumber] = useState(1);
    const [fetchSuccessMessage, setFetchSuccessMessage] = useState(false);
    const [fetchErrorMessage, setFetchErrorMessage] = useState(false);

    const handleIngredients = (fromDelete = false) => {
        const ingredientsElements = document.querySelectorAll('.ingredients');
        const ingredientsValues = [];
        ingredientsElements.forEach(e => ingredientsValues.push(e.value));
        if (fromDelete === true) ingredientsValues.pop();
        setFormData({...formData, ingredients: ingredientsValues});
    }

    const handleChange = (e) => {
        setFetchSuccessMessage(false);
        setFetchErrorMessage(false);
        if (e.target.name.includes('ingredients')) handleIngredients();
        else setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFetchErrorMessage(false);

        fetch('http://localhost:3000/cocktails', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }, 
            body: JSON.stringify({...formData, id: maxCocktailId + 1})
        })
        .then(res => {
            if(res.ok) res.json().then(data => {
                setCocktails([...cocktails, data]);
                setCocktailMaxId(data.id);
                setFormData({...defaultFormData});
                setInputFieldNumber(1);
                setFetchSuccessMessage(true);
            })
        })
        .catch(() => setFetchErrorMessage(true))
    }

    return (
        <form id="add-cocktail-form" onSubmit={handleSubmit}>
            <label className="form-field" htmlFor="drink-name">Drink Name</label>
            <input required type="text" id="drink-name" name="drink" value={formData.drink} onChange={handleChange} />
            <label className="form-field" htmlFor="thumbnail">Thumbnail</label>
            <input required type="text" id="thumbnail" name="drinkThumb" value={formData.drinkThumb} onChange={handleChange} />
            <label className="form-field" htmlFor="instructions">Instructions</label>
            <textarea required id="instructions" name="instructions" rows="5" cols="50" value={formData.instructions} onChange={handleChange} />
            <label className="form-field" htmlFor="ingredients1">Ingredients</label>
            {<IngredientsFields formData={formData} inputFieldNumber={inputFieldNumber} setInputFieldNumber={setInputFieldNumber} onFieldChange={handleChange} handleIngredients={handleIngredients} />}
            <div className="submit-button">
                <button className="flex-button" type="submit">Submit</button>
            </div>
            {fetchSuccessMessage === true ? <p className="success-message">Submission successful</p> : null}
            {fetchErrorMessage === true ? <p className="error-message">Error occurred</p> : null}
        </form>
    )
}