import React, { useContext, useEffect } from 'react';
import {
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import {
  AppBar as MUIAppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
//   InputBase,
  OutlinedInput,
  ListItemIcon,
  Badge,
  styled,
  BadgeProps,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routes/routesModel.ts';
import { UserContext } from '../UserContext.tsx';
import { toastError, toastSuccess } from '../utils/toastUtils.ts';
import cartsAPI from '../api/cartsAPI.ts';
import * as cartLocalStorageUtils from '../utils/cartLocalStorageUtils.ts';
// import productsAPI from '../api/productsAPI.ts';
import { Product } from '../types/Product.ts';
import productsAPI from '../api/productsAPI.ts';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const AppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();
  const context = useContext(UserContext)!;
  const { userInfo, logout, mode, changeMode, productsInCart, setProductsInCart } = context;
  const [searchQuery, setSearchQuery] = React.useState<Product[]>([]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    navigate('/store/Account');
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  const handleLogout = async () => {
    handleCloseUserMenu();
    try {
      await logout();
      toastSuccess('User logged out successfully');
    } catch (err) {
      toastError((err as Error).message);
    }
  };

  const handleCart = () => {
    navigate(ROUTES.CART);
  };

  const handleSearch = (query:any) => {
    // Implement your search logic here
    const handleSearchProduct = async () => { 
      try {
        console.log('Search query:', query);
        const search = await productsAPI.searchProducts(query);
        console.log('this is search',search);
        navigate('/store/search',{ state: search });
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
      
    }
    handleSearchProduct();
  };

  useEffect(() => {
    const updateQuantity = async () => {
      try {
        if (userInfo) {
          const cartData = await cartsAPI.getCart('1');
          setProductsInCart(cartData.length);
        } else {
          const localCart = cartLocalStorageUtils.getCart();

          if (localCart) {
            setProductsInCart(localCart.length);
          } else {
            setProductsInCart(0);
          }
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    updateQuantity();
  }, [userInfo]);

  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <MUIAppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box onClick={() => navigate('/store')} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <StorefrontIcon sx={{ marginRight: 2 }} />
          <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
            Demo Store
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <OutlinedInput
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            startAdornment={
              <IconButton color="inherit" onClick={() => handleSearch(searchQuery)} edge="start">
                <SearchIcon />
              </IconButton>
            }
            sx={{
              width: '250px', // Adjust the width as needed
              marginLeft: 2,
              borderRadius: '20px', // Adjust the border radius for rounded corners
              '&.Mui-focused': {
                borderColor: 'rgba(0, 0, 0, 0.7)', // Adjust the focused border color
              },
            }}
          />
          <IconButton color="inherit" onClick={changeMode} sx={{ marginLeft: 1 }}>
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
          <IconButton color="inherit" onClick={handleCart} sx={{ marginLeft: 1.5 }}>
            <StyledBadge badgeContent={productsInCart} color="warning">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          {!userInfo && (
            <Button
              color="inherit"
              startIcon={<LoginIcon />}
              onClick={handleLogin}
            >
              Login
            </Button>
          )}

          {userInfo && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={'email'} disabled>
                  <Typography>{userInfo.email}</Typography>
                </MenuItem>
                <MenuItem key={'logOut'} onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
