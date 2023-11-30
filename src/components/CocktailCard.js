export default function CocktailCard({ cocktail }) {
    return (
        <div className="cocktail-card">
            <img id="cocktail-card-image" src={cocktail.drinkThumb} alt=""/>
            <h3 id="cocktail-card-header">{cocktail.drink}</h3>
        </div>
    )
}