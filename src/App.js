import DashboardCard from "./components/DashboardCards/DashboardCard";
import Carousel from "./components/Carousel/Carousel";
import DropDown from "./components/DropDown";
import { COPInRevenue, CompanyRevenue } from "./models/CompanyRevenue";
import {
  HighestUsersByStateOrRegion,
  NumberOfUsers,
} from "./models/UserActivity";
import { SalesOfProducts, StarProductOfYear } from "./models/SalesOfProducts";
import { ProfitAndRatioByYear } from "./models/CompanyRevenue";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const profitByYear = useSelector((state) => state.profitByYear);
  const starProductOfYear = useSelector((state) => state.starProductOfYear);
  const highestUsersByStateOrRegion = useSelector(
    (state) => state.highestUsersByStateOrRegion
  );
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 425
  );

  function formatIndianCurrency(number) {
    if (number >= 10000000) {
      return (number / 10000000).toFixed(2) + " Cr";
    } else if (number >= 100000) {
      return (number / 100000).toFixed(2) + " Lakh";
    } else {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(number);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setIsMobileOrTablet(window.innerWidth <= 425);
      } else {
        setIsMobileOrTablet(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ">
        E-Commerce Dashboard
      </h1>
      <DropDown
        dataSourceType="year-wise"
        dataSource={{
          rovCompany: CompanyRevenue,
          copInRevenue: COPInRevenue,
          salesOfProducts: SalesOfProducts,
          profitByYear: ProfitAndRatioByYear,
          starProductOfYear: StarProductOfYear,
        }}
      />
      <DropDown
        dataSourceType="region-wise"
        dataSource={{
          userActivity: NumberOfUsers,
          highestUsersByStateOrRegion: HighestUsersByStateOrRegion,
        }}
      />
      {isMobileOrTablet ? (
        <div className="dashboard-cards my-4 flex flex-col">
          <div className="mobile-view-dashboard flex justify-evenly mb-4">
            <DashboardCard
              title={`Company Profit in ${profitByYear.year}`}
              currency="&#8377;"
              value={formatIndianCurrency(profitByYear.totalProfit)}
            />
            <DashboardCard
              title={`Star Product of ${starProductOfYear.year} is ${starProductOfYear.product}`}
              currency="&#8377;"
              value={formatIndianCurrency(starProductOfYear.revenue)}
            />
          </div>
          <div className="mobile-view-dashboard-2 flex justify-evenly">
            <DashboardCard
              title={`Highest Users from ${highestUsersByStateOrRegion.Key}`}
              currency=""
              value={highestUsersByStateOrRegion.Number_of_Users}
            />
            <DashboardCard
              title={`Profit % in ${profitByYear.year}`}
              currency=""
              value={
                (
                  (profitByYear.totalProfit / profitByYear.totalRevenue) *
                  100
                ).toFixed(2) + "%"
              }
            />
          </div>
        </div>
      ) : (
        <div className="dashboard-cards my-4 flex flex-wrap justify-evenly">
          <DashboardCard
            title={`Company Profit in ${profitByYear.year}`}
            currency="&#8377;"
            value={formatIndianCurrency(profitByYear.totalProfit)}
          />
          <DashboardCard
            title={`Star Product of ${starProductOfYear.year} is ${starProductOfYear.product}`}
            currency="&#8377;"
            value={formatIndianCurrency(starProductOfYear.revenue)}
          />
          <DashboardCard
            title={`Highest Users from ${highestUsersByStateOrRegion.Key}`}
            currency=""
            value={highestUsersByStateOrRegion.Number_of_Users}
          />
          <DashboardCard
            title={`Profit % in ${profitByYear.year}`}
            currency=""
            value={
              (
                (profitByYear.totalProfit / profitByYear.totalRevenue) *
                100
              ).toFixed(2) + "%"
            }
          />
        </div>
      )}
      <div className="dashboard-carousel">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
