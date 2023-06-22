import React, { useState } from 'react';
import { NULL } from 'sass';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    season_number: 1,
    episode_number: 1,
    pitch_number: 1,
    brand_name: '',
    product: '',
    present_sharks: {
      ashneer: 1,
      anupam: 1,
      aman: 1,
      namita: 1,
      vineeta: 1,
      peyush: 0,
      ghazal: 0
    },
    pitcher_ask_amount: 0,
    pitcher_ask_equity: 0,
    pitcher_ask_valuation: 0,
    sector: '',
    deal_or_not: true,
    deal_valuation: 468.75,
    entrepreneurs_founders: '',
    deal: true,
    deal_amount: 0,
    deal_equity: 0,
    total_sharks_invested: 3,
    sharks_invested: {
      ashneer: 1,
      aman: 1,
      vineeta: 1
    },
    equity_per_shark: 0,
    final_deal_debt: 0,
    final_deal_debt_interest: 0,
    social_media_links: {
      twitter:null,
      linkedin:null,
      instagram: null,
      facebook: null,
      youtube: null
    }
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send formData to Django API
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container row g-3">
          <div className="form-group col-md-4">
            <label htmlFor="season_number">Season Number</label>
            <input
              type="number"
              className="form-control"
              id="season_number"
              name="season_number"
              value={formData.season_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="episode_number">Episode Number</label>
            <input
              type="number"
              className="form-control"
              id="episode_number"
              name="episode_number"
              value={formData.episode_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="pitch_number">Pitch Number</label>
            <input
              type="number"
              className="form-control"
              id="pitch_number"
              name="pitch_number"
              value={formData.pitch_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="brand_name">Brand Name</label>
            <input
              type="text"
              className="form-control"
              id="brand_name"
              name="brand_name"
              value={formData.brand_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="product">Product</label>
            <input
              type="text"
              className="form-control"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-8">
            <label htmlFor="present_sharks">Present Sharks</label>
            <input
              type="text"
              className="form-control"
              id="present_sharks"
              name="present_sharks"
              value={JSON.stringify(formData.present_sharks)}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="pitcher_ask_amount">Pitcher Ask Amount</label>
            <input
              type="number"
              className="form-control"
              id="pitcher_ask_amount"
              name="pitcher_ask_amount"
              value={formData.pitcher_ask_amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="pitcher_ask_equity">Pitcher Ask Equity</label>
            <input
              type="number"
              className="form-control"
              id="pitcher_ask_equity"
              name="pitcher_ask_equity"
              value={formData.pitcher_ask_equity}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="pitcher_ask_valuation">Pitcher Ask Valuation</label>
            <input
              type="number"
              className="form-control"
              id="pitcher_ask_valuation"
              name="pitcher_ask_valuation"
              value={formData.pitcher_ask_valuation}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="sector">Sector</label>
            <input
              type="text"
              className="form-control"
              id="sector"
              name="sector"
              value={formData.sector}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="deal_or_not">Deal or Not</label>
            <input
              type="checkbox"
              className="form-control"
              id="deal_or_not"
              name="deal_or_not"
              checked={formData.deal_or_not}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="deal_valuation">Deal Valuation</label>
            <input
              type="number"
              className="form-control"
              id="deal_valuation"
              name="deal_valuation"
              value={formData.deal_valuation}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="entrepreneurs_founders">Entrepreneurs/Founders</label>
            <input
              type="text"
              className="form-control"
              id="entrepreneurs_founders"
              name="entrepreneurs_founders"
              value={formData.entrepreneurs_founders}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="deal">Deal</label>
            <input
              type="checkbox"
              className="form-control"
              id="deal"
              name="deal"
              checked={formData.deal}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="deal_amount">Deal Amount</label>
            <input
              type="number"
              className="form-control"
              id="deal_amount"
              name="deal_amount"
              value={formData.deal_amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="deal_equity">Deal Equity</label>
            <input
              type="number"
              className="form-control"
              id="deal_equity"
              name="deal_equity"
              value={formData.deal_equity}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="total_sharks_invested">Total Sharks Invested</label>
            <input
              type="number"
              className="form-control"
              id="total_sharks_invested"
              name="total_sharks_invested"
              value={formData.total_sharks_invested}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="sharks_invested">Sharks Invested</label>
            <input
              type="text"
              className="form-control"
              id="sharks_invested"
              name="sharks_invested"
              value={JSON.stringify(formData.sharks_invested)}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="equity_per_shark ">Equity per Shark</label>
            <input
              type="number"
              className="form-control"
              id="equity_per_shark"
              name="equity_per_shark"
              value={formData.equity_per_shark}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="final_deal_debt">Final Deal Debt</label>
            <input
              type="number"
              className="form-control"
              id="final_deal_debt"
              name="final_deal_debt"
              value={formData.final_deal_debt}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="final_deal_debt_interest">Final Deal Debt Interest</label>
            <input
              type="number"
              className="form-control"
              id="final_deal_debt_interest"
              name="final_deal_debt_interest"
              value={formData.final_deal_debt_interest}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="social_media_links">Social Media Links</label>
            <input
              type="text"
              className="form-control"
              id="social_media_links"
              name="social_media_links"
              value={JSON.stringify(formData.social_media_links)}
              onChange={handleInputChange}
            />
          </div>

      <div className="text-center mt-4">
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
