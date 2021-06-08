const Categories = ({ filterItems, categories, activeBtn }) => {
  return (
    <div className="btn-container">
      {categories.map((category, idx) => {
        const act = category === activeBtn ? "active-btn" : "";
        return (
          <button
            type="button"
            // className={`filter-btn ${act}`}
            className={act}
            key={idx}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
