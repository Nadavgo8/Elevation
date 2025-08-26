async function checkPrice() {
  const itemInput = document.getElementById("item-input");
  const priceResult = document.getElementById("price-result");
  const name = itemInput.value.trim();

  if (!name) {
    priceResult.textContent = "Please enter an item name";
    return;
  }

  try {
    const res = await fetch("/priceCheck/" + encodeURIComponent(name));
    const data = await res.json();
    priceResult.textContent =
      data.price === null ? "Item not found" : "Price: " + data.price;
  } catch {
    priceResult.textContent = "Error fetching price";
  }
}

async function buyItem() {
  const itemInput = document.getElementById("item-input");
  const updatedItem = document.getElementById("updated-item");
  const name = itemInput.value.trim();
  const res = await fetch(`/buy/${encodeURIComponent(name)}`);
  const data = await res.json();
  updatedItem.textContent =
    data.inventory === 0
      ? "Item is out of stock!"
      : `Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.`;
  console.log(data);
}

