import React,{useState} from 'react';
import Button from '../Base/Button'; 
import LineBar from '../Base/LineBar';
import Header from '../Header/Header';
import {useNavigate} from 'react-router-dom';
import './criteria.css';
const Criteria = () => {
  const initialItems = [ 'Modularity and Encapsulation', 'Consistency and Conventions',
  'Simplicity and Minimalism', 'D.R.Y. Principle','Single Responsibility Principle (SRP)']; // Initial criterias
  const [checkedItems, setCheckedItems] = useState(
    initialItems.map(() => false) // Initialize all items as unchecked
  );
  //const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate('/description');
  };

  const goToNextPage = () => {
    navigate('/report');

  };

  const handleGoToAdd = () => {
    navigate('/add-criteria');
  }
  

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems]; // Create a copy of the checkedItems array
    newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state of the clicked item
    setCheckedItems(newCheckedItems); // Update the state with the new array
  };

  return (
    <div className="main">
        
        <Header />
        <LineBar width="78.5%" height="25px" borderRadius="38px" color="#11B67F" />
        <div className="content">

            <div className='title'>
                <h1>Set your Criterias</h1>
                <LineBar width="90%" height="4px" borderRadius="5px" color="#11B67F" />
            </div>
            <div className='criteria-list'> 
            
              {initialItems.map((item, index) => (
                <div key={index} className= 'criteria-container'>
                  <input
                  className='check-square'
                    type="checkbox"
                    id={`checkbox-${index}`}
                    checked={checkedItems[index]} // Set the checked attribute dynamically based on the checkedItems array
                    onChange={() => handleCheckboxChange(index)} // Pass the index to identify which item was clicked
                  />
                  <label htmlFor={`checkbox-${index}`} className={checkedItems[index] ? 'checked' : ''}  >
                    {item}
                  </label>
                </div>
              ))}  
          </div>
            <div className='navigation'>
                <Button onClick={goToPreviousPage} children={'Previous'} className='button-prev' color={'#FFC107'}/>
                <Button onClick={handleGoToAdd} children={'Add'} className= 'button-add' color={'#11B67F'}/>
                <Button onClick={goToNextPage}  children={'Next'} className= 'button-next' color={'#047DE5'}/>
            </div>
        </div>
      </div>

  );
};

export default Criteria;
