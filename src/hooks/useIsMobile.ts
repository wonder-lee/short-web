import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
export const UseIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileMediaQuery = useMediaQuery({ maxWidth: 768 });
  useEffect(() => {
    setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);

  return { isMobile };
};

export default UseIsMobile;
