import React, { useState } from 'react';
import { transliterate } from '../transliteration/transliterate';

const AmharicInput = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const inputText = e.target.value;
    const convertedText = transliterate(inputText);
    setText(convertedText);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <textarea
          className="w-full h-40 p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={handleChange}
          placeholder="Type here..."
        />
      </div>
    </div>
  );
};

export default AmharicInput;