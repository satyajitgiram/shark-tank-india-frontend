import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './sharkDetail.scss'
import { Grid } from '@mui/material';


const SharkDetail = () => {
  const { id } = useParams();
  
  const [member, setMember] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8010/sharks/${id}`)
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
    <div className="meta">
        <a  href="https://twitter.com/nodws" target="_b" className="author"></a><br/>

    </div>
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