import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import '../pages/dashboard.css';

const Dashboard = () => {

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    console.log(data, "DATA")
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      })
    } 
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])

  return <>
  <div className="container">
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <i className="fa fa-cart-plus f-left"></i>
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders
                <span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-green order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <i className="fa fa-rocket f-left"></i>
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders
                <span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-yellow order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <i className="fa fa-refresh f-left"></i>
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders
                <span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-pink order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <i className="fa fa-credit-card f-left"></i>
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders
                <span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
        <Typography variant='h5'>Email: {userData.email}</Typography>
        <Typography variant='h6'>Name: {userData.name}</Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={8}>
        <ChangePassword />
      </Grid>
    </Grid>
  </>;
};

export default Dashboard;
