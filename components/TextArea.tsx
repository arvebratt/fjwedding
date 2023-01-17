import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes } from "react";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  form: string;
  label: string;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  form,
  label,
  placeholder,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 relative w-full">
      <label htmlFor={name} className="text-xl font-light text-zinc-600">
        {label}
      </label>
      <textarea
        id={name}
        placeholder={placeholder}
        {...rest}
        className="peer text-xl font-light p-2 text-zinc-600 rounded border-2 border-solid border-amber-400 focus:outline-none focus:border-violet-400 hover:border-violet-400"
      />
    </div>
  );
};

export default TextArea;
