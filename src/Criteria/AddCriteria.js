import React, { useState } from 'react';
import './criteria.css'; // Import your styles here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../Base/Button';
import Header from '../Header/Header';
import LineBar from '../Base/LineBar';


const AddCriteria = () => {
  const addedCriterias = [];
  const [criteria, setCriteria] = useState(addedCriterias)
  const [checkedItems, setCheckedItems] = useState(addedCriterias); 
  const [newCriteria, setNewCriteria] = useState('');

  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate('/criteria');

  };

  const goToNextPage = () => {
    navigate('/report');
  };


  const handleChange = (event) => {
    setNewCriteria(event.target.value);
  };

  const handleAddCriteria = () => {
    if (newCriteria.trim() !== '') {
      setCriteria([...criteria, newCriteria.trim()]);
      setNewCriteria('');
    }
  };

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems]; // Create a copy of the checkedItems array
    newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state of the clicked item
    setCheckedItems(newCheckedItems); // Update the state with the new array
    
  };


  return (



    <div className="main">
    <Header />
    <LineBar width="78.5%" height="25px" borderRadius="38px" color="#FFC107" />
      <div className="content">

        <div className='title'>
          <h1>Add a Criteria</h1>
          <LineBar width="90%" height="4px" borderRadius="5px" color="#FFC107" />
        </div>
            <div className='addition'>
              <label htmlFor="textInput"></label>
              <input
                type="text"
                id="textInput"
                placeholder="Add a Criteria..."
                value={newCriteria}
                onChange={handleChange}
              />
              <Button onClick={handleAddCriteria} children={'Add Criteria'} className={'btn-add'}/>
            </div>
              
            <div className='criteria-list'>
              <h5>The Adding Criterias</h5>
              {criteria.map((criterion, index) => (
                <div key={index} className='criteria-container'>
                  <input
                    className='check-square'
                    type="checkbox"
                    id={`criteria-${index}`}
                    checked={checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label htmlFor={`criteria-${index}`} className={checkedItems[index] ? '' : 'checked'}>{criterion}</label>
                </div>
              ))}
            </div>
            <div className='navigation'>
              <Button onClick={goToPreviousPage} children={'Previous'} color={'#FFC107'}/>
              <Button onClick={goToNextPage}  children={'Next'} color={'#047DE5'}/>
            </div>     
      </div>

    </div>



  );
};

export default AddCriteria;
