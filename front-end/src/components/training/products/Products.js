import "./Products.scss";

export default function Products() {
  return (
    <div className="Products">
      <div className="Products-header">
        <h2>Products</h2>
      </div>
      <div className="Products-content">
        <div className="Products-category">
          <div className="Products-category-header">
            <h2>Glass</h2>
          </div>
          <div className="Products-category-content">
            <div className="Products-category-content-item">
              <div className="Products-category-content-item-image">
                <img
                  src="https://hazelskysmokeshop.com/cdn/shop/files/d6ea2ff666f859119f997e9bccfcaba1_600x600.png?v=1705690048"
                  alt="Glass Waterpipe"
                />
              </div>
              <div className="Products-category-content-item-footer">
                <h4>Water Pipes</h4>
              </div>
            </div>
            <div className="Products-category-content-item">
              <div className="Products-category-content-item-image">
                <img
                  src="https://hazelskysmokeshop.com/cdn/shop/files/2cefb2d831b4b18b9e2d97c9b5ba48f7_600x600.png?v=1706027624"
                  alt="Glass Waterpipe"
                />
              </div>
              <div className="Products-category-content-item-footer">
                <h4>Water Pipe Accessories</h4>
              </div>
            </div>
            <div className="Products-category-content-item">
              <div className="Products-category-content-item-image">
                <img
                  src="https://hazelskysmokeshop.com/cdn/shop/files/a9e04cc1ede2708e5c7bf3a04fc17885_600x600.png?v=1718210207"
                  alt="Glass Waterpipe"
                />
              </div>
              <div className="Products-category-content-item-footer">
                <h4>Dry Pipes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
