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
      <label htmlFor={name} className="text-xl font-light text-zinc-600">
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
        className={`peer text-xl font-light py-2 
        ${
          icon ? "pl-[42px]" : "pl-2"
        } pr-2 text-zinc-600 rounded border-2 border-solid border-amber-400 focus:outline-none focus:border-violet-400 hover:border-violet-400`}
      />
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute bottom-0 mb-[14px] w-8 border-r-2 border-solid border-zinc-400 ml-[4px] text-xl text-amber-400 peer-hover:text-violet-400 peer-focus:text-violet-400"
        />
      )}
    </div>
  );
};

export default InputField;
