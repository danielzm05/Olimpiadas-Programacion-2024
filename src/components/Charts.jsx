import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

// Registrar todos los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export function PieChart({ data }) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    cutout: 60,
  };

  return <Doughnut data={data} options={options} />;
}

export function BarChart({ data }) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export function ChartContainer({ children }) {
  return <section className="chart-container">{children}</section>;
}
