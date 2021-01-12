const HomePage = (props) => {
  return (
    <div>
      <h1>Hardware Store</h1>
      <div>
        <span>Currently on sale: {props.saleItem}</span>
        <span>
          <span>
            <button onClick={props.toggleEditSaleItem}>
              {props.editable ? "hide" : "edit sale item"}
            </button>
          </span>
        </span>
        <div>
          {props.editable ? (
            <div>
              <input
                onChange={props.handleItemCurrentlyOnSaleChange}
                type="text"
                value={props.itemCurrentlyonSale}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
