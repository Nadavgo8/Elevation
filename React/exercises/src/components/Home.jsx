import React, { useState } from "react";
import Item from './Item'
export default function Home({ store, shouldDiscount }) {
  return (
    <div>
      {store.map((p) => (
        <Item
          key={p.item}
          item={p.item}
          price={shouldDiscount ? p.price * (1 - p.discount) : p.price}
        />
      ))}
    </div>
  );
}
