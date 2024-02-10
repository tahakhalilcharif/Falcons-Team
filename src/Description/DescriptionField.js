import React from 'react';
import './description.css'; // Import your styles here


import { useState } from 'react';

const DescriptionField = () => {
  const [description, setDescriptionValue] = useState('');

  const handleChange = (event) => {
    setDescriptionValue(event.target.value);
    // description value will be used later

  };

  return (
    <div className='desc-con'>
      <label htmlFor="textInput"></label>
      <textarea
        type="text"
        id="textInput"
        className="description-field" placeholder="Add your description here..."
        value={description}
        onChange={handleChange}
      />
    </div>
  );
};

export default DescriptionField;

