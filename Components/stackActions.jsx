import React, { useState } from "react";
import styles from "../styles/stack.module.css";
import axios from "axios";

export const StackActions = ({ setData }) => {
  const [itemToBeAdded, setItemToBeAdded] = useState("");
  const [topItem, setTopItem] = useState(null);
  const [length, setLength] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);
  const [poppedItem, setPopItem] = useState(null);

  const handleSubmit = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/api/add/${itemToBeAdded}`
    );
    setItemToBeAdded("");

    setData(data.reverse());

    /* send axios request to the backend  12 */
  };
  const handleChange = (event) => {
    setItemToBeAdded(event.target.value);
  };

  const getTopItem = async () => {
    console.log("button clicked.");
    const { data } = await axios.get(" http://localhost:8080/api/top");
    setTopItem(data);
  };

  const getArrayLength = async () => {
    const { data } = await axios.get(" http://localhost:8080/api/length");
    setLength(data);
  };
  const isStackEmpty = async () => {
    const { data } = await axios.get("http://localhost:8080/api/isEmpty");
    console.log(data);
    setIsEmpty(data);
  };
  const popItem = async () => {
    const { data } = await axios.get("http://localhost:8080/api/pop");
    console.log(data);
    setData(data.reverse());
  };
  return (
    <div className={styles.push}>
      <div className={styles.pushItem}>
        <label htmlFor="number">Push() An Item To the Stack.</label>
        <input
          type="number"
          className={styles.input}
          name="number"
          onChange={handleChange}
          value={itemToBeAdded}
        />
        <button type="button" className={styles.button} onClick={handleSubmit}>
          Push Item
        </button>
      </div>

      <div className={styles.getTop}>
        <p>Get the Top Item in the Stack</p>
        <button className={styles.buttonTop} type="button" onClick={getTopItem}>
          Get the Top Item
        </button>
        {topItem && <p className={styles.p}>topItem in Stack :{topItem} </p>}
      </div>

      <div className={styles.length}>
        <p>Get the Stack Length</p>
        <button
          className={styles.buttonLength}
          type="button"
          onClick={getArrayLength}
        >
          Get the Stack length
        </button>
        {length && <p className={styles.p}> Stack Length :{length} </p>}
      </div>

      <div className={styles.empty}>
        <p>is Stack Empty :</p>
        <button
          className={styles.buttonLength}
          type="button"
          onClick={isStackEmpty}
        >
          isEmpty()
        </button>
        {
          <p className={styles.pEmpty}>
            {" "}
            is Empty :{false ? "True" : "False"}{" "}
          </p>
        }
      </div>

      <div className={styles.empty}>
        <p>Pop ITEM :</p>
        <button className={styles.buttonLength} type="button" onClick={popItem}>
          pop()
        </button>
        {<p className={styles.pEmpty}> popped item : {poppedItem}</p>}
      </div>
    </div>
  );
};
