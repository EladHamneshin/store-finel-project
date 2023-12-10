import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContactsIcon from '@mui/icons-material/Contacts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "200px",
  width: "250px",
  marginBottom: "10px",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.03)",
  }
}));



export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, paddingLeft: "100px", paddingTop: '35px' }} >
      <Grid container spacing={3} sx={{ paddingLeft: "120px" }}>
        <Grid xs={3} md={3}>
          <Link to={"/store/address"} style={{ color: "lightblue", textDecorationLine: 'none' }}>
            <Item
            >
              <ContactsIcon></ContactsIcon>
              <h3 style={{ color: "lightblue" }}>Your Addresses</h3>information
              about your address
            </Item>
          </Link>
          <Link to={"/store/orders"} style={{ textDecorationLine: 'none' }}>
            <Item
             
            >
              <LocalShippingIcon />
              <h3 style={{ color: "lightblue" }}>Your Orders</h3>All of your
              past orders
            </Item>
          </Link>
        </Grid>
        <Grid xs={3} md={3}>
          <Link to={"/store/service"} style={{ textDecorationLine: 'none' }}>
            <Item

            >
              <CallRoundedIcon />
              <h3 style={{ color: "lightblue" }}>customer services</h3>stay in
              conttect with us
            </Item>
          </Link>
          <Link to={"/store/cart"} style={{ color: "lightblue", textDecorationLine: 'none' }}>
            <Item

            >
              <ShoppingCartIcon />
              <h3 style={{ color: "lightblue" }}>Your Cart</h3>
            </Item>
          </Link>
        </Grid>
        <Grid xs={3} md={3}>
          <Link to='/store/profile' style={{ color: "lightblue", textDecorationLine: 'none' }}>
            <Item
            >
              <p>
              </p>{" "}
              <PersonIcon />
              <h3 style={{ color: "lightblue" }}>profile</h3>
            </Item>
          </Link>
          <Link to={'/store/wishlist'} style={{ color: "lightblue", textDecorationLine: 'none' }}>
            <Item

            >
              <FavoriteIcon></FavoriteIcon>
              <h3 style={{ color: "lightblue", textDecorationLine: 'none' }}>WishList</h3>
            </Item>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
