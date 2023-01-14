import Wrap from "../components/layout/wrap";
import TierMaker from "./tiermaker";
import styled from "styled-components";
import Text, { TextType } from "../components/ui/text";

export default function Home() {
  return (
    <Wrap>
      <HomeBanner />

      <TierMaker />
    </Wrap>
  );
}

const HomeBanner = () => {
  return (
    <div.banner>
      <div.text>
        <p className="main">
          <Text type={TextType.HEAD_M} weight={600}>
            심심할때 뭐하지? 다람지지!
          </Text>
        </p>

        <p className="sub">
          <Text type={TextType.BODY_L} weight={300}>
            랜덤지지, 누구나 즐기고 창작할 수 있는 곳.
          </Text>
          <Text type={TextType.BODY_L} weight={300}>
            심심하면 생각나는 인터넷 상의 놀이터를 만들어 가고 있습니다.
          </Text>
        </p>
      </div.text>
      <div.image>image</div.image>
    </div.banner>
  );
};

const div = {
  banner: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 30px;
    background-color: black;
    color: white;
    border-radius: 20px;
  `,
  text: styled.div`
    .main {
      margin-bottom: 20px;
    }
    .sub {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `,
  image: styled.div``,
};
