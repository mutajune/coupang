import {React, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Product = ({login, setlogin, user, setdivision, getproduct, setsearch, sildermenu, setsildermenu, post, option, detall, getcart, getdata, gatoption, scroll }) => {
  const [detall_img, setdetall_img] = useState("")
  const [option_num , setoption_num] = useState(1)

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
  
  async function addcart(e) {
    const amounts = e.target.parentElement.parentElement.children[0].children[0].value
    if (login === true) {
      try {
        //응답 성공 
        const response = await axios.get(`http://localhost:3000/cart_add?user=${user[0].user_sno}&product=${option[option_num].option_product}&amount=${amounts}`);
        console.log("장바구니 저장")
        getcart(user[0].user_sno); 
      } catch (error) {
        //응답 실패
        console.log(user[0].user_sno)
        console.error(error);
      }

    } else {
      alert("로그인 하여해요")
    }

}

// product_detall
  function product_detall_on (e) {
    console.log(e)
    getdata(e)
    gatoption(e)
  }


  return (
    <section class="coupang">
      <header>
          <section id="top_bar">
            <div class="header_mini top_menus" >
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
      
      
      {detall.map((num) => <section class="product_detall">
        <div class="serch_division_text"><a>쿠팡 홈</a>
          <svg class="srp_arrowIcon__bNaNA" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-sentry-element="svg" data-sentry-component="ArrowIcon" data-sentry-source-file="Breadcrumb.tsx"><path d="M3.8859 2.15732C4.0606 1.9717 4.34367 1.94925 4.54434 2.09575L4.59268 2.1359L8.84268 6.1359C9.03746 6.31922 9.05137 6.61975 8.88442 6.81982L8.84268 6.8641L4.59268 10.8641C4.3916 11.0534 4.07516 11.0438 3.8859 10.8427C3.7112 10.6571 3.70593 10.3732 3.86432 10.1817L3.90732 10.1359L7.77 6.50001L3.90732 2.8641C3.7217 2.6894 3.69925 2.40634 3.84575 2.20566L3.8859 2.15732Z" fill="#AAB5C0" data-sentry-element="path" data-sentry-source-file="Breadcrumb.tsx"></path></svg>
          <strong>{num.category}</strong>
        </div>

        <div class="detall_hedaer">
          <div class="detall_hedaer_contents">
            <div  class="detall_left_menu">
              <img onMouseOver={(e)=> {setdetall_img(e.target.name);}} name="" className={detall_img === "" ? "detall_img_focus" : ""} src={num.list_image}/>
              <img onMouseOver={(e)=> {setdetall_img(e.target.name);}} name="1" className={detall_img === "1" ? "detall_img_focus" : ""} src={num.list_image1}/>
              <img onMouseOver={(e)=> {setdetall_img(e.target.name);}} name="2" className={detall_img === "2" ? "detall_img_focus" : ""} src={num.list_image2}/>
              <img onMouseOver={(e)=> {setdetall_img(e.target.name);}} name="3" className={detall_img === "3" ? "detall_img_focus" : ""} src={num.list_image3}/>
              <img onMouseOver={(e)=> {setdetall_img(e.target.name);}} name="4" className={detall_img === "4" ? "detall_img_focus" : ""} src={num.list_image4}/>
              <img onMouseOver={(e)=> {setdetall_img(e.target.name);}} name="5" className={detall_img === "5" ? "detall_img_focus" : ""} src={num.list_image5}/>
              <img onMouseOver={(e)=> {setdetall_img(e.target.name);}} name="6" className={detall_img === "6" ? "detall_img_focus" : ""}src={num.list_image6}/>
              <img onMouseOver={(e)=> {setdetall_img(e.target.name);}} name="7" className={detall_img === "7" ? "detall_img_focus" : ""} src={num.list_image7}/>
            </div>
            <div class="detall_big_img">
              {detall_img === "" ?  <img src={num.list_image}/> : null}
              {detall_img === "1" ? <img src={num.list_image1}/> : null}
              {detall_img === "2" ? <img src={num.list_image2}/> : null}
              {detall_img === "3" ? <img src={num.list_image3}/> : null}
              {detall_img === "4" ? <img src={num.list_image4}/> : null}
              {detall_img === "5" ? <img src={num.list_image5}/> : null}
              {detall_img === "6" ? <img src={num.list_image6}/> : null}
              {detall_img === "7" ? <img src={num.list_image7}/> : null}   
            </div>
           
            <div class="detall_contents">
              <div class="detall_contents_header">
                <div class="detall_contents_text">
                {option.length === 0 ? <></>:
                  <div><strong>{option[option_num - 1].option_name}</strong></div>}
                  <div>
                    <span>원산지: 상품 상세설명 참조</span>
                    <div class="review_box"><span class="score_bg"><span class="score_active" style={{width: num.scope}}></span></span><span class="review_num">({num.review})</span></div>
                  </div>
                </div>

                <div class="detall_contents_bt">
                  <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.174 4.43124C13.4923 2.68731 15.0031 1.70166 16.9982 1.52692L17.2732 1.50812C18.8998 1.42763 20.5664 1.94772 21.7255 2.97238C23.1953 4.27167 24 6.252 24 8.31785C24 12.688 20.8931 16.8316 12.5507 22.3348C12.2166 22.5552 11.7834 22.5552 11.4493 22.3348C3.10692 16.8316 0 12.688 0 8.31785C0 6.252 0.80471 4.27167 2.27453 2.97238C3.43363 1.94772 5.10025 1.42763 6.72677 1.50812C8.8591 1.61362 10.4478 2.60804 11.826 4.43124L12 4.66712L12.174 4.43124ZM20.4008 4.47083C19.6531 3.80978 18.4997 3.44987 17.3721 3.50568C15.5061 3.598 14.1913 4.71228 12.8675 7.02107C12.4833 7.69117 11.5167 7.69117 11.1325 7.02107C9.80866 4.71228 8.49392 3.598 6.62792 3.50568C5.50027 3.44987 4.34694 3.80978 3.59916 4.47083C2.58082 5.37102 2 6.80038 2 8.31785C2 11.755 4.52788 15.2449 11.7579 20.1359L11.999 20.2981L12.6249 19.8752C19.4355 15.2067 21.9098 11.8187 21.9976 8.50204L22 8.31785C22 6.80038 21.4192 5.37102 20.4008 4.47083Z" fill="#454F5B"></path></svg>                  </button>
                  <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4C22 5.933 20.433 7.5 18.5 7.5C17.604 7.5 16.7866 7.16332 16.1675 6.60956L8.88141 11.0933C8.95876 11.3825 9 11.6864 9 12C9 12.3136 8.95876 12.6175 8.88142 12.9067L16.1675 17.3904C16.7866 16.8367 17.604 16.5 18.5 16.5C20.433 16.5 22 18.067 22 20C22 21.933 20.433 23.5 18.5 23.5C16.567 23.5 15 21.933 15 20C15 19.6864 15.0412 19.3825 15.1186 19.0933L7.83249 14.6096C7.21338 15.1633 6.39601 15.5 5.5 15.5C3.567 15.5 2 13.933 2 12C2 10.067 3.567 8.50002 5.5 8.50002C6.396 8.50002 7.21337 8.83671 7.83248 9.39047L15.1186 4.90671C15.0412 4.61753 15 4.31358 15 4C15 2.067 16.567 0.5 18.5 0.5C20.433 0.5 22 2.067 22 4Z" fill="#454F5B"></path></svg></button>
                </div>
              </div>

              <div class="detall_contents_price">
                <span class="detal_price">{num.discount}% <span>{num.price}</span></span>
                <br/><span class="detall_coupang_price">{num.coupang_price}</span>
                <br/><span class="detall_real_price">{num.real_price}</span>
              </div>

              <div class="detall_contents_options">
                <div><span>더 많은 옵션 보기</span><div><span>{num.standard}{num.number}{num.unit} x </span></div></div>
                <div></div>
                <div class="option_table_list">
                    {option.length === 0 ? <></>:
                  <div>{option.map((num) => <div class="option_list_item">
                    <div class="option_list_checkbox"><input onClick={()=>{setoption_num(num.option_num)}} type="checkbox" name="num" checked={option_num === num.option_num} /></div>
                    <div class="option_list_num">{num.option_num}</div>
                    <div class="option_list_price">{num.option_price}</div></div> )}
                  </div> }
                  <div class="all_option_bt"><button> 모든 옵션 보기</button></div>
                </div>
              </div>

              <div>{num.delivery}</div>
              <div></div>
              <div></div>
              <div></div>

              <div><strong>PC에서도 간편한 결제</strong></div>
              <div class="purchase_bt_box">
                <div class="number_input"><input type="text" value="1"/></div>
                <div class="purchase_bt"><button onClick={(e)=> {addcart(e)}}>장바구니 담기</button> <button>바로구매</button></div>
              </div>
              <div></div>
            </div>

          </div>

            <article class="detall_side_bar">
              <ul><li></li></ul> 
              <ul><li></li></ul>
            </article>
        </div>

        <section class="detall_pruduct_list_contener">
          <div class="detall_pruduct_list_box"><h2 class="detall_pruduct_title showping">함께 비교하면 좋을 상품</h2>

          <div class="detall_pruduct_list">
            <div  class="detall_black_btn_left nonarrow" onClick={(e)=> {detall_btn_left(e)}}>left</div>
            <ul class="detall_list_box">
              {post.filter((num) => num.part === 'TS')
              .map((num) => <li> <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name}  class="" src={num.list_image}/>
              <div class="detall_list_info">
                  <div class="detall_info_title"> <span>{num.name}</span></div>
                <div class="detall_delivery_info_box">
                  { num.delivery === "무료배송" ? <span class="detall_delivery_info">{num.delivery}</span> : <img class="detall_delivery_info" name={num.delivery}  src={num.delivery_img}/> }                    
                  </div>
                <div class="detall_review_box"><span class="detall_score_bg"><span class="detall_score_active" style={{width: num.scope}}></span></span><span class="detall_review_num">({num.review})</span></div>
              </div></li>)}
            </ul>
            <div  class="detall_black_btn_right" onClick={(e)=> {detall_btn_right(e);}}>right</div>
          </div>
          </div>
        </section>

        <section class="detall_pruduct_list_contener_small_calc">
          <section class="detall_pruduct_list_contener_small">
            <h2 class="detall_pruduct_title_small">지금 이 상품이 필요하신가요?</h2>

            <div class="detall_white_btn_left nonarrow" onClick={(e)=> {detall_white_btn_left(e)}}>left</div>

            <div class="detall_pruduct_list_box_small">
            <div class="detall_pruduct_list_small">
              <ul class="detall_list_box_small">
                {post.filter((num) => num.part === 'NP')
                .map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
                <div class="detall_list_info_small">
                    <div class="detall_info_title_small"> <span>{num.name}</span></div>
                  <div class="detall_delivery_info_box_small">
                    <span class="detall_price_small">{num.price}원</span>
                    { num.delivery === "무료배송" ? <span class="detall_delivery_info_small">{num.delivery}</span> : <img class="detall_delivery_info_small" name={num.delivery}  src={num.delivery_img}/> }                    
                    </div>
                  <div class="detall_price_piece_box"><span class="detall_price_piece_small"></span></div>
                  <div class="detall_review_box_small"><span class="detall_score_bg_small"><span class="detall_score_active_small" style={{width: num.scope}}></span></span><span class="detall_review_num">({num.review})</span></div>
                </div></li>)}
              </ul>
            </div>
            </div>

            <div  class="detall_white_btn_right" onClick={(e)=> {detall_white_btn_right(e)}}>right</div>

          </section>
        </section>
        
        <section class="pruduct_detall_contener">
        <div class="pruduct_detall_bt_box" className={ scroll > 2200 ?  "pruduct_detall_bt_box_fix" : "pruduct_detall_bt_box"}>
          <button onClick={()=>{}}>상품상제</button>
          <button onClick={()=>{}}>상품평 ( {num.review} )</button>
          <button onClick={()=>{}}>상품문의</button>
          <button onClick={()=>{}}>배송/교환/반품 안내</button>
        </div></section>

        <section>
          <div class="notation_title"><span >필수 표기 정보</span> </div>
          
          <div class="notation">
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name1}</span></div> <div class="notation_text"><span>{num.notation_valvue1}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name2}</span></div> <div class="notation_text"><span>{num.notation_valvue2}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name3}</span></div> <div class="notation_text"><span>{num.notation_valvue3}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name4}</span></div> <div class="notation_text"><span>{num.notation_valvue4}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name5}</span></div> <div class="notation_text"><span>{num.notation_valvue5}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name6}</span></div> <div class="notation_text"><span>{num.notation_valvue6}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name7}</span></div> <div class="notation_text"><span>{num.notation_valvue7}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name8}</span></div> <div class="notation_text"><span>{num.notation_valvue8}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name9}</span></div> <div class="notation_text"><span>{num.notation_valvue9}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name10}</span></div> <div class="notation_text"><span>{num.notation_valvue10}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name11}</span></div> <div class="notation_text"><span>{num.notation_valvue11}</span></div></div>
            <div class="notation_box">  <div class="notation_header"><span>{num.notation_name12}</span></div> <div class="notation_text"><span>{num.notation_valvue12}</span></div></div>
            <div class="last_notation_box">  <div class="notation_header"><span>{num.notation_name13}</span></div> <div class="notation_text"><span>{num.notation_valvue13}</span></div></div>
          </div>

          <div class="notation_warning">
            <span>판매자가 현금거래를 요구하면 거부하시고 즉시 사기 거래 신고센터 (1670-9832)에 신고하시기 바랍니다.</span>
          </div>

        </section>

        <section class="detall_img_box">
          <img src={num.d_img1}/>
          <img src={num.d_img2}/>
          <img src={num.d_img3}/>
          <img src={num.d_img4}/>
          <img src={num.d_img5}/>
          <img src={num.d_img6}/>
        </section>
       
        <section class="detall_pruduct_list_contener_small_calc">
          <section class="detall_pruduct_list_contener_small">
            <h2 class="detall_pruduct_title_small">지금 이 상품이 필요하신가요?</h2>

            <div class="detall_white_btn_left nonarrow" onClick={(e)=> {detall_white_btn_left(e)}}>left</div>

            <div class="detall_pruduct_list_box_small">
            <div class="detall_pruduct_list_small">
              <ul class="detall_list_box_small">
                {post.filter((num) => num.part === 'NP')
                .map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
                <div class="detall_list_info_small">
                    <div class="detall_info_title_small"> <span>{num.name}</span></div>
                  <div class="detall_delivery_info_box_small">
                    <span class="detall_price_small">{num.price}원</span>
                    { num.delivery === "무료배송" ? <span class="detall_delivery_info_small">{num.delivery}</span> : <img class="detall_delivery_info_small" name={num.delivery}  src={num.delivery_img}/> }                    
                    </div>
                  <div class="detall_price_piece_box"><span class="detall_price_piece_small"></span></div>
                  <div class="detall_review_box_small"><span class="detall_score_bg_small"><span class="detall_score_active_small" style={{width: num.scope}}></span></span><span class="detall_review_num">({num.review})</span></div>
                </div></li>)}
              </ul>
            </div>
            </div>

            <div  class="detall_white_btn_right" onClick={(e)=> {detall_white_btn_right(e)}}>right</div>

          </section>
        </section>
        
        <section class="review_contener">
          <div class="review_header">
            <div><span>상품평</span></div>
            <div><span>상품평 운영원칙</span></div>
          </div>

          <div class="review_guide"><span>동일한 상품에 대해 작성된 상품평으로, 판매자는 다를 수 있습니다.</span></div>

          <div class="review_score_box"><span class="review_score_bg"><span class="review_score_active" style={{width: num.scope}}></span></span><span class="review_score_num">{num.review}</span> <button> 자세히보기</button></div>
        
          <div class="review_detall">
            <div>
              <h4>성분 만족도</h4>
              <div class="review_graph"><span>아주만족해요</span>
              
                <div class="graph_box">
                  <div class="graph"><div class="graph_num" style={{width: "50%"}}></div></div>
                  <span>50%</span>
                </div>
              </div>
            </div>

            <div>
              <h4>성분 만족도</h4>
              <div class="review_graph"><span>아주만족해요</span>
              
                <div class="graph_box">
                  <div class="graph"><div class="graph_num_blue" style={{width: "80%"}}></div></div>
                  <span>80%</span>
                </div>
              </div>
            </div>

            <div>
              <h4>성분 만족도</h4>
              <div class="review_graph"><span>아주만족해요</span>
              
                <div class="graph_box">
                  <div class="graph"><div class="graph_num_black" style={{width: "90%"}}></div></div>
                  <span>90%</span>
                </div>
              </div>
            </div>


          </div>

          <div class="review_search">
            <div class="review_search_bts"><button>베스트순</button><button>최신순</button></div>
            <div class="review_input_menu">
              <div><input placeholder="상품명을 검색해보세요"/></div>
              <menu class="review_menu">
              
              <li onClick={()=>{}}><a>모든 별점 보기</a></li>

              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

             </menu>
            </div>
          </div>
        </section>

        <section class="detall_pruduct_list_contener">
          <div class="detall_pruduct_list_box"><h2 class="detall_pruduct_title showping">함께 비교하면 좋을 상품</h2>

          <div class="detall_pruduct_list">
            <div  class="detall_black_btn_left nonarrow" onClick={(e)=> {detall_btn_left(e)}}>left</div>
            <ul class="detall_list_box">
              {post.filter((num) => num.part === 'TS')
              .map((num) => <li> <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name}  class="" src={num.list_image}/>
              <div class="detall_list_info">
                  <div class="detall_info_title"> <span>{num.name}</span></div>
                <div class="detall_delivery_info_box">
                  { num.delivery === "무료배송" ? <span class="detall_delivery_info">{num.delivery}</span> : <img class="detall_delivery_info" name={num.delivery}  src={num.delivery_img}/> }                    
                  </div>
                <div class="detall_review_box"><span class="detall_score_bg"><span class="detall_score_active" style={{width: num.scope}}></span></span><span class="detall_review_num">({num.review})</span></div>
              </div></li>)}
            </ul>
            <div  class="detall_black_btn_right" onClick={(e)=> {detall_btn_right(e);}}>right</div>
          </div>
          </div>
        </section>

        <section class="inquiry_contener">
          <div><h2>상품문의</h2> <button>문의상품</button></div>
          <ul>
            <li >구매한 상품의 <em>취소/반품은 마이쿠팡 구매내역에서 신청</em> 가능합니다.</li>
            <li >상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.</li>
            <li ><em >가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1 문의하기</em>를 이용해주세요.</li>
            <li ><em >"해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수 있습니다.</em></li><li class="twc-list-disc twc-ml-[16px]">공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.</li>
          </ul>

          <div class="inquiry_input"><input placeholder="상품평을 검색해보세요."/></div>

          <div></div>
          <div><p>판매 부적격 상품 또는 허위과장광고 및 지식재산권을 침해하는 상품의 경우 신고하여 주시기 바랍니다.</p></div>
        </section>

        <section>
          <div class="delivery_information">
            <div class="delivery_information_title"><span>배송정보</span></div>
            <div class="delivery_information_contents">
              <div class="information">
                <div  class="information_contain"> 
                  <div class="information"> <div class="information_header"><span>배송방법</span></div> <div  class="information_detall"><span>{num.delivery_method}</span></div></div>
                  <div class="information"> <div class="information_header"><span>배송사</span></div> <div class="information_detall"><span>{num.delivery_company}</span></div></div>
                </div>
                <div class="information_contain2 sols"><div class="information_header"><span>배송비</span></div> <div class="information_detall"><span>{num.delivery_cost}</span></div></div>
              </div>
              <div class="information"><div class="information_header"><span>묶음배송 여부</span></div> <div class="information_detall"><span>{num.Bundled_not}</span></div></div>
              <div class="information"><div class="information_header"><span>배송기간</span></div> <div class="information_detall"><span>{num.delivery_period}</span></div></div>
            </div>
            <div><span></span></div>

          </div>

          <div class="delivery_information">
            <div class="delivery_information_title"><span>교환/반품</span>
              <div><span>ㆍ교환/반품에 관한 일반적인 사항은 판매자가 제시사항보다 관계법령이 우선합니다.
                <br/>다만, 판매자의 제시사항이 관계법령보다 소비자에게 유리한 경우에는 판매자 제시사항이 적용됩니다.</span></div>            
            </div>
            <div class="delivery_information_contents">
              <div class="information"><div class="information_header"><span>교환/반품 비용 <br/> (왕복비용)</span></div> <div class="information_detall"><span>{num.exchange_cost}</span></div></div>
              <div class="information"><div class="information_header"><span>교환/반품 신청 기준일</span></div> <div class="information_detall"><span>{num.exchange_date}</span></div></div>
            </div>
            <div><span></span></div>

          </div>

          <div class="delivery_information">
            <div class="delivery_information_title">
              <span>교환/반품 제한사항</span>
              <div><span>ㆍ주문/제작 상품의 경우, 상품의 제작이 이미 진행된 경우
                ㆍ상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가 훼손된 경우 (단, 내용 확인을 위한 포장 개봉의 경우는 예외)
                ㆍ고객의 사용, 시간경과, 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우
                ㆍ세트상품 일부 사용, 구성품을 분실하였거나 취급 부주의로 인한 파손/고장/오염으로 재판매 불가한 경우
                ㆍ모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 달라, 고객이 단순 변심으로 교환/반품을 무료로 요청하는 경우
                <br/>ㆍ제조사의 사정 (신모델 출시 등) 및 부품 가격 변동 등에 의해 무료 교환/반품으로 요청하는 경우</span></div>
                <span>※ 각 상품별로 아래와 같은 사유로 취소/반품이 제한될 수 있습니다.</span>
            </div>
            <div class="delivery_information_contents">
              <div class="information"><div class="information_header"><span>의류/잡화/수입명품</span></div> <div class="information_detall"><span>{num.limit_thing1}</span></div></div>
              <div class="information"><div class="information_header"><span>계절상품/식품/화장품</span></div> <div class="information_detall"><span>{num.limit_thing2}</span></div></div>
              <div class="information"><div class="information_header"><span>전자/가전/설치상품</span></div> <div class="information_detall"><span>{num.limit_thing3}</span></div></div>
              <div class="information"><div class="information_header"><span>자동차용품</span></div> <div class="information_detall"><span>{num.limit_thing4}</span></div></div>
              <div class="information"><div class="information_header"><span>CD/DVD/GAME/<br/>BOOK</span></div> <div class="information_detall"><span>{num.limit_thing5}</span></div></div>
            </div>
            <div><span></span></div>

          </div>

          <div class="delivery_information">
            <div class="delivery_information_title"><span>판매자 정보</span></div>
            <div class="delivery_information_contents">
              <div class="information">
                <div  class="information_contain"> 
                  <div class="information"> <div class="information_header"><span>상호/대표자</span></div> <div  class="information_detall"><span>{num.seller_mutual}</span></div></div>               
                  <div class="information"> <div class="information_header"><span>e-mail</span></div> <div class="information_detall"><span>{num.seller_email}</span></div></div>
                  <div class="information"> <div class="information_header"><span>통신판매업 신고번호</span></div> <div class="information_detall"><span>{num.seller_report}</span></div></div>
                </div>
                <div class="information_contain2">
                  <div class="information"><div class="information_header"><span>사업장 소재지</span></div> <div class="information_detall"><span>{num.seller_workplace}</span></div></div>
                  <div class="information"><div class="information_header"><span>연락처</span></div> <div class="information_detall"><span>{num.seller_phone}</span></div></div>
                  <div class="information"><div class="information_header"><span>사업자번호</span></div> <div class="information_detall"><span>{num.seller_business}</span></div></div>
                </div>
              </div>
              <div class="information"><div class="information_header"><span>구매안전 서비스</span></div> <div class="information_detall"><span>{num.seller_safety}</span> <span>본 판매자는 고객님의 안전거래를 위해 관련 법률에 의거하여 쿠팡페이의 구매안전서비스를 적용하고 있습니다.</span></div></div>
            </div>
            <div><span></span></div>

          </div>


        </section>

        <section class="detall_pruduct_list_contener">
          <div class="detall_pruduct_list_box"><h2 class="detall_pruduct_title showping">함께 비교하면 좋을 상품</h2>

          <div class="detall_pruduct_list">
            <div  class="detall_black_btn_left nonarrow" onClick={(e)=> {detall_btn_left(e)}}>left</div>
            <ul class="detall_list_box">
              {post.filter((num) => num.part === 'TS')
              .map((num) => <li> <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name}  class="" src={num.list_image}/>
              <div class="detall_list_info">
                  <div class="detall_info_title"> <span>{num.name}</span></div>
                <div class="detall_delivery_info_box">
                  { num.delivery === "무료배송" ? <span class="detall_delivery_info">{num.delivery}</span> : <img class="detall_delivery_info" name={num.delivery}  src={num.delivery_img}/> }                    
                  </div>
                <div class="detall_review_box"><span class="detall_score_bg"><span class="detall_score_active" style={{width: num.scope}}></span></span><span class="detall_review_num">({num.review})</span></div>
              </div></li>)}
            </ul>
            <div  class="detall_black_btn_right" onClick={(e)=> {detall_btn_right(e);}}>right</div>
          </div>
          </div>
        </section>

        <section class="detall_pruduct_list_contener_small_calc">
          <section class="detall_pruduct_list_contener_small">
            <h2 class="detall_pruduct_title_small">지금 이 상품이 필요하신가요?</h2>

            <div class="detall_white_btn_left nonarrow" onClick={(e)=> {detall_white_btn_left(e)}}>left</div>

            <div class="detall_pruduct_list_box_small">
            <div class="detall_pruduct_list_small">
              <ul class="detall_list_box_small">
                {post.filter((num) => num.part === 'NP')
                .map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
                <div class="detall_list_info_small">
                    <div class="detall_info_title_small"> <span>{num.name}</span></div>
                  <div class="detall_delivery_info_box_small">
                    <span class="detall_price_small">{num.price}원</span>
                    { num.delivery === "무료배송" ? <span class="detall_delivery_info_small">{num.delivery}</span> : <img class="detall_delivery_info_small" name={num.delivery}  src={num.delivery_img}/> }                    
                    </div>
                  <div class="detall_price_piece_box"><span class="detall_price_piece_small"></span></div>
                  <div class="detall_review_box_small"><span class="detall_score_bg_small"><span class="detall_score_active_small" style={{width: num.scope}}></span></span><span class="detall_review_num">({num.review})</span></div>
                </div></li>)}
              </ul>
            </div>
            </div>

            <div  class="detall_white_btn_right" onClick={(e)=> {detall_white_btn_right(e)}}>right</div>

          </section>
        </section>

      </section>)
      }
      

    </section>
  )
}

export default Product
