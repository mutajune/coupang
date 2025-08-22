import {React, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Cascader } from "antd";
import axios from 'axios';

const My_page = ({order, arrive, post ,login, setlogin, user, setdivision, getproduct, setsearch, sildermenu, setsildermenu, logout, cart }) => {

  const [pw, setpw] = useState("")

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

  async function getlogin(e) {
    e.preventDefault()
      try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/adit/check?e_mail=${user[0].user_e_mail}&pw=${pw}`);
      console.log(response.data[0].is_success)
      if(response.data[0].is_success === true) {
        alert("이동쿠쿠미.")
      } else if (response.data.is_success === false) {
        alert("비밀번호가 틀렸습니다.")
      } else{
      }
    } catch (error) {
      //응답 실패
    }
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
          <h1>회원정보확인</h1>
          <div><span><strong>{user[0].user_e_mail}</strong>님의 정보를 안정하게 보호하기 위해 비밀번호를 다시 한번 확인 합니다.</span></div>

          <form class="adit_information_box" onSubmit={getlogin}>
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
        </div>

      </div>
    </section>

  </>     
  )
}

export default My_page
