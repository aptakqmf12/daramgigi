import styled from "styled-components";
import Text, { TextType } from "../ui/text";

export default function PageContainer({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div.wrap>
      {title && (
        <div.title>
          <Text type={TextType.HEAD_M} weight={600}>
            {title}
          </Text>
        </div.title>
      )}

      {children}
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    padding: 20px 10px;
  `,
  title: styled.div`
    margin-bottom: 20px;
  `,
};
