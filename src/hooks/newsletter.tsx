import { Dispatch, SetStateAction, useState } from 'react';

interface EmailSubscriptionState {
  email: string;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
  subscribe: () => Promise<void>;
}

const useEmailSubscription = (): EmailSubscriptionState => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const subscribe = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setSuccess(false);
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSuccess(false);
      setError("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  return {
    email,
    isLoading,
    error,
    success,
    setEmail,
    subscribe,
  };
};

export default useEmailSubscription;