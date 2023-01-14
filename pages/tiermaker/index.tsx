import { useRouter } from "next/router";
import styled from "styled-components";
import MakerComponent, { MakerType } from "../../components/common/maker";
import Button from "../../components/ui/button";

const DATA: MakerType[] = [
  {
    uuid: "1111-2222-3333-4444",
    thumb: "https://item.kakaocdn.net/do/a7fd7c0630f8aea8419a565fb2773bbc82f3bd8c9735553d03f6f982e10ebe70",
    title: "킹받는 짤 랭킹",
    description: "오늘도 킹받는 짤랭킹을 메겨보자",
    userNick: "부디",
    userImage: "https://item.kakaocdn.net/do/a7fd7c0630f8aea8419a565fb2773bbc82f3bd8c9735553d03f6f982e10ebe70",
  },
];

export default function TierMaker() {
  const route = useRouter();
  return (
    <div.wrap>
      <div.head.wrap>
        <div.head.filter>
          <div>인기순</div>
          <div>최신순</div>
        </div.head.filter>
        <div.head.create>
          <Button onClick={() => route.push("/tiermaker/create")}>생성하기</Button>
        </div.head.create>
      </div.head.wrap>

      <MakerComponent data={DATA} title="티어 메이커" />
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    margin: 20px 10px;
  `,
  head: {
    wrap: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    filter: styled.div`
      display: flex;
      align-items: center;
    `,
    create: styled.div``,
  },
};
