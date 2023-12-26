
import "./Mypage.css";
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar";
import MypageUserBox from "../../components/Mypage/MyInfoBanner/MypageUserBox";
import MypageCashBox from "../../components/Mypage/MyInfoBanner/MypageCashBox";
import MypageMembersBox from "../../components/Mypage/MyInfoBanner/MypageMembersBox";
import { instance } from '../../redux/modules/instance';
import { useState, useEffect } from "react";

const Mypage = () => {
 const [userData, setUserData] = useState([]);

 const fetchData = async () => {
  try {
    const access_token = sessionStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    const response = await instance.get("/account/my-info", config);
    setUserData(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchData();
}, []); 





  return (
    <>
      <div className="mypageContainer1">
        <div className="mypageContainer">
          <div className="mypageItem">
            {/*첫번째 유저박스*/}
            <MypageUserBox userData={userData}/>
            {/*적립금 컬리캐시 쪽*/}
            <MypageCashBox />
            {/*적립금 퍼플박스 멤버십 쪽*/}
            <MypageMembersBox />
            {/*쿠폰 배너*/}
            <a
              className="couponBanner"
              href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/2023/1204/yearend"
            >
              <img
                className="couponBannerImage"
                src="https://product-image.kurly.com/cdn-cgi/image/width=1150,quality=85,format=auto/banner/da-banner/6eac9bcd-5594-4aed-86d8-d9aeecf65e80.jpg"
                alt="couponImage"
              />
            </a>
          </div>
        </div>
        <FixedSiderbar />
      </div>
    </>
  );
};

export default Mypage;
