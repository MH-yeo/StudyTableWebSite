// import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyle";

import Layout from "../src/components/commons/layout/index";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDfgrpZ_zsNqkYEJJ3JmwasfEHojQvH5zs",
   authDomain: "studytable-9cf8e.firebaseapp.com",
   projectId: "studytable-9cf8e",
   storageBucket: "studytable-9cf8e.appspot.com",
   messagingSenderId: "345610177231",
   appId: "1:345610177231:web:56a768f675d00b0b11c5ba",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <RecoilRoot>
         <ApolloSetting>
            <Layout>
               <Global styles={globalStyles} />
               <Component {...pageProps} />
            </Layout>
         </ApolloSetting>
      </RecoilRoot>
   );
}

export default MyApp;
