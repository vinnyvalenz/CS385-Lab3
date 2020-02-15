import * as React from "react";
import { ShoppingListItem } from "./ShoppingListItem";

// This component renders an <input> and a <button>
export function ShoppingListInput(props) {
  // onChange handler example:
  // const handleChange = (e) => {
  //   setState(e.target.value);
  // }
  return (
    <div>
      <input type="text" name="item" />
      <button type="button">Add</button>
    </div>
  );
}
