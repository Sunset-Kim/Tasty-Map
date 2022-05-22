import React, { useEffect } from 'react';
import KakaoMap from 'src/services/kakaoMap';

const Map = () => {
  useEffect(() => {
    new KakaoMap('map');
    new KakaoMap('map2');
  }, []);
  return <div id="map" className="w-[500px] h-[500px]"></div>;
};

export default Map;
