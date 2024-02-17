"use client";
import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  lable: string;
  action: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function IconButton(props: IconButtonProps) {
  return (
    <button {...props} onClick={props.action}>
      {props.lable}
    </button>
  );
}

export default IconButton;
