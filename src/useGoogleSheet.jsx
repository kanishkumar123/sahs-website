//useGoogleSheet.js
import { useState, useEffect } from "react";

export default function useGoogleSheet(range = "Sheet1") {
  const [data, setData] = useState([]);
  const sheetId = import.meta.env.VITE_SHEET_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  useEffect(() => {
    if (!sheetId || !apiKey) {
      console.error("Missing REACT_APP_SHEET_ID or REACT_APP_GOOGLE_API_KEY");
      return;
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
      range
    )}?key=${apiKey}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Sheet fetch failed: ${res.statusText}`);
        return res.json();
      })
      .then((json) => {
        const [headerRow = [], ...rows] = json.values || [];
        const normalized = rows.map((row) =>
          headerRow.reduce((obj, key, idx) => {
            obj[key] = row[idx] ?? "";
            return obj;
          }, {})
        );
        setData(normalized);
      })
      .catch((err) => {
        console.error("Error loading Google Sheet:", err);
      });
  }, [sheetId, apiKey, range]);

  return data;
}
