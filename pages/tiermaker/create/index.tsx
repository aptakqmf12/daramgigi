import Input from "../../../components/ui/Input";
import Wrap from "../../../components/layout/wrap";
import PageContainer from "../../../components/layout/page";
import Text, { TextType } from "../../../components/ui/text";
import styled from "styled-components";
import Button from "../../../components/ui/button";

export default function TierMakerCreator() {
  return (
    <Wrap width={680}>
      <PageContainer>
        <div.title>
          <Text type={TextType.HEAD_M} weight={600}>
            티어 템플릿 생성
          </Text>
          <Text type={TextType.BODY_L}>티어 메이커 템플릿을 손쉽게 제작할 수 있습니다.</Text>
        </div.title>

        <form>
          <div.input>
            <Input title="제목" placeholder="제목을 입력해 주세요" />
          </div.input>

          <div.input>
            <Input title="설명글" placeholder="설명글을 입력해 주세요" />
          </div.input>

          <div.submit>
            <Button>템플릿 생성</Button>
          </div.submit>
        </form>
      </PageContainer>
    </Wrap>
  );
}

const div = {
  title: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  `,
  input: styled.div`
    margin-bottom: 10px; ;
  `,
  submit: styled.div`
    button {
    }
  `,
};
