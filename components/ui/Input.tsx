import styled from "styled-components";
import Text, { TextType } from "./text";

interface InputProps {
  title?: string;
  placeholder?: string;
}

export default function Input({ title, placeholder }: InputProps) {
  return (
    <label.wrap>
      {title && <Text type={TextType.BODY_S}>{title}</Text>}

      <input placeholder={placeholder} />
    </label.wrap>
  );
}
const label = {
  wrap: styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;

    input {
      padding: 10px;
      border: 1px solid lightgray;
      border-radius: 4px;

      &::placeholder {
        color: lightgray;
      }
    }
  `,
};
