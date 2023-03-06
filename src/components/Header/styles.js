import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;
