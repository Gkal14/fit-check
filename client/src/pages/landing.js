import React from 'react';
import '../assets/css/app.css'

const Home = () => {

  return (
    <main>

      <div class="d-flex justify-content-center mt-5">
        <div class="row align-items-center justify-content-center">
          <div class="col">
            <h1 class='mx-auto '>
              Hi there!
            </h1>
            <div>
              Welcome to Fit Check,
            </div>
          </div>
          <div class='col'>
            <p>
              A site for climbers to share their opinion on climbing shoes.
            </p>
          </div>
        </div>

      </div>

      <div class="row align-items-center justify-content-center">
        <img src='https://images.freeimages.com/images/previews/8fd/rock-climbing-2-1405901.jpg'
        alt="rock climber" class="picSize" >
        </img>
      </div>





    </main>
  );
};

export default Home;