import React from "react";

export default function DashboardCard(props) {
  return (
    <div className="bg-white rounded-lg w-[46%] sm:w-[23%] lg:h-[20vh] xl:h-[25vh] xl:h-[30vh] 2xl:h-[35vh] flex justify-center text-center flex-col p-4">
      <p className="card-title text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {props.title}
      </p>
      <span className="card-value text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
        {props.currency && (
          <span className="currency">
            <strong>{props.currency}</strong>
          </span>
        )}
        <strong>{props.value}</strong>
      </span>
    </div>
  );
}
