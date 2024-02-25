import React from "react";

export default function DashboardCard(props) {
  return (
    <div className="bg-white rounded-lg mb-4">
      <p className="card-title pl-4 pt-4">{props.title}</p>
      {props.currency && <span className="currency">{props.currency}</span>}
      <span className="card-value px-16">{props.value}</span>
    </div>
  );
}
