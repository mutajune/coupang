import React from 'react'
import { Cascader } from "antd";


const Footer = ({screen , setscreen}) => {

const footer_menu = [
  { name: "회사소개"
  },
  { name: "Investor Relations"
  },
    { name: "인재채용"
  },
    { name: "입점 / 제휴문의"
  },
    { name: "공지사항"
  },
    { name: "고객의 소리"
  },
    { name: "이용약관"
  },
    { name: "개인정보 처리방침"
  },
    { name: "쿠팡페이 이용약관"
  },
    { name: "신뢰관리센터"
  },
    { name: "제휴마케팅"
  },
    { name: "광고안내"
  },
]

const options = [
  {
    value: 'Global Site',
    label: 'Global Site',
  },
  {
    value: 'Coupang Taiwan 酷澎台灣',
    label: 'Coupang Taiwan 酷澎台灣',
  },
];

  return (
    <footer>
      <section class="footer_menu">
        <div class="footer_text_menus">
          {footer_menu.map ((sno) => 
          <a href="https://news.coupang.com/" target="_blank"> {sno.name} </a>)}
        </div>
        <div class="footer_pick">
          <Cascader defaultValue={['Global Site']} options={options} />
        </div>
      </section>

      <section class="business_info">
        <div><img class="business_info_img" src="https://front.coupangcdn.com/front-web-next/_next/static/media/logo.f2c4ccb2.png" alt="" loading="lazy"/></div>
        <div>상호명 및 호스팅 서비스 제공 : 쿠팡(주)
          <br/> 대표이사 : 강한승,박대준
          <br/> 서울시 송파구 송파대로 570
          <br/> 사업자 등록번호 : 120-88-00767
          <br/> 통신판매업신고 : 2017-서울송파-0680
          <br/> <a href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=1208800767" target="" class="">사업자정보 확인 &gt;</a></div>
   
        <div class="contact-info">
          <a href="https://mc.coupang.com/ssr/desktop/contact/inquiry" class="call-center">
            <strong data-sentry-component="strong" data-sentry-source-file="formatter.tsx">365고객센터</strong>
            | 전자금융거래분쟁처리담당 
            <br/>
            <em data-sentry-component="em" data-sentry-source-file="formatter.tsx">1577-7011 (유료)
            </em> 서울시 송파구 송파대로 570
            <br/>
            <span class="contact-fax" data-sentry-component="fax" data-sentry-source-file="formatter.tsx">email : help@coupang.com</span>
          </a>
        </div> 

        <div class="safe-service">
          <strong data-sentry-component="strong" data-sentry-source-file="formatter.tsx">채무지급보증 안내</strong>
          <br/><span data-sentry-component="span" data-sentry-source-file="formatter.tsx"> 당사는 고객님이 현금 결제한 금액에 대해
          <br/>채무지급보증 계약을 체결하여
          <br/>안전거래를 보장하고 있습니다.
          <br/>
          </span><a id="serviceCheck" class="service-check fw-cursor-pointer">서비스 가입사실 확인 &gt;</a>
        </div>   
      </section>

      <section class="security_mark">
        <div class="security_item">
          <div class="fw-flex fw-items-center">
            <img alt="" loading="lazy" src="https://front.coupangcdn.com/front-web-next/_next/static/media/1.bb473be6.png" width="36" height="36"/>
            <div>[인증 범위] 쿠팡 서비스<br/>[유효 기간] 2024.03.03 - 2027.03.02</div>
          </div>
        </div>

        <div class="security_item">
          <div class="fw-flex fw-items-center">
            <img alt="" loading="lazy" src="https://front.coupangcdn.com/front-web-next/_next/static/media/2.e9b28c7d.png" width="36" height="36"/>
            <div>[인증 범위] 쿠팡 10개 서비스<br/>[유효 기간] 2024.08.05 - 2025.08.04</div>
          </div>
        </div>

        <div class="security_item">
          <div class="fw-flex fw-items-center"><img alt="" loading="lazy" src="https://front.coupangcdn.com/front-web-next/_next/static/media/3.c5eaeb67.png" width="36" height="36"/>
            <div>ISO/IEC 27001/27701/27017 인증획득 <br/> 정보보호 및 개인정보보호 국제 표전 검증</div>
          </div>
        </div>

        <div class="security_item">
          <div class="fw-flex fw-items-center"><img alt="" loading="lazy" src="https://front.coupangcdn.com/front-web-next/_next/static/media/4.b69d9f83.png" width="36" height="36"/>
           <div>개인정보보호우수사이트 <br/> ePRIVACY인증획득</div>
          </div>
        </div>      

        <div class="security_item">
          <img alt="" loading="lazy" src="https://front.coupangcdn.com/front-web-next/_next/static/media/5.73affd35.png" width="89" height="36"/>
        </div>

        <div class="security_item">
          <img alt="" loading="lazy" src="https://front.coupangcdn.com/front-web-next/_next/static/media/6.901d77a5.png" width="55" height="36"/>
        </div>
      </section>

      <section>
        <div class="footer_bt">
          <div class="coupang-copyright fw-mx-auto fw-flex fw-max-w-[968px] fw-items-center fw-justify-between fw-gap-[20px] max-s768:fw-flex-col max-s768:fw-items-start max-s768:fw-gap-[10px]">
            <p class="info">사이버몰 내 판매되는 상품 중에는 쿠팡에 등록한 개별 판매자가 판매하는 켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
              <br/>마켓플레이스(오픈마켓) 상품의 경우 쿠팡은 통신판매중개자이며 통신판매의 당사자가 닙니다.
              <br/> 쿠팡은 마켓플레이스(오픈마켓) 상품, 거래정보 및 거래 등에 대하여 책임을 지지 않습니다.
              <br/> 쿠팡은 소비자 보호와 안전거래를 위해 신뢰관리센터(CM112@coupang.com)를 운영하고 있으며, 관련 분쟁이 발생할 경우 별도의 분쟁 처리절차에 의거 분쟁이 처리됩니다.
              <br/> Copyright © Coupang Corp. 2010-2025 All Rights Reserved.
            </p>
            <ul class="sns-link fw-flex"><li>
              <a href="https://www.facebook.com/Coupang.korea" target="_blank" class="facebook">
              <img loading="lazy" src="https://front.coupangcdn.com/front-web-next/_next/static/media/f.34bde318.png" alt="" width="30" height="30"/>
              </a></li><li><a href="https://news.coupang.com/" target="_blank" class="blog">
              <img loading="lazy" src="https://front.coupangcdn.com/front-web-next/_next/static/media/b.637cda1c.png" class="fw-rounded-full" alt="" width="30" height="30"/>
              </a></li><li><a href="https://www.instagram.com/coupang" target="_blank" class="instagram">
              <img src="https://front.coupangcdn.com/front-web-next/_next/static/media/s.a7aca4ea.png" alt="" loading="lazy" class="fw-rounded-full fw-bg-white" width="30" height="30"/>
              </a></li>
            </ul>
          </div>
        </div>
      </section>      

      
    </footer>
  )
}

export default Footer
