import React , {useEffect , useState} from 'react';
import * as com from './styledComponents'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ExpandMore , ArrowLeft , ArrowRight } from '@material-ui/icons'; 
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';
import Products from './Products'
import {useLocation} from 'react-router-dom';
import axios from 'axios'
import { API } from '../data'
import { mobile , tablet,laptop } from '../responsive';
import Ex from "../Loading";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n"
import { useTranslation } from 'react-i18next';
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  ${laptop ({
    flexDirection : "column",
    alignItems: "center"
  
  })}
  ${tablet ({
    flexDirection : "column",
    alignItems: "center"
  
  })}
  ${mobile ({
    flexDirection : "column",
    alignItems: "center"
  })}
`;

const GoBackLink = styled.div`
display:flex;
width:100%;
text-decoration:none;
color:#000B49;
font-weight:bold;
align-items:center;
cursor:pointer;
`
const GoBack = styled.div`
display:flex;
`

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const LoadingDiv = styled.div`
flex : 5;
height:300px;
display:flex;
justify-content:center;
align-items:center;
background-color:white;
`
const NoData = styled.div`
width:100%;
height:50vh;
display:felx;
justify-content:center;
align-items:center;
`

const Msg = styled.p`
font-weight:bold;
font-size: 2em;
`


const getMsg = async (keyy , valuee,order) => {
  const response = await axios.get(API+'/api',{
    params : {
      key : keyy,
      value : valuee,
      order:order
    },
    headers:{
      "If-None-Match" : "jkolid125365djmcnhd895452"
    }
  });
  return response.data
}

const getFilter = async (keyy , valuee,order,obj) => {
  const response = await axios.get(API+'/api',{
    params : {
      key : keyy,
      value : valuee,
      order:order,
      obj:obj
    },
    headers:{
      "If-None-Match" : "jkolid125365djmcnhd895452"
    }
  });
  return response.data
}

const getSearch = async (q , order) => {
  const response = await axios.get(API+'/search',{
    params : {
      q : q,
      order:order
        
    },
    headers:{
      "If-None-Match" : "jkolid125365djmcnhd895452"
    }
  });
  return response.data
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const CategoryContainer = () => { 
  const {t} = useTranslation()
  const lang = localStorage.getItem("i18nextLng");
  let navigate = useNavigate();
  const [List , setList] = useState([])
  const [Loading , setLoading] = useState(true)
  const [F,SetF] = useState({"size" : [] , "type" : []})
  const query = useQuery()
  const [Disabled , setDisabled] = useState(query.get("q") ? true : false)
  useEffect(() => {
    if(query.get("q")){
      getSearch(query.get("q"),query.get("order")).then(payload => {
        setList(payload.products)
        setLoading(false)
      })
    }else{
      getMsg(query.get("key"),query.get("value"),query.get("order")).then(payload => {
        setList(payload.products)
        setLoading(false)
      })
    }

  },[])
  
  const HandleChangeScore = e => {
    if(query.get("q")){
      navigate(`/category/?q=${query.get("q")}&order=${e.target.value}`)
      setLoading(true)
      getSearch(query.get("q"),e.target.value).then(payload => {
        setList(payload.products)
        setLoading(false)
      })
    }else{
      navigate(`/category/?key=${query.get("key")}&value=${query.get("value")}&order=${e.target.value}`)
      setLoading(true)
      getMsg(query.get("key"),query.get("value"),e.target.value).then(payload => {
        setList(payload.products)
        setLoading(false)
      })
    }
  }
  const handleChangeCheck = (e) => {
    const obj = {...F}
    if(e.target.dataset.key == "size"){
      if(e.target.checked){
        obj["size"].push(e.target.name)
      }else{
        obj['size'].forEach(el => {
          if(el == e.target.name){
            const index = obj['size'].indexOf(e)
            obj['size'].splice(index , 1)
          }
        })
      }
    }else{
      if(e.target.checked){
        obj["type"].push(e.target.name)
      }else{
        obj['type'].forEach(el => {
          if(el == e.target.name){
            const index = obj['type'].indexOf(e)
            obj['type'].splice(index , 1)
          }
        })
      }
    }
    setLoading(true)
    setDisabled(true)
    SetF(obj)
    navigate(`/category/?key=${query.get("key")}&value=${query.get("value")}&order=1&obj=${F}`)
    getFilter(query.get("key"),query.get("value"),1,F).then(pay => {
      setList(pay.products)
      setLoading(false)
      setDisabled(false)
  })
  }
  const Content = () => {
    if(Loading){
      return (
        <LoadingDiv><Ex /></LoadingDiv>
      )
    }else{
      if(List.length > 0){
        return (<Products lst = {List} color={query.get("q") ? query.get("q") : ''}/>)
      }else{
        return (<NoData><Msg>{t("No data to show")}</Msg></NoData>)
      }
    }
  }
  return <com.Container>
      <com.Wrapper>
          <com.Filter>
              <com.FilterTitle>{t("Filter Towels")} : </com.FilterTitle>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"

        >
          <Typography>{t("Towel Type")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck}  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Geust Towel" name="geust towel" />
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck}  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Hand Towel"  name="hand towel" />
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "type"}}  />} label="Bath Towel"  name="bath towel" />
        </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{t("Towel Size")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <FormGroup>
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "size"}}/>} label="33×33 cm"  name="33×33 cm" />
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "size"}}/>} label="33×55 cm"  name="33×55 cm" />
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "size"}}/>} label="40×60 cm"  name="40×60 cm" />
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "size"}}/>} label="50×90 cm"  name="50×90 cm" />
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "size"}}/>} label="50×100 cm" name="50×100 cm" />

                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "size"}}/>} label="60×120 cm" name="60×120 cm" />
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "size"}}/>} label="70×140 cm" name="70×140 cm" />
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "size"}}/>} label="90×180 cm" name="90×180 cm" />
                <FormControlLabel disabled={Disabled ? true : false} onChange={handleChangeCheck} control={<Checkbox inputProps={{"data-key" : "size"}}/>} label="60x110 cm" name="60x110 cm" />
            </FormGroup>
        </AccordionDetails>
      </Accordion>

          </com.Filter>
          <com.Products>

          <FilterContainer>
          <GoBack>
                <GoBackLink>
                <ArrowLeft
                        style={{"fontSize" : "40px" , "marginRight" : "15px;" , "order" : lang == 'ar' ? "2" : "1"}}
                    />
                   <a href={'/#cat'} style={{"order" : lang == 'ar' ? "1" : "2"}}> {t("Go back to categories")} </a>
                </GoBackLink>
            </GoBack>
          <h1>{query.get("value") ? t(query.get("value")+"!") : query.get("q")}</h1>
        <Filter>
          <FilterText>{t("Sort Products")}:</FilterText>
          <Select onChange={HandleChangeScore}>
            <Option value="1">({t("asc")})</Option>
            <Option value="-1">({t("desc")})</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {Content()}
          </com.Products>
      </com.Wrapper>
  </com.Container>;
};

export default CategoryContainer;
