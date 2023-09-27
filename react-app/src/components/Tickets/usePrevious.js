import { useRef, useEffect } from 'react';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    // Update the ref with the current value whenever it changes
    ref.current = value;
  }, [value]); // This effect runs whenever 'value' changes

  return ref.current; // Return the previous value
}

export default usePrevious;
