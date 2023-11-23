import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, paddingLeft: "100px" }}>
      <Grid container spacing={3} sx={{ paddingLeft: "120px" }}>
        <Grid xs={3} md={3}>
          <Item sx={{ height: "200px", width: "250px", marginBottom: "10px" }}>
            <h3 style={{ color: "lightblue" }}>your address</h3>information
            about your address
          </Item>
          <Item sx={{ height: "200px", width: "250px" }}>
            <h3 style={{ color: "lightblue" }}>your orders</h3>all of your past
            orders
          </Item>
        </Grid>
        <Grid xs={3} md={3}>
          <Item sx={{ height: "200px", width: "250px", marginBottom: "10px" }}>
            <CallRoundedIcon />
            <h3 style={{ color: "lightblue" }}>customer services</h3>stay in
            conttect with us
          </Item>
          <Item sx={{ height: "200px", width: "250px" }}>your cart</Item>
        </Grid>
        <Grid xs={3} md={3}>
          <Item sx={{ height: "200px", width: "250px", marginBottom: "10px" }}>
            
          <p>
            <LocalShippingIcon />
          </p>
            {" "}
            shipment
          </Item>
          <Item sx={{ height: "200px", width: "250px" }}>xs=6 md=8</Item>
        </Grid>

        {/* </Grid>
          <Item sx={{height:'100px',width:'300px'}} >xs=6 md=4</Item>
        </Grid> */}
        {/* <Grid xs={6} md={4}>
          <Item sx={{height:'100px',width:'300px'}}>xs=6 md=4</Item>
        </Grid> */}
        {/* <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
