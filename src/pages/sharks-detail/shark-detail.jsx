import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './shark-detail.scss'
import { Grid } from '@mui/material';
import deals from './shark_investment.json';
import SharkCompaniesTable from './shark_companies';



const BASE_URL = 'https://satyajitzecdata.pythonanywhere.com';

const SharkDetail = () => {
    const { id } = useParams();
    const sharksDeal = deals.find(item => item.id == id);
  
  const [member, setMember] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/sharks/${id}`)
      .then(response => response.json())
      .then(data => {
        setMember(data);
      });
  }, [id]);

  if (!member) {
    return <h2 clasName="text-center">Loading...</h2>;
  }

  return (
    <>
    <div className="header">
    <div className="info">
    <h1>{member.name}</h1>
    <h4><a href="#category">{member.profession}</a></h4>
    <div className="meta"><br/></div>
    </div>
    </div>

    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <br/>
      <h1>{member.name}'s Bio</h1>
        <hr/>
        <p>{member.bio}</p>
        <br/>
        <h1>{member.name}'s Career</h1>
        <hr />
        <p>{member.career}</p>
        <br/>
        <h1>Shark Tank Statistics</h1>
        <ul>
            <li><b>Investment:</b> {sharksDeal.investment}</li>
            <li><b>Number of Deals:</b> {sharksDeal.deals}</li>
            <li><b>Invested Companies:</b>
            <SharkCompaniesTable sharksDeal={sharksDeal.companies_invested} />
            </li> 
        </ul>
      </Grid>
    </Grid>

    </>
  );
}

export default SharkDetail;