import React, { useState } from "react";
import Categories from "./component/Categories";
import Menu from "./component/Menu";
import items from "./data";
import "./styles.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [activeBtn, setActiveBtn] = useState("all");

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      setActiveBtn("all");
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    setActiveBtn(category);
  };

  return (
    <main>
      <section className="menu section">
        <h2 className="title">our menu</h2>
        <div className="underline"></div>
        <Categories
          categories={categories}
          filterItems={filterItems}
          activeBtn={activeBtn}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
export default App;
