import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Loader } from "../components/loader";
import "../components/modal/modal.css";
import styled from "styled-components";

// GET a random joke from a specific category
const GET_RANDOM_JOKE_IN_A_CATEGORY = gql`
  query GetSingleCategory($category: String!) {
    category(category: $category) {
      icon_url
      value
      id
      url
      created_at
      updated_at
    }
  }
`;

const JokeParagraph = styled.p`
    text-align: center;
`
const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
`
const AccessLink = styled.a`
    align-self: center;
    text-decoration: none;
`


function SingleCategory({ category }: any) {
    let { data, loading, error } = useQuery(
        GET_RANDOM_JOKE_IN_A_CATEGORY,
        {
            variables: { category },
        }
    );

    if (loading) return <Loader />;
    if (error) return <p>ERROR</p>;

    return (
        <div>
            <JokeParagraph>{data?.category?.value}</JokeParagraph>
            <ModalFooter>
                <img src={data?.category.icon_url} alt="Random joke" />
                <AccessLink 
                    href={data?.category.url} 
                    target="_blank" 
                    rel="nofollow noreferrer">
                        Read More
                </AccessLink>
            </ModalFooter>
        </div>
    );
}


export default SingleCategory;
