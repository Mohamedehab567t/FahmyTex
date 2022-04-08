import styled from "styled-components";
import { Link } from 'react-router-dom'
import { tablet , mobile , laptop } from "../../responsive";
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';

const Backdrop  = styled.div`
position: absolute;
background-color:black;
opacity:0.7;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index:2;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .7s ease-in-out;
`;

const Container = styled.div`
  grid-area ${props => props.gridname};
  position: relative;
  ${mobile ({
    width:"100%"
  })}
  ${tablet ({
    width:"100%"
  })}
  display:flex;
  overflow:hidden;
  &:hover ${Image}{
    transform:scale(1.2)
  }
`;  


const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index:3;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    ${laptop ({
      fontSize:"20px"
    })}

    ${tablet ({
      fontSize:"30px"
    })}

    ${mobile ({
      fontSize:"30px"
    })}

`;

const Button = styled.button`
background-color:transparent;
border: white 0.5px solid;
padding : 10px;
border-radius : 0px;
color:white;
font-size:20px;
transition : all .4s ease-in-out;
cursor : pointer;
&:hover{
    background-color:white;
    color:black;
}
`;
const CategoryItem = ({ item }) => {
  const {t} = useTranslation()

  let url = "category?key=weight&value="+item.weight+"&order=1"
    return (
    <Container gridname={item.gridname}>
      <Backdrop />
      <Image src={process.env.PUBLIC_URL+"images/"+item.img} />
      <Info>
        <Title>{t(item.title)}</Title>
        <Link to={url}>        <Button>{t("Categories.button")}</Button>     </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;