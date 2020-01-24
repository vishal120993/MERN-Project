import React from 'react';

export default function Landing() {
    return (
        <div className="text-center">
            <img src= {process.env.PUBLIC_URL + "/MYtineraryLogo.png" } alt="MYtineraryLogo" width = "300 px"  /><br /><br />
            
            <h5>Find your perfect trip, designed by <br /> insiders who know and love their cities. </h5> <br /><br />

            <h3>Start Browsing</h3>
            <img src= {process.env.PUBLIC_URL + "/circled-right-2.png" } alt="CircleRight" width = "100 px" height ="100px" /> <br /><br />

            <h5>Want to build your own MYtinerary?</h5> <br />
           
            <a href ="LogIn">Log in</a> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href = "SignUp">Create Account</a> <br /> <br /><br />

            <img src= {process.env.PUBLIC_URL + "/homeIcon.png" } alt="HomeIcon" width = "70 px"  />

        </div>
    )
}
