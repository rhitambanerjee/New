import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { HiOutlineUsers } from "react-icons/hi";
import Forms from './Forms';
import CustomerTable from './CustomerTable';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function User() {
  const [addCustomer, setAddCustomer] = React.useState(true);
  const [viewCustomer, setViewCustomer] = React.useState(false);

  function toggleAddCustomer() {
    setAddCustomer(true);
    setViewCustomer(false);
  }

  function toggleViewCustomer() {
    setViewCustomer(true);
    setAddCustomer(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Item>
            <div className='uk-flex uk-flex-column'>
              <div className='uk-flex uk-flex-row'>
                <span uk-icon="icon: users;ratio:1" style={{ marginTop: "3px" }}></span>
                <span style={{ fontSize: "18px", fontWeight: "650", marginTop: "3px" }} className='uk-margin-small-left uk-text-secondary'>Customer Dashboard</span>
              </div>
              <div className='uk-flex uk-flex-column uk-margin-top'>
                <div className='uk-flex uk-flex-row uk-margin-small-left'>
                  <span uk-icon="icon: users" style={{ marginTop: "3px" }}></span>
                  <span
                    className='uk-text-secondar uk-margin-small-left'
                    value="addcustomer"
                    style={{ marginTop: "5px", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}
                    onClick={toggleAddCustomer}
                  >
                    Add Customer
                  </span>
                </div>
                <div className='uk-flex uk-flex-row uk-margin-small-left uk-margin-top'>
                  <span uk-icon="icon: users" style={{ marginTop: "3px" }}></span>
                  <span
                    className='uk-text-secondar uk-margin-small-left'
                    style={{ marginTop: "5px", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}
                    onClick={toggleViewCustomer}
                  >
                    View Customer
                  </span>
                </div>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
            {addCustomer ? <Forms /> : <CustomerTable/>}
        </Grid>
      </Grid>
    </Box>
  );
}
