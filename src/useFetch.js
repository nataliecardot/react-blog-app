import { useState, useEffect } from 'react';

// Custom hooks must begin with 'use'
const useFetch = (url) => {
  // Changed to data to make this custom hook reusable
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Async IIFE for useEffect
  useEffect(() => {
    // After associating abort controller with a fetch, can use the controller to stop the fetch
    const abortCont = new AbortController();

    // Timeout for viewing loading message longer
    setTimeout(() => {
      (async () => {
        try {
          let response = await fetch(url, { signal: abortCont.signal });
          if (!response.ok) {
            // Will be catched below with the message attached to it
            throw Error('Could not fetch data for that resource');
          }
          response = await response.json();
          setData(response);
          setIsPending(false);
          setError(null);
        } catch (err) {
          // If it's an abort error, don't update the state
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        }
      })();
    }, 1000);

    // Cleanup function (fires when component that uses this hook unmounts)
    return () => abortCont.abort();
  }, [url]);

  // Returning object rather than array because with an object, order of these properties doesn't matter when we're destructuring them in the file they're imported in (can just grab isPending only, for example)
  return { data, isPending, error };
};

export default useFetch;
