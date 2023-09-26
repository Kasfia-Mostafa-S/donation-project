import { useLoaderData } from "react-router-dom";
import Search from "../Search/Search";
import DonationCards from "../DonationCards/DonationCards";

const Home = () => {

  const donationCards = useLoaderData();

  return (
    <div>
      <Search></Search>
      <DonationCards donationCards={donationCards}></DonationCards>
    </div>
  );
};

export default Home;