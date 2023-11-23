import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Button, Grid } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { ShippingDetailsType } from '../../types/sippingDetails';

type Props = {
    shippingDetails: {data: ShippingDetailsType, setData: Function};
    onNext: Function;
}

const ShippingDetails = (props: Props) => {
    const [deliveryMethod, setDeliveryMethod] = useState<string>('pickup');

    // CreditCardDetails.
    const shippingDetails: ShippingDetailsType = props.shippingDetails.data;
    const setShippingDetails: Function = props.shippingDetails.setData;

    

    const [errors, setErrors] = useState<Partial<ShippingDetailsType>>({});

    const [error, setError] = React.useState('');

    const handleDeliveryMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryMethod(event.target.value);
    };




    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setError('');

        const { name, value } = event.target;
       

        setShippingDetails({
            ...shippingDetails,
            [name]: value,
        });

        const newErrors = { ...errors };
        switch (name) {
            case 'firstName':
                newErrors.firstName = value.trim() === '' ? 'Please enter your first name' : '';
                break;
            case 'lastName':
                newErrors.lastName = value.trim() === '' ? 'Please enter your last name' : '';
                break;
            case 'phone':
                newErrors.phone = value.trim() === '' ? 'Please enter your phone number' : '';
                break;
            case 'country':
                newErrors.country = value.trim() === '' ? 'Please enter your country' : '';
                break;
            case 'city':
                newErrors.city = value.trim() === '' ? 'Please enter your city' : '';
                break;
            case 'address':
                newErrors.address = value.trim() === '' ? 'Please enter your address' : '';
                break;
            case 'zip':
                newErrors.zip = value.trim() === '' ? 'Please enter your postal code' : '';
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    const handleNextClick = async () => {
        const { firstName, lastName, phone, country, city, zip, address } = shippingDetails;

        const formErrors: Partial<ShippingDetailsType> = {};
        if (firstName.trim() === '') {
            formErrors.firstName = 'Please enter your first name';
        }
        if (lastName.trim() === '') {
            formErrors.lastName = 'Please enter your last name';
        }
        if (phone.trim() === '') {
            formErrors.phone = 'Please enter your phone number';
        }
        if (country.trim() === '') {
            formErrors.country = 'Please enter your country';
        }
        if (city.trim() === '') {
            formErrors.city = 'Please enter your city';
        }
        if (zip.trim() === '') {
            formErrors.zip = 'Please enter your address';
        }
        if (address.trim() === '') {
            formErrors.address = 'Please enter your postal code';
        }

        setErrors(formErrors);

        const isValid = Object.keys(formErrors).length === 0;

        if (isValid) {
            setError('');
            props.onNext();

        } else {
            setError('Please fill in all required fields !!!');
        }

    };


    return (
        <React.Fragment>
            <Typography component="h1" variant="h6" align="center">
                Shipping Options
            </Typography>

            <hr style={{ width: '90%', color: 'gray', marginBottom: '40px' }} />

            <FormControl component="fieldset">
                <FormLabel component="legend">Choose delivery method:</FormLabel>
                <RadioGroup
                    aria-label="deliveryMethod"
                    name="deliveryMethod"
                    value={deliveryMethod}
                    onChange={handleDeliveryMethodChange}
                >
                    <FormControlLabel value="pickup" control={<Radio />} label="Self Pickup" />
                    <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
                </RadioGroup>

                {deliveryMethod === 'delivery' && (
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                value={shippingDetails.firstName}
                                onChange={handleInputChange}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                value={shippingDetails.lastName}
                                onChange={handleInputChange}
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="phone"
                                name="phone"
                                label="Phone"
                                fullWidth
                                autoComplete="phone"
                                variant="standard"
                                value={shippingDetails.phone}
                                onChange={handleInputChange}
                                error={!!errors.phone}
                                helperText={errors.phone}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                                value={shippingDetails.country}
                                onChange={handleInputChange}
                                error={!!errors.country}
                                helperText={errors.country}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-city"
                                variant="standard"
                                value={shippingDetails.city}
                                onChange={handleInputChange}
                                error={!!errors.city}
                                helperText={errors.city}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                autoComplete="shipping address"
                                variant="standard"
                                value={shippingDetails.address}
                                onChange={handleInputChange}
                                error={!!errors.address}
                                helperText={errors.address}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="standard"
                                value={shippingDetails.zip}
                                onChange={handleInputChange}
                                error={!!errors.zip}
                                helperText={errors.zip}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Use this address for payment details"
                            />
                        </Grid>
                    </Grid>
                )}

                {error && (
                    <div>
                        <ErrorIcon sx={{ color: 'red', fontSize: 40 }} />
                        <Typography variant="body1" color="error">
                            {error}
                        </Typography>
                    </div>
                )}
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    onClick={handleNextClick}
                    sx={{ mt: 3, ml: 1 }}
                >
                    Next
                </Button>
            </Box>
        </React.Fragment>
    );
};

export default ShippingDetails;
