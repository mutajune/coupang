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
        getcart(response.data[0].sno)
        getorder(response.data[0].sno)
        getarrive(response.data[0].sno)
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


  useEffect(() => {
  getpost();
  gettag();
  getcategory();
  getdata();
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



  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} setuser={setuser} getdata={getdata} post={post} tag={tag} category={category}/>} />
        <Route exact path='/Sell_sign_up' element={<Sell_sign_up />} />
        <Route exact path='/Shopping_cart' element={<Shopping_cart user={user} cart={cart} getcart={getcart}  login={login} />} />
        <Route exact path='/Log_in' element={<Log_in login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} setuser={setuser} getcart={getcart} getorder={getorder} getarrive={getarrive} handlefouce={handlefouce} focus={focus} />} />
        <Route exact path='/Search' element={<Search login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} setuser={setuser} getcart={getcart} getorder={getorder} getarrive={getarrive} handlefouce={handlefouce} focus={focus} product={product} search={search} division={division} scroll={scroll} post={post}/>} />
        <Route exact path='/Sign_up' element={<Sign_up />} />
        <Route exact path='/Product' element={<Product login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} setuser={setuser} getcart={getcart} getorder={getorder} getarrive={getarrive} handlefouce={handlefouce} focus={focus} detall={detall} post={post} option={option} scroll={scroll} getdata={getdata} gatoption={gatoption} />} />
        <Route exact path='/My_page' element={<My_page login={login} setlogin={setlogin} user={user} setdivision={setdivision} getproduct={getproduct} setsearch={setsearch} sildermenu={sildermenu} setsildermenu={setsildermenu} order={order} arrive={arrive} post={post} />} />
      </Routes>
    </BrowserRouter>

    )
}