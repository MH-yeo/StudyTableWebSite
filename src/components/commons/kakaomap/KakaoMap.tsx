import { useEffect } from "react";

export default function KakaoMap({ address, borderRadius }) {
   useEffect(() => {
      const script = document.createElement("script");
      script.src =
         "//dapi.kakao.com/v2/maps/sdk.js?appkey=1d7e47e75dcbbbd1592cb92f927d0645&autoload=false&libraries=services";
      document.head.appendChild(script);
      script.onload = () => {
         window.kakao.maps.load(function () {
            const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스

            const options = {
               // 지도를 생성할 때 필요한 기본 옵션
               center:
                  address !== undefined
                     ? new window.kakao.maps.LatLng(33.450701, 126.570667)
                     : "", // 지도의 중심좌표.
               level: 3, // 지도의 레벨(확대, 축소 정도)
               // tileAnimation: false,
            };
            const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

            console.log(window.kakao.maps);
            const geocoder = new window.kakao.maps.services.Geocoder();
            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(address, function (result, status) {
               // 정상적으로 검색이 완료됐으면
               if (status === window.kakao.maps.services.Status.OK) {
                  const coords = new window.kakao.maps.LatLng(
                     result[0].y,
                     result[0].x
                  );
                  const iwContent =
                     `<div style="border:none ; padding:8px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">` +
                     `<div style="display:flex; justify-content: space-between; margin-bottom: 5px;">` +
                     '<span style="font-weight: 600;">주소정보</span>' +
                     `</div>` +
                     address +
                     `</div>`;
                  const infowindow = new window.kakao.maps.InfoWindow({
                     content: iwContent,
                  });
                  // 결과값으로 받은 위치를 마커로 표시합니다
                  const marker = new window.kakao.maps.Marker({
                     map,
                     position: coords,
                  });

                  window.kakao.maps.event.addListener(
                     marker,
                     "mouseover",
                     function () {
                        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                        infowindow.open(map, marker);
                     }
                  );
                  // 마커에 마우스아웃 이벤트를 등록합니다
                  window.kakao.maps.event.addListener(
                     marker,
                     "mouseout",
                     function () {
                        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                        infowindow.close();
                     }
                  );
                  // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                  map.setCenter(coords);
               }
            });
         });
      };
   }, [address]);

   return (
      <div
         id="map"
         style={{
            width: "100%",
            height: "100%",
            borderRadius: { borderRadius },
         }}
      />
   );
}
