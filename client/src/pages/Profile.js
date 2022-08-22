import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_ME } from '../utils/queries';
import '../components/Header/app.css'

// import ReviewForm from '../components/ReviewForm/ReviewForm';
// import ReviewList from '../components/ReviewList/reviewList';

const Profile = () => {
    const {loading, data} = useQuery(QUERY_ME);

    if (loading) {
        return (
            <>
                Loading...
            </>
        )
    }

    const profileData = data?.me || {}

    return (
        <main>
        <div class="body">
            <br></br>
            <br></br>
            <h4>Hi {profileData.username}!</h4>
            <h5>View your reviewed shoes below</h5>

             {/* Id: {profileData._id}
            <br/>
            Email: {profileData.email}
            <br/> */}
            
  
<br></br>
<br></br>
<br></br>
    <div className='col-12 col-md-9'>
    <h4>La sportiva Skwama</h4>
      <img src="https://shop.cdn.epictv.com/StWXkgmXTg6qi9ltCRnl-b6102a2551c0b3cd2c13daaeab843f50.jpeg" alt="la sportiva skwama" width="300px" height="300px"></img>
        <div className='card'>
          <h4 className='card-header'>Your review</h4>
          <div className='card-body'>
      <form>
        <p class="bold">Description</p>
        <textarea
          className="form-input-review w-100 h-100"
        >I tried this shoe on a few months ago and it is extremely comfortable.
        It has a narrow heel and is great for heel hooks.
        I would be careful if primarily climbing indoors as the are prone to damage.</textarea>
        <p class="bold">Overall Rating</p>
        <textarea
          className="form-input-review w-40"
        >4.5/5</textarea>
        
        <button className="btn d-block w-25" type="submit">
          Edit
        </button>

        <button className="btn d-block w-25" type="submit">
          Delete
        </button>
      </form>

      


      
    </div>
    </div>
      </div>
      
      </div>
        </main>
        
    );
};

export default Profile
