import { Dispatch } from 'react';
import ItemInterface from "./ItemInterface";

export default interface ItemsPropsInterface {
  items: ItemInterface[];
  setItems: Dispatch<ItemInterface[]>;

}

