import { useState, useEffect } from "react";

interface Props {
  delay: number;
  initialPosition: number;
  finalPosition: number;
}

export function useEntryEffect({
  // Default values
  delay = 1000,
  initialPosition = -100,
  finalPosition = 0,
}: Props) {
  // Initial State
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add delay then appear
    setTimeout(() => {
      setVisible(true);
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const position = visible ? finalPosition : initialPosition;

  return { visible, position };
}

export default useEntryEffect;
