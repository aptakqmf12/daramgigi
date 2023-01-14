import styled from "styled-components";

interface WrapProps {
  children: React.ReactNode;
  width?: number;
}

export default function Wrap({ children, width }: WrapProps) {
  return <div.wrap width={width}>{children}</div.wrap>;
}

const div = {
  wrap: styled.div<{ width?: number }>`
    max-width: ${(p) => (p.width ? p.width : 1280)}px;
    margin: 0 auto;
  `,
};
