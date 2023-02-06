import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes } from "react";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  placeholder,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 relative w-full">
      <label htmlFor={name} className="font-normal text-zinc-600">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        {...rest}
        className="font-normal font-light p-1 px-2 text-zinc-600 rounded border border-solid border-zinc-300 focus:outline-none focus:border-violet-400 hover:border-violet-400"
      />
    </div>
  );
};

export default TextArea;
