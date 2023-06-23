import { Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
const BASE_URL = 'https://satyajitzecdata.pythonanywhere.com';

const PitchDetail = () =>{
    const { id } = useParams();
    const [jsonData, setJsonData] = useState([]);


    useEffect(() => {
        axios.get(`${BASE_URL}/pitches/${id}/`)
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
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <br/>
        <h1 className="text-center">{jsonData.brand_name}</h1>
      </Grid>
    </Grid>
    <div className="bs-example container" data-example-id="striped-table">
        
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Information</th>
              {/* Add more table headings as per your data */}
            </tr>
          </thead>
          <tbody>
          {Object.entries(jsonData).map(([key, value]) => (
            <tr key={key}>
                <th scope="row">{key}</th>
                <td>
                {typeof value === "object" ? (
                    <ul>
                    {Object.entries(value).map(([nestedKey, nestedValue]) => (
                        <li key={nestedKey}>
                        <strong>{nestedKey}: </strong>
                        {nestedValue}
                        </li>
                    ))}
                    </ul>
                ) : (
                    value
                )}
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      
    </div>
    </>
    )
}

export default PitchDetail;