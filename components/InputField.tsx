import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  ...rest
}) => {
  return (
    <div>
      <input
        id={name}
        type={type}
        placeholder={label}
        {...rest}
        className="bg-transparent focus:bg-white border-2 border-b-8 text-lg rounded border-zinc-600 text-zinc-600 focus:text-zinc-700 hover:border-zinc-700 focus:border-zinc-700 focus:outline-none drop-shadow-sm hover:drop-shadow-lg focus:drop-shadow-lg block w-full p-2 transition ease-out duration-300"
      />
    </div>
  );
};

export default InputField;
