import { useState, useEffect } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

const getDeviceType = (width: number): DeviceType => {
  if (width < 767) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

const useDeviceType = (): DeviceType | null => {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDeviceType(getDeviceType(width));
    };

    // Initial run
    handleResize();

    // On resize update
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;
