import React, {useState , useEffect} from 'react'
import Announcement from '../HomeComponents/Annoucment/Annoucment'
import Navbar from '../HomeComponents/Navbar/Navbar'
import ProductContainer from '../productContainer/ProductContainer'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { API } from '../data'
import styled from 'styled-components';
import Ex from '../Loading';

const LoadingDiv = styled.div`
width:100%;
height:90vh;
display:flex;
justify-content:center;
align-items:center;
background-color:white;
`


const Product = () => {
  let { id } = useParams();
  const [PR , setPR] = useState({})
  const [Loading , setLoading] = useState(true)
  const getMsg = async iid => {
    const response = await axios.get(API+'/product',{
      params : {
        id : iid
      }
    });
    return response.data
  }

  useEffect(() => {
    getMsg(id).then(payload => {
      setPR(payload.products)
      setLoading(false)
    })
  },[])
 return (
   <>
    <Announcement />
    <Navbar pos='unset' background={true} navbarWork={false}/>
    {!Loading ? <ProductContainer item ={PR}/> : <LoadingDiv> <Ex /> </LoadingDiv>}
   </>
 )
}

export default Product
