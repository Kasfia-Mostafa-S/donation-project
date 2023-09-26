import swal from "sweetalert";

const InformationDetail = ({ donationCard }) => {
  const { image, description, price, text_title, title, id } =
    donationCard || {};

  const handleDonation = () => {
    const addToDonation = [];

    const donationItem = JSON.parse(localStorage.getItem("donation"));

    if (!donationItem) {
      addToDonation.push(donationCard);
      localStorage.setItem("donation", JSON.stringify(addToDonation));
      swal("Good job!", "Thank you for the donation!", "success");
    } else {
      const isExist = donationItem.find(
        (donationCard) => donationCard.id === id
      );
      if (!isExist) {
        addToDonation.push(...donationItem, donationCard);
        localStorage.setItem("donation", JSON.stringify(addToDonation));
        swal("Good job!", "Thank you for donation!", "success");
      } else {
        swal("Error!", "Product Already Added!", "error");
      }
    }
  };

  return (
    <div className="mt-10">
      <div className="relative h-full w-full">
        <img className="w-full h-96" src={image} alt="" />
        <div className="w-full h-[100px] bg-black bg-opacity-50 absolute bottom-1">
          <button
            onClick={handleDonation}
            className="text-white font-bold m-8 w-40 h-10"
            style={{ background: text_title }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="m-5">
        <h2 className="font-bold text-4xl mb-2">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default InformationDetail;
