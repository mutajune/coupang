import {React, useEffect, useState} from 'react'
import Topbar from './Topbar'
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
      {topbar ? <Topbar screen={screen} setscreen={setscreen} /> : null} 
      
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
                          <div  className={`banner_description description_${sno.class}`}>{num.banner_name } <br/> {num.banner_description}</div> </SwiperSlide>)}

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
              )}
             </div>
            
            {/* scroll */}
             <div class="scroll_menu_box">{scroll > 3600 ? <div class="scroll_menu">
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
                </div>

              </div> : null} </div>
            </section>


          </section>



        </> : null}
      </>: null}
      
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
    </>
  )
}

export default Main

