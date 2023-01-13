import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
  type: "primary" | "secondary";
}

const Button: React.FC<InputFieldProps> = ({ label, type, ...rest }) => {
  return (
    <button
      {...rest}
      className={`whitespace-nowrap text-xl italic font-light p-2 relative rounded w-full shadow-button hover:shadow-button-hover active:shadow-none top-[-3px] left-[-3px] hover:top-[-2px] hover:left-[-2px] active:top-0 active:left-0 ${
        type === "primary"
          ? "bg-amber-50 border-2 border-solid border-violet-400 text-zinc-600 shadow-violet-300 hover:shadow-violet-300"
          : "bg-zinc-600 border-2 border-solid border-zinc-800 text-amber-50 shadow-zinc-600 hover:shadow-zinc-600"
      }`}
    >
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
