import React, { useState } from 'react';
import  axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { StackDetails } from '../Components/stackDetails';
import { StackActions } from '../Components/stackActions';
import styles from '../styles/main.module.css';


const Home= ({ stackData, error }) => {
  const [item, setItem] = useState(10);
  const [data, setData] = useState([]);
  console.log(stackData);
  
  return (
    <div className={`${styles.main} `}>
  
      <StackDetails data={data} setData={setData}></StackDetails>
      <StackActions setData={setData}></StackActions>
    </div>
  )
}
const addItem = async () => {
    try {
    const res = await axios.get(`http://localhost:8080/${item}`);
      const stackData = res.data;
      return { stackData: stackData };
      
     
  } catch (error) {
      console.log(error);;
    return { error };
  }
    
}

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:8080/api/top');

      const stackData = res.data;
      console.log(stackData);
      return { stackData: stackData };
      
     
  } catch (error) {
      console.log(error);;
    return { error };
  }
};

export default Home;
