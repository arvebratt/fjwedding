import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  leftText: string;
  rightText: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  leftText,
  rightText,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 relative w-full">
      <span className="text-xl font-light text-zinc-600">{label}</span>
      <label
        htmlFor="attendance"
        className="inline-flex items-center space-x-2 cursor-pointer text-zinc-600"
      >
        <span className="text-xl font-light text-zinc-600">{leftText}</span>
        <span className="relative">
          <input
            id="attendance"
            type="checkbox"
            className="hidden peer"
            {...rest}
          />
          <div className="w-12 h-7 rounded-full bg-zinc-600 peer-checked:bg-green-600" />
          <div className="absolute left-1 w-5 h-5 rounded-full shadow inset-y-1 peer-checked:right-1 peer-checked:left-auto bg-zinc-50" />
        </span>
        <span className="text-xl font-light text-zinc-600">{rightText}</span>
      </label>
    </div>
  );
};

export default Checkbox;
