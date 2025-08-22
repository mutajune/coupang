import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Cascader } from "antd";
import axios from 'axios';

const Coupon_page = ({user, couponlist, uselist, setuselist, getusecoupon, login, setlogin, setdivision, getproduct, setsearch, sildermenu, setsildermenu, order, arrive, post, logout, cart, getcoupon }) => {

  const [coupon , setcoupon] = useState("")
  const [bt, setbt ] = useState({useab :true})

  const usernum = user[0].user_sno
  const point = user[0].user_point
  
  async function postusecoupon(e) {
    try {
      //응답 성공 
      const response = await axios.post(`http://localhost:3000/coupang/usecoupon_add`, { e , usernum} ,{ headers: {"Content-Type": "application/x-www-form-urlencoded"}});
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }    
  // async function add_point(e) {
  //   const add = point + e
  //   console.log(point , e , add)
  //   try {
  //     //응답 성공 
  //     const response = await axios.post(`http://localhost:3000/add_point`, { add , usernum} ,{ headers: {"Content-Type": "application/x-www-form-urlencoded"}});
  //   } catch (error) {
  //     //응답 실패
  //     console.error(error);
  //   }

  // } 

  async function add_coupons(e) {
    e.preventDefault()
    const insertcoupon = couponlist.filter((num)=> num.coupon_num == coupon)
    if(insertcoupon.length === 1 ) {

      if( uselist == "" || uselist.filter((num) => num.coupon_sno === insertcoupon[0].coupon_sno).length === 0 ){
        postusecoupon(insertcoupon[0].coupon_sno)
        alert("등록됬습니다.")
        // add_point(insertcoupon[0].coupon_discount)
        getusecoupon(usernum)
        getcoupon()
      } else {
       alert("이미사용한 쿠폰입니다.")
      }

    } else {
      console.log(uselist)
      alert("쿠폰번호가 일치하지 않습니다.")
    }
    setcoupon("")
  } 
  const navigate = useNavigate();
 function gosell_sign_up() {
    navigate("/Sell_sign_up ")
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  function Gohome() {
    navigate("/ ")
  };

  function Gocart() {
    navigate("/Shopping_cart")
  };
  function Golog_in() {
    navigate("/Log_in")
  };
  function Gomy_page() {
    navigate("/My_page")
  };
  function GoSearch() {
    navigate("/Search")
  };
  function go_sign_up() {
    navigate("/Sign_up")
  };
  function go_coupon() {
    navigate("/Coupon_page")
  };  
  function go_adit() {
    navigate("/adit")
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


  return (
    <>
      <header>
          <section id="top_bar">
            <div class="header_mini top_menus">
            <menu class="left_menu">
              <li><a>즐겨찾기</a></li>
              <li>
                <a>입점신청</a>
                <p></p>                        
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </li>
            </menu>

            <menu class="right_menu">
              {login === false ?<>
              <li onClick={Golog_in}><a>로그인</a></li>
              <li onClick={go_sign_up}><a>회원가입</a></li>            
              </> : <>
              <li class="right_menu_nickname"><span>{user[0].user_nickname}님</span></li>
              <li class="right_menu_log_out" onClick={()=>{logout(); Gohome();}}><button>로그아웃</button></li>
              </>}
              <li><a>고객센터</a></li>
              <li onClick={gosell_sign_up}><a>판매자 가입</a></li>
            </menu>
            </div>
          </section>

          <section id="header" class="header_mini">
          <div class="category_btn" onMouseOver={()=>{}}>
            <a>카테고리</a>
          </div>

          <div class="header_search_box">
            <div class="header_search_box_top">
              <img onClick={Gohome} class="coupang_img" src="https://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png"/>

              <div class="header_search_form">
                <select id="search_category_select" onChange={(e)=>{setdivision(e.target.value)}}>
                  <option value="all">전체</option>
                  <option value=""></option>
                </select>

                <form class="header_search_input" onSubmit={(e)=> {e.preventDefault(); GoSearch(); getproduct(e.target.children[0].value); setsearch(e.target.children[0].value); }}>
                  <input type="text" class="search_input" placeholder="찾고 싶은 상품을 검색해보세요" />
                  <a class="speech_content_mic">마이크</a>
                  <button class="header_search_btn" type="submit" >검색</button >
                </form>
              </div>
              
              <ul class="icon_menus">
                <li onClick={login === false ? Golog_in :Gomy_page}><a><span><img src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#person" /> <br/>마이쿠팡</span></a></li>
                <li onClick={login === false ? Golog_in : Gocart}><a><span><img src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#cart" /> <br/>장바구니</span></a> <em>{cart.length}</em></li>
              </ul>
            </div>

            <div class="header_search_box_bottom">
              <div class="b_menu_btn_left" className={sildermenu ? "b_menu_btn_left_active" : "b_menu_btn_left"}  onClick={()=> {setsildermenu(false)}}></div>

              <ul class="b_menu_item_box" className={sildermenu ? "b_menu_item_box_scroll": "b_menu_item_box"}>
                <li class="b_menu_item"><a><img src="https://image7.coupangcdn.com/image/coupang/home/icons/web/kr/coupang-play.png"/><span>쿠팡플레이</span></a></li>
                <li class="b_menu_item"><a><img src="https://image8.coupangcdn.com/image/coupang/home/icons/web/kr/rocket-delivery.png"/><span>로켓배송</span></a></li>
                <li class="b_menu_item"><a><img src="https://image7.coupangcdn.com/image/coupang/home/icons/web/kr/rocket-fresh.png"/><span>로켓프레시</span></a></li>
                <li class="b_menu_item"><a><img src="https://image10.coupangcdn.com/image/coupang/common/fbi_icon_3x.png"/><span>다시 구매</span></a></li>
                <li class="b_menu_item"><a><img src="https://image6.coupangcdn.com/image/coupang/home/icons/web/kr/biz.png"/><span>쿠팡비즈</span></a></li>
                <li class="b_menu_item"><a><img src="https://image10.coupangcdn.com/image/coupang/home/icons/web/kr/oversea-delivery.png"/><span>로켓직구</span></a></li>
                <li class="b_menu_item"><a><img src="https://image8.coupangcdn.com/image/coupang/home/icons/web/kr/gold-box.png"/><span>골드박스</span></a></li>
                <li class="b_menu_item"><a><img src="https://image8.coupangcdn.com/image/coupang/home/icons/web/kr/new-item-of-month.png"/><span>이달의신상</span></a></li>
                <li class="b_menu_item"><a><img src="https://image7.coupangcdn.com/image/coupang/home/icons/web/kr/omp.png"/><span>판매자특가</span></a></li>
                <li class="b_menu_item"><a><img src="https://image6.coupangcdn.com/image/coupang/home/icons/web/kr/wow.png"/><span>와우회원할인</span></a></li>
                <li class="b_menu_item"><a><img src="https://image8.coupangcdn.com/image/coupang/home/icons/web/kr/benefit.png"/><span>이벤트/쿠폰</span></a></li>
                <li class="b_menu_item"><a><img src="https://image7.coupangcdn.com/image/coupang/home/icons/web/kr/returned-market.png"/><span>반품마켓</span></a></li>
                <li class="b_menu_item"><a><img src="https://image6.coupangcdn.com/image/coupang/home/icons/web/kr/sustainable-market.png"/><span>착한상점</span></a></li>
                <li class="b_menu_item"><a><img src="https://image6.coupangcdn.com/image/coupang/home/icons/web/kr/event.png"/><span>기획전</span></a></li>
                <li class="b_menu_item"><a><img src="https://image6.coupangcdn.com/image/coupang/home/icons/web/kr/travel.png"/><span>쿠팡트래블</span></a></li>
                <li class="b_menu_item"><a><img src="https://image8.coupangcdn.com/image/coupang/home/icons/web/kr/sell-on-coupang.png"/><span>입점신청</span></a></li>
              </ul>

              <div class="b_menu_btn_right_active" className={sildermenu ? "b_menu_btn_right" : "b_menu_btn_right_active"} onClick={()=> {setsildermenu(true)}}></div>
            </div>

          </div>
          </section>
      </header>  


    <section class="my_page_section">

      <section class="my_page_contant">
        <div class="my_page_left_menu">
          <div class="my_page_left_menu_header">MY쿠팡</div>
          <div class="my_page_left_menu_list">
              <div class="my_page_left_menu_table">
              <div class="my_page_left_menu_table_item">
                  <div class="my_page_left_menu_table_item_header">MY 쇼핑</div>
                  <ul class="my_page_left_menu_table_item_ul">
                  <li class="my_page_left_menu_table_item_li"><a>주문목록/배송조회</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>취소/반품/교환/환불내역</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>와우 멤버십</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>구독 서비스</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>로켓프레시 프레시백</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>정기배송관리</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>영수증 조회/출력</a></li>
                  </ul>
              </div>
              <div class="my_page_left_menu_table_item">
                  <div class="my_page_left_menu_table_item_header">MY 혜택</div>
                  <ul class="my_page_left_menu_table_item_ul">
                  <li onClick={go_coupon} class="my_page_left_menu_table_item_li"><a>할인쿠폰</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>쿠팡캐시/기프트카드</a></li>
                  </ul>
              </div>
              <div class="my_page_left_menu_table_item">
                  <div class="my_page_left_menu_table_item_header">MY 활동</div>
                  <ul class="my_page_left_menu_table_item_ul">
                  <li class="my_page_left_menu_table_item_li"><a>문의하기</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>문의내역 확인</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>리뷰관리</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>찜 리스트</a></li>
                  </ul>                    
              </div>
              <div class="my_page_left_menu_table_item">
                  <div class="my_page_left_menu_table_item_header">MY 정보</div>
                  <ul class="my_page_left_menu_table_item_ul">
                  <li onClick={go_adit} class="my_page_left_menu_table_item_li"><a>개인정보확인/수정</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>결제수단·쿠페이 관리</a></li>
                  <li class="my_page_left_menu_table_item_li"><a>배송지 관리</a></li>
                  </ul>                    
              </div>
              </div>
              <div></div>
          </div>

          <div class="my_page_left_menu_icons">
              <div class="my_page_left_menu_icons_1"><span></span></div>
              <div class="my_page_left_menu_icons_2"><span></span></div>
              <div class="my_page_left_menu_icons_3"><span></span></div>
          </div>
        </div>

        <div class="my_page_contant_list">
          <div class="my_page_contant_list_header">
              <div class="my_page_contant_list_item"><span>쿠페이머니</span> <span><span class="my_page_list_item_num">0</span>원</span></div>
              <div class="my_page_contant_list_item"><span>쿠팡캐시</span> <span><span class="my_page_list_item_num">0</span>원</span></div>                  
          </div>

          <div class="my_page_contant_list_contant">
            <div class="coupon_contant_list_contant_title">
              <div>
                <span>할인쿠폰</span>
                <span class="my_page_contant_list_contant_small"> 할인상품은 구매조건에 따라 상품 결제 시 적용할 수 있습니다.</span>
              </div>
              <div>
                <button>쿠폰이용안내</button>
              </div>
            </div>

             <div class="coupon_add_box">
                <div class="coupon_add_top">
                  <div class="coupon_top_left">
                    <div class="coupon_content_title"><span>사용가능 할인쿠폰</span></div>
                    <div class="coupon_bottom_score"><span ><span class="coupon_bottom_bigscore">{uselist.filter((num) => num.usecoupon_use === 'Y').length}</span>개</span></div>
                  </div>
                  <div class="coupon_top_right">
                    <div class="coupon_content_title"><span>마감임박 할인쿠폰 > 24시간 이내</span></div>
                    <div class="coupon_bottom_score"><span ><span class="coupon_bottom_bigscore">0</span>개</span></div>
                  </div>
                </div>

                <div class="coupon_add_bottom">
                    <div class="coupon_content_title"><span>할인쿠폰 교환권 등록</span></div>
                    <form onSubmit={add_coupons}> 
                      <input value={coupon} onChange={(e)=>{setcoupon(e.target.value);}}></input>
                      <input class="coupon_add_bt" type="submit"/>
                    </form>
                </div>    
            </div>   

             <div>
              <div class="coupon_list_header">
                <div class="coupon_list_header_rbt_active" onClick={()=>{setbt({useab : true})}} className={ bt.useab ? "coupon_list_header_rbt_active" : "coupon_list_header_rbt"}><button>사용가능</button></div>
                <div class="coupon_list_header_lbt"  onClick={()=>{setbt({useab : false})}} className={ bt.useab ? "coupon_list_header_lbt" : "coupon_list_header_lbt_active"}><button>사용완료/기간만료</button></div>
              </div>
              <div class="coupon_list_body"> 
                <div class="coupon_list_content">
                  <div class="coupon_list_content_w30p"><span>쿠폰명</span></div>
                  <div class="coupon_list_content_w10p"><span>할인액(율)</span></div>
                  <div class="coupon_list_content_w30p"><span>사용조건</span></div>
                  <div class="coupon_list_content_w15p"><span>유효기간</span></div>
                  <div class="coupon_list_content_w15p"><span>쿠폰종류</span></div>
                </div>
                {bt.useab ? <>
                {uselist.filter((num) => num.usecoupon_use === 'Y').map((sno) =>
                  <div class="coupon_list_li">
                    <div class="coupon_list_content_w30p"><span>{sno.coupon_name}</span></div>
                    <div class="coupon_list_content_w10p"><span>{sno.coupon_discount}</span></div>
                    <div class="coupon_list_content_w30p"><span>{sno.coupon_discount}</span></div>
                    <div class="coupon_list_content_w15p"><span>{sno.coupon_discount}</span></div>
                    <div class="coupon_list_content_w15p"><span>{sno.coupon_type}</span></div>
                  </div>                
                )}                
                </> :<>
                {uselist.filter((num) => num.usecoupon_use === 'N').map((num) =>
                
                  <div class="coupon_list_li">
                    <div class="coupon_list_content_w30p"><span>{num.coupon_name}</span></div>
                    <div class="coupon_list_content_w10p"><span>{num.coupon_discount}</span></div>
                    <div class="coupon_list_content_w30p"><span>{num.coupon_discount}</span></div>
                    <div class="coupon_list_content_w15p"><span>{num.coupon_discount}</span></div>
                    <div class="coupon_list_content_w15p"><span>{num.coupon_type}</span></div>
                  </div>
                )}
                </> }
              </div>
            </div>   

          </div>
        </div>
      </section>

    
      <article class="my_page_side_bar">
            <ul><li></li></ul> 
            <ul>{post.filter((num) => num.part === "SD")
            .map((num) => <li><img src={num.post_mark}/></li>)}</ul>
            <ul><li></li></ul>
            <div class="cart_box">
            <div class="side_cart"><span>장바구니</span> <em class="cart_count">0</em></div>
            <div class="recently_viewed_products"><span>최근본상품</span> <em class="cart_count">0</em></div>
            <div class="recently_viewed_no_list"> <span class="no_item">최근본 상품이<br/>없습니다.</span></div>
            </div>
      </article>

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

    </>
  )
}

export default Coupon_page
