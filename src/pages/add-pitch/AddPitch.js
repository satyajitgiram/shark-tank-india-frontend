import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
} from "@mui/material";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
const BASE_URL = 'https://satyajitzecdata.pythonanywhere.com';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const sharkNames = ["ashneer","anupam","aman","namita","vineeta","peyush","ghazal"];


const FormComponent = () => {

  const [presentsharks, setPresentsharks ] = useState([]);
  const [investedsharks, setInvestedsharks ] = useState([]);
  const [dealOrNot, setDealOrNot] = useState(false);


  const handleDealChange = (event) => {
    const { checked } = event.target;
    setDealOrNot(checked);
  };

  const handleChangeShark = (event) => {
    const { value } = event.target;
    setPresentsharks(value);
    console.log(presentsharks, "presentsharks")
  };
  

  const renderValue = (selected) => {
    if (typeof selected === 'string') {
      return selected;
    }
    if (Array.isArray(selected)) {
      return selected.join(', ');
    }
    if (typeof selected === 'object') {
      const selectedNames = sharkNames.filter((name) => selected[name]);
      return selectedNames.join(', ');
    }
    return '';
  };

  const handleChangeInvestedShark = (event) => {
    const { value } = event.target;
    setInvestedsharks(value);
    console.log(investedsharks, "investedsharks")

  };


  const [formData, setFormData] = useState({
    season_number: 1,
    episode_number: 1,
    pitch_number: 1,
    brand_name: "",
    product: "",
    present_sharks: {
      ashneer: 1,
      anupam: 1,
      aman: 1,
      namita: 1,
      vineeta: 1,
      peyush: 0,
      ghazal: 0,
    },
    pitcher_ask_amount: 0,
    pitcher_ask_equity: 0,
    pitcher_ask_valuation: 0,
    sector: "",
    deal_or_not: true,
    deal_valuation: 0,
    entrepreneurs_founders: "",
    deal: true,
    deal_amount: 0,
    deal_equity: 0,
    total_sharks_invested: 0,
    sharks_invested: {
      ashneer: 1,
      aman: 1,
      vineeta: 1,
    },
    equity_per_shark: 0,
    final_deal_debt: 0,
    final_deal_debt_interest: 0,
    social_media_links: {
      twitter: null,
      linkedin: null,
      instagram: null,
      facebook: null,
      youtube: null,
    },
  });

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const newpresentsharks = sharkNames.reduce((obj, name) => {
      obj[name] = presentsharks.includes(name) ? 1 : 0;
      return obj;
    }, {});

    const newinvestedsharks = investedsharks.reduce((obj, name) => {
      obj[name] = 1;
      return obj;
    }, {});
    
    formData.present_sharks = newpresentsharks;
    formData.sharks_invested = newinvestedsharks;
    formData.deal_or_not = dealOrNot
    formData.deal = dealOrNot
    console.log(formData)

    // Perform API call here to send form data
    // Replace 'API_ENDPOINT' with your actual API endpoint
    fetch(`${BASE_URL}/pitches/`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response as needed
        console.log(data);
        alert("Pitch Saved succefully !")
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error(error);
        alert("Pitch submission failed!, Try again after sometime")
      });
  };



  return (
    <React.Fragment>
      <div style={{ margin: "20px", paddingBottom: "30px" }}>
        <form onSubmit={handleSubmit} className="form">
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              id="season_number"
              name="season_number"
              label="Season Number"
              color="secondary"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.season_number}
              onChange={handleInputChange}
            />
            <TextField
              id="episode_number"
              name="episode_number"
              label="Episode Number"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.episode_number}
              onChange={handleInputChange}
            />
            <TextField
              id="pitch_number"
              name="pitch_number"
              label="Pitch Number"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.pitch_number}
              onChange={handleInputChange}
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              id="brand_name"
              name="brand_name"
              label="Brand Name"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.brand_name}
              onChange={handleInputChange}
            />
            <TextField
              id="product"
              name="product"
              label="Product"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.product}
              onChange={handleInputChange}
            />
            
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              id="pitcher_ask_amount"
              name="pitcher_ask_amount"
              label="Pitcher Ask Amount"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.pitcher_ask_amount}
              onChange={handleInputChange}
            />
            <TextField
              id="pitcher_ask_equity"
              name="pitcher_ask_equity"
              label="Pitcher Ask Equity"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.pitcher_ask_equity}
              onChange={handleInputChange}
            />
            <TextField
              id="pitcher_ask_valuation"
              name="pitcher_ask_valuation"
              label="Pitcher Ask Valuation"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.pitcher_ask_valuation}
              onChange={handleInputChange}
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              id="sector"
              name="sector"
              label="Sector"
              variant="outlined"
              placeholder="Sector"
              fullWidth
              required
              value={formData.sector}
              onChange={handleInputChange}
            />
            <div style={{ width: '-webkit-fill-available' }}> 
            <FormControlLabel
              control={
                <Checkbox
                  id="deal_or_not"
                  name="deal_or_not"
                  checked={dealOrNot}
                  onChange={handleDealChange}
                  inputProps={{ 'aria-label': 'Deal or Not' }}
                />
              }
              label="Deal or Not"
            />
            </div>
            <TextField
              id="deal_valuation"
              name="deal_valuation"
              label="Deal Valuation"
              variant="outlined"
              placeholder="Deal Valuation"
              fullWidth
              required
              value={formData.deal_valuation}
              onChange={handleInputChange}
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              id="entrepreneurs_founders"
              name="entrepreneurs_founders"
              label="Entrepreneurs/Founders"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.entrepreneurs_founders}
              onChange={handleInputChange}
            />

            <TextField
              id="deal_amount"
              name="deal_amount"
              label="Deal Amount"
              variant="outlined"
              placeholder="Deal Amount"
              fullWidth
              required
              value={formData.deal_amount}
              onChange={handleInputChange}
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              id="deal_equity"
              name="deal_equity"
              label="Deal Equity"
              variant="outlined"
              placeholder="Deal Equity"
              fullWidth
              required
              value={formData.deal_equity}
              onChange={handleInputChange}
            />
            <TextField
              id="equity_per_shark"
              name="equity_per_shark"
              label="Equity per Shark"
              variant="outlined"
              placeholder="Equity per Shark"
              fullWidth
              required
              value={formData.equity_per_shark}
              onChange={handleInputChange}
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Invested Sharks</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={investedsharks}
                onChange={handleChangeInvestedShark}
                input={<OutlinedInput label="Invested Sharks" />}
                renderValue={renderValue}
                MenuProps={MenuProps}
              >
                {sharkNames.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={investedsharks.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Present Sharks</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={presentsharks}
                onChange={handleChangeShark}
                input={<OutlinedInput label="Present Sharks" />}
                renderValue={renderValue}
                MenuProps={MenuProps}
              >
                {sharkNames.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={presentsharks.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
        </Stack>
        
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              id="final_deal_debt"
              name="final_deal_debt"
              label="Final Deal Debt"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.final_deal_debt}
              onChange={handleInputChange}
            />
            <TextField
              id="final_deal_debt_interest"
              name="final_deal_debt_interest"
              label="Final Deal Debt Interest"
              variant="outlined"
              placeholder=""
              fullWidth
              required
              value={formData.final_deal_debt_interest}
              onChange={handleInputChange}
            />
          </Stack>
          <div className="form-group">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormComponent;
