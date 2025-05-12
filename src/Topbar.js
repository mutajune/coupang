import {React, useState} from 'react'

const Topbar = () => {
  return (
    <header>
      <section id="top_bar">
        <menu>
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

        <menu>
          <li><a>로그인</a></li>
          <li><a>회원가입</a></li>
          <li><a>고객센터</a></li>
          <li><a>판매자</a></li>
          <li><a>가입</a></li>

        </menu>
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
                <a></a>

              </div>
            </div>
          </div>

          <div class="header_search_box_bottom">

          </div>

        </div>
      </section>
    </header>
  )
}

export default Topbar
