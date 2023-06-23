import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const BASE_URL = 'https://satyajitzecdata.pythonanywhere.com';
const RequestPitch = () => {
    const [title, setTitle] = useState('')
    const [industry, setIndustry] = useState('')
    const [description, setDescription] = useState('')
    const [videoURL, setVideoURL] = useState('')
    const [cin, setCin] = useState('')
    const [lastYearRevenue, setLastYearRevenue] = useState('')
    const [allTimeRevenue, setAllTimeRevenue] = useState('')

 
    const INDUSTRIES = [
        ['1', 'Technology'],
        ['2', 'Food'],
        ['3', 'Fashion'],
        ['4', 'Health'],
        ['5', 'Home'],
        ['6', 'Skincare'],
        ['7', 'Fitness'],
        ['8', 'Education'],
        ['9', 'Entertainment'],
        ['11', 'Transportation'],
        ['13', 'Pet Care'],
        ['14', 'Agriculture'],
        ['15', 'Sports'],
      ];
      

    const handleChange = (event) => {
        setIndustry(event.target.value);
      };

    function handleSubmit(event) {
        event.preventDefault();
        
        const data = {
          title: title,
          industry: industry,
          description: description,
          cin: cin,
          video_url: videoURL,
          cin: cin,
          entrepreneur: 1
        };
      
        fetch( `${BASE_URL}/pitch-request/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => response.json())
          .then(result => {
            // Handle the response from the API
            alert("Pitch Requested succefully!, we will give you update on your mail")
            console.log(result);
          })
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
            alert("Pitch submission failed!, Try again after sometime")

          });
      }
 
    return (
        <React.Fragment>
            <div style={{margin:'20px', paddingBottom:'30px'}}>
            <h2>Request for Shark Tank India Pitch</h2>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        placeholder='Select Industry'
                        label="Title"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        fullWidth
                        required
                    />
                    <Select sx={{ m: 1, minWidth: 400 }}
                    id="demo-simple-select-helper"
                    placeholder='Choose Industry'
                    value={industry}
                    label="Age"
                    onChange={handleChange}
                    >
                    {INDUSTRIES.map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                        {label}
                        </MenuItem>
                    ))}
                    </Select>

                </Stack>

                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>


                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Corporate Identification Number-(CIN)"
                    onChange={e => setCin(e.target.value)}
                    value={cin}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="url"
                    variant='outlined'
                    color='secondary'
                    label="Video URL"
                    onChange={e => setVideoURL(e.target.value)}
                    value={videoURL}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Last Year Revenue"
                    onChange={e => setLastYearRevenue(e.target.value)}
                    value={lastYearRevenue}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="All Time Revenue"
                    onChange={e => setAllTimeRevenue(e.target.value)}
                    value={allTimeRevenue}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                </Stack>

                <TextField
                    multiline
                    type="description"
                    rows={4}
                    label="Pitch Description"
                    placeholder="Enter your Pich..."
                    fullWidth
                    variant='outlined'
                    color='secondary'
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    required
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" type="submit">Add Pitch</Button>
            </form>
        </div>
        </React.Fragment>
    )
}
 
export default RequestPitch;