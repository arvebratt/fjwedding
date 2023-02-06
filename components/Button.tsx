import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
  version: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<InputFieldProps> = ({
  label,
  version,
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      {...rest}
      className={`whitespace-nowrap text-xl p-2 relative rounded w-full shadow-button hover:shadow-button-hover active:shadow-none top-[-3px] left-[-3px] hover:top-[-2px] hover:left-[-2px] active:top-0 active:left-0 ${
        version === "primary"
          ? "bg-amber-50 border-2 border-solid border-violet-400 text-zinc-600 shadow-violet-300 hover:shadow-violet-300"
          : "bg-violet-200 border-2 border-solid border-zinc-800 text-zinc-600 shadow-zinc-600 hover:shadow-zinc-600"
      }`}
    >
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
