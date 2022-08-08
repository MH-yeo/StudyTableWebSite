import styled from "@emotion/styled";

export const BannerNav = styled.nav`
   position: fixed;
   top: 0;
   width: 100%;
   padding: 5px 50px;
   background-image: ${(props) =>
      props.navColor
         ? "linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent)"
         : "none"};
   background-color: ${(props) => (props.navColor ? "none" : "#ffffff")};
   box-shadow: ${(props) => (props.navColor ? "none" : "0 1px 0 0 #eaeeef")};
   display: flex;
   justify-content: space-between;
   align-items: center;
   z-index: 999;
`;
export const BannerLeft = styled.div`
   display: flex;
   align-items: center;
`;
export const CommunityWrapper = styled.div`
   width: 133px;
   height: 20px;
   color: ${(props) => (props.navColor ? "#ffffff" : "#363a3c")};
   display: flex;
   align-items: center;
`;
export const BannerMenu = styled.div`
   width: 400px;
   height: 20px;
   color: ${(props) => (props.navColor ? "#ffffff" : "#363a3c")};
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const Logo = styled.img`
   width: 200px;
   cursor: pointer;
`;
export const Mydiv = styled.div`
   position: relative;
   width: 100%;
   font-size: 20px;
   text-align: center;
   padding-bottom: 3px;
   cursor: pointer;
   :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => (props.navColor ? "#ffffff" : "#363a3c")};
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
   }
   :hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
   }
`;
