import { useEmailSubscription } from "@/hooks";
import React, { useEffect, useState, useRef } from "react";
import { ButtonComponent as Button } from "@/components";
import { usePopper } from "react-popper";

const Component = () => {
  const { email, setEmail, isLoading, error, success, subscribe } =
    useEmailSubscription();
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const submitRef = useRef(null);
  const { styles, attributes } = usePopper(submitRef.current, popperElement, {
    placement: "top",
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe();
  };

  useEffect(() => {
    if (success || error) {
      const timeout = setTimeout(() => {
        setPopperElement(null);
        setArrowElement(null);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [success, error]);

  return (
    <div className="flex">
      {success && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div ref={setArrowElement} style={styles.arrow} />
          Subscription successful!
        </div>
      )}
      {error && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div ref={setArrowElement} style={styles.arrow} />
          {error}
        </div>
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="mr-2 hidden rounded bg-white px-4 text-black text-opacity-70 opacity-70 md:block"
        placeholder="Enter your email..."
        disabled={isLoading}
      />
      <Button
        className="hidden shrink-0 md:block"
        href="/auth"
        variant="primary"
        aria-label={"Email Sign Up"}
        space={"medium"}
        onClick={handleSubmit}
        disabled={isLoading}
        type="submit"
        ref={submitRef}
      >
        {isLoading ? "Signing Up..." : "Sign Up"}
      </Button>
    </div>
  );
};

export default Component;
