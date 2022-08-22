import React from 'react';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import '../components/Header/app.css'

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main class="body">
      
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h3>Choose any of the shoes below to review</h3>
        <br></br>
      <h4>La sportiva Skwama</h4>
      <img src="https://shop.cdn.epictv.com/StWXkgmXTg6qi9ltCRnl-b6102a2551c0b3cd2c13daaeab843f50.jpeg" alt="la sportiva skwama" width="300px" height="300px"></img>
      
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewForm reviews={reviews} title="" />
          )}
        </div>
      </div>
      </div>

      <div>
      <h4>Scarpa Drago</h4>
      <img src="https://shop.cdn.epictv.com/Qh1jdWv4T5a7TiPzdMJ8-5796152f7f8f6ef5f8db50be518e7792.jpeg" alt="scarpa drago" width="300px" height="300px"></img>
      </div>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewForm reviews={reviews} title="" />
          )}
        </div>
      </div>

      <div>
      <h4>La sportiva Cobra</h4>
      <img src="https://shop.cdn.epictv.com/stiDt3TpQnKza00sae54-fa14ace7b3ae2d7e7ee6f1bc3129fbec.jpeg" alt="la sportiva cobra" width="300px" height="300px"></img>
      </div>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewForm reviews={reviews} title="" />
          )}
        </div>
      </div>
      
      <div>
      <h4>Red Chili Mystix</h4>
      <img src="https://shop.cdn.epictv.com/hLw1oDdRU6B2ymHax746-c1c18ff65e38f52cedda5a47acc77320.jpeg" alt="red chili mystix" width="300px" height="300px"></img>
      </div>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewForm reviews={reviews} title="" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;


