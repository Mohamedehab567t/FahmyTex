import React, {useState , useEffect} from 'react'
import styled from 'styled-components';
import Navbar from '../HomeComponents/Navbar/Navbar'
import BreadCrumb from '../ProducsDetailsC/BreadCrumb'
import Upper from '../ProducsDetailsC/Upper';
import Ex from '../Loading';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { API } from '../data'

const Container = styled.div`
`
const Wrapper = styled.div`
width:80%;
margin:auto;
`

const LoadingDiv = styled.div`
width:100%;
height:90vh;
display:flex;
justify-content:center;
align-items:center;
background-color:white;
`


const ProductDetails = () => {
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
    <Container>
        <Navbar pos='unset' background={true} navbarWork={false}/>
        {!Loading ?<Wrapper>
            <Upper product={PR}/>
        </Wrapper> : <LoadingDiv> <Ex /> </LoadingDiv>}
    </Container>
  )
}

export default ProductDetails