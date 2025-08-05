import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Pagination as Paginations, Alert, Button, Switch, Cascader} from "antd";

import { Navigation, Pagination, Autoplay,  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Main = ({login, setlogin, user, setuser, getdata, post, tag, category}) => {
  const navigate = useNavigate();
  const [banner_num, setbanner_num] = useState(0)


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

  // navigate
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

  function Goproducts () {
  navigate("/Product")
  };

  const Goproduct = (postId) => {
    // 게시글 ID와 추가 데이터를 함께 전달하여 상세 페이지로 이동
    navigate(`/product/${postId}`, {
      state: { id: postId, additionalData: 'Some data' },
    });
  };

  // category
  const [scroll, setscroll] = useState(false)
  const [width, setwidth] = useState(false)

  // user
  const [focus , setfocus] = useState("")
  const [id , setid] = useState("")
  const [pw , setpw] = useState("")

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
  const [detall_img, setdetall_img] = useState("")
  const [detall, setdetall] = useState("")
  const [option , setoption] = useState("")
  const [option_num , setoption_num] = useState(1)

  const [cart , setcart] = useState("")

  const [order, setorder] = useState("")
  const [arrive, setarrive] = useState("")
  
  const [sildermenu, setsildermenu] = useState(false)
  const [menuopen, setmenuopen] = useState(false)
              

  async function gatoption(e) {
        try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/product/detall/option?option=${e}`);
      setoption(response.data)
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  async function getcart(e) {
  try {
    //응답 성공 
    const response = await axios.get(`http://localhost:3000/shopping_cart?users=${e}`);
    setcart(response.data)
    console.log(cart)
  } catch (error) {
    //응답 실패
    console.error(error);
  }
  }
  async function getorder(e) {
  try {
    //응답 성공 
    const response = await axios.get(`http://localhost:3000/coupang/user/order?users=${e}`);
    setorder(response.data)
  } catch (error) {
    //응답 실패
    console.error(error);
  }
  }  
  async function getarrive(e) {
  try {
    //응답 성공 
    const response = await axios.get(`http://localhost:3000/coupang/user/arrive?users=${e}`);
    setarrive(response.data)
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


  // cart


  async function addcart(e) {
    const amounts = e.target.parentElement.parentElement.children[0].children[0].value
    if (login === true) {
      try {
        //응답 성공 
        const response = await axios.get(`http://localhost:3000/cart_add?user=${user[0].sno}&product=${option[option_num].option_product}&amount=${amounts}`);
        console.log("장바구니 저장")
        getcart(user[0].sno); 
      } catch (error) {
        //응답 실패
        console.log(user[0].sno)
        console.error(error);
      }

    } else {
      alert("로그인 하여해요")
    }

}

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
    getdata(e)
    gatoption(e)
    Goproducts()
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


  
    async function getproduct(e) {
    console.log(e)
    try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/product?division=${division}&search=${e}`);

      setproduct(response.data)
    } catch (error) {
      //응답 실패
      console.error(error);
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
              <li class="right_menu_nickname"><span>{user[0].nickname}님</span></li>
              <li class="right_menu_log_out" onClick={()=>{setlogin(false)}}><button>로그아웃</button></li>
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
                  <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.post_name} className={focus === num.post_name ? "hot_img_focus" : "hot_img"} class="hot_img" src={num.post_mark}/>
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
                  .map((num) => <li> <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name}  class="" src={num.list_image}/>
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
              <h2 class="pruduct_title_small">오늘의 <span class="orange">판매자 특가</span></h2>

              <div class="white_btn_left nonarrow" onClick={(e)=> {white_btn_left(e)}}>left</div>

              <div class="pruduct_list_box_small">
              <div class="pruduct_list_small">
                <ul class="list_box_small">
                  {post.filter((num) => num.part === 'TSS')
                  .map((num) => <li> <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name}  class="" src={num.list_image}/>
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
                  .map((num) => <li> <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name}  class="" src={num.list_image}/>
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
                          .map((num) => <SwiperSlide><img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name} src={num.banner_img}/>
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
                                <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name} src={num.list_image}/>
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
                                <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name} src={num.list_image}/>
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
                                <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name} src={num.list_image}/>
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
                                <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name} src={num.list_image}/>
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
                                <img onClick={(e)=>{product_detall_on(e.target.name)}} name={num.name} src={num.list_image}/>
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

export default Main

