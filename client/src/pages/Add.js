import React from 'react';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import Auth from '../utils/auth';

const Add = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ReviewForm />
          </div>
        )}      
      </div>
    </main>

  );
};

export default Add;