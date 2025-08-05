import {React, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sign_up = ({}) => {

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

  const navigate = useNavigate();
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
  function login_check(e) {
    e.preventDefault()
    if ( mailerror.error != false) {
      console.log(mailerror.error)
      setfocus("e_mail")
      window.scrollTo({top: 0});
    } else if ( pwerror.error != false) {
      setfocus("pw")
      window.scrollTo({top: 0});
    } else if ( recheckerror.error != false) {
      setfocus("pw_recheck")
      window.scrollTo({top: 0});
    } else if ( nameerror.error != false) {
      setfocus("name")
      window.scrollTo({top: 0});
    } else if ( phoneerror.error != false) {
      setfocus("phone")
      window.scrollTo({top: 0});
    } else {

    }
  }


  return (
    <section class="coupang">
      
        <div class="sign_up_title"><img onClick={Gohome} src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"/></div>
       
        <div class="sign_up_formbox">
          <form class="sign_up_form" method="post" action="http://localhost:3000/coupang/sign_up">
            {/* id (e-mail) */}
            <div class="sell_input_box">

              <div class="sign_up_input_style" className={focus === "e_mail" ? `sign_up_input_style ${mailerror.error ? "input_b_red" : "input_b_blue"}`: "sign_up_input_style"}>
                <div class="sign_up_input_box">
                  <label for="login_e_mail">
                    <span class="login_icon_email"><i></i></span>
                    <input autocomplete="off" placeholder="아아디(이메일)" name="e_mail" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{mailerror_check(e.target.value)}} type="text"></input>
                  </label>
                </div>
                { mailerror.error === false  && focus !== "e_mail"? <div class="sign_check check">
                   <i></i>
                  </div> :  null}
              </div>
              { mailerror.error ? <div class="error_message">
                이메일을 올바르게 입력해주세요.
                </div> : <>{mailerror.empty === false ? <>{focus === "e_mail" ? <div class="check_message">
                </div>  : null}</> : null}</>}
            </div>

            {/* pw */}
            <div class="sell_input_box">

              <div class="sign_up_input_style" className={focus === "pw" ? `sign_up_input_style ${pwerror.error ? "input_b_red" : "input_b_blue"}`: "sign_up_input_style"}>
                <div class="sign_up_input_box">
                  <label for="login_e_mail">
                    <span class="login_icon_email"><i></i></span>
                    <input autocomplete="off" placeholder="비밀번호" name="pw" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{pwerror_check(e.target.value)}} type="password"></input>
                  </label>
                </div>
                { pwerror.error === false  && focus !== "pw"? <div class="sign_check check">
                   <i></i>
                  </div> :  null}
              </div>
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

              <div class="sign_up_input_style" className={focus === "pw_recheck" ? `sign_up_input_style ${recheckerror.error ? "input_b_red" : "input_b_blue"}`: "sign_up_input_style"}>
                <div class="sign_up_input_box">
                  <label for="login_e_mail">
                    <span class="login_icon_email"><i></i></span>
                    <input autocomplete="off" placeholder="비밀번호 확인" name="pw_recheck" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{pw_recheck(e.target.value)}} type="password"></input>
                  </label>
                </div>
                { recheckerror.error === false  && focus !== "pw_recheck"? <div class="sign_check check">
                   <i></i>
                  </div> :  null}
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

              <div class="sign_up_input_style" className={focus === "name" ? `sign_up_input_style ${nameerror.error ? "input_b_red" : "input_b_blue"}`: "sign_up_input_style"}>
                <div class="sign_up_input_box">
                  <label for="login_e_mail">
                    <span class="login_icon_email"><i></i></span>
                    <input autocomplete="off" placeholder="이름" name="name" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{nameerror_check(e.target.value)}} type="text"></input>
                  </label>
                </div>
                { nameerror.error === false  && focus !== "name"? <div class="sign_check check">
                   <i></i>
                  </div> :  null}
              </div>
              { nameerror.error ? <div class="error_message">
                이름을 정확히 입력하세요.
                </div> : <>{nameerror.empty === false ? <>{focus === "name" ? <div class="check_message">
                </div>  : null}</> : null}</>}
            </div>

            {/* phone */}
            <div class="sell_input_box">

              <div class="sign_up_input_style" className={focus === "phone" ? `sign_up_input_style ${phoneerror.error ? "input_b_red" : "input_b_blue"}`: "sign_up_input_style"}>
                <div class="sign_up_input_box">
                  <label for="login_e_mail">
                    <span class="login_icon_email"><i></i></span>
                    <input autocomplete="off" placeholder="휴대폰 번호" name="phone" onFocus={(e) =>{handlefouce(e.target.name)}} onBlur={(e)=>{nonefouce(e.target.value)}} onChange={(e) =>{phoneerror_check(e.target.value)}} type="text"></input>
                  </label>
                </div>
                { phoneerror.error === false  && focus !== "phone"? <div class="sign_check check">
                   <i></i>
                  </div> :  null}
              </div>
              { phoneerror.error ? <div class="error_message">
                휴대폰번호를 올바르게 입력해주세요.
                </div> : <>{phoneerror.empty === false ? <>{focus === "phone" ? <div class="check_message">
                
                </div>  : null}</> : null}</>}
            </div>
            
            {/* agree */}
            <div class="sign_agree_box">
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
                  <label>[필수] 만 14세 이상입니다</label>
                </div>

                <div>
                  <input type="checkbox" checked={termsservice} id="termsservice" onClick={()=>{settermsservice(termsservice => !termsservice)}}></input>
                  <label>[필수] 전자금융거래 이용약관 동의</label>
                </div>

                <div>
                  <input type="checkbox" checked={termseft} id="termseft" onClick={()=>{settermseft(termseft => !termseft)}} ></input>
                  <label>[필수] 개인정보 수집 및 이용 동의</label>
                </div>

                <div>
                  <input type="checkbox" checked={agreepi} id="agreepi"onClick={()=>{setagreepi(agreepi => !agreepi)}} ></input>
                  <label>[필수] 개인정보 제3자 제공 동의</label>
                </div>

                <div>
                  <input type="checkbox" checked={agreepiforad} id="agreepiforad" onClick={(e)=>{marketing(e);}} ></input>
                  <label>[선택] 마케팅 목적의 개인정보 수집 및 이용 동의</label>
                </div>

                <div>
                  <input type="checkbox" checked={agreeforad} id="agreeforad" onClick={(e)=>{marketing(e);}}></input>
                  <label>[선택] 광고성 정보 수신 동의</label>
                </div>

                <div>
                  <input type="checkbox" checked={email_push} id="email_push" onClick={(e)=>{setemail_push(agreeforad => !agreeforad); marketing(e)}}></input>
                  <label>[선택] 이메일 수신 동의</label>
                </div>

                <div>
                  <input type="checkbox" checked={sns_push} id="sns_push" onClick={(e)=>{setsns_push(agreeforad => !agreeforad); marketing(e);}}></input>
                  <label>[선택] SMS, SNS 수신 동의</label>
                </div>

                <div>
                  <input type="checkbox" checked={app_push} id="app_push" onClick={(e)=>{setapp_push(agreeforad => !agreeforad); marketing(e);}}></input>
                  <label>[선택] 앱 푸시 수신 동의</label>
                </div>
              </div>

            </div>

            {/* sumit_bt */}
            {mailerror.error  + pwerror.error + recheckerror.error + nameerror.error + phoneerror.error + agreeerror.error === 0? <input class="sign_submit_bt" type="submit" value="약관 동의하고 가입하기" />
            : <button class="sign_submit_bt" onClick={login_check}>동의하고 가입하기</button> }

            <div><span>©Coupang Corp. All rights reserved. </span></div>            
          </form>
        </div>

    </section>
  )
}

export default Sign_up
