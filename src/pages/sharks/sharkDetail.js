import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './sharkDetail.scss'
import { Grid } from '@mui/material';

const BASE_URL = 'https://satyajitzecdata.pythonanywhere.com';

const SharkDetail = () => {
  const { id } = useParams();
  
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
      <h1>{member.name}'s Bio</h1>
        <hr/>
        <p>{member.bio}</p>
        <h1>{member.name}'s Career</h1>
        <hr />
        <p>{member.career}</p>
      </Grid>
    </Grid>

    </>
  );
}

export default SharkDetail;