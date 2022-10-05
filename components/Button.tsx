import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
  type: "primary" | "secondary";
}

const Button: React.FC<InputFieldProps> = ({ label, type, ...rest }) => {
  return (
    <button
      {...rest}
      className={`whitespace-nowrap text-lg p-2 rounded w-full drop-shadow-md hover:drop-shadow-lg transition ease-out duration-300 ${
        type === "primary"
          ? "bg-zinc-600 text-violet-100 hover:bg-zinc-700 hover:text-violet-200"
          : "bg-transparent border-2 border-zinc-600 text-zinc-600 hover:text-zinc-700 hover:border-zinc-700"
      }`}
    >
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
