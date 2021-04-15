import { useState, useEffect } from 'react';

function useFortune() {
  const [fortune] = useState(null);

  useEffect(() => {

  }, []);

  return { fortune };
}

export { useFortune };
