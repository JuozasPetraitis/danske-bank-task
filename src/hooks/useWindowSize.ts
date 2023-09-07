import { useEffect, useState } from "react";

export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = (): WindowSize => {
  const isWindow = typeof window === "object";

  const getSize = (): WindowSize => ({
    width: isWindow ? window.innerWidth : undefined,
    height: isWindow ? window.innerHeight : undefined,
  });

  const [windowSize, setWindowSize] = useState<WindowSize>(getSize);

  useEffect(() => {
    if (!isWindow) {
      return undefined;
    }

    const handleResize = (): void => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return windowSize;
};

export default useWindowSize;
