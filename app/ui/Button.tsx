"use client";

import { IconType } from "react-icons";
import { MdMenu } from "react-icons/md";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

function Button() {
  return (
    <button>
      <MdMenu size={34} />
    </button>
  );
}

export default Button;
