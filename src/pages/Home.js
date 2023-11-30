import { useContext, useState } from "react";
import { CocktailContext } from "../context/Cocktail";
import CocktailCard from "../components/CocktailCard";

export default function Home() {
    const { cocktails } = useContext(CocktailContext);
    const [searchData, setSearchData] = useState('');
    const [filterType, setFilterType] = useState('drink')

    const filterCriteria = () => {
        if(filterType === 'drink') {
            return cocktails.filter(e => e.drink.toLowerCase().startsWith(searchData.toLowerCase()))
        } else {
            return cocktails.filter(e => e.ingredients.find(i => i.toLowerCase().startsWith(searchData.toLowerCase())) ? true : false)  
        }
    }

    return (
        <div>
            <div id="filter-input-container">
                <input type="radio" id="filter-type-cocktail" name="filter-type" value="drink" checked={filterType === 'drink'} onChange={() => setFilterType('drink')} />
                <label className="filter-radio" htmlFor="filter-type-cocktail">Cocktail</label>
                <input type="radio" id="filter-type-ingredient" name="filter-type" value="ingredient" checked={filterType === 'ingredient'} onChange={() => setFilterType('ingredient')} />
                <label className="filter-radio" htmlFor="filter-type-ingredient">Ingredient</label>
                <input type="text" id="filter-input" placeholder="Filter cocktails" onChange={(e) => setSearchData(e.target.value)} />
            </div>
            <div id="cocktail-container">
                {cocktails.length > 0 ? filterCriteria().map(e => <CocktailCard key={e.id} cocktail={e}/>)
                                    : <p>Loading cocktails...</p>}
            </div>
        </div>
    )
}