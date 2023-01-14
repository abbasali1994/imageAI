import React from 'react';

interface Props {
  label: string;
  type: string;
  value: string | number;
  setValue: Function;
}

const TextInput: React.FC<Props> = ({ label, value, setValue, type }) => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type}
        className="bg-white w-full border-2 focus:outline-none focus:shadow-outline-blue-500 p-2 rounded-lg"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
