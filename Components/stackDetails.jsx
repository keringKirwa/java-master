
import React, { useEffect,useState } from 'react';
import  axios from 'axios';
import styles from  '../styles/home.module.css';


export const StackDetails = ({ data, setData}) => {
    
    
    useEffect(() => {
        const getStackDetails = async() => {
            const res = await axios.get('http://localhost:8080/api/getstackdetails');
            setData(res.data.reverse());
        
            
        }
        getStackDetails();
    }, []);
    
    /* Note that both the row and the container all occupy full width. */
    if (data.length <= 0) {
        return <div className={styles.emptyStack}>The Stack is Empty</div>;
 }
  return (
      <div className={styles.home}>
          <div className={styles.box}>
            <button className={styles.button}>STACK DATA</button>
              {data.map(function (item, i) {
                  if (item === 0){
                      return;
                  }
                  else {
                      return (
                        <div key={i} className={styles.boxItem}>
                          {item}
                        </div>
                      );
                  }
                  
              }, this)}
              
          </div>
    </div>
  )
}

