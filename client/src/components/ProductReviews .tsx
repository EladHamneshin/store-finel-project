import React from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Margin } from '@mui/icons-material';
interface Review {
  title: string;
  author: string;
  body: string;
  rating: number;
}

interface ProductReviewsProps {
  reviews: Review[];
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  const reviewStyles: Record<string, React.CSSProperties> = {
    productReviews: {
      margin: '20px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
    },
    reviewsTitle: {
      color: '#333',
    },
    noReviews: {
      color: '#777',
    },
    reviewsList: {
      listStyle: 'none',
      padding: '0',
    },
    reviewItem: {
      marginBottom: '20px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    reviewHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    reviewTitle: {
      color: '#333',
      margin: '0',
    },
    reviewAuthor: {
      color: '#777',
      margin: '0',
    },
    reviewText: {
      color: '#555',
    },
    reviewRating: {
      color: '#ff9900',
      fontWeight: 'bold',
    },
    seeMoreButton: {
      background: '#4caf50',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  const handleSeeMoreClick = () => {
    // Add your logic to handle "See More Reviews" click
    console.log('See More Reviews clicked');
  };

  return (
    <div style={reviewStyles.productReviews}>
      <h2 style={reviewStyles.reviewsTitle}>Product Reviews</h2>
      {reviews.length === 0 ? (
        <p style={reviewStyles.noReviews}>No reviews yet.</p>
      ) : (
        <>
          <ul style={reviewStyles.reviewsList}>
            {reviews.map((review, index) => (
              <li key={index} style={reviewStyles.reviewItem}>
                <div style={reviewStyles.reviewHeader}>
                  <h3 style={reviewStyles.reviewTitle}>{review.title}</h3>
                  <div>
                  <p style={reviewStyles.reviewAuthor}>By: {review.author}</p>
                  <div style={{marginTop:"10px"}}>
                  <ThumbUpAltIcon />
                    <ThumbDownAltIcon/>
                  </div>
               
                  </div>
                  
                </div>
                <p style={reviewStyles.reviewText}>{review.body}</p>
                <p style={reviewStyles.reviewRating}>Rating: {review.rating}/5</p>

                <div>
                  <i className="fas fa-thumbs-up" style={{ marginRight: '8px', cursor: 'pointer' }} />
                  <i className="fas fa-thumbs-down" style={{ cursor: 'pointer' }} />
                </div>
              </li>
            ))}
          </ul>
          <button style={reviewStyles.seeMoreButton} onClick={handleSeeMoreClick}>
            See More Reviews
          </button>
        </>
      )}
    </div>
  );
};



export default ProductReviews;
