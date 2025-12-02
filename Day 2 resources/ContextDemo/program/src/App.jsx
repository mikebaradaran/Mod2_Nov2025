import { AddToBasket } from "./components/AddToBasket";
import { BasketList } from "./components/BasketList";
import { BasketProvider } from "./components/BasketProvider";

export default function App() {
  return (
    <BasketProvider>
        <BasketList />
        <AddToBasket />
    </BasketProvider>
  );
}