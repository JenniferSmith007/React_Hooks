import "./App.css";
import { useState } from "react";
import HomePage from "./components/HomePage";
function App() {
  const [itemCurrentlyOnSale, setItemCurrentlyOnSale] = useState("A hammer");
  const [editable, setEditable] = useState(true);
  const toggleEditSaleItem = (event) => setEditable(!editable);
  const handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value;
    setItemCurrentlyOnSale(itemCurrentlyOnSale);
  };

  return (
    <div className="App">
      <HomePage
        saleItem={itemCurrentlyOnSale}
        editable={editable}
        toggleEditSaleItem={toggleEditSaleItem}
        handleItemCurrentlyOnSaleChange={handleItemCurrentlyOnSaleChange}
      />
    </div>
  );
}

export default App;
