import { ChangeEvent } from 'react';
import './text-field.css';

type TextFieldProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const TextField = ({
  value,
  placeholder,
  onChange
}: TextFieldProps) => {
  return (
    <label className="text-field">
      <input
        className="text-field__input"
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextField;
