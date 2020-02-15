import * as React from "react";
import { ShoppingListInput } from "./ShoppingListInput";
import { ShoppingListItem } from "./ShoppingListItem";

// This component renders a <ul> with its children being
// an array of ShoppingListItems
export function ShoppingList(props) {
  const [list, setList] = React.useState(["turkey"]);
  const shoppingList = list.map(item => <ShoppingListItem name={item} />);

  setTimeout(function() {}, 1000);
  return (
    <div>
      <ul>{shoppingList}</ul>
      <ShoppingListInput />
    </div>
  );
}
//const slElement = document.getElementById("");

//ReactDOM.render(<ShoppingList />, slElement);
