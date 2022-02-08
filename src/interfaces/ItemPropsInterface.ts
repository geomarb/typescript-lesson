import { Dispatch } from 'react';
import ItemInterface from "./ItemInterface";

export default  interface ItemPropsInterface extends ItemInterface {
  hiddenItemIdList: number[];
  setHiddenItemIdList: Dispatch<number[]>;
}
