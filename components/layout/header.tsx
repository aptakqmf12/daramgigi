import styled from "styled-components";
import Text, { TextType } from "../ui/text";
import { useRouter } from "next/router";

export default function Header() {
  const route = useRouter();
  return (
    <header.wrap>
      <nav>
        <h1 onClick={() => route.push("/")}>
          <Text type={TextType.HEAD_M}>Daram.GG</Text>
        </h1>

        <ul>
          <li onClick={() => route.push("/tiermaker")}>
            <Text type={TextType.HEAD_S}>티어 메이커</Text>
          </li>
        </ul>
      </nav>

      <div onClick={() => route.push("/signin")}>
        <Text type={TextType.HEAD_S}>로그인</Text>
      </div>
    </header.wrap>
  );
}

const header = {
  wrap: styled.header`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 20px;
    background-color: black;
    color: white;

    nav {
      display: flex;
      align-items: center;
      gap: 40px;

      h1,
      li {
        cursor: pointer;
      }
    }

    div {
      cursor: pointer;
    }
  `,
};
