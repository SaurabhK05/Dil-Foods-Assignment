import DashboardCard from "./components/DashboardCards/DashboardCard";
import LineChart from "./components/Chats/LineChart";
import DropDown from "./components/DropDown";
import { COPInRevenue, CompanyRevenue } from "./models/CompanyRevenue";
import { NumberOfUsers } from "./models/UserActivity";
import "./App.css";
import PieChart from "./components/Chats/PieChart";
import { SalesOfProducts } from "./models/SalesOfProducts";
import BarChart from "./components/Chats/BarChart";
import DoughnutChart from "./components/Chats/Doughnut";

function App() {
  return (
    <div className="App">
      <h1 className="">E-Commerce Dashboard</h1>
      <div className="dashboard-cards mt-4 flex flex-wrap justify-evenly">
        <DashboardCard title="CAC" currency="$" value="248" />
        <DashboardCard title="CAC" currency="$" value="248" />
        <DashboardCard title="CAC" currency="$" value="248" />
        <DashboardCard title="CAC" currency="$" value="248" />
      </div>
      {/* <div className="dashboard-carousel">
        <Carousel />
      </div> */}
      <div className="charts-container">
        {/* <div className="line-chart">
          <DropDown dataSource={CompanyRevenue} dataSourceType="line-chart" />
          <LineChart />
        </div>
        <div className="pie-chart">
          <DropDown dataSource={NumberOfUsers} dataSourceType="pie-chart" />
          <PieChart dataSourceType = 'pie-chart'/>
        </div> */}
        <div className="bar-chart">
          <DropDown dataSource={SalesOfProducts} dataSourceType="bar-chart" />
          <BarChart />
        </div>
        <div className="product-pie-chart">
          <DropDown dataSource={COPInRevenue} dataSourceType="prod-pie-chart" />
          <DoughnutChart dataSourceType="prod-pie-chart" />
        </div>
      </div>
    </div>
  );
}

export default App;
