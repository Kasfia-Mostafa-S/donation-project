import { useEffect, useState } from "react";
import Donate from "./Donate";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("donation"));

    if (donationItem) {
      setDonation(donationItem);
    } else {
      setNoData("No Donation Package Has Been Selected");
    }
  }, []);

  return (
    <div>
      {noData ? (
        <p className="flex justify-center items-center h-[80vh] text-3xl font-bold">
          {noData}
        </p>
      ) : (
        <div>
          <div>
            {donation.map((donate) => (
              <Donate key={donate.id} donate={donate}></Donate>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
