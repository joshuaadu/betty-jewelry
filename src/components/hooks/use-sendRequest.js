import { useCallback, useEffect, useState } from "react";

const useSendRequest = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeals = useCallback(async (applydata) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-fom-fd387-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Unable to connect to database!");
      }
      const data = await response.json();
      if (!data) {
        throw new Error("Unable to receive response from database!");
      }
      setData(Object.entries(data));
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return { data, isLoading, error };
};

export default useSendRequest;
