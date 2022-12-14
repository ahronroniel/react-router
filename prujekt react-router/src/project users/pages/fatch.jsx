import React, { useState, useEffect } from "react";

export default function FetchData(url, userId = "") {
  const [data, SetData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, SetError] = useState([]);
  useEffect(() => {
    async function fetching() {
      setIsLoading(true);
      try {
        const request = await fetch(
          `https://jsonplaceholder.typicode.com/${url}${userId}`
        );
        const response = await request.json();
        SetData(response);
        setIsLoading(false);
      } catch (error) {
        SetError(error.message);
        setIsLoading(false);
      }
    }
    fetching();
  }, [url]);
  return { data, loading, error };
}

