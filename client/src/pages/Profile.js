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
        <>
        <div class="body">
            <br></br>
            <br></br>
            <h4>Hi {profileData.username}!</h4>
            <h5>View your reviewed shoes below</h5>

             {/* Id: {profileData._id}
            <br/>
            Email: {profileData.email}
            <br/> */}
            
    </div>
        </>
    );
};

export default Profile
