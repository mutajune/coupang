import {React, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Pagination as Paginations , Alert, Button, Switch, Cascader } from "antd";



const Search = ({login, setlogin, user, setdivision, getproduct, setsearch, sildermenu, setsildermenu, product, division, search, scroll, post }) => {

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
  
  // bt

  function btn_left (e) {
    const left = (Number(e.target.nextElementSibling.style.left.slice(0,-2)) + 990) + "px"

    if (Number(e.target.nextElementSibling.style.left.slice(0,-2)) === -990 ) {
      e.target.parentElement.children[0].classList.add("nonarrow");
      e.target.parentElement.children[2].classList.remove("nonarrow");
      e.target.nextElementSibling.style.left =  left

    } else if (e.target.nextElementSibling.style.left !== "" ) {
      e.target.nextElementSibling.style.left =  left

    }
  }
  
  function btn_right (e) {
    const right = (Number(e.target.previousElementSibling.style.left.slice(0,-2)) + -990) + "px"
    const page = Math.ceil (e.target.previousElementSibling.children.length / 5 ) - 1
    if ( (page -1 ) * -990 === Number(e.target.previousElementSibling.style.left.slice(0,-2)) ) {
      e.currentTarget.classList.add("nonarrow");
      e.target.parentElement.children[0].classList.remove("nonarrow")
      e.target.previousElementSibling.style.left = right

    } else if (e.target.previousElementSibling.style.left === "" || e.target.previousElementSibling.style.left === "0px" && page * -990 !== 1) {
      e.target.previousElementSibling.style.left = right
      e.target.parentElement.children[0].classList.remove("nonarrow")


    } else if ( page * -990 < Number(e.target.previousElementSibling.style.left.slice(0,-2)) ) {
      console.log("가고있니?")
      e.target.previousElementSibling.style.left = right

    } else {
      // setpage(last)
    }
  }

  // list_box_small

  function white_btn_left (e) {
    const left = (Number(e.target.nextElementSibling.children[0].children[0].style.left.slice(0,-2)) + 900) + "px"

    if (Number(e.target.nextElementSibling.children[0].children[0].style.left.slice(0,-2)) === -900 ) {
      e.target.parentElement.children[1].classList.add("nonarrow");
      e.target.parentElement.children[3].classList.remove("nonarrow");
      e.target.nextElementSibling.children[0].children[0].style.left =  left

    } else if (e.target.nextElementSibling.children[0].children[0].style.left !== "" ) {
      e.target.nextElementSibling.children[0].children[0].style.left =  left

    }
  }
  
  function white_btn_right (e) {
    console.log(e.target.previousElementSibling.children[0].children[0])
    console.log(e.target.parentElement.children[1])

    const right = (Number(e.target.previousElementSibling.children[0].children[0].style.left.slice(0,-2)) + -900) + "px"
    const page = Math.ceil (e.target.previousElementSibling.children[0].children[0].children.length / 5 ) - 1
    if ( (page -1 ) * -900 === Number(e.target.previousElementSibling.children[0].children[0].style.left.slice(0,-2)) ) {
      e.currentTarget.classList.add("nonarrow");
      e.target.parentElement.children[1].classList.remove("nonarrow")
      e.target.previousElementSibling.children[0].children[0].style.left = right

    } else if (e.target.previousElementSibling.children[0].children[0].style.left === "" || e.target.previousElementSibling.children[0].children[0].style.left === "0px" && page * -990 !== 1) {
      e.target.previousElementSibling.children[0].children[0].style.left = right
      e.target.parentElement.children[1].classList.remove("nonarrow")


    } else if ( page * -900 < Number(e.target.previousElementSibling.children[0].children[0].style.left.slice(0,-2)) ) {
      console.log("가고있니?")
      e.target.previousElementSibling.children[0].children[0].style.left = right

    } else {
      // setpage(last)
    }
  }

    //detall bt

  function detall_btn_left (e) {
    const left = (Number(e.target.nextElementSibling.style.left.slice(0,-2)) + 855) + "px"

    if (Number(e.target.nextElementSibling.style.left.slice(0,-2)) === -855 ) {
      e.target.parentElement.children[0].classList.add("nonarrow");
      e.target.parentElement.children[2].classList.remove("nonarrow");
      e.target.nextElementSibling.style.left =  left

    } else if (e.target.nextElementSibling.style.left !== "" ) {
      e.target.nextElementSibling.style.left =  left

    }
  }
  
  function detall_btn_right (e) {
    const right = (Number(e.target.previousElementSibling.style.left.slice(0,-2)) + -855) + "px"
    const page = Math.ceil (e.target.previousElementSibling.children.length / 5 ) - 1
    if ( (page -1 ) * -855 === Number(e.target.previousElementSibling.style.left.slice(0,-2)) ) {
      e.currentTarget.classList.add("nonarrow");
      e.target.parentElement.children[0].classList.remove("nonarrow")
      e.target.previousElementSibling.style.left = right

    } else if (e.target.previousElementSibling.style.left === "" || e.target.previousElementSibling.style.left === "0px" && page * -990 !== 1) {
      e.target.previousElementSibling.style.left = right
      e.target.parentElement.children[0].classList.remove("nonarrow")


    } else if ( page * -855 < Number(e.target.previousElementSibling.style.left.slice(0,-2)) ) {
      console.log("가고있니?")
      e.target.previousElementSibling.style.left = right

    } else {
      // setpage(last)
    }
  }

    //detall list_box_small

  function detall_white_btn_left (e) {
    const left = (Number(e.target.nextElementSibling.children[0].children[0].style.left.slice(0,-2)) + 801) + "px"

    if (Number(e.target.nextElementSibling.children[0].children[0].style.left.slice(0,-2)) === -801 ) {
      e.target.parentElement.children[1].classList.add("nonarrow");
      e.target.parentElement.children[3].classList.remove("nonarrow");
      e.target.nextElementSibling.children[0].children[0].style.left =  left

    } else if (e.target.nextElementSibling.children[0].children[0].style.left !== "" ) {
      e.target.nextElementSibling.children[0].children[0].style.left =  left

    }
  }
  
  function detall_white_btn_right (e) {
    console.log(e.target.previousElementSibling.children[0].children[0])
    console.log(e.target.parentElement.children[1])

    const right = (Number(e.target.previousElementSibling.children[0].children[0].style.left.slice(0,-2)) + -801) + "px"
    const page = Math.ceil (e.target.previousElementSibling.children[0].children[0].children.length / 5 ) - 1
    if ( (page -1 ) * -801 === Number(e.target.previousElementSibling.children[0].children[0].style.left.slice(0,-2)) ) {
      e.currentTarget.classList.add("nonarrow");
      e.target.parentElement.children[1].classList.remove("nonarrow")
      e.target.previousElementSibling.children[0].children[0].style.left = right

    } else if (e.target.previousElementSibling.children[0].children[0].style.left === "" || e.target.previousElementSibling.children[0].children[0].style.left === "0px" && page * -990 !== 1) {
      e.target.previousElementSibling.children[0].children[0].style.left = right
      e.target.parentElement.children[1].classList.remove("nonarrow")


    } else if ( page * -801 < Number(e.target.previousElementSibling.children[0].children[0].style.left.slice(0,-2)) ) {
      console.log("가고있니?")
      e.target.previousElementSibling.children[0].children[0].style.left = right

    } else {
      // setpage(last)
    }
  }


const onChange = checked => {
  console.log(`switch to ${checked}`);
};
  return (
    <section class="coupang">
      <header>
          <section id="top_bar">
            <div class="top_menus">
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
              <li class="right_menu_nickname"><span>{user[0].nickname}님</span></li>
              <li class="right_menu_log_out" onClick={()=>{setlogin(false)}}><button>로그아웃</button></li>
              </>}
              <li><a>고객센터</a></li>
              <li onClick={gosell_sign_up}><a>판매자 가입</a></li>
            </menu>
            </div>
          </section>

          <section id="header" class="">
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
                <li onClick={Gomy_page}><a><span><img src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#person" /> <br/>마이쿠팡</span></a></li>
                <li onClick={Gocart}><a><span><img src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#cart" /> <br/>장바구니</span></a> <em>0</em></li>
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

       {product !== "" ? <>
            <div class="serch_division">
            {division === "all" ?
              <div class="serch_division_text"><a>전체</a>
               <svg class="srp_arrowIcon__bNaNA" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-sentry-element="svg" data-sentry-component="ArrowIcon" data-sentry-source-file="Breadcrumb.tsx"><path d="M3.8859 2.15732C4.0606 1.9717 4.34367 1.94925 4.54434 2.09575L4.59268 2.1359L8.84268 6.1359C9.03746 6.31922 9.05137 6.61975 8.88442 6.81982L8.84268 6.8641L4.59268 10.8641C4.3916 11.0534 4.07516 11.0438 3.8859 10.8427C3.7112 10.6571 3.70593 10.3732 3.86432 10.1817L3.90732 10.1359L7.77 6.50001L3.90732 2.8641C3.7217 2.6894 3.69925 2.40634 3.84575 2.20566L3.8859 2.15732Z" fill="#AAB5C0" data-sentry-element="path" data-sentry-source-file="Breadcrumb.tsx"></path></svg>
               <strong>'{search}'</strong></div> 
            : <div class="serch_division_text"><a>전체</a> <a>{division}</a>
                <svg class="srp_arrowIcon__bNaNA" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-sentry-element="svg" data-sentry-component="ArrowIcon" data-sentry-source-file="Breadcrumb.tsx"><path d="M3.8859 2.15732C4.0606 1.9717 4.34367 1.94925 4.54434 2.09575L4.59268 2.1359L8.84268 6.1359C9.03746 6.31922 9.05137 6.61975 8.88442 6.81982L8.84268 6.8641L4.59268 10.8641C4.3916 11.0534 4.07516 11.0438 3.8859 10.8427C3.7112 10.6571 3.70593 10.3732 3.86432 10.1817L3.90732 10.1359L7.77 6.50001L3.90732 2.8641C3.7217 2.6894 3.69925 2.40634 3.84575 2.20566L3.8859 2.15732Z" fill="#AAB5C0" data-sentry-element="path" data-sentry-source-file="Breadcrumb.tsx"></path></svg>
                <strong>'{search}'</strong></div>}
            </div>       

          <section class="screen_serch">
            <div class="search_contents">
              <div class="search_side_filter"></div>

              <div class="search_main_contents">
                <div class="search_result">
                  <span><strong>'{search}'</strong> 에 대한 검색결과</span>
                  <div><span>연관검색어:</span></div>
                </div>

                <div class="search_filter_bts">
                  <div><a><Switch onChange={onChange} /><span>배송비 포함</span></a></div>
                  
                  <div>
                    <select>
                      <option value="all">36 개씩 보기</option>
                    </select>
                  </div>
                </div>

                  <ul class="search_contents_list_box">
                    {product.map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
                  <div class="list_info_small">
                      <div class="search_info_title"> <span>{num.name}</span></div>
                    <div class="delivery_info_box_small">
                      <span class="price_small">{num.price}원</span>
                      { num.delivery === "무료배송" ? <span class="delivery_info_small">{num.delivery}</span> : <img class="delivery_info_small" name={num.delivery}  src={num.delivery_img}/> }                    
                      </div>
                    <div class="price_piece_box"><span class="price_piece_small"></span></div>
                    <div class="review_box_small"><span class="score_bg_small"><span class="score_active_small" style={{width: num.scope}}></span></span><span class="review_num">({num.review})</span></div>
                  </div></li>)}
                  </ul>

              </div>
            </div>
            {scroll < 700 ? <div class="search_paginations_scroll">
              <Paginations align="center" defaultCurrent={1} total={50} />
              </div> : null}
            <div class="search_paginations">
                <div></div>
                <Paginations align="center" defaultCurrent={1} total={50} /> 
            </div>


            <article class="search_shopping_cart">

              <div class="cart_box">
                <div class="side_cart"><span>장바구니</span> <em class="cart_count">0</em></div>
                <div class="recently_viewed_products"><span>최근본상품</span> <em class="cart_count">0</em></div>
                <div class="recently_viewed_no_list"> <span class="no_item">최근본 상품이<br/>없습니다.</span></div>
              </div>

            </article>

          </section>

          <section class="search_list_contener_gray">
              <h2 class="search_title_gray">이 상품을 검색한 다른 분들이 함께 본 상품</h2>

              <div class="white_btn_left nonarrow" onClick={(e)=> {white_btn_left(e)}}>left</div>

              <div class="pruduct_list_box_small">
              <div class="pruduct_list_small">
                <ul class="list_box_small">
                  {post.filter((num) => num.part === 'TS')
                  .map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
                  <div class="list_info_small">
                      <div class="info_title_small"> <span>{num.name}</span></div>
                    <div class="delivery_info_box_small">
                      <span class="price_small">{num.price}원</span>
                      { num.delivery === "무료배송" ? <span class="delivery_info_small">{num.delivery}</span> : <img class="delivery_info_small" name={num.delivery}  src={num.delivery_img}/> }                    
                      </div>
                    <div class="price_piece_box"><span class="price_piece_small"></span></div>
                    <div class="review_box_small"><span class="score_bg_small"><span class="score_active_small" style={{width: num.scope}}></span></span><span class="review_num">({num.review})</span></div>
                  </div></li>)}
                </ul>
              </div>
              </div>

              <div  class="white_btn_right" onClick={(e)=> {white_btn_right(e)}}>right</div>

          </section>

          <section class="search_list_contener">
              <h2 class="pruduct_title_small">오늘의<span>판매자 특가</span></h2>

              <div class="white_btn_left nonarrow" onClick={(e)=> {white_btn_left(e)}}>left</div>

              <div class="pruduct_list_box_small">
              <div class="pruduct_list_small">
                <ul class="list_box_small">
                  {post.filter((num) => num.part === 'TS')
                  .map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
                  <div class="list_info_small">
                      <div class="info_title_small"> <span>{num.name}</span></div>
                    <div class="delivery_info_box_small">
                      <span class="price_small">{num.price}원</span>
                      { num.delivery === "무료배송" ? <span class="delivery_info_small">{num.delivery}</span> : <img class="delivery_info_small" name={num.delivery}  src={num.delivery_img}/> }                    
                      </div>
                    <div class="price_piece_box"><span class="price_piece_small"></span></div>
                    <div class="review_box_small"><span class="score_bg_small"><span class="score_active_small" style={{width: num.scope}}></span></span><span class="review_num">({num.review})</span></div>
                  </div></li>)}
                </ul>
              </div>
              </div>

              <div  class="white_btn_right" onClick={(e)=> {white_btn_right(e)}}>right</div>

          </section>

        </>: null}

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

export default Search
