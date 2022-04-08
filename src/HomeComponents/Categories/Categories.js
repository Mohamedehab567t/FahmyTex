import React from "react";
import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";
import { tablet , mobile } from "../../responsive";
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';
const Container = styled.div`
  display: grid;
  grid-template-areas :
   "f f h y"
   "f f h y"
   "fw fw fw fh"
   "fw fw fw fh"
  ;
  grid-auto-rows : minmax(10vh , 25vh);
  grid-gap: 10px;
  padding: 20px;
  justify-content: space-between;
  ${mobile ({
    display : "flex",
    flexDirection : "column"
  })}
  ${tablet ({
    display : "flex",
    flexDirection : "column"
  })}
`;
const CategoryTitle = styled.h1`
text-align:center;
margin-top : 15px;
margin-bottom : 5px;
font-weight : bold;
`
const Categories = () => {
  const {t} = useTranslation()
  return (
    <>
      <CategoryTitle>{t("Categories.title")}</CategoryTitle>
    <Container id="cat">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default Categories;