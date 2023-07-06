import { ChangeEvent } from "react";

type Props = {
  label: string;
  type: string;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  const { label, type, name, value, placeholder, onChange } = props;

  return (
    <div className="space-x-6 grid grid-cols-3 items-center">
      <label>{label}</label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border--300 col-span-2 focus:outline-green-400 py-2 rounded-lg px-3 back"
      />
    </div>
  );
};

export default Input;
