import './StateWise.css';
import React, { useState,useEffect } from 'react';
const Statewise = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
      const res = await fetch ('https://data.covid19india.org/data.json');
      const actualData = await res.json();
      console.log(actualData.statewise);
      setData(actualData.statewise);
    }
    useEffect(()=>{
        getCovidData();
    },[])
   return(
   <div>
           {/* <h1>INDIA COVID-19 Dashboard</h1> */}
           <div className='container-fluid mt-5'>
            <div className='main-heading'>
          <h1 className="mb-5 text-center"><span className='font-weight-bold'> INDIA </span> COVID-19 Dashboard</h1>
            </div>
            <div className='table-responive'>
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>recovered</th>
                            <th>deaths</th>
                            <th>active</th>
                            <th>updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curElem, ind) =>{
                                return (
                                    <tr key={ind}>
                                    <th>{curElem.state}</th>
                                    <td>{curElem.confirmed}</td>
                                    <td>{curElem.recovered}</td>
                                    <td>{curElem.deaths}</td>
                                    <td>{curElem.active}</td>
                                    <td>{curElem.lastupdatedtime}</td>
                                </tr>
                                )
                            })
                        }
                    
                    </tbody>
                </table>
            </div>
           </div>
    </div>
    )
}
export default Statewise;