// src/components/ExamCalendar.js
import React from "react";
import useGoogleSheet from "../useGoogleSheet";
import "./ExamCalendar.css";

export default function ExamCalendar() {
  // Default reads from “Sheet1”; pass e.g. 'Sheet2!A:D' to customize.
  const rows = useGoogleSheet();

  if (!rows.length) return <p>Loading exam calendar…</p>;

  const headers = Object.keys(rows[0]);

  return (
    <div className="exam-calendar-container">
      <div className="exam-calendar-wrapper">
        <table className="exam-calendar">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {headers.map((h) => (
                  <td key={h}>{row[h]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <style jsx>{`
          .exam-calendar {
            width: 100%;
            border-collapse: collapse;
          }
          .exam-calendar th,
          .exam-calendar td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
          }
          .exam-calendar th {
            background: #f5f5f5;
          }
        `}</style>
      </div>
    </div>
  );
}
