export default function Item({ title, image, url }) {
  return (
    <a key={title} href={url} className="Products-category-content-item">
      <div className="Products-category-content-item-image">
        <img src={image} alt={title} />
      </div>
      <div className="Products-category-content-item-footer">
        <h5>{title}</h5>
      </div>
    </a>
  );
}
