import { useCallback, useEffect, useState } from "react";

const useSendRequest = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const submitOrder = async (orderData) => {
    setIsSubmitting(true);
    setHasSubmitted(false);
    const response = await fetch(
      "https://react-form-fd387-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(orderData)
      }
    ).then((data) => data.json());
    console.log(response);
    setIsSubmitting(false);
    setHasSubmitted(true);
  };
  const fetchMeals = useCallback(async (applydata) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-form-fd387-default-rtdb.firebaseio.com/meals.json"
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

  return { data, isLoading, error, submitOrder, isSubmitting, hasSubmitted };
};

export default useSendRequest;
