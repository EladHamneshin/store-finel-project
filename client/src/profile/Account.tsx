import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
transition: "transform 0.3s",
"&:hover": {
  transform: "scale(1.03)",
}
}

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, paddingLeft: "100px" ,paddingTop:'35px' }}>
      <Grid container spacing={3} sx={{ paddingLeft: "120px" }}>
        <Grid xs={3} md={3}>
          <Link to={"/address"} style={{ color: "lightblue" ,textDecorationLine:'none'}}>
            <Item
              sx={{
                height: "200px",
                width: "250px",
                marginBottom: "10px",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
              >
              <ContactsIcon></ContactsIcon>
              <h3 style={{ color: "lightblue" }}>your address</h3>information
              about your address
            </Item>
          </Link>
          <Link to={"/orders"} style={{ textDecorationLine:'none' }}>
            <Item
              sx={{
                height: "200px",
                width: "250px",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <h3 style={{ color: "lightblue" }}>your orders</h3>all of your
              past orders
            </Item>
          </Link>
        </Grid>
        <Grid xs={3} md={3}>
        <Link to={"/service"} style={{ textDecorationLine:'none'}}>
          <Item
            sx={{
              height: "200px",
              width: "250px",
              marginBottom: "10px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <CallRoundedIcon />
            <h3 style={{ color: "lightblue" }}>customer services</h3>stay in
            conttect with us
          </Item>
          </Link>
          <Link to={"/address"} style={{ color: "lightblue" ,textDecorationLine:'none'}}>
          <Item
            sx={{
              height: "200px",
              width: "250px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
                   <h3 style={{ color: "lightblue" }}>your cart</h3>
          </Item>
          </Link>
        </Grid>
        <Grid xs={3} md={3}>
          <Item
            sx={{
              height: "200px",
              width: "250px",
              marginBottom: "10px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <p>
              <LocalShippingIcon />
            </p>{" "}
            shipment
          </Item>
          <Item
          sx={{
              height: "200px",
              width: "250px",
              marginBottom: "10px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              }
              
            }}
          > notes
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
