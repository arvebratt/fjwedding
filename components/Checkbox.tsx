import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes, useState } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, ...rest }) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div
      className="block relative cursor-pointer select-none group"
      onClick={() => setChecked(!checked)}
    >
      <input
        name={name}
        type="checkbox"
        {...rest}
        className="peer absolute opacity-0 cursor-pointer w-0 h-0"
        onChange={() => null}
        checked={checked}
      />
      <div className="absolute top-0 left-0 w-6 h-6 rounded border border-solid border-zinc-300 group-hover:border-zinc-600" />
      <div className="hidden peer-checked:flex absolute top-0 left-0 w-6 h-6 justify-center items-center">
        <FontAwesomeIcon icon={faCheck} className="text-violet-600 text-lg" />
      </div>
      <label
        htmlFor={name}
        className="ml-8 font-normal text-zinc-600 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
