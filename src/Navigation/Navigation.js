import React from 'react';
import { useHistory } from 'react-router-dom';
import  './navigation.css'
import Button from '../Base/Button';


const Navigation = () => {
  const history = useHistory();

  const goToPreviousPage = () => {
    history.goBack();
  };

  const goToNextPage = () => {
    history.goForward();
  };

  const handleGoToAdd = () => {
    history.push('/add-criteria');
  }

  return (
    <div className='navigation'>
      <Button onClick={goToPreviousPage} children={Previous} color={'#FFC107'}/>
      <Button onClick={handleGoToAdd} children={Add} color={'#11B67F'}/>
      <Button onClick={goToNextPage}  children={Next} color={'#047DE5'}/>
    </div>
  );
};

export default Navigation;
