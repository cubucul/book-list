import { ChangeEvent, useId } from 'react';
import './text-field.css';

type TextFieldProps = {
  value: string;
  label?: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  value,
  label,
  placeholder,
  onChange
}: TextFieldProps) => {
  const id = useId();

  return (
    <div className="text-field">
      {
        label &&
          <label
            htmlFor={id}
            className="text-field__label"
          >{label}</label>
      }
      <input
        className="text-field__input"
        id={id}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
