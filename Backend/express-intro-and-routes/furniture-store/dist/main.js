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
