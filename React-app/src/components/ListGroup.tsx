import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedIndex] = useState(-1);

  // items = [];

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 ? <p>No data</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {setSelectedIndex(index); onSelectItem(item);}}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
      <div style={{marginTop:'20px'}}>Selected Item: <b>{items[selectedItem]}</b></div>
    </>
  );
}

export default ListGroup;
