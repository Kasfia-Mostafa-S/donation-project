import EachCard from "../EachCard/EachCard";

const DonationCards = ({ donationCards }) => {
  return (
    <div className="mt-60">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {donationCards.map((donationCard) => (
          <EachCard
            key={donationCard.id}
            donationCard={donationCard}
          ></EachCard>
        ))}
      </div>
    </div>
  );
};

export default DonationCards;
