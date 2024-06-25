import "./Item.scss";

export default function Item({ title, image, url }) {
  return (
    <a key={title} href={url} className="Item">
      <div className="Item-image">
        <img src={image} alt={title} />
      </div>
      <div className="Item-footer">
        <h5>{title}</h5>
      </div>
    </a>
  );
}
