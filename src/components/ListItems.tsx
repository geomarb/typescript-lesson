import { useState } from "react";
import ItemsPropsInterface from "../interfaces/ItemsPropsInterface";
import Item from "./Item";

const ListItems = ({ items, setItems }: ItemsPropsInterface) => {
  const [newItem, setNewItem] = useState<string>("");
  const [hiddenItemIdList, setHiddenItemIdList] = useState<number[]>([]);

  return (
    <>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            {...item}
            hiddenItemIdList={hiddenItemIdList}
            setHiddenItemIdList={setHiddenItemIdList}
          />
        ))}
      </ul>
      <input
        type="text"
        placeholder="new item"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button
        onClick={() =>
          setItems([...items, { id: items.length + 1, description: newItem }])
        }
      >
        Add
      </button>
    </>
  );
};

export default ListItems;
