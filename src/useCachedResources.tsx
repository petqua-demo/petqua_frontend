import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "pretendard-regular": require("../assets/fonts/Pretendard-Regular.otf"),
          "pretendard-bold": require("../assets/fonts/Pretendard-Bold.otf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
