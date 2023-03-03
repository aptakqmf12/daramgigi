import Image from "next/image";
import styled from "styled-components";
import PageContainer from "../layout/page";
import Text, { TextType } from "../ui/text";
import { useRouter } from "next/router";

export interface MakerType {
  uuid: string;
  thumb: string;
  title: string;
  description: string;
  userNick: string;
  userImage?: string;
}

interface MakerComponentProps {
  data: MakerType[];
  title: string;
}
export default function MakerComponent({ data, title }: MakerComponentProps) {
  const route = useRouter();
  return (
    <PageContainer title={title}>
      <ul.wrap>
        {data.map((card, i) => (
          <li
            onClick={() =>
              route.push({
                pathname: `/tiermaker/${card.uuid}`,
                query: { ...card },
              })
            }
            key={i}
          >
            <Card {...card} />
          </li>
        ))}
      </ul.wrap>
    </PageContainer>
  );
}

const Card = (props: MakerType) => {
  return (
    <card.wrap>
      <card.thumb>
        <Image src={props.userImage || ""} width={300} height={200} alt="thumb" sizes="100%" style={{ objectFit: "cover" }} />
      </card.thumb>
      <card.title>
        <Text type={TextType.HEAD_S} weight={600}>
          {props.title}
        </Text>
      </card.title>
      <card.desc>
        <Text type={TextType.BODY_M} color={"#222"}>
          {props.description}
        </Text>
      </card.desc>
      <card.user>
        <div className="profile">
          <Image src={props.userImage || ""} width={30} height={30} alt="?" />
        </div>
        <Text type={TextType.BODY_S} color={"#adadad"}>
          {props.userNick}
        </Text>
      </card.user>
    </card.wrap>
  );
};

const ul = {
  wrap: styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1fr);
    gap: 2rem;
  `,
};

const card = {
  wrap: styled.div`
    cursor: pointer;
  `,
  thumb: styled.div`
    width: 100%;
    height: 20rem;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: lightgray;
    overflow: hidden;

    img {
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  `,
  title: styled.div``,
  desc: styled.div``,
  user: styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    .profile {
      width: 30px;
      height: 30px;
      border: 1px solid lightgray;
      border-radius: 50%;
      overflow: hidden;
    }
  `,
};
