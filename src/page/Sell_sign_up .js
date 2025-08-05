import {React, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sell_sign_up  = () => {
  const navigate = useNavigate();
  const [sildermenu, setsildermenu] = useState(false)
  const [menuopen, setmenuopen] = useState(false)

  const [focus , setfocus] = useState("")
  const [id , setid] = useState("")
  const [pw , setpw] = useState("")
  
  const [iderror , setiderror] = useState("")
  const [pwerror , setpwerror] = useState("")
  const [recheckerror , setrecheckerror] = useState("")
  const [nameerror , setnameerror] = useState("")
  const [mailerror , setmailerror] = useState("")
  const [phoneerror , setphone] = useState("")
  const [business , setbusiness] = useState("")

  const [agreeerror, setagreeerror] = useState("")
  const [all_check, setallcheck] = useState(false)
  const [termsage, settermsage] = useState("")
  const [termsservice ,settermsservice] = useState("")
  const [termseft, settermseft] = useState("")
  const [agreepi , setagreepi] = useState("")
  const [agreepiforad, setagreepiforad] = useState("")
  const [agreeforad, setagreeforad] = useState("")
  const [email_push, setemail_push] = useState("")
  const [sns_push, setsns_push] = useState("")
  const [app_push, setapp_push] = useState("")

 function Gohome() {
    navigate("/ ")
  };
    // fouce
  function handlefouce (e) {
    setfocus(e)
  }
  function nonefouce (e) {
    if (e === "") {
      setfocus("")
    }
  }

    // check
  function iderror_check (e) {
      setid(e)
      const pattern_spc  =/[~!@#$%^&*()_+|<>?:{}]/;
      if ( e ==="") {
        setiderror({error: true , empty : true})
      } else if (e.length > 20 || e.length < 6 || pattern_spc.test(e) === true) {
        setiderror({error: true , empty : false})
      } else { setiderror({error: false , empty : false})}
  }
  function pwerror_check (e) {
      setpw(e)
      const pattern_spc  =/[~!@#$%^&*()_+|<>?:{}]/;
      if (e ==="") {
        setpwerror({error: true, length : true , spc : true , empty : true})
      } else if (15 > e.length && e.length < 8 && pattern_spc.test(e) !== true) {
        setpwerror({error: true, length : true , spc : true , empty : false})
      } else if (15 > e.length && e.length < 8){
         setpwerror({error: true, length : true , spc : false , empty : false})
      } else if (pattern_spc.test(e) !== true){
      setpwerror({error: true, length : false ,spc : true , empty : false})
      }else{
        setpwerror({error: false, length : false ,spc : false , empty : false})}
  }
  function pw_recheck (e) {
    if (e === "") {
      setrecheckerror({error: true, empty : true})
    } else if ( e !== pw) {
      setrecheckerror({error: true, empty : false})
    } else {
      setrecheckerror({error: false, empty : false})}
  }
  function nameerror_check (e) {
    const pattern_num = /[0-9]/;	// 숫자 
    const pattern_spc  =/[~!@#$%^&*()_+|<>?:{}]/;
    if (e === "") {
      setnameerror({error: true, empty : true})
    }else if(pattern_num.test(pattern_num) !== true || pattern_spc.test(e) === true){
      setnameerror({error: true, empty : false})
    }else{
      setnameerror({error: false, empty : false})
    }
  }
  function mailerror_check (e) {
    const pattern_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if (e === "") {
      setmailerror({error: true, empty : true})
    }else if(pattern_email.test(e) === false){
      setmailerror({error: true, empty : false})
    }else{
      setmailerror({error: false, empty : false})
    }
  }
  function phoneerror_check (e) {
    console.log(e.indexOf('-'))
    const pattern_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if (e === "") {
      setphone({error: true, empty : true})
    }else if(10< e.length < 12 && e.indexOf('-') === -1){
      setphone({error: false, empty : false})
    }else{
      setphone({error: true, empty : false})
    }
  }
  function business_check (e) {
    if (e === "") {
      setbusiness({error: true, empty : true})
    }else{
      setbusiness({error: false, empty : false})
    }
  }
  function agree_check (e) {
    if (termsage + termsservice + termseft + agreepi === "") {
    }else if (termsage + termsservice + termseft + agreepi === 4){
      setagreeerror({error: false})
    }else{
      setagreeerror({error: true})
    }
  }
  function all_check_check (e) {
    if(all_check === false) {
      setallcheck(true);
      settermsage(true);
      settermsservice(true);
      settermseft(true);
      setagreepi(true);
      setagreepiforad(true);
      setagreeforad(true);
      setemail_push(true)
      setsns_push(true)
      setapp_push(true)
    }else {
      setallcheck(false);
      settermsage(false);
      settermsservice(false);
      settermseft(false);
      setagreepi(false);
      setagreepiforad(false);
      setagreeforad(false);
      setemail_push(false)
      setsns_push(false)
      setapp_push(false)
    } 
  }
  function marketing (e) {
      console.log( e.target.checked, email_push , sns_push , (email_push === true && sns_push  === true && app_push === true) !== true , !email_push + !sns_push + !app_push)
    if(e.target.id === "agreepiforad" && e.target.checked === true ) {
      setagreepiforad(true);
      setagreeforad(true);
      setemail_push(true)
      setsns_push(true)
      setapp_push(true)
    } else if (e.target.id === "agreepiforad" && e.target.checked === false ){
      setagreepiforad(false);
      setagreeforad(false);
      setemail_push(false)
      setsns_push(false)
      setapp_push(false)     
    } else if (e.target.id === "agreeforad" && e.target.checked === true ){
      setagreepiforad(true);
      setagreeforad(true);
      setemail_push(true)
      setsns_push(true)
      setapp_push(true)
    } else if (e.target.id === "agreeforad" && e.target.checked === false ){
      setagreeforad(false);
      setemail_push(false)
      setsns_push(false)
      setapp_push(false)
    }  else if ( e.target.checked === true && ( e.target.id === "email_push" || e.target.id === "sns_push" || e.target.id === "app_push") ) {
      setagreepiforad(true);
      setagreeforad(true);
    }  else if ( e.target.checked === false &&  e.target.id === "email_push" && sns_push === false && app_push === false){
      setagreeforad(false);
    }   else if ( e.target.checked === false &&  e.target.id === "sns_push" && email_push === false && app_push === false){
      setagreeforad(false);
    }   else if ( e.target.checked === false &&  e.target.id === "app_push" && email_push === false && sns_push === false){
      setagreeforad(false);
    }  else {
      
    }
  }


  
  return (
    <section class="coupang">
      <section class="sell_sign_up_bar">
         <div class="sell_sign_up" onClick={Gohome}><a></a></div>
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

      <div class="sell_sign_up_title"><span>쿠팡과 함께 비즈니스를 시작하세요!</span></div>
      <div class="sell_sign_up_formbox">
        <form class="sell_sign_up_form" method="post" action="http://localhost:3000/marketplace/sign_up">
          {/* id */}
          <div class="sell_input_box">
            <div class="input_style">
              <div>
                {focus === "id" ? <label for="id">아이디</label> : null}
                <input autocomplete="off" placeholder="아이디" name="id" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{iderror_check(e.target.value)}} type="text"></input>
              </div>
              { iderror.error === false ? <div class="check">
                <svg viewBox="64 64 896 896" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                </div> :  null}
            </div>
            { iderror.error ? <div class="error_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              6~20자의 영문 소문자, 숫자와 특수문자(_, -, .)만 사용 가능
              </div> : <>{iderror.empty === false ? <>{focus === "id" ? <div class="check_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              6~20자의 영문 소문자, 숫자와 특수문자(_, -, .)만 사용 가능
              </div>  : null}</> : null}</>}
          </div>
          {/* pw */}
          <div class="sell_input_box">
            <div class="input_style">
              <div>
                {focus === "pw" ? <label for="pw">비밀번호 (영문+숫자+특수문자, 8-15자)</label> : null}
                <input autocomplete="off" placeholder="비밀번호 (영문+숫자+특수문자, 8-15자)" name="pw"type="passward" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{pwerror_check(e.target.value)}}></input>
              </div>
              {pwerror.error === false ? <div class="check">
                <svg viewBox="64 64 896 896" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                </div> : null}              
            </div>
            { pwerror.length ? <div class="error_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              8-15자 사이
              </div> : <>{pwerror.empty === false ? <>{focus === "pw" ? <div class="check_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              8-15자 사이
              </div>  : null}</> : null}</>}

              { pwerror.spc ? <div class="error_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              6~20자의 영문 소문자, 숫자와 특수문자(_, -, .)만 사용 가능
              </div> : <>{pwerror.empty === false ? <>{focus === "pw" ? <div class="check_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              6~20자의 영문 소문자, 숫자와 특수문자(_, -, .)만 사용 가능
              </div>  : null}</> : null}</>}                
          </div>
          {/* pw_recheck */}
          <div class="sell_input_box">
            <div class="input_style">
              <div>
                {focus === "pw_recheck" ? <label for="pw_recheck">비밀번호 확인</label> : null}
                <input autocomplete="off" placeholder="비밀번호 확인" name="pw_recheck" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{pw_recheck(e.target.value)}} type="text"></input>
              </div>
              {recheckerror.error === false ? <div class="check">
                <svg viewBox="64 64 896 896" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                </div> : null} 
            </div>
              { recheckerror.error ? <div class="error_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              비밀번호가 일치함
              </div> : <>{recheckerror.empty === false ? <>{focus === "pw_recheck" ? <div class="check_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              비밀번호가 일치함
              </div>  : null}</> : null}</>}
          </div>
          {/* name */}
          <div class="sell_input_box">
            <div class="input_style">
              <div>
                {focus === "name" ? <label for="name">이름</label> : null}
                <input autocomplete="off" placeholder="이름" name="name" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{nameerror_check(e.target.value)}} type="text"></input>
              </div>
              {nameerror.error === false ? <div class="check">
                <svg viewBox="64 64 896 896" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
              </div> : null} 
            </div>
            { nameerror.error ? <div class="error_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              특수문자, 숫자는 입력불가
              </div> : <>{nameerror.empty === false ? <>{focus === "name" ? <div class="check_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              특수문자, 숫자는 입력불가
              </div>  : null}</> : null}</>}
          </div>     
          {/* e-mail */}
          <div class="sell_input_box">
            <div class="input_style">
              <div>
                {focus === "e_mail" ? <label for="id">이메일</label> : null}
                <input autocomplete="off" placeholder="이메일" name="e_mail" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{mailerror_check(e.target.value)}} type="text"></input>
              </div>
              {mailerror.error === false ? <div class="check">
                <svg viewBox="64 64 896 896" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
              </div> : null} 
            </div>
            { mailerror.error ? <div class="error_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              올바른 형식의 이메일 주소
              </div> : <>{mailerror.empty === false ? <>{focus === "e_mail" ? <div class="check_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              올바른 형식의 이메일 주소
              </div>  : null}</> : null}</>}
          </div>
          {/* phone */}
          <div class="sell_input_box">
            <div class="input_style">
              <div>
                {focus === "phone" ? <label for="phone">휴대폰번호</label> : null}
                <input autocomplete="off" placeholder="핸드폰번호('-'제외)" name="phone" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{phoneerror_check(e.target.value)}} type="text"></input>
              </div>
              <div id="primary_bt" class="primary_bt" className={ phoneerror.error ? "primary_bt" : "primary_bt_active"}>
                <button>인증요청</button>
              </div> 
            </div>
            { phoneerror.error ? <div class="error_message">
              '-' 제외한 숫자
              </div> : <>{phoneerror.empty === false ? <>{focus === "phone" ? <div class="check_message">
              '-' 제외한 숫자
              </div>  : null}</> : null}</>}
          </div>
          {/* select */}
          <div class="sell_input_box" >
            <select class="input_style" name="business" onChange={(e) =>{business_check(e.target.value)}}>
              <option value="">비즈니스 형태</option>
              <option value="MANUFACTURER">브랜드 오너 / 제조사</option>
              <option value="DROP_SHIPPING">위탁 판매</option>
              <option value="RESELLER">매입 판매</option>
              <option value="OVERSEA_DELIVERY">해외직구/병행수입</option>
            </select>
            { business.error ? <div class="error_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              비지니스 형태 선택
              </div> : null}
          </div>
          {/* agree */}
          <div class="agree_box">
            <div class="all_check_box">
              <input type="checkbox" checked={all_check} id="all_check" onClick={all_check_check}></input>
              <label>모두 동의합니다</label>
            </div>
            <div class="explain"><span>모두 동의에는 <strong>필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가 포함</strong>되어있으며, 선택 목적에 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.</span></div>
              { agreeerror.error === true ? <div class="error_message">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              필수 항목에 모두 동의해주세요
              </div> : <div class="error_message"></div>}

            <div class="agree">
              <div>
                <input type="checkbox" checked={termsage} id="termsage" onClick={()=>{settermsage(termsage => !termsage)}}></input>
                <label>[필수] 만 19세 이상입니다</label>
              </div>

              <div>
                <input type="checkbox" checked={termsservice} id="termsservice" onClick={()=>{settermsservice(termsservice => !termsservice)}}></input>
                <label>[필수] 쿠팡 서비스 이용약관 - 사업자용</label>
              </div>

              <div>
                <input type="checkbox" checked={termseft} id="termseft" onClick={()=>{settermseft(termseft => !termseft)}} ></input>
                <label>[필수] 쿠팡페이(주) 전자금융거래 이용약관</label>
              </div>

              <div>
                <input type="checkbox" checked={agreepi} id="agreepi"onClick={()=>{setagreepi(agreepi => !agreepi)}} ></input>
                <label>[필수] 개인정보 수집 및 이용 동의</label>
              </div>

              <div>
                <input type="checkbox" checked={agreepiforad} id="agreepiforad" onClick={()=>{setagreepiforad(agreepiforad => !agreepiforad)}} ></input>
                <label>[선택] 광고 및 이벤트 목적의 개인정보 수집 및 이용 동의</label>
              </div>

              <div>
                <input type="checkbox" checked={agreeforad} id="agreeforad" onClick={()=>{setagreeforad(agreeforad => !agreeforad)}}></input>
                <label>[선택] 판매자 무료 교육 및 특별 프로모션 혜택(광고) 수신 동의</label>
              </div>
            </div>

          </div>

          <div class="explain_bottom">
            <div><span>확인해주세요</span></div>
            <div><span>• 수신거부 시 <span>판매에 도움이 되는 정보</span> 를 받아보실 수 없습니다. </span></div>
            <div><span>• 광고성 정보 수집 및 수신 동의는 윙>판매자정보>계정정보에서 변경(동의/철회) 할 수 있습니다.</span></div>
          </div>

          {/* sumit_bt */}
          {iderror.error +  pwerror.error + recheckerror.error + nameerror.error + mailerror.error  + phoneerror.error + business.error  + agreeerror.error === 0? <input class="sumit_bt_active" type="submit" value="약관 동의하고 가입하기" />
          : <button class="sumit_bt">약관 동의하고 가입하기</button> }

          <div class="help_text"><span>이미 계정이 있나요?</span><a>로그인</a></div>

          <div class="help_text_bottom"><span>해외 사업자번호를 갖고 계신가요?</span><a >글로벌 셀러 가입하기</a></div>            
        </form>
      </div>
      </section>

  )
}

export default Sell_sign_up 
