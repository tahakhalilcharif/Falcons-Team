import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '../Base/Button'; 
import LineBar from '../Base/LineBar';
import Header from '../Header/Header';
import DescriptionField from './DescriptionField';
import { useNavigate } from 'react-router-dom';


const Description = () => {

    const navigate = useNavigate();

    const goToPreviousPage = () => {
        navigate('/');

    };
  
    const goToNextPage = () => {
        navigate('/criteria');

    };


    return (
    <div className="main">
      
    <Header />
    <LineBar width="78.5%" height="25px" borderRadius="38px" color="#4285F4" />
      <div className="content">

        <div className='title'>
            <h1>Description Of The Task</h1>
            <LineBar width="90%" height="4px" borderRadius="5px" color="#4285F4" />
        </div>
        <h3>Add a Description</h3>
        <DescriptionField />

        <div className='navigation'>
            <Button onClick={goToPreviousPage} children={'Previous'} color={'#FFC107'}/>
            <Button onClick={goToNextPage}  children={'Next'} color={'#047DE5'}/>
        </div>
      </div>

    </div>
  );
};

export default Description;