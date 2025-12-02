// Component B: adds items
import { useBasket } from "./BasketProvider";

export const AddToBasket = () => {
    const { addItem } = useBasket();
    const items = ["Apple", "Banana", "Orange"]; // simple list

    return (
        <div>
            <h2>Add Items</h2>
            <div>
                {items.map((item) => (
                    <button key={item} onClick={() => addItem(item)} >
                        Add {item}
                    </button>
                ))}
            </div>
        </div>
    );
};