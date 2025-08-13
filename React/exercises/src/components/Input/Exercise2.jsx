import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  const handleFruitChange = (e) => {
    const selectedFruit = e.target.value;
    setFruit(selectedFruit);
    console.log(`${name} selected ${selectedFruit}`);
  };

  return (
    <div>
      <input
        id="name-input"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <select id="select-input" value={fruit} onChange={handleFruitChange}>
        <option value="">-- Choose a fruit --</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
        <option value="Mango">Mango</option>
      </select>
    </div>
  );
};

export default Exercise2;
