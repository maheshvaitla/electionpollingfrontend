import { useEffect } from "react"
import { useState } from "react"
import "../styles/list.css"

export const List=()=>{
    const [list,setList]= useState([])
    const [page,setPage]= useState(1);

    // useEffect(()=>{
    //     data()

    // },[])
    // const data=()=>{
    //     fetch("http://localhost:2345/cities")
    //     .then(d=>d.json())
    //     .then(res=>setList(res.city))
        
    // }

    useEffect(()=>{
        getdata();
    },[page])


    const getdata=()=>{
        fetch(`http://localhost:2345/cities?page=${page}`)
        .then(d=>d.json())
        .then((res)=>{
            setList(res.city)});
    }

   

    const sort1 =()=>{
        fetch(`http://localhost:2345/cities/sort?page=${page}`)
        .then(d=>d.json())
        .then((res)=>{
            setList(res.city)});
    }
    const sort2 =()=>{
        fetch(`http://localhost:2345/cities/sort1?page=${page}`)
        .then(d=>d.json())
        .then((res)=>{
            setList(res.city)});
    }





    return (
        <div>
            <div className="nav">
                Elecition Commision Of INDIA
            </div>

            <button className="sort1" onClick={sort1}>sort popultion low to high</button>
            <button className="sort2" onClick={sort2}>sort popultion high to low</button>
           
      

           <table >
               <tr  >
                   <th>City Name</th>
                   <th>District Name</th>
                   <th>Population</th>
               </tr>
               {list.map(e=>(
               <tr >
                   <td >{e.cityname}</td>
                   <td >{e.districtname}</td>
                   <td>{e.population}</td>
               </tr>
                ))}


           </table>
        


       <button className="page" onClick={()=>setPage(1)}>1</button> &nbsp;
       <button className="page" onClick={()=>setPage(2)}>2</button> &nbsp;
       <button className="page" onClick={()=>setPage(3)}>3</button> &nbsp;
       <button className="page" onClick={()=>setPage(4)}>4</button> &nbsp;

        </div>
    )
}