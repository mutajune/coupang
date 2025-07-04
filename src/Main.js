import {React, useEffect, useState} from 'react'
import Topbar from './Topbar'
import Footer from './Footer'
import axios from 'axios';

import { Alert, Switch } from "antd";
import { Pagination as Paginations} from "antd";

import { Navigation, Pagination, Autoplay,  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Main = () => {
  const [topbar, settopbar] = useState(true)
  const [footer, setfooter] = useState(true)
  const [screen, setscreen] = useState({coupang: true , main : true})
  const [post, setpost] = useState("")
  const [banner_num, setbanner_num] = useState(0)
  const [tag, settag] = useState("")
  const [category, setcategory] = useState("")

  // category
  const [scroll, setscroll] = useState(false)
  const [width, setwidth] = useState(false)

  // user
  const [focus , setfocus] = useState("")
  const [id , setid] = useState("")
  const [pw , setpw] = useState("")
  const [login, setlogin] = useState(false)
  const [user, setuser] = useState(false)

  const [search , setsearch] = useState("")
  const [division, setdivision] = useState("all")

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

  const [product, setproduct] = useState("")
  const [detall, setdetall] = useState("")
     
  
  
  const [page, setpage] = useState("")  
              
  const handleScrollToTop = (behavior: 'smooth' | 'auto') => {
  window.scrollTo({top: 0, behavior: behavior});
  };

  async function getdata(e) {
    try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/product/detall?detall=${e}`);
      setdetall(response.data)
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  async function getpost() {
    try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/main_post`);

      setpost(response.data)
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  async function gettag() {
    try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/tag`);
      settag(response.data)
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  async function getcategory() {
  try {
    //응답 성공 
    const response = await axios.get(`http://localhost:3000/category`);
    setcategory(response.data)
  } catch (error) {
    //응답 실패
    console.error(error);
  }
  }
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
        setscreen({coupang : true , main: true })
        setuser(response.data)
      } else if (response.data.is_success === false) {
        alert("틀렸어요")
      } else{

      }
    } catch (error) {
      //응답 실패
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

  useEffect(() => {
  getpost();
  gettag();
  getcategory();
  getdata();
  }, []);

// useEffect(() => {
//     if((banner === "")) {
//        setInterval(() => {
//       if (banner.length -1 <= banner_num) { 
//         setbanner_num(0)
//       } else {
//         setbanner_num( banner_num + 1)
//       }
//     }, 3000);
//     }
//    }, [banner]);

  useEffect(() => {
    // 페이지가 렌더링 되면 무조건 맨위로 스크롤 한다.
    handleScrollToTop('auto');
    
  }, []);

  // menu
  function scrollmenu () {
    setscroll(window.scrollY);
  }

  function outerWidth () {
    // setwidth(window.outerWidth);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollmenu);
    window.addEventListener('resize', outerWidth);
  }, []);

  // fouce
  function handlefouce (e) {
    setfocus(e)
  }
  function nonefouce (e) {
    if (e === "") {
      setfocus("")
    }
  }
  function nonmouse (e) {
    setfocus()
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

// product_detall
function product_detall_on (e) {
  console.log(e)
  setscreen({product : true , coupang : true})
  getdata(e) 
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


  useEffect(()=>{
    agree_check();
    if(termsage===true && termsservice===true && termseft===true && agreepi===true && agreepiforad===true && agreeforad===true ){
      setallcheck(true)
    } else {
      setallcheck(false)
    }
  }, [termsage,termsservice, termseft,agreepi,agreepiforad,agreeforad])

const onChange = checked => {
  console.log(`switch to ${checked}`);
};


  return (
    <section class="coupang">
      {topbar ? <Topbar screen={screen} setscreen={setscreen} setproduct={setproduct} setfooter={setfooter} division={division} setsearch={setsearch} setdivision={setdivision} setfocus={setfocus} login={login} setlogin={setlogin} user={user}/>  : null} 
      
      {screen.main ? <>
        {post !== "" && tag !== "" && category !=="" ? <>
          <section class="banner_box">
            <img class="banner_img" alt={post[banner_num].banner_name} src={post[banner_num].banner_img}/>
            <div class="banner_img_mark"><ul class="banner_mark_box">
              {post.filter((num) => num.part === "MB")
              .map((num) => <li className={ num.sno -1 === banner_num ? "mark_box_active":"mark_box" }  onMouseOver={()=> {setbanner_num(num.sno -1 )}}><img src={num.banner_mark}/></li>)}
            </ul></div>
          </section>
          
          <section class="all_pruduct_contener">

            <section class="pruduct_box">
              <div><h2 class="pruduct_hot_header"></h2>
                <ul class="pruduct_hot_box">
                  {post.filter((num) => num.part === "TH")
                  .map((num) => <li class="hot_box" onMouseOver={(e) =>{handlefouce(e.target.name)}} onMouseOut={()=>{nonmouse()}} >
                  <img name={num.post_name} className={focus === num.post_name ? "hot_img_focus" : "hot_img"} class="hot_img" src={num.post_mark}/>
                  <button name={num.post_name} class="hot_bt" className={focus === num.post_name ? "hot_bt_focus" : "hot_bt"}>다운로드</button>
                </li>)}</ul>
              </div>
            </section>

            <article class="side_bar">
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

            <section class="pruduct_list_contener">
              <div class="pruduct_list_box"><h2 class="pruduct_title showping">오늘의 쇼핑 제안</h2>

              <div class="pruduct_list">
                <div  class="black_btn_left nonarrow" onClick={(e)=> {btn_left(e)}}>left</div>
                <ul class="list_box">
                  {post.filter((num) => num.part === 'TS')
                  .map((num) => <li> <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name}  class="" src={num.list_image}/>
                  <div class="list_info">
                      <div class="info_title"> <span>{num.name}</span></div>
                    <div class="delivery_info_box">
                      { num.delivery === "무료배송" ? <span class="delivery_info">{num.delivery}</span> : <img class="delivery_info" name={num.delivery}  src={num.delivery_img}/> }                    
                      </div>
                    <div class="review_box"><span class="score_bg"><span class="score_active" style={{width: num.scope}}></span></span><span class="review_num">({num.review})</span></div>
                  </div></li>)}
                </ul>
                <div  class="black_btn_right" onClick={(e)=> {btn_right(e);}}>right</div>
              </div>
              </div>
            </section>

            <section class="pruduct_list_contener_small">
              <h2 class="pruduct_title_small">지금 이 상품이 필요하신가요?</h2>

              <div class="white_btn_left nonarrow" onClick={(e)=> {white_btn_left(e)}}>left</div>

              <div class="pruduct_list_box_small">
              <div class="pruduct_list_small">
                <ul class="list_box_small">
                  {post.filter((num) => num.part === 'NP')
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

            <section class="pruduct_list_contener">
              <div class="pruduct_list_box"><h2 class="pruduct_title trending">좋아할만한 카테고리 상품</h2>

              <div class="pruduct_list">
                <div  class="black_btn_left nonarrow" onClick={(e)=> {btn_left(e)}}>left</div>
                <ul class="list_box">
                  {post.filter((num) => num.part === 'LC')
                  .map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
                  <div class="list_info">
                      <div class="info_title"> <span>{num.name}</span></div>
                    <div class="delivery_info_box">
                      { num.delivery === "무료배송" ? <span class="delivery_info">{num.delivery}</span> : <img class="delivery_info" name={num.delivery}  src={num.delivery_img}/> }                    
                      </div>
                    <div class="review_box"><span class="score_bg"><span class="score_active" style={{width: num.scope}}></span></span><span class="review_num">({num.review})</span></div>
                  </div></li>)}
                </ul>
                <div  class="black_btn_right" onClick={(e)=> {btn_right(e);}}>right</div>
              </div>
              </div>
            </section>

            <section class="pruduct_list_contener_small">
              <h2 class="pruduct_title_small">오늘의 <span class="orange">판매자 특가</span></h2>

              <div class="white_btn_left nonarrow" onClick={(e)=> {white_btn_left(e)}}>left</div>

              <div class="pruduct_list_box_small">
              <div class="pruduct_list_small">
                <ul class="list_box_small">
                  {post.filter((num) => num.part === 'TSS')
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

            <section class="pruduct_list_contener_small">
              <h2 class="pruduct_title_small">전세계 핫딜 <span class="purple">로켓직구 글로벌특가</span></h2>

              <div class="white_btn_left nonarrow" onClick={(e)=> {white_btn_left(e)}}>left</div>

              <div class="pruduct_list_box_small">
              <div class="pruduct_list_small">
                <ul class="list_box_small">
                  {post.filter((num) => num.part === 'RGS')
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

            <section class="trend_category_box">
            
            <div class="category_container">
              <h3 class="trend_category_title"></h3>
              {category.map((sno) =>
              <>
                  <div 
                  className={`category_box ${sno.class}_box`}>
                    <dt class="category_title">
                      <img src={category[sno.sno - 1].title_img}/>
                      <a class="go_category">바로가기</a>
                    </dt>

                    <dl class="category_data">

                      <dd class="category_best">
                        <strong>HOT키워드</strong>
                        {tag.filter((num) => num.category === sno.sno)
                        .map((num) => <> <a className={`category_best_a ${sno.class}_tag`}>{num.tag} </a> <br/> </>)}
                      </dd>

                      <dd class="promotion">

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          spaceBetween={50}
                          slidesPerView={1}
                          slidesPerGroup={1}
                          navigation
                          pagination={{ clickable: true }}
                          autoplay={{ delay: 2000, disableOnInteraction: false}}
                          loop={true}
                          // onSlideChange={(e) => console.log(e)}
                          // onSwiper={(swiper) => console.log(swiper)}
                        >
                          {post.filter((num) => num.part === "CB" && num.product === null && num.banner_category === sno.sno)
                          .map((num) => <SwiperSlide><img src={num.banner_img}/>
                          <div  className={`banner_description description_${sno.class}`}>{num.banner_name } <br/> <span>{num.banner_description}</span></div> </SwiperSlide>)}

                        </Swiper>
                        </dd>

                      <dd class="category_list">
                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          slidesPerGroup={1}
                          navigation
                          pagination={{ clickable: true }}
                          loop={true}
                          // onSlideChange={(e) => console.log(e)}
                          // onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                              <div class="category_slide_box">
                              {post.filter((num) => num.part === "CB" && num.product !== null && num.p_key < 7 && num.category === sno.sno)  
                              .map((num) =>
                              <div class="category_slide_list">
                                <img src={num.list_image}/>
                                <div class="category_slide_span"><a>{num.name}</a></div>
                                <div class="category_slide_price_box"><span class="category_slide_price">{num.price}원</span> <img class="category_slide_delivery" src={num.delivery_img} /></div>
                              </div>)}   
                              </div>                       
                            </SwiperSlide>


                            {Math.ceil((post.filter((num)=> num.part === "CB"  && num.category === sno.sno )).length / 6) > 1 ? 
                            <SwiperSlide>
                              <div class="category_slide_box">
                              {post.filter((num) => num.part === "CB" && num.product !== null && num.p_key < 13 &&  num.p_key > 6 && num.category === sno.sno)  
                              .map((num) =>
                              <div class="category_slide_list">
                                <img src={num.list_image}/>
                                <div class="category_slide_span"><a>{num.name}</a></div>
                                <div class="category_slide_price_box"><span class="category_slide_price">{num.price}원</span> <img class="category_slide_delivery" src={num.delivery_img} /></div>
                              </div>)}   
                              </div>                       
                            </SwiperSlide>
                             : null}

                            {Math.ceil((post.filter((num)=> num.part === "CB"  && num.category === sno.sno )).length / 6) > 2 ?
                            <SwiperSlide>
                              <div class="category_slide_box">
                              {post.filter((num) => num.part === "CB" && num.product !== null && num.p_key < 19 &&  num.p_key > 12 && num.category === sno.sno)  
                              .map((num) =>
                              <div class="category_slide_list">
                                <img src={num.list_image}/>
                                <div class="category_slide_span"><a>{num.name}</a></div>
                                <div class="category_slide_price_box"><span class="category_slide_price">{num.price}원</span> <img class="category_slide_delivery" src={num.delivery_img} /></div>
                              </div>)}   
                              </div>                       
                            </SwiperSlide>
                             : null}

                            {Math.ceil((post.filter((num)=> num.part === "CB"  && num.category === sno.sno )).length / 6) > 3 ?
                            <SwiperSlide>
                              <div class="category_slide_box">
                              {post.filter((num) => num.part === "CB" && num.product !== null && num.p_key < 25 &&  num.p_key > 18 && num.category === sno.sno)  
                              .map((num) =>
                              <div class="category_slide_list">
                                <img src={num.list_image}/>
                                <div class="category_slide_span"><a>{num.name}</a></div>
                                <div class="category_slide_price_box"><span class="category_slide_price">{num.price}원</span> <img class="category_slide_delivery" src={num.delivery_img} /></div>
                              </div>)}   
                              </div>                       
                            </SwiperSlide>
                             : null}

                            {Math.ceil((post.filter((num)=> num.part === "CB"  && num.category === sno.sno )).length / 6) > 4 ?
                            <SwiperSlide>
                              <div class="category_slide_box">
                              {post.filter((num) => num.part === "CB" && num.product !== null && num.p_key < 31 &&  num.p_key > 24 && num.category === sno.sno)  
                              .map((num) =>
                              <div class="category_slide_list">
                                <img src={num.list_image}/>
                                <div class="category_slide_span"><a>{num.name}</a></div>
                                <div class="category_slide_price_box"><span class="category_slide_price">{num.price}원</span> <img class="category_slide_delivery" src={num.delivery_img} /></div>
                              </div>)}   
                              </div>                       
                            </SwiperSlide>
                             : null}
                        </Swiper>                      
                      </dd>
                    </dl>

                  </div>

                 {sno.bt_banner !="" ? <img class="trend_bt_banner" src={sno.bt_banner} />: null}
              </>    
              )}
             </div>
            
            {/* scroll */}
             <div class="scroll_menu_box">{scroll > 3600 && scroll < 14400 ? <div class="scroll_menu">
                <div class="scroll_menu_list">
                  <a class="baby" onClick={()=> {window.scrollTo({top: 3601});}} className={scroll > 3600 && scroll < 4200 ? "baby on" : "baby"}>출산/유아동</a>
                  <a class="travel" onClick={()=> {window.scrollTo({top: 4201});}} className={scroll > 4200 && scroll < 4800 ? "travel on" : "travel"}>여행</a>
                  <a class="health" onClick={()=> {window.scrollTo({top: 4801});}} className={scroll > 4800 && scroll < 5400 ? "health on" : "health"}>헬스/건강식품</a>
                  <a class="manclothe" onClick={()=> {window.scrollTo({top: 5401});}} className={scroll > 5400 && scroll < 6000 ? "manclothe on" : "manclothe"}>남성패션</a>
                  <a class="food" onClick={()=> {window.scrollTo({top: 6001});}} className={scroll > 6000 && scroll < 6600 ? "food on" : "food"}>식품</a>
                  <a class="sports" onClick={()=> {window.scrollTo({top: 6601});}} className={scroll > 6600 && scroll < 7200 ? "sports on" : "sports"}>스포츠/레저</a>
                  <a class="womanclothe" onClick={()=> {window.scrollTo({top: 7201});}} className={scroll > 7200 && scroll < 7800 ? "womanclothe on" : "womanclothe"}>여성패션</a>
                  <a class="home_decoration" onClick={()=> {window.scrollTo({top: 7801});}} className={scroll > 7800 && scroll < 8400 ? "home_decoration on" : "home_decoration"}>가구/홈인테리어</a>
                  <a class="digital"onClick={()=> {window.scrollTo({top: 8401});}}  className={scroll > 8400 && scroll < 9000 ? "digital on" : "digital"}>가전/디지털</a>
                  <a class="office" onClick={()=> {window.scrollTo({top: 9001});}} className={scroll > 9000 && scroll < 9600 ? "office on" : "office"}>문구/오피스</a>
                  <a class="living" onClick={()=> {window.scrollTo({top: 9601});}} className={scroll > 9600 && scroll < 10200 ? "living on" : "living"}>생활용품</a>
                  <a class="beauty" onClick={()=> {window.scrollTo({top: 10201});}} className={scroll > 10200 && scroll < 10800 ? "beauty on" : "beauty"}>뷰티</a>
                  <a class="babyfashion" onClick={()=> {window.scrollTo({top: 10801});}} className={scroll > 10800 && scroll < 11400 ? "babyfashion on" : "babyfashion"}>유아동패션</a>
                  <a class="kitchen" onClick={()=> {window.scrollTo({top: 11401});}} className={scroll > 11400 && scroll < 12000 ? "kitchen on" : "kitchen"}>주방용품</a>
                  <a class="pets" onClick={()=> {window.scrollTo({top: 12001});}} className={scroll > 12000 && scroll < 12600 ? "pets on" : "pets"}>반려동물용품</a>
                  <a class="hobby" onClick={()=> {window.scrollTo({top: 12601});}} className={scroll > 12600 && scroll < 13200 ? "hobby on" : "hobby"}>완구/취미</a>
                  <a class="car" onClick={()=> {window.scrollTo({top: 13201});}} className={scroll > 13200 && scroll < 13800 ? "car on" : "car"}>자동차용품</a>
                  <a class="book" onClick={()=> {window.scrollTo({top: 13801});}} className={scroll > 13800 && scroll < 14400 ? "book on" : "book"}>도서/CD/DVD</a>
                  <a class="setting">설정<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" data-sentry-element="svg" data-sentry-component="SettingIcon" data-sentry-source-file="index.tsx"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.51648 0L8.42202 0.0053353C8.08021 0.0441436 7.79305 0.291162 7.70803 0.63122L7.10061 3.06168L7.00261 3.10267C6.74306 3.21575 6.48931 3.34367 6.24225 3.4863L5.99842 3.63326C5.83797 3.73413 5.68176 3.84074 5.52995 3.9529L5.44561 4.01668L3.03685 3.32814C2.6692 3.22297 2.27716 3.3815 2.08596 3.71266L0.599463 6.28733L0.55349 6.37964C0.420731 6.69336 0.491976 7.06143 0.74188 7.30308L2.54311 9.04502L2.52244 9.21359C2.46723 9.73573 2.4667 10.2627 2.52144 10.7858L2.54227 10.955L0.741886 12.6969C0.466987 12.9627 0.408267 13.3815 0.599463 13.7127L2.08596 16.2873L2.14292 16.3733C2.34823 16.6451 2.70261 16.7675 3.03683 16.6719L5.44477 15.9825L5.57869 16.0841C6.00168 16.3914 6.45532 16.6534 6.93196 16.8662L7.08477 16.9308L7.69528 19.3688C7.78803 19.7398 8.12134 20 8.50373 20H11.4767L11.5712 19.9947C11.913 19.9559 12.2002 19.7088 12.2852 19.3688L12.8906 16.9433L12.9943 16.9013C13.257 16.7873 13.5138 16.658 13.7637 16.5138L14.064 16.3309C14.1626 16.2678 14.2594 16.2024 14.3546 16.135L14.5464 15.9917L16.9627 16.6829C17.3303 16.7881 17.7224 16.6295 17.9136 16.2984L19.4001 13.7237L19.4461 13.6314C19.5788 13.3177 19.5076 12.9496 19.2577 12.708L17.4598 10.9692L17.4825 10.7956C17.539 10.2674 17.5396 9.73425 17.4836 9.20509L17.4606 9.02835L19.2577 7.29208C19.5326 7.02627 19.5913 6.60749 19.4001 6.27633L17.9136 3.70166L17.8566 3.6157C17.6513 3.34386 17.2969 3.22153 16.9627 3.31714L14.5481 4.00752L14.4137 3.90616C13.99 3.59974 13.5358 3.33876 13.0587 3.12698L12.9048 3.06252L12.2979 0.63122C12.2052 0.260248 11.8718 0 11.4894 0H8.51648ZM9.16727 1.66585H10.8381L11.3936 3.88595C11.4618 4.15867 11.6629 4.37863 11.9284 4.47095C12.621 4.71175 13.2633 5.08028 13.8205 5.55931L13.9037 5.62222C14.1053 5.75578 14.3571 5.79604 14.5929 5.72857L16.7956 5.09835L17.6314 6.54585L15.9917 8.13167C15.7892 8.32747 15.6993 8.61233 15.7528 8.8889C15.8947 9.62309 15.8934 10.377 15.7516 11.1098L15.7382 11.2137C15.7223 11.4562 15.8132 11.6958 15.9905 11.8672L17.6314 13.4534L16.7956 14.9008L14.5922 14.2713C14.323 14.1942 14.0331 14.2576 13.8205 14.4399C13.5449 14.6763 13.2476 14.8872 12.9303 15.0704C12.6056 15.2579 12.2661 15.4127 11.9148 15.5346L11.8183 15.575C11.6008 15.6826 11.4392 15.881 11.3795 16.1198L10.8256 18.3325H9.15394L8.59831 16.1091C8.53028 15.837 8.32995 15.6174 8.06524 15.5247C7.37305 15.2823 6.73161 14.9125 6.17557 14.4323L6.09233 14.3691C5.89047 14.2349 5.63817 14.1943 5.40176 14.2619L3.20394 14.89L2.36727 13.4425L4.0115 11.8538C4.21353 11.6585 4.30349 11.3745 4.25077 11.0984C4.11213 10.3725 4.11332 9.62752 4.2519 8.90296L4.26507 8.79924C4.28046 8.55722 4.18949 8.31832 4.01267 8.14734L2.36727 6.55668L3.20394 5.10918L5.40249 5.7384C5.6723 5.81559 5.96284 5.75179 6.17549 5.56866C6.45407 5.32875 6.75463 5.11499 7.07558 4.92968C7.39665 4.74432 7.73205 4.5909 8.07895 4.46969L8.17515 4.42916C8.39196 4.32136 8.55296 4.12336 8.61252 3.88511L9.16727 1.66585ZM9.99977 6.25C7.92872 6.25 6.24977 7.92895 6.24977 10C6.24977 12.0711 7.9287 13.75 9.99977 13.75C12.0708 13.75 13.7498 12.0711 13.7498 10C13.7498 7.92895 12.0708 6.25 9.99977 6.25ZM9.99977 7.91666C11.1504 7.91666 12.0831 8.84943 12.0831 10C12.0831 11.1506 11.1504 12.0833 9.99977 12.0833C8.84918 12.0833 7.91644 11.1506 7.91644 10C7.91644 8.84943 8.84919 7.91666 9.99977 7.91666Z" fill="#4285F4" data-sentry-element="path" data-sentry-source-file="index.tsx"></path></svg></a>
                </div>

              </div> : null} </div>
            </section>


          </section>

        </> : null}
      </>: null}

      {screen.search ? <>
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
      </> : null}
      
      {screen.sell_sign_up ? <>
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


      </>: null}

      {screen.log_in ? <section class="log_in_page">
        <div class="log_in_header">
          <img onClick={()=>{ setscreen({coupang : true , main: true })}} class="coupang_img" src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"/>
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
      </section>: null}

      {screen.sign_up ? <>
        <div class="sign_up_title"><img onClick={()=>{ setscreen({coupang : true , main: true})}} src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"/></div>
       
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


      </>: null}

      {screen.product ? <>
      {detall.map((num) => <section class="product_detall">
        <div class="serch_division_text"><a>쿠팡 홈</a>
          <svg class="srp_arrowIcon__bNaNA" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-sentry-element="svg" data-sentry-component="ArrowIcon" data-sentry-source-file="Breadcrumb.tsx"><path d="M3.8859 2.15732C4.0606 1.9717 4.34367 1.94925 4.54434 2.09575L4.59268 2.1359L8.84268 6.1359C9.03746 6.31922 9.05137 6.61975 8.88442 6.81982L8.84268 6.8641L4.59268 10.8641C4.3916 11.0534 4.07516 11.0438 3.8859 10.8427C3.7112 10.6571 3.70593 10.3732 3.86432 10.1817L3.90732 10.1359L7.77 6.50001L3.90732 2.8641C3.7217 2.6894 3.69925 2.40634 3.84575 2.20566L3.8859 2.15732Z" fill="#AAB5C0" data-sentry-element="path" data-sentry-source-file="Breadcrumb.tsx"></path></svg>
          <strong>{num.category}</strong>
        </div>

        <div class="detall_hedaer">
          <div class="detall_hedaer_contents">
            <div class="detall_left_menu"><img src={num.list_image}/></div>
            <div class="detall_big_img"> <img src={num.list_image}/></div>
           
            <div class="detall_contents">
              <div class="detall_contents_header">
                <div class="detall_contents_text">
                  <div><strong>{num.name}</strong></div>
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
                <span>{num.discount}{num.price}</span>
                <br/><span>{num.price}</span>
                <br/><span>{num.price}</span>
              </div>

              <div class="detall_contents_options">
                <div><span>더 많은 옵션 보기</span></div>
                <div></div>
                <div class="option_table_list">

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
                <div class="purchase_bt"><button>장바구니 담기</button> <button>바로구매</button></div>
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
        
        <section class="review_contener">
          <div class="review_header">
            <div><span>상품평</span></div>
            <div><span>상품평 운영원칙</span></div>
          </div>

          <div class="review_guide"><span>동일한 상품에 대해 작성된 상품평으로, 판매자는 다를 수 있습니다.</span></div>

          <div class="review_score_box"><span class="review_score_bg"><span class="review_score_active" style={{width: num.scope}}></span></span><span class="review_score_num">{num.review}</span> <button> 자세히보기</button></div>
        
          <div>
            <div>
              <h4>성분 만족도</h4>
              <div><span>아주만족해요</span><div></div></div>
            </div>
          </div>

          <div>
            <div><button>베스트순</button><button>최신순</button></div>
            <div>
              <input placeholder="상품명을 검색해보세요"/>
              <menu class="right_menu">
              
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

          <div class="inquiry_input"><input/></div>
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

      </section>)
      }
      
      </>: null}

      {footer ? <Footer screen={screen} setscreen={setscreen} /> : null} 

    </section>
  )
}

export default Main

