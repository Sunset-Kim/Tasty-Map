import KaKaoMapScript from '@utils/KaKaoMapScript';
import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    KaKaoMapScript();
  }, []);
  return (
    <div id="map" className="w-[500px] h-[500px]">
      Map
    </div>
  );
};

export default Map;
