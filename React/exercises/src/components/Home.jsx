import React, { useState } from "react";
import Item from './Item'
export default function Home({store}) {

  return (
    <div>
      {store.map((p) => (
        <Item key={p.item} item={p.item} price={p.price} />
      ))}
    </div>
  );
}
