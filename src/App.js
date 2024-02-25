import DashboardCard from "./components/DashboardCards/DashboardCard";
import LineChart from "./components/Chats/LineChart";
import DropDown from "./components/DropDown";
import "./App.css";

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
        <div className="line-chart">
          <DropDown />
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default App;
