import {React, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import axios from 'axios';

import Main from "./page/Main"
import Sell_sign_up  from "./page/Sell_sign_up "
import Shopping_cart from "./page/Shopping_cart"
import Log_in  from './page/Log_in';
import Search from './page/Search';
import Sign_up from './page/Sign_up';
import Product from './page/Product';
import My_page from './page/My_page';
import Purchase from './page/Purchase';
import Coupon_page from './page/Coupon_page';
import Adit from './page/adit'


export default function Router () {

  const [scroll, setscroll] = useState(false)
  const [detall, setdetall] = useState("")
  const [option , setoption] = useState("")
  const [cart , setcart] = useState("")
  const [order, setorder] = useState("")
  const [arrive, setarrive] = useState("")
  const [post, setpost] = useState("")
  const [tag, settag] = useState("")
  const [category, setcategory] = useState("")
  const [login, setlogin] = useState(false)
  const [user, setuser] = useState(false)
  const [division, setdivision] = useState("all")
  const [product, setproduct] = useState("")
  const [search , setsearch] = useState("")
  const [sildermenu, setsildermenu] = useState(false)
  const [paycart , setpaycart] = useState([])

  const [couponlist , setcouponlist] = useState()
  const [uselist , setuselist] = useState()

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
        setuser(response.data)
        getcart(response.data[0].user_sno)
        getorder(response.data[0].user_sno)
        getarrive(response.data[0].user_sno)
      } else if (response.data.is_success === false) {
        alert("틀렸어요")
      } else{

      }
    } catch (error) {
      //응답 실패
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
  async function getusecoupon(e) {
    try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/coupang/usecoupon?user=${e}`);
      setuselist(response.data)
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }    
  async function getcoupon(e) {
    try {
      //응답 성공 
      const response = await axios.get(`http://localhost:3000/coupang/coupon`);
      setcouponlist(response.data)
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }  
 

    function logout() {
    setlogin(false)
    setuser()
    getcart()
    getorder()
    getarrive()
    window.localStorage.clear();
  }

  function logsss(){ 
    if (window.localStorage.getItem('login') === true) {
  getlogin(window.localStorage.getItem('user_sno'))
  window.location.reload();
  };
  }


  useEffect(() => {
  getpost();
  gettag();
  getcategory();
  getdata();
  getcoupon();
  }, []);

  const handleScrollToTop = (behavior: 'smooth' | 'auto') => {
  window.scrollTo({top: 0, behavior: behavior});
  };
  useEffect(() => {
  // 페이지가 렌더링 되면 무조건 맨위로 스크롤 한다.
  handleScrollToTop('auto');
  }, []);

  const [focus , setfocus] = useState("")
  function handlefouce (e) {
    setfocus(e)
  }  

logsss()

  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/'
         element={<Main logout={logout} cart={cart} scroll={scroll} setscroll={setscroll} handleScrollToTop={handleScrollToTop} login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} setuser={setuser} getdata={getdata} post={post} tag={tag} category={category} setcart={setcart}/>} />
        <Route exact path='/Sell_sign_up'
         element={<Sell_sign_up />} />
        <Route exact path='/Shopping_cart'
         element={<Shopping_cart logout={logout} user={user} cart={cart} getcart={getcart} login={login} paycart={paycart} setpaycart={setpaycart}/>} />
        <Route exact path='/Log_in'
         element={<Log_in logout={logout} login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} setuser={setuser} getcart={getcart} getorder={getorder} getarrive={getarrive} handlefouce={handlefouce} focus={focus}  getusecoupon={getusecoupon} setuselist={setuselist} />} />
        <Route exact path='/Search'
         element={<Search logout={logout} login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} setuser={setuser} getcart={getcart} getorder={getorder} getarrive={getarrive} handlefouce={handlefouce} focus={focus} product={product} search={search} division={division} scroll={scroll} post={post}/>} />
        <Route exact path='/Sign_up'
         element={<Sign_up />} />
        <Route exact path='/Product'
         element={<Product logout={logout} login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} setuser={setuser} getcart={getcart} getorder={getorder} getarrive={getarrive} handlefouce={handlefouce} focus={focus} detall={detall} post={post} option={option} scroll={scroll} getdata={getdata} gatoption={gatoption} />} />
        <Route exact path='/My_page'
         element={<My_page logout={logout} cart={cart} login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} order={order} arrive={arrive} post={post} />} />
        <Route exact path='/Purchase'
         element={<Purchase logout={logout} user={user} cart={cart} getcart={getcart} login={login} paycart={paycart} setpaycart={setpaycart} setorder={setorder} getorder={getorder} uselist={uselist} />} />
        <Route exact path='/Coupon_page'
         element={<Coupon_page logout={logout} couponlist={couponlist} user={user} cart={cart} getcart={getcart} login={login} paycart={paycart} setpaycart={setpaycart} setorder={setorder} getorder={getorder} uselist={uselist} setuselist={setuselist} getusecoupon={getusecoupon} setlogin={setlogin} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} order={order} arrive={arrive} post={post} getcoupon={getcoupon} />} /> 
        <Route exact path='/Adit'
         element={<Adit logout={logout} cart={cart} login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} order={order} arrive={arrive} post={post} />} />    
      </Routes>
    </BrowserRouter>

    )
}