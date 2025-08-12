import React, { useState } from "react";

export default function Landing({user,store}) {
  const hottestItem = store.find((p) => p.hottest);

  return (
    <div>
      <div>
        Welcome, {user}. The hottest item is {hottestItem.item} for $
        {hottestItem.price}
      </div>
    </div>
  );
}
