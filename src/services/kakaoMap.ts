export default class KakaoMap {
  private kakao;
  private container;
  private Map: any;
  private 회사 = [37.492919, 127.012372];

  constructor(elementId: string) {
    const map = document.getElementById(elementId);
    const kakao = window.kakao;

    if (!map || !kakao) {
      console.warn('kakao script 혹은 지도의 element를 확인하세요');
      return;
    }

    this.container = map;
    this.kakao = kakao;

    this.초기화();
    this.add컨트롤러();
    this.add기준점();
  }

  private 초기화() {
    const options = {
      center: new this.kakao.maps.LatLng(this.회사[0], this.회사[1]),
      level: 3,
    };

    this.Map = new this.kakao.maps.Map(this.container, options);
  }

  private add컨트롤러() {
    const mapTypeControl = new this.kakao.maps.MapTypeControl();
    const zoomControl = new this.kakao.maps.ZoomControl();

    this.Map.addControl(
      mapTypeControl,
      this.kakao.maps.ControlPosition.TOPRIGHT,
    );
    this.Map.addControl(zoomControl, this.kakao.maps.ControlPosition.RIGHT);
  }

  private add기준점() {
    const imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
      imageSize = new this.kakao.maps.Size(64, 69),
      imageOption = { offset: new this.kakao.maps.Point(27, 69) }; // 이미지 가로 세로 좌표

    const image = new this.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );
    const position = new this.kakao.maps.LatLng(this.회사[0], this.회사[1]);
    var marker = new this.kakao.maps.Marker({
      position,
      image,
    });

    marker.setMap(this.Map);

    // 오버레이

    const content = this.makeOverlay(onClose);
    content.innerHTML = `<span>팀스노우볼</span>`;

    const overlay = new this.kakao.maps.CustomOverlay({
      content,
      map: this.Map,
      position,
    });

    function onClose() {
      overlay.setMap(null);
    }

    this.kakao.maps.event.addListener(marker, 'click', () => {
      overlay.setMap(this.Map);
    });
  }

  private makeOverlay(onClose: () => void) {
    const Wrapper = document.createElement('div');
    Wrapper.classList.add('customoverlay');
    Wrapper.onclick = onClose;
    return Wrapper;
  }

  public 기준점좌표가져오기() {}
}
