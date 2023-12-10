import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Typography, Paper, Container } from '@mui/material';

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_d2uwcc5', 'template_ktkndub', form.current, '4p9BnZQHweWrwmlDw')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh' }}>
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
        <form ref={form} onSubmit={sendEmail} style={{ width: '100%', marginTop: 20 }}>
          <TextField label="Name" name="user_name" variant="outlined" margin="normal" fullWidth required />
          <TextField label="Email" name="email" type="email" variant="outlined" margin="normal" fullWidth required />
          <TextField label="Message" name="message" multiline rows={4} variant="outlined" margin="normal" fullWidth required />
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
            Send
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
