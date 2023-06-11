import { useState, useEffect } from "react";

interface UseEntryEffectProps {
  delay: number;
  initialPosition: number;
  finalPosition: number;
}

export function useEntryEffect({
  delay = 1000,
  initialPosition = -100,
  finalPosition = 0,
}: UseEntryEffectProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const position = visible ? finalPosition : initialPosition;

  return { visible, position };
}

export default useEntryEffect;
