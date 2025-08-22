import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Cascader } from "antd";
import axios from 'axios';

const Purchase = ({user, cart, getcart, login, paycart, setpaycart, getorder, setorder, uselist}) => {
  const [couponset , setcouponset] = useState("")

  const usernum = user[0].user_sno

  const navigate = useNavigate();
  function Gohome() {
    navigate("/")
    setpaycart([])
  };

    // footer
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

    const totalprice = paycart.reduce ((num , item) => {
      return num + item.price;
    }, 0)

    const totalcoupang_price = paycart.reduce ((num , item) => {
      return num + item.coupang_price;
    }, 0)

    const totalreal_price = paycart.reduce ((num , item) => {
      return num + item.real_price;
    }, 0)

    const coupang_dc = uselist.filter((sno) => sno.user_sno === usernum && sno.coupon_sno == couponset).reduce ((num , item) => {
      return num + item.coupon_discount;
    }, 0)

      
    async function getaddorder(e) {
      let list = JSON.stringify(paycart)
    try {
      //응답 성공 
      const response = await axios.post(`http://localhost:3000/coupang/user/add_order`,
       {list},
        { headers: {"Content-Type": "application/x-www-form-urlencoded"}}
      );
    } catch (error) {
      //응답 실패
      console.error(error);
    }
    }  

    async function usecouponset(e) {
      if( couponset != ""){
        try {
          //응답 성공 
          const response = await axios.post(`http://localhost:3000/coupang/usecoupon_use`,
          {usernum, couponset},
            { headers: {"Content-Type": "application/x-www-form-urlencoded"}}
          );
          Gohome()
        } catch (error) {
          //응답 실패
          console.error(error);
        }
      } else {

      }

    }  


  return (
    <section class="coupang">
      <section className={cart === "" ? "": "use_shopping"}>
              <div class="shopping_header"><img onClick={Gohome} class="coupang_img_mini" src="https://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png"/></div>
              <div class="shopping_cart_box">
                <div class="Purchase_box_header">
                  <div class="shopping_cart_left" onClick={Gohome}><div class="left_img"></div><h2> 주문결제 </h2></div>
                  <div class="shopping_cart_right">
                    <span></span><span>장바구니</span><div class="right_img"></div>
                    <span></span><span>주문/결제</span><div class="right_img"></div>
                    <span></span><span>주문완료</span>
                  </div>
                </div>

                 <div class="shopping_cart_box_content_flex">
                  <div>
                    <div class="Purchase_cart_content_list">
                      <div class="Purchase_content_list_header"><span>배송지 / {user[0].user_name}</span> <button>배송지 변경</button></div>

                      <div class="cart_list">
                          <div class="cart_list_box">
                          <div class="cart_list_content">
                              <span class="Purchase_list_text"><span>휴대폰 : </span>{user[0].user_phone}</span>
                          </div>
                          </div>
                      </div>
                    
                    <div></div> 
                    </div>

                    <div class="Purchase_cart_content_list">
                      <div class="Purchase_content_list_header"><span>배송 요청사항</span> <button>변경</button></div>

                      <div class="cart_list">
                          <div class="cart_list_box">
                          <div class="cart_list_header"></div>
                          <div class="cart_list_content">
                              <span class="Purchase_list_text">문 앞</span>
                          </div>
                          </div>
                      </div>
                    
                    <div></div> 
                    </div>

                    <div class="Purchase_cart_content_list">
                      <div class="Purchase_content_list_header"><span>결제수단</span></div>

                      <div class="cart_list">
                          <div class="cart_list_box">
                          <div class="cart_list_header"></div>
                          <div class="cart_list_content">
                              <span class="Purchase_list_text"><span>휴대폰 : </span>{user[0].user_phone}</span>
                          </div>
                          </div>
                      </div>
                    
                    <div></div> 
                    </div>

                    <>
                      <div class="Purchase_content_list_title"><span>배송 1건 중 1</span></div>
                      <div class="Purchase_cart_content_list">
                        <div class="Purchase_content_list_input_header">
                          <div class="Purchase_delivery_day"><span>도착일</span></div>
                          <div class="Purchase_delivery_day"><span>다른 도착일</span></div>
                        </div>

                        <div class="cart_list">
                            <div class="cart_list_box">
                            <div class="Purchase_list_content">
                              {paycart.map((num)=> 
                              <div class="Purchase_list_product_name">
                                <div class="Purchase_list_product_header"> <span> {num.name}</span> {num.delivery_img != null ? <img src={num.delivery_img}/>  : null}</div>
                                <div class="Purchase_list_product_detall">{num.amount}{num.unit} / 무료배송 * 30일 무료반품</div>
                              </div>)}
                            </div>
                            </div>
                        </div>
                      
                      <div></div> 
                      </div>
                    </>

                  </div>

                  <div class="shopping_cart_content_price">
                    <div class="cart_content_price_header"><span>최종 결제 금액</span></div>
                    <div class="cart_content_price_text"><span>총 상품 가격</span><span>{totalprice}원</span></div>
                    <div class="cart_content_price_text"><span>쿠폰 할인</span> 
                      <div>
                      <select id="" onChange={(e)=> {setcouponset(e.target.value);}}>
                        <option value="">0</option>
                        {uselist.filter((num) => num.usecoupon_use === 'Y').map((sno) =>
                        <option value={sno.coupon_sno}>{sno.coupon_name}</option>
                          )}                
                      </select>
                        <span>원</span>
                      </div>
                    </div>
                    <div class="cart_content_price_text"><span>총 배송비</span><span>원</span></div>
                    <div class="Purchase_content_price_totall">
                      <div class="Purchase_content_price_title"><span>총 결제 금액</span> <span><strong>{totalreal_price - coupang_dc}</strong>원</span></div>
                      <div class="Purchase_content_price_subtitle"><span>구매조건 확인 및 결제대행 서비스 약관 동의</span> <button>보기</button></div>
                    </div>
                      <div class="Purchase_content_price_bt_subtitle"><span>위 주문 내용을 확인 하였으며, 회원 본인은 개인 정보 이용 및 정보(해외직구의 경우 국외제공)및 결제에 동의합니다</span></div>
                    <button onClick={()=>{getaddorder(paycart); usecouponset();}} class="cart_content_price_bt">구매하기({paycart.length})</button>
                  </div>
                </div>
              </div>
      </section>

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
    </section>
  )
}

export default Purchase
