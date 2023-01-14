import styled from "styled-components";

export enum TextType {
  BODY_S = "1.4rem",
  BODY_M = "1.6rem",
  BODY_L = "1.8rem",
  HEAD_S = "2.2rem",
  HEAD_M = "2.6rem",
  HEAD_L = "3.0rem",
}
interface TextProps {
  children: React.ReactNode;
  type: TextType;
  weight?: number;
  color?: string;
}
export default function Text({ children, type, weight, color }: TextProps) {
  const size = type;
  return (
    <span.wrap size={size} weight={weight} color={color}>
      {" "}
      {children}
    </span.wrap>
  );
}

const span = {
  wrap: styled.span<{ size: string; weight?: number; color?: string }>`
    font-size: ${(p) => p.size};
    font-weight: ${(p) => p.weight || 400};
    color: ${(p) => p.color};
    line-height: 120%;
  `,
};
