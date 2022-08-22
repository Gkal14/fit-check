import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_ME } from '../utils/queries';

// import ReviewForm from '../components/ReviewForm/ReviewForm';
import ReviewList from '../components/ReviewList/reviewList';

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
            <p>Profile Page</p>
            Id: {profileData._id}
            <br/>
            Email: {profileData.email}
            <br/>
            Username: {profileData.username}
            <div>
                <ReviewList/>
            </div>
        </>
    );
};

export default Profile

    // return (
    //     <>
    //     <div>
    //       <div className="flex-row mb-3">
    //         <h2 className="bg-dark text-secondary p-3 display-inline-block">
    //           Hi {profileData.username}!
    //         </h2>
    //       </div>
    
    //       <div className="flex-row justify-space-between mb-3">
    //         <div className="col-12 mb-3 col-lg-8">
    //           <ReviewList/>
    //         </div>
    //       </div>
    //       <div className="mb-3"> <ReviewForm /></div>
    //     </div>
    //     </>
    //   );
    // };
    
    // export default Profile;


