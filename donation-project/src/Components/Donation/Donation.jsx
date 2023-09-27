import { useEffect, useState } from "react";
import Donate from "./Donate";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noData, setNoData] = useState(false);
  const [isSeeAll, setIsSeeAll] = useState(false);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("donation"));

    if (donationItem) {
      setDonation(donationItem);
    } else {
      setNoData("No Donation Package Has Been Selected");
    }
  }, []);

  return (
    <div className="p-5">
      {noData ? (
        <p className="flex justify-center items-center h-[80vh] text-3xl font-bold">
          {noData}
        </p>
      ) : (
        <div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 
          lg:grid-cols-2 gap-5 bg-white h-full w-fit p-5 mt-10 mb-10"
          >
            {isSeeAll
              ? donation.map((donate) => (
                  <Donate key={donate.id} donate={donate}></Donate>
                ))
              : donation
                  .slice(0, 4)
                  .map((donate) => (
                    <Donate key={donate.id} donate={donate}></Donate>
                  ))}
          </div>

          <div className="flex justify-center items-center">
            <button
              className="btn btn-active btn-accent text-white"
              onClick={() => setIsSeeAll(!isSeeAll)}
            >
              {isSeeAll ? "See Less" : "See All"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
