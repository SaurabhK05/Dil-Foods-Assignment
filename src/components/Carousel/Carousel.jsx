import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import DropDown from "../DropDown";
import LineChart from "../Chats/LineChart";
import PieChart from "../Chats/PieChart";
import BarChart from "../Chats/BarChart";
import DoughnutChart from "../Chats/Doughnut";
import { COPInRevenue, CompanyRevenue } from "../../models/CompanyRevenue";
import { NumberOfUsers } from "../../models/UserActivity";
import { SalesOfProducts } from "../../models/SalesOfProducts";

export default function Carousel() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth < 1024
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobileOrTablet(window.innerWidth < 1024);
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
    <>
      {isMobileOrTablet ? (
        <ResponsiveCarousel>
          {/* <div className="chart-container-1 lg:flex justify-evenly"> */}
          <div className="line-chart bg-white rounded-lg p-4">
            <DropDown dataSource={CompanyRevenue} dataSourceType="line-chart" />
            <LineChart />
          </div>
          <div className="pie-chart bg-white rounded-lg p-4 w-2/3 mx-auto">
            <DropDown dataSource={NumberOfUsers} dataSourceType="pie-chart" />
            <PieChart dataSourceType="pie-chart" />
          </div>
          {/* </div> */}
          {/* <div className="chart-container-2 flex justify-evenly"> */}
          <div className="bar-chart bg-white rounded-lg p-4">
            <DropDown dataSource={SalesOfProducts} dataSourceType="bar-chart" />
            <BarChart />
          </div>
          <div className="product-pie-chart bg-white rounded-lg p-4 w-2/3 mx-auto">
            <DropDown
              dataSource={COPInRevenue}
              dataSourceType="prod-pie-chart"
            />
            <DoughnutChart dataSourceType="prod-pie-chart" />
          </div>
          {/* </div> */}
        </ResponsiveCarousel>
      ) : (
        <ResponsiveCarousel>
          <div className="chart-container-1 lg:flex justify-evenly ">
            <div className="line-chart bg-white rounded-lg p-4 w-2/4">
              {/* <DropDown
                dataSource={CompanyRevenue}
                dataSourceType="line-chart"
              /> */}
              <LineChart />
            </div>
            <div className="pie-chart bg-white rounded-lg p-4 w-2/5">
              {/* <DropDown dataSource={NumberOfUsers} dataSourceType="pie-chart" /> */}
              <PieChart dataSourceType="pie-chart" />
            </div>
          </div>
          <div className="chart-container-2 lg:flex justify-evenly">
            <div className="bar-chart bg-white rounded-lg p-4 w-2/4">
              {/* <DropDown
                dataSource={SalesOfProducts}
                dataSourceType="bar-chart"
              /> */}
              <BarChart />
            </div>
            <div className="product-pie-chart bg-white rounded-lg p-4 w-2/5">
              {/* <DropDown
                dataSource={COPInRevenue}
                dataSourceType="prod-pie-chart"
              /> */}
              <DoughnutChart dataSourceType="prod-pie-chart" />
            </div>
          </div>
        </ResponsiveCarousel>
      )}
    </>
  );
}
