import "./Products.scss";
import Item from "./item/Item";

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
            <section className="Products-category-content-group">
              <h2 className="Products-category-content-group-title">
                Water Pipes
              </h2>
              <Item
                title={"Most Common Water Pipe Types TBA"}
                image={
                  "https://hazelskysmokeshop.com/cdn/shop/files/d6ea2ff666f859119f997e9bccfcaba1_600x600.png?v=1705690048"
                }
                url={"https://hazelskysmokeshop.com/collections/water-pipes"}
              />
              <Item
                title={"Oil Burners"}
                image={
                  "https://hazelskysmokeshop.com/cdn/shop/files/2cefb2d831b4b18b9e2d97c9b5ba48f7_600x600.png?v=1706027624"
                }
                url={"https://hazelskysmokeshop.com/"}
              />
            </section>
            <section className="Products-category-content-group">
              <h2 className="Products-category-content-group-title">
                Water Pipe Accessories
              </h2>
              <Item
                title={"Dry Pipes"}
                image={
                  "https://hazelskysmokeshop.com/cdn/shop/files/a9e04cc1ede2708e5c7bf3a04fc17885_600x600.png?v=1718210207"
                }
              />
            </section>
          </div>
        </div>
        <div className="Products-category">
          <div className="Products-category-header">
            <h2>Kratom</h2>
          </div>
          <div className="Products-category-content">
            <section className="Products-category-content-group">
              <h2 className="Products-category-content-group-title">
                General Knowledge
              </h2>
              <Item
                title={"General Knowledge"}
                image={
                  "https://cdn.shopify.com/s/files/1/0529/2192/5782/products/1836kratomgreenmeansgo4ozpowder.png?v=1699288227"
                }
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
