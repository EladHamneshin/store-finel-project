import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ShippingDetails from './ShippingDetails';
import PaymentDetails from './PaymentDetails';
import OrderSummary from './OrderSummary';
import { useParams } from 'react-router-dom';
import { CreditCardDetails } from '../../types/creditCard';
import { ShippingDetailsType } from '../../types/sippingDetails';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
};


const CheckoutPage = () => {
  const { totalAmount } = useParams();
  const [activeStep, setActiveStep] = React.useState(0);

  // ShippingDetails.
  const [shippingDetails, setShippingDetails] = React.useState<ShippingDetailsType>({
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    zip: '',
  });

  // CreditCardDetails.
  const [creditCardDetails, setcreditCardDetails] = React.useState<CreditCardDetails>({
    cardholderId: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    saveCard: false,
  });


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePlaceOrder = () => {
    console.log("creditCardDetails :", creditCardDetails);
    console.log("shippingDetails :", shippingDetails);
    
    
  };

  const steps = [
    { component: <ShippingDetails shippingDetails={{data: shippingDetails, setData: setShippingDetails}} onNext={handleNext} />, label: 'Shipping address' },
    { component: <PaymentDetails totalAmount={totalAmount} creditCard={{ data: creditCardDetails, setData: setcreditCardDetails }} onNext={handleNext} onBack={handleBack} />, label: 'Payment method' },
    { component: <OrderSummary totalAmount={totalAmount} onBack={handleBack} onPlaceOrder={handlePlaceOrder} />, label: 'Summary of order details' },
  ];


  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 20 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Just before the product is with you
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {steps[activeStep].component}
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}


export default CheckoutPage;

