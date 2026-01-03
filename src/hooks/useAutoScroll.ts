import { useEffect } from "react";

export const useAutoScroll = (api: any) => {
  useEffect(() => {
    if (!api) return;

    const autoScroll = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [api]);
};