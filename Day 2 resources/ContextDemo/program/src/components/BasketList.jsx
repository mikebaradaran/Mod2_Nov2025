import { useBasket } from "./BasketProvider";

// Component A: shows basket items
export const BasketList = () => {

    const { basket } = useBasket();

    return (
        <div>
            <h2>Basket Items</h2>
            {/* {basket.length === 0 && <p>No items yet</p>} */}
            
            <ul>
                { 
                    basket.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
};
