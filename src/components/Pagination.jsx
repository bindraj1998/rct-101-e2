import { StylesProvider } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css"
const Pagination = ({setlimi,set,page,data}) => {
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const ButtonGroup = () => <div />;
  const Select = () => <div />;

  return (
    <div className={styles.button}>
    {/* <ButtonGroup> */}
      <button onClick={()=>set(1)} data-cy="pagination-first-button">First</button>
      <button onClick={()=>set(page + 1)} data-cy="pagination-previous-button">Privius</button>
      <select onChange={(e)=>setlimi(Number(e.target.value))} data-cy="pagination-limit-select">
        <option value={3} data-cy="pagination-limit-3">3</option>
        <option value={6} data-cy="pagination-limit-6">6</option>
        <option value={9} data-cy="pagination-limit-9">9</option>
      </select>
      {/* <button>Next</button> */}
      <button onClick={()=>set(page + 1)} data-cy="pagination-next-button">Next</button>
      <button nClick={()=>set(page+(data.length-1))} data-cy="pagination-last-button">Last</button> 
    {/* </ButtonGroup> */}
    </div>
  );
};

export default Pagination;
