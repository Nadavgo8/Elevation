import React, { useState } from "react";

export default function Item({ item, price }) {
  return (
    <div>
      {item}: ${price}
    </div>
  );
}
