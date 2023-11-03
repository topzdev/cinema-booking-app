"use client";
import React, { useState, useEffect } from "react";
import "./board.css";

const SeatPlan = () => {
  const numRows = 6; // Number of rows
  const numCols = 10; // Number of columns

  const [seatData, setSeatData] = useState([]);

  useEffect(() => {
    const calculateSeatData = () => {
      const newData = [];
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          const label = String.fromCharCode(65 + i) + (j + 1);
          const x = j * 60; // Adjust as needed (spacing between seats)
          const y = i * 60; // Adjust as needed (spacing between rows)
          newData.push({ label, x, y });
        }
      }
      setSeatData(newData);
    };

    calculateSeatData();
  }, []);

  return (
    <div className="cinema">
      {seatData.map((seat, index) => (
        <div
          key={index}
          className="seat"
          style={{ left: `${seat.x}px`, top: `${seat.y}px` }}
        >
          {seat.label}
        </div>
      ))}
    </div>
  );
};

export default SeatPlan;
