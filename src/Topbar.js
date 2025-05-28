import {React, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Topbar = ({screen , setscreen}) => {
  const [sildermenu, setsildermenu] = useState(false)
  const [menuopen, setmenuopen] = useState(false)
  
  
  return (
    <header>
      {screen.coupang ? <>
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
            <li><a>로그인</a></li>
            <li><a>회원가입</a></li>
            <li><a>고객센터</a></li>
            <li onClick={()=>{setscreen({sell_sign_up : true});}}><a>판매자 가입</a></li>
          </menu>
          </div>
        </section>

        <section id="header">
        <div class="category_btn">
          <a>카테고리</a>
        </div>

        <div class="header_search_box">
          <div class="header_search_box_top">
            <img class="coupang_img" src="https://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png"/>

            <div class="header_search_form">
              <select id="search_category_select">
                <option value="-1">전체</option>
                <option value=""></option>
              </select>

              <div class="header_search_input">
                <input placeholder="찾고 싶은 상품을 검색해보세요" />
                <a class="speech_content_mic">마이크</a>
                <a class="header_search_btn">검색</a>
              </div>
            </div>
            
            <ul class="icon_menus">
              <li><a><span><img src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#person" /> <br/>마이쿠팡</span></a></li>
              <li><a><span><img src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#cart" /> <br/>장바구니</span></a> <em>0</em></li>
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
      </> : null}

      {screen.sell_sign_up ? <>
       <section class="sell_sign_up_bar">
         <div class="sell_sign_up"><a></a></div>
         <div class="sell_login_btn"><a><button>로그인</button></a></div>
         <div onClick={()=> {setmenuopen(menuopen => !menuopen)}}><img src={ menuopen ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgB7ZUxCsQgEEVHC88h2HiNnNxr2AgeQyx0MxDBLIozC7Ip8qponPejxgTgZYHoG8YYV2vVSqnDex+BgT6RUjohRAwhHK1f9oNQjmNzzs5aq4FIk+Pl5YBhQCkFkyMnpJdjLc6+vy8oBbPloowVvxZSH2QYsBJwZjkNmIlSSkCVLwNGIa2bIicFDEKAKkckbGb7EkmOHIXcw/if13TrQdv6qeDIqTW3TebKkXjyvfE3Z9/AnwVHPgq5HC8P4gMuJsExIeiWXgAAAABJRU5ErkJggg==" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABiSURBVHgB7dOxDYBACAXQ78Uwh47iJDqam7gGpXNQEDmTs6XBRHO85sgVEEg+8HdDKyZTStkQgIh2Zj5rPbZPa37UOQggIqs9890XL3s2UNUl8kRIn5E5cGUOOpA5cGUOXBf4bikUcuEISAAAAABJRU5ErkJggg=="}/></div>
         {menuopen ? <div class="sell_drop_menu">
            <a data-v-287442f7="" href="">처음 시작하나요?</a>
            <a data-v-287442f7="" href="">입점안내</a>
            <a data-v-287442f7="" href="">큐펑 MBA</a>          
            <a data-v-287442f7="" href="">판매자 스토리</a>          
            <a data-v-287442f7="" href="">로켓그로스</a>          
          </div> : null}
       </section>
      </>: null}


    </header>
  )
}

export default Topbar
