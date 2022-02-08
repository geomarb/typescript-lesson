import ItemPropsInterface from "../interfaces/ItemPropsInterface";

const Item = ({
  id,
  description,
  hiddenItemIdList,
  setHiddenItemIdList,
}: ItemPropsInterface) => (
  <>
    {!hiddenItemIdList.includes(id) && (
      <li>
        {description}
        <button onClick={() => setHiddenItemIdList([...hiddenItemIdList, id])}>
          Hide
        </button>
      </li>
    )}
  </>
);

export default Item;
