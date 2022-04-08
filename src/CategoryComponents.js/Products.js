import styled from "styled-components";
import Product from "./Product";
import { tablet , mobile  } from "../responsive";

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,25%);
    direction: rtl;
    justify-content: space-between;
    ${tablet ({
      display:'grid',
      gridTemplateColumns : "repeat(2,50%)",
      padding:"10px"
    
    })}
    ${mobile ({
      display:'flex',
      flexDirection : "column",
      padding:"10px"
    })}
`;

const Products = (props) => {
  return (
    <Container>
      {props.lst.map((item) => (
        <Product item={item} key={item.id} color={props.color} />
        ))}
    </Container>
  );
};

export default Products;