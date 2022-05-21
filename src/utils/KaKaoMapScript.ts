// @ts-nocheck
const kakao = window.kakao;

export default function KaKaoMapScript() {
  const container = document.getElementById('map');
  const 태양빌딩 = [37.492919, 127.012372];
  const options = {
    center: new kakao.maps.LatLng(태양빌딩[0], 태양빌딩[1]),
    level: 3,
  };

  const mapTypeControl = new kakao.maps.MapTypeControl();
  const zoomControl = new kakao.maps.ZoomControl();

  const map = new kakao.maps.Map(container, options);
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}
