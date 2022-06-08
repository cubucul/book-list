import { ChangeEvent } from 'react';

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
    <label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextField;
