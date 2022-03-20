import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ items }) {
  return (
    <div className="item-list-container">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
