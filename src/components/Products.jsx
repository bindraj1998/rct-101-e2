import { Button, StylesProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct"
import Pagination from "./Pagination"
import axios from "axios"
import styles from "./styles.module.css"
// import data from "./db.json"
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
// console.log(data)
const [data,setdata]=useState([])
const [limit,setlimit]=useState(3)
const [page,setpage]=useState(1)
const setlimi=(data)=>{
  setlimit(data)
  // console.log
  console.log(data)
}
const set=(page)=>{
  setpage(page)
  console.log(page)
}

useEffect(()=>{
const main=async()=>{
  let url=await axios.get(`http://localhost:8080/products/?_page=${page}&_limit=${limit}`)
    // console.log(url)
   const a=url.data
  setdata(a)
  console.log(a)
} 
main()
},[page,limit])

 console.log(data)
  return (
    <div>
    {/* <Flex> */}
      {/*  AddProduct */}
      <AddProduct/>

      {/* <Grid>List of Products */}
      <div className={styles.flex}>
      {data.map((todo)=>(
        // 
        // console.log(todo)
        <div key={todo.id} className={styles.s}>
    
           <img src={todo.imageSrc}/>
           <div className={styles.div}>
             
          <p>{todo.category}</p>
          <p>{todo.gender}</p>
          </div>
          <div className={styles.a}>
          <h4>{todo.title}</h4> 
          <p>{"$"}{todo.price}</p>
          </div>
         {/* <p>hello</p> */}
        </div>
      
      ))}
      </div>
      {/* </Grid> */}
      {/* Pagination */}
      {/* <h2>hello</h2> */}
      <Pagination setlimi={setlimi} set={set} page={page} data={data}/>
     
    {/* </Flex> */}
    {/* <h>hello</h> */}
    </div>
  );
};

export default Products;
