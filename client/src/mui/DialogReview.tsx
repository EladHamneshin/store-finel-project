import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import RadioGroupRating from './RadioGroupRating';
import { Typography } from '@mui/material';
import productsAPI from '../api/productsAPI';

interface DialogReviewProps {
  // Add any props if needed
}
interface DialogReviewProps {
    pid: string|undefined;
    }
const DialogReview: React.FC<DialogReviewProps> = ({pid}:DialogReviewProps) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };

  

  const handleSubmit = async () => {
   try{
    const userReview = await productsAPI.reviewProduct(pid as string, title, review, rating);
    console.log('this is user review',userReview);
    setOpen(false);   }
    catch(error){
        console.log('this is error',error);
    }
  }
  
  console.log('this is rating',rating);
  

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Review Product
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Review</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="review"
            label="Your review"
            type="text"
            fullWidth
            rows={4}
            variant="standard"
            value={review}
            onChange={handleReviewChange}
          />
          <br />
          <br />
          <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
            Rating
          </Typography>
          <RadioGroupRating setRating={setRating}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogReview;
