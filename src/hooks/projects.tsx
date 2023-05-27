import { Dispatch, SetStateAction, useState } from "react";

interface IType {
  name?: string;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  setName: Dispatch<SetStateAction<string>>;
  add: () => Promise<void>;
}

const Hook = (): IType => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const add = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
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
    name,
    isLoading,
    error,
    success,
    setName,
    add,
  };
};

export default Hook;
