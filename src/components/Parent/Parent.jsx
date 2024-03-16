
import Navbar from "../Navbar/Navbar"; // Assuming Navbar.jsx is located in the Navbar folder
import ItemQuantity from "./Item/ItemQuantity";
import ItemPrice from "../Item/ItemPrice";
import ItemDescription from "../Item/ItemDescription";
import ItemPicture from "../Item/ItemPicture";

const Parent = () => {
  // Sample data for items
  const items = [
    { id: 1, name: "Item 1", quantity: 5, price: "$10", description: "Description for Item 1", picture: "item1.jpg" },
    { id: 2, name: "Item 2", quantity: 10, price: "$15", description: "Description for Item 2", picture: "item2.jpg" },
    // Add more items here
  ];

  return (
    <div>
      <Navbar />
      <div className="parent">
        <h2>List of Items</h2>
        <div className="items">
          {items.map((item) => (
            <div className="card" key={item.id}>
              <h3>{item.name}</h3>
              <ItemQuantity quantity={item.quantity} />
              <ItemPrice price={item.price} />
              <ItemDescription description={item.description} />
              <ItemPicture picture={item.picture} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parent;
