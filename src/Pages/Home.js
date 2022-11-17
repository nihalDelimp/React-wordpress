import React from 'react';
import IsLoadingHOC from '../Components/IsLoadingHOC';


function Home(props) {

    return (
        <div className='container'>
            <h3>Welcome to WordPress. This is your first post.!</h3>
        </div>
    )
}

export default IsLoadingHOC(Home)
