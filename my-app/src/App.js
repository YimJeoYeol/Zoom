import React, {Component} from 'react';
import Title from './component/Title';
import Profil from './component/Profil';
import Details from './component/Details';
import Career from './component/Career';
import University from "./component/University";
import Test2 from './Test2';

import './MyStyle.css';

const url = "https://github.com/yimje/Zoom"
function App() {
  return (
   <div className ="mainBox">
    <Title mainTitle="**임재열!! 소개합니다~~" />
    <Profil subTitle1="Main Info." name="임재열" birth="1993.07.26" 
     email="imjy2@naver.com" part="Web(Back-End)" gitHubID="@yimje"url = "https://github.com/yimje/Zoom"/>
    <Details homeTown="대구광역시 달구벌대로"  hobby="걷기" />
     <University university="대구대학교" department="건축공학과" graduation="2019년 2월 13일"/>
    <Career Corporate name="해솔솔루션" careerperiod="2021.09.01 ~ 2022.12.31(1년 4개월)" 
           work ="포스코ICT(2021.10~2021.12.31 산업가스판매시스템 개발),  KT고객지식관리, 카드관리(2022.02.23~2022.12.31)"
           workcontent1 = "산업가스제품개발 2021-10-01 ~ 2021-12-01 해당 프로젝트는 포스코에서 파견업무로 진행하였으며, 산업가스예약판매시스템을 사용자가 편하게 예약하기 위한 소프트웨어를 개발하는 프로젝트였습니다. 제가 담당한 파트는 예약, 예약코드,예약화면 등 구조적으로 짜봤습니다.  BI-MATRIX로 화면 구성을 하였으며 javascript로 백엔드 개발을 진행하였고 Oracle 사용하여 DB 개발하였습니다. 어려웠던점은 프론트앤드 쪽이 제가 엑셀 형식의 도표와 안드로이드와 ios를 개발을 할수 있다는 것이 신기하면서도 어렸웠지만 많은것이 들어와졌습니다."
           workcontent2 = "시스템운영, 개발, 유지보수, 서버관리 KT카드, 고객지식관리 2022-03-01 ~ 2022-05-01 KT카드 로 투입되어 일반 전화카드와 외국인 대상 국제전화카드 관리 프로젝트를 맡았습니다. 사용자를 편의 위한 시스템 수정하였습니다. 주요 업무는 1) 시스템 운영 전반적인 업무  2) 대상 업체(고객센터) 카드결제 DB수정 (Oracle) 3) KT 카드 판매,정보 화면 개발 (jsp, javascript, css, html)  4) 배포 업무 (Change Flow)  5) 서버 유지 보수 및 관리 (Linux, HI-WARE)를 주로 진행하였습니다."/>

    <Test2/>
   </div>

  );

}

export default App;