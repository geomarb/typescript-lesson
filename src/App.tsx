import { useState } from "react";

import ItemInterface from "./interfaces/ItemInterface";
import ListItems from "./components/ListItems";

const initItems: ItemInterface[] = [
  { id: 1, description: "item 1" },
  { id: 2, description: "item 2" },
];

function App() {
  const [items, setItems] = useState<ItemInterface[]>(initItems);
  return (
    <div>
      <ListItems items={items} setItems={setItems} />
    </div>
  );
}

export default App;
