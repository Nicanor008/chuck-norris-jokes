import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Loader } from "../components/loader";
import "../components/modal/modal.css";
import { GlobalStyles, CategoryName, Category, Content, Header, Main } from "../styles/homepage_styles";
import SingleCategory from "./single_category";


// GET all categories in random jokes generator query
const GET_ALL_CATEGORIES = gql`
  query {
    categories
  }
`;


function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState("");
  let { data, loading, error } = useQuery(GET_ALL_CATEGORIES);
    const [showModal, setShowModal] = useState(false);

  data = data && data.categories;
  if (loading) return <Loader />;
  if (error) return <p>ERROR</p>;

    const onClickCategory = (category: any) => {
      setShowModal(!showModal);
      setSelectedCategory(category);
    };

  return (
    <Main>
    <GlobalStyles />
      <Header>
        <img src="https://res.cloudinary.com/nicanor/image/upload/v1611909121/SovTech/arrow.svg" alt="admin arrow" />&nbsp;
        sudo internet get --all <b>chuck-norris</b></Header>
      <Content>
        {data?.map((category: React.ReactNode) => (
          <Category key={Math.random()} onClick={() => onClickCategory(category)}>
            <CategoryName>{category}</CategoryName>
          </Category>
        ))}
      </Content>

      {/* display single category */}
      {showModal && (
        <div
          id="myModal"
          className={showModal ? `modal display-block` : `modal display-none`}
        >
          <div className="modal-content">
            <span
              className="close closeModalBtn"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <SingleCategory category={selectedCategory} />
          </div>
        </div>
      )}
    </Main>
  );
}


export default HomePage;
