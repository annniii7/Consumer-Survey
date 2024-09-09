import React from "react";
function  RatingReview({ rating, setRating,length}) {
  let arr=[];
  for (let i = 1; i <=length; i++) {
    arr[i]=i
  }
  return (
    <div>
      {arr.map((star) => {
        return (  
          <span
          key={star}
            className='start'
            style={{
              cursor: 'pointer',
              color: rating >= star ? 'gold' : 'gray',
              fontSize: `80px`,
            }}
            onClick={() => {
              setRating(star)
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
    </div>
  )
}

export default RatingReview;