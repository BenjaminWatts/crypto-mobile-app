import React from "react";
import FastImage from "react-native-fast-image";
import log from "../services/log";

export const CoinIcon: React.FC<{ url: string }> = ({ url }) => {
  return (
    <FastImage
      style={{ width: 20, height: 20 }}
      onLoad={() => log.debug(`Image loaded ${url}`)}
      onError={() => log.debug(`Image load error ${url}`)}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};
