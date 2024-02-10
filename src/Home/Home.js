import React from 'react';
import Button from '../Base/Button'; 
import './HomePage.css'; 
import LineBar from '../Base/LineBar';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();
    const goToNextPage = () => {
        navigate('/description');
      };
  
  return (
    <div className="home-page">
      
      <Header />
    <LineBar width="78.5%" height="25px" borderRadius="38px" color="#DF574B" />
      <div className="content">

        <div className='task'>
            <h1>Task Name</h1>
            <LineBar width="90%" height="4px" borderRadius="5px" color="#DF574B" />
        </div>
        <p> 
            Norem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Nunc vulputate libero et velit interdum, ac ali
        </p>
        <div style={{display: "flex", justifyContent: 'flex-end'}}>
        <Button onClick={goToNextPage} label="Next" color={'#047DE5'} children={'Next'} className="button-next"/>
        </div>
      </div>

    </div>
  );
};

export default Home;
