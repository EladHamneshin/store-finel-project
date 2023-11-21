import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paypal from '../../components/Paypal';
import { useParams } from 'react-router-dom';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


export default function PaymentForm() {
    const { totalAmount } = useParams();
    const [payPalOpen, setPayPalOpen] = React.useState(false);
    const [payCurrentOpen, setPayCurrentOpen] = React.useState(false);

    const handleSectionToggle = (section: string) => {
        switch (section) {
            case 'payPal':
                setPayPalOpen(!payPalOpen);
                break;
            case 'payCurrent':
                setPayCurrentOpen(!payCurrentOpen);
                break;
            default:
                break;
        }
    };


    return (
        <React.Fragment>
            <List>
                <ListItem sx={{ width: '100%' }} onClick={() => handleSectionToggle('payPal')}>
                    <ListItemText primary="PayPal" />
                    {payPalOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={payPalOpen} timeout="auto" unmountOnExit>
                    <Paypal product={{ description: 'Payment', price: `${totalAmount}` }} />
                </Collapse>
            </List>

            <hr style={{ width: '90%', color: 'gray' }} />

            <List>
                <ListItem sx={{ width: '100%' }} onClick={() => handleSectionToggle('payCurrent')}>
                    <ListItemText primary="Payment details" />
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