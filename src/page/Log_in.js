import {React, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Log_in = ({focus, handlefouce, getlogin, setlogin, setuser, getcart, getorder, getarrive}) => {

  const navigate = useNavigate();
  const goToPreviousPage = () => {
    navigate(-1);
  };
  function Gohome() {
    navigate("/ ")
  };

  async function getlogin(e) {
    e.preventDefault()
    const form_e_mail = e.target.children[0].children[0].children[1].value
    const form_pw = e.target.children[1].children[0].children[1].value
    console.log(form_e_mail)
    console.log(form_pw) 
      try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/coupang/user/login?e_mail=${form_e_mail}&pw=${form_pw}`);
      console.log(response.data[0].is_success)
      if(response.data[0].is_success === true) {
        setlogin(true)
        setuser(response.data)
        getcart(response.data[0].sno)
        getorder(response.data[0].sno)
        getarrive(response.data[0].sno)
        Gohome()

      } else if (response.data.is_success === false) {
        alert("틀렸어요")
      } else{

      }
    } catch (error) {
      //응답 실패
    }
  }


  return (
    <section class="log_in_page">
        <div class="log_in_header">
          <img onClick={Gohome} class="coupang_img" src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"/>
        </div>

        <div class="log_in_form_bt">
          <a onClick={(e)=> handlefouce(e.target.name)}  name="login_e" className={focus === "login_e" ? "log_in_bt_active": ""}>이메일 로그인</a>
          <a onClick={(e)=> handlefouce(e.target.name)}  name="login_p" className={focus === "login_p" ? "log_in_bt_active": ""} >휴대폰번호 로그인</a>
          <a onClick={(e)=> handlefouce(e.target.name)}  name="login_qr" className={focus === "login_qr" ? "log_in_bt_active": ""}>QR코드 로그인 </a>
        </div>

        <form class="log_in_form_detail" onSubmit={(e)=>{getlogin(e)}}>
          <div><label for="login_e_mail"><span class="input_icon_email"><i></i></span><input id="login_e_mail" type="text" /></label><span class="input_icon_x"><i></i></span></div>
          <div><label for="login_pw"><span class="input_icon_pw"><i></i></span><input id="login_pw" type="password" /></label><span class="input_icon_show"><i></i></span></div>
          <div class="login_checkbox_form">
            <div class="login_checkbox"><label><input type="checkbox"/><span>자동 로그인</span></label></div>
            <div class="login_find"><a>아이디∙비밀번호 찾기 > </a></div>
          </div>
          <div class="login_content">
            <button>로그인</button>
            <button>회원가입</button>
          </div>

          <div class="login_footer">
            <span>©Coupang Corp. All rights reserved.</span>
          </div>
        </form>
    </section>
  )
}

export default Log_in
