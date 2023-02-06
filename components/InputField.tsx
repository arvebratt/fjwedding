import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
  icon?: IconDefinition;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder,
  icon,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 relative w-full">
      <label htmlFor={name} className="font-normal text-zinc-600">
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        {...rest}
        className={`peer font-normal font-light py-1 
        ${
          icon ? "pl-[32px]" : "pl-1"
        } pr-2 text-zinc-600 rounded border border-solid border-zinc-300 focus:outline-none focus:border-violet-400 hover:border-violet-400 focus:invalid:border-red-500`}
      />
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute bottom-0 mb-[10px] w-6 ml-[4px] text-zinc-300 peer-hover:text-zinc-600 peer-focus:text-zinc-600"
        />
      )}
    </div>
  );
};

export default InputField;
