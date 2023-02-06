import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
  version: "primary" | "secondary";
  buttonSize?: "sm" | "lg";
  type?: "button" | "submit" | "reset";
}

const size = {
  sm: "text-lg p-1",
  lg: "text-2xl p-1",
};

const Button: React.FC<InputFieldProps> = ({
  label,
  version,
  type = "button",
  buttonSize = "lg",
  ...rest
}) => {
  return (
    <button
      type={type}
      {...rest}
      className={`${
        size[buttonSize]
      } font-normal whitespace-nowrap relative rounded w-full shadow-button hover:shadow-button-hover active:shadow-none top-[-3px] left-[-3px] hover:top-[-2px] hover:left-[-2px] active:top-0 active:left-0 ${
        version === "primary"
          ? "bg-zinc-600 border-2 border-solid border-zinc-800 text-white shadow-zinc-600 hover:shadow-zinc-600"
          : "bg-violet-200 border-2 border-solid border-zinc-800 text-zinc-600 shadow-zinc-600 hover:shadow-zinc-600"
      }`}
    >
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
