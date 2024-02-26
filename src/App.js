import DashboardCard from "./components/DashboardCards/DashboardCard";
import Carousel from "./components/Carousel/Carousel";
import { useEffect, useState } from "react";
import DropDown from "./components/DropDown";
import { COPInRevenue, CompanyRevenue } from "./models/CompanyRevenue";
import { NumberOfUsers } from "./models/UserActivity";
import { SalesOfProducts } from "./models/SalesOfProducts";
import { ProfitableYear } from "./models/CompanyRevenue";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const profitByYear = useSelector((state) => state.profitByYear);
  // const [profitableYear, setProfitableYear] = useState({
  //   year: 1990,
  //   totalProfit: 0,
  // });

  // useEffect(() => {
  //   ProfitableYear.map((data) => {
  //     if (data.totalProfit > profitableYear.totalProfit) {
  //       setProfitableYear(data);
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <h1 className="md:text-xl lg:text-2xl">E-Commerce Dashboard</h1>
      <DropDown
        dataSourceType="year-wise"
        dataSource={{
          rovCompany: CompanyRevenue,
          copInRevenue: COPInRevenue,
          salesOfProducts: SalesOfProducts,
          profitByYear: ProfitableYear,
        }}
      />
      <DropDown
        dataSourceType="region-wise"
        dataSource={{
          userActivity: NumberOfUsers,
        }}
      />
      <div className="dashboard-cards mt-4 flex flex-wrap justify-evenly">
        <DashboardCard
          title={`Company Profit in : ${profitByYear.year}`}
          currency="&#8377;"
          value={profitByYear.totalProfit}
        />
        <DashboardCard title="CAC" currency="$" value="248" />
        <DashboardCard title="CAC" currency="$" value="248" />
        <DashboardCard title="CAC" currency="$" value="248" />
      </div>
      <div className="dashboard-carousel">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
