import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Category from '../types/Category';
import { useNavigate } from 'react-router-dom';

type props = {
  category: Category;
};
export default function CategoryCard({ category }: props) {
  const navigate = useNavigate();
  
  const handleClick = async () => {
    try {
        navigate(`/store/category/${category.name}`);
      } catch (err) {
        console.error((err as Error).message);
      }    
  };
  return (
    <Card sx={{ maxWidth: 345,
    margin: '5px', 
    boxSizing:'border-box',
    boxShadow: '0 4px 8px rgba(0, 0, 0.9, 0.8)',
    marginBlock:'10px',
    transition: 'transform 0.3s', 
    '&:hover': {
      transform: 'scale(1.03)',
      
    }, }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {category.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
