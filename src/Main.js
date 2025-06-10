import {React, useEffect, useState} from 'react'
import Topbar from './Topbar'
import Footer from './Footer'
import axios from 'axios';

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
  const [product, setproduct] = useState("")         
  
  
  const [page, setpage] = useState("")  
              
  const handleScrollToTop = (behavior: 'smooth' | 'auto') => {
  window.scrollTo({top: 0, behavior: behavior});
  };

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
  async function getproduct() {
    try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/product`);

      setproduct(response.data)
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

  useEffect(() => {
  getpost();
  getproduct();
  gettag();
  getcategory();
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
    }else {
      setallcheck(false);
      settermsage(false);
      settermsservice(false);
      settermseft(false);
      setagreepi(false);
      setagreepiforad(false);
      setagreeforad(false);
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


  useEffect(()=>{
    agree_check();
    if(termsage===true && termsservice===true && termseft===true && agreepi===true && agreepiforad===true && agreeforad===true ){
      setallcheck(true)
    } else {
      setallcheck(false)
    }
  }, [termsage,termsservice, termseft,agreepi,agreepiforad,agreeforad])




  return (
    <>
      {topbar ? <Topbar screen={screen} setscreen={setscreen} setfooter={setfooter} /> : null} 
      
      {screen.main ? <>
        {post !== "" && product !== "" && tag !== "" && category !=="" ? <>
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
            </article>

            <section class="pruduct_list_contener">
              <div class="pruduct_list_box"><h2 class="pruduct_title showping">오늘의 쇼핑 제안</h2>

              <div class="pruduct_list">
                <div  class="black_btn_left nonarrow" onClick={(e)=> {btn_left(e)}}>left</div>
                <ul class="list_box">
                  {product.map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
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
                  {product.map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
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
                  {product.map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
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
                  {product.map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
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
                  {product.map((num) => <li> <img name={num.name}  class="" src={num.list_image}/>
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

      {footer ? <Footer screen={screen} setscreen={setscreen} /> : null} 

    </>
  )
}

export default Main

