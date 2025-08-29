import {React, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Cascader, Collapse } from "antd";
import axios from 'axios';

const My_page = ({order, arrive, post ,login, setlogin, user, setdivision, getproduct, setsearch, sildermenu, setsildermenu, logout, cart }) => {

  const [pw, setpw] = useState("")
  const [edit, setedit] = useState(false)
  const [togle, settogle] = useState([])

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

  const usernum = user[0].user_sno
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

  async function adit_login(e) {
    const e_mail = user[0].user_e_mail
    e.preventDefault()
      try {
      //응답 성공 
      const response = await axios.post(`http://localhost:3000/adit/check` ,
        {e_mail , pw } ,
        { headers: {"Content-Type": "application/x-www-form-urlencoded"}});
      console.log(response.data[0].is_success)
      if(response.data[0].is_success === true) {
        setedit(true)
      } else if (response.data[0].is_success === false) {
        alert("비밀번호가 틀렸습니다.")
      } else{
      }
    } catch (error) {
      //응답 실패
    }
  } 

  async function edit_email(e) {
    e.preventDefault()
     const newemail = e.target.parentElement.children[0].value
      console.log(newemail)
     if(newemail == "") {
      alert("이메일을 입력해주세요")
     } else if (newemail.includes("@") === false) {
      alert("유효한 이메일이 아닙니다.")
     } else if ( newemail.includes("@") === true ) {
        try {
        //응답 성공 
        const response = await axios.post(`http://localhost:3000/adit/e_mail`,
        {newemail, usernum},
        { headers: {"Content-Type": "application/x-www-form-urlencoded"}});
          if(response.data[0].is_success === true) {
            Gohome()
          } else if (response.data.is_success === false) {
            alert("오류가 발생했습니다. 관리자에게 문의해주새요.")
          } else{
            alert("오류가 발생했습니다. 관리자에게 문의해주새요.")
          }
      } catch (error) {
        //응답 실패
      }
     } else {
      alert("오류가 발생했습니다. 관리자에게 문의해주새요.")
     }


  }  

  async function edit_phon(e) {
    e.preventDefault()
     const newphon = e.target.parentElement.children[0].value
      console.log(newphon)
     if(newphon == "") {
      alert("이메일을 입력해주세요")
     } else if (newphon.length < 11) {
      alert("유효한 이메일이 아닙니다.")
     } else if (newphon != "" && newphon.length > 10 ) {
        try {
        //응답 성공 
        const response = await axios.post(`http://localhost:3000/adit/phon`,
        {newphon, usernum},
        { headers: {"Content-Type": "application/x-www-form-urlencoded"}});
          if(response.data[0].is_success === true) {
            Gohome()
          } else if (response.data.is_success === false) {
            alert("오류가 발생했습니다. 관리자에게 문의해주새요.")
          } else{
            alert("오류가 발생했습니다. 관리자에게 문의해주새요.")
          }
      } catch (error) {
        //응답 실패
      }
     } else {
      alert("오류가 발생했습니다. 관리자에게 문의해주새요.")
     }


  }  

  async function edit_pw(e) {
    e.preventDefault()
    const nowpw = e.target.parentElement.children[0].children[0].children[1].value;
    const newpw = e.target.parentElement.children[0].children[1].children[1].value;
    const renewpw = e.target.parentElement.children[0].children[2].children[1].value;
    if(nowpw == "" || newpw == ""|| renewpw == "" ) {
      alert("비밀번호를 입력해주세요")
    } else if ( nowpw != pw) {
      alert("현재 비밀번호를 틀렸습니다.")
    } else if ( newpw != renewpw) {
      alert("새 비밀번호가 다릅니다.")
    } else if ( nowpw == newpw) {
      alert("기존 비밀번호와 같습니다.")
    } else if ( newpw.length < 2) {
      alert("비밀번호가 너무 짧습니다.")
    } else if (nowpw === pw && newpw === renewpw )  {

      try {
      //응답 성공 
      const response = await axios.post(`http://localhost:3000/adit/pw`,
      {nowpw , newpw, usernum},
      { headers: {"Content-Type": "application/x-www-form-urlencoded"}});
          console.log(response.data[0].is_success)
          if(response.data[0].is_success === true) {
            alert("비밀번호가 변경됬습니다.")
            Gohome()
          } else if (response.data.is_success === false) {
            alert("오류가 발생했습니다. 관리자에게 문의해주새요.")
          } else{
            alert("오류가 발생했습니다. 관리자에게 문의해주새요.")
          }
        } catch (error) {
          //응답 실패
        }      

    } else (
      alert("오류가 발생했습니다. 관리자에게 문의해주새요.")
    )
    console.log(e.target.parentElement.children[0].children[0].children[1].value)
    console.log(e.target.parentElement.children[0].children[1].children[1].value)
    console.log(e.target.parentElement.children[0].children[2].children[1].value)

  }  

  function togleuse (id) {
   settogle(prevtogle => ({
    ...prevtogle, [id]:!prevtogle[id]
   }))
   console.log(togle)
  }

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


    <section class="adit_bg_grey">
      <div class="adit_information_check_form">
        
        <div class="adit_information_check">
          <h1>회원정보 수정</h1>
          {edit ?
          <>    
          <form class="adit_information_box" >
            <div class="adit_information_data_box">
              <div class="adit_information_data_header"><span>아이디(이메일)</span></div>
              <div class="adit_information_data_body">
                <div class="adit_data_body">
                <span>{user[0].user_e_mail}</span>
                <button id="email" class="adit_bt" className={togle.email ? "adit_bt_active" : "adit_bt"} onClick={(e)=>{ e.preventDefault(); togleuse(e.target.id)}}>
                  {togle.email ? <>이메일 변경 취소</> : <>이메일 변경</>}</button>
                  {togle.email? <div class="toggle_box"><input/> <button class="toggle_bt" onClick={(e)=>{edit_email(e)}}>인증메일 전송</button></div> : null}
                </div>
               </div>
            </div>
          </form>

          <form class="" >
            <div class="adit_information_data_box">
              <div class="adit_information_data_header"><span>이름</span></div>
              <div class="adit_information_data_body">
                <div class="adit_data_body">
                  <span>{user[0].user_name}</span>
                  <button id="username" class="adit_bt" className={togle.username ? "adit_bt_active" : "adit_bt"} onClick={(e)=>{ e.preventDefault(); togleuse(e.target.id)}}>
                    개명하셨다면? <strong id="username">이름변경 > </strong></button>
                  {togle.username? <div class="toggle_box"><span>회원님의 명의로 등록된 휴대폰으로 본인인증을 진행합니다</span> <button class="toggle_bt">본인명의 휴대폰으로 인증</button></div> : null}
                </div>
            </div>
          </div>       
           </form>

          <form class="" >
            <div class="adit_information_data_box">
              <div class="adit_information_data_header"><span>휴대폰번호</span></div>
              <div class="adit_information_data_body">
                <div class="adit_data_body">
                <span>{user[0].user_phone}</span> 
                <button id="phonnum" class="adit_bt" className={togle.phonnum ? "adit_bt_active" : "adit_bt"} onClick={(e)=>{ e.preventDefault(); togleuse(e.target.id)}}>
                  {togle.phonnum ? <>휴대폰 변경 취소</> : <>휴대폰 번호 변경</>}</button>
                  {togle.phonnum? <div class="toggle_box"><input type="text" /> <button class="toggle_bt" onClick={(e)=>{edit_phon(e)}}>인증번호 전송</button></div> : null}
                </div>
              </div>     
            </div> 
           </form>

          <div class="" >
            <div class="adit_information_data_box">
              <div class="adit_information_data_header"><span>비밀번호</span></div>
              <div class="adit_information_data_body">
                <form class="adit_form_pwbody" onSubmit={(e)=> {edit_pw(e)}}>
                  <div class="adit_pw_box">
                    <span>현재 비밀번호</span>
                    <input type="password" class="adit_bt"/>
                  </div>

                  <div class="adit_pw_box">
                    <span>새 비밀번호</span>
                    <input type="newpassword" class="adit_bt" />
                  </div>

                  <div class="adit_pw_box">
                    <span>비밀번호 다시 입력</span>
                    <input type="repassword" class="adit_bt" />
                  </div>
                  <div class="adit_pw_box_bt" ><button type="submit">비밀번호변경</button></div>
                </form>
              </div>
            </div>
           </div>

          <form class="" >
            <div class="adit_information_data_box">
              <div class="adit_information_data_header"> <span>배송지</span></div>
                <div class="adit_information_data_body">
              <div class="adit_data_body"><span>배송지 주소는 <button class="adit_bt">[배송지 관리]</button>에서 수정, 등록합니다</span></div>
            </div></div>
           </form>
           
          <form class="" >
            <div class="adit_information_data_box">
              <div class="adit_information_data_header"> <span>수신설정</span></div>
                <div class="adit_information_data_body">
              <div class="adit_data_body"><span>{user[0].user_e_mail}</span></div></div>
            </div>
           </form>

            <div class="adit_information_bt_box">
              <button onClick={goToPreviousPage}> 나가기</button>
            </div>
          </>:

          <form class="adit_information_box" onSubmit={adit_login}>
            <div class="adit_information_data_box">
              <div class="adit_information_data_header"><span>아이디(이메일)</span></div>
              <div class="adit_information_data_body"><span>{user[0].user_e_mail}</span></div>
            </div>
            <div class="adit_information_data_box">
              <div class="adit_information_data_header"><span>비밀번호</span></div>
              <div class="adit_information_data_body"><input type="password" value={pw} onChange={(e)=>{setpw(e.target.value)}}/></div>
            </div>
            <div class="adit_information_bt_box">
              <button class="adit_information_submit" type="submit">확인</button>
              <button onClick={goToPreviousPage}> 취소</button>
            </div>
          </form>          
          
          }
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
  </>     
  )
}

export default My_page
