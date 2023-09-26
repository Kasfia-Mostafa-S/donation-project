import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import InformationDetail from "../InformationDetail/InformationDetail";

const DonationDetail = () => {
  const [donationCard, setDonationCard] = useState();

  const { id } = useParams();

  const donationCards = useLoaderData();
  console.log(donationCards)

  useEffect(() => {
    const findDonation = donationCards?.find(
      (donationCard) => donationCard.id == id);
      console.log(findDonation)

    setDonationCard(findDonation);
  }, [id, donationCards]);

console.log(donationCard)
  return (
    <div>
      <InformationDetail donationCard={donationCard}></InformationDetail>
    </div>
  );
};

export default DonationDetail;
