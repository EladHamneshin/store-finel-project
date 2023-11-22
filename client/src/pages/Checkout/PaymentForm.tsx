import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paypal from '../../components/Paypal';
import { useParams } from 'react-router-dom';
import { Box, Collapse, Divider, List, ListItem, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


export default function PaymentForm() {
    const { totalAmount } = useParams();
    const [payCurrentOpen, setPayCurrentOpen] = React.useState(false);



    return (
        <React.Fragment>
            <Typography component="h1" variant="h6" align="center">
                Choose a payment method
            </Typography>

            <hr style={{ width: '90%', color: 'gray', marginBottom: '40px' }} />
            
            <Paypal product={{ description: 'Payment', price: `${totalAmount}` }} />

            <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                <Divider sx={{ flex: 1, margin: 0 }} />
                <Typography sx={{ padding: '0 10px' }}>or</Typography>
                <Divider sx={{ flex: 1, margin: 0 }} />
            </Box>

            <List>
                <ListItem sx={{ width: '100%' }} onClick={() => setPayCurrentOpen(!payCurrentOpen)}>
                    <ListItemText primary="Enter credit information" />
                    {payCurrentOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={payCurrentOpen} timeout="auto" unmountOnExit>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="cardName"
                                label="Name on card"
                                fullWidth
                                autoComplete="cc-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="cardNumber"
                                label="Card number"
                                fullWidth
                                autoComplete="cc-number"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="expDate"
                                label="Expiry date"
                                fullWidth
                                autoComplete="cc-exp"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="cvv"
                                label="CVV"
                                helperText="Last three digits on signature strip"
                                fullWidth
                                autoComplete="cc-csc"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                                label="Remember credit card details for next time"
                            />
                        </Grid>
                    </Grid>
                </Collapse>
            </List>
        </React.Fragment>
    );
}