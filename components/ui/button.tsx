import { MouseEventHandler } from "react";
import styled from "styled-components";
import Text, { TextType } from "./text";

interface ButtonProps {
  children: React.ReactNode;
  bg?: string;
  color?: string;
  border?: string;
  onClick?: (e: any) => void;
}

export default function Button({ children, bg, color, border, onClick }: ButtonProps) {
  const options = {
    bg,
    color,
    border,
    onClick,
  };
  return (
    <button.wrap {...options}>
      <Text type={TextType.BODY_M}>{children}</Text>
    </button.wrap>
  );
}
const button = {
  wrap: styled.button<{ bg?: string; color?: string; border?: string }>`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    background-color: ${(p) => (p.bg ? p.bg : "black")};
    color: ${(p) => (p.color ? p.color : "white")};
    border: ${(p) => (p.border ? `1px solid ${p.border}` : "none")};
  `,
};
