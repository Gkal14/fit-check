import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_ME } from '../../utils/queries';

const ReviewForm = () => {
  const [reviewText, setText] = useState("");

  
  const [addReview] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });
        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addReview, ...reviews] }
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, reviews: [...me.reviews, addReview] } }
      });
    }
  });

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addReview({
        variables: { reviewText }
      });

      setText('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-9'>
        <div className='card'>
          <h4 className='card-header'>Add to your reviews</h4>
          <div className='card-body'>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Review Text"
          value={reviewText}
          className="form-input-review w-100"
          onChange={handleChange}
        ></textarea>
        <button className="btn d-block w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
      </div>
    </main>
  );
};

export default ReviewForm;