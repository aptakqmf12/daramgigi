import styled from "styled-components";
import Wrap from "./wrap";

export default function Footer() {
  return (
    <footer.wrap>
      <Wrap>&copy; 2023 Daramgigi Privacy Policy</Wrap>
    </footer.wrap>
  );
}

const footer = {
  wrap: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background-color: #eee;
  `,
};
