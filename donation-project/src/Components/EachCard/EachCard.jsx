import { Link } from "react-router-dom";

const EachCard = ({ donationCard }) => {
  const {id,title, category, category_bg, card_bg, text_title, image } =
    donationCard || {};

  return (
    <div className="mb-10">
      <div
        className="card card-compact w-80 rounded-lg border"
        style={{ background: category_bg }}
      >
        <figure>
          <img className="w-full h-52" src={image} />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <Link to={`/donationCards/${id}`}>
            <button className="btn"
            style={{ background: card_bg,color: text_title }}>{category}</button></Link>
          </div>
          <h2 className="card-title"
          style={{color:text_title}}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default EachCard;
