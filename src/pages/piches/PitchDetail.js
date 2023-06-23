import { Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const PitchDetail = () =>{
    const { id } = useParams();
    const [jsonData, setJsonData] = useState();


    useEffect(() => {
        axios.get(`/pitches/${id}`)
          .then(response => {
            setJsonData(response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    

    if (!jsonData) {
    return <h2 clasName="text-center">Loading...</h2>;
    }
    return (
    <>
    <div className="bs-example container" data-example-id="striped-table">
        <table className="table table-striped table-bordered table-hover">
          <caption>Bootstrap Table CSS Demo</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Information</th>
              {/* Add more table headings as per your data */}
            </tr>
          </thead>
          <tbody>
            {jsonData.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.brand_name}</td>
                {/* Add more table cells as per your data */}
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>

    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Pitch Detail Page</h1>
        <hr />
        <p> cumque, laboriosam architecto illo! Aliquid, fuga quis.</p>
      </Grid>
    </Grid>
    </>
    )
}

export default PitchDetail;