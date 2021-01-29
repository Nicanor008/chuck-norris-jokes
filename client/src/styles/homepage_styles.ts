import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
      margin: 0 auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`
export const Main = styled.main`
  padding: 3rem 12rem;
`;
export const Header = styled.h2`
  padding: 1rem 0;
  text-align: center;
  color: blue;
  font-weight: normal;
`;
export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
export const Category = styled.div`
padding: 3rem 5rem;
margin: 1rem;
box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px 0 rgba(0,0,0,0.25);
-moz-box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px 0 rgba(0,0,0,0.25);
-webkit-box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px 0 rgba(0,0,0,0.25);
background: #ccd0d4;
border-radius: 10px;
cursor: pointer;
`;
export const CategoryName = styled.span`
  box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2),
    0 -10px 15px -1px rgba(255, 255, 255, 0.6),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.8),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2),
    0 -10px 15px -1px rgba(255, 255, 255, 0.6),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.8),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  -webkit-box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2),
    0 -10px 15px -1px rgba(255, 255, 255, 0.6),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.8),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  background: #ccd0d4;
  padding: 2rem;
  border-radius: 50%;
`;
