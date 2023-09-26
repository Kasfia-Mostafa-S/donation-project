const InformationDetail = ({ donationCard }) => {
  const { image, description, price, text_title } = donationCard || {};

  return (
    <div className="mt-10">
      <div className="h-full w-full bg-slate-400">
        <img className="w-full h-96" src={image} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InformationDetail;
