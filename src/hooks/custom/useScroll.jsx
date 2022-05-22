import { useEffect } from "react";

const useScroll = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
};

export { useScroll };
