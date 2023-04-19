import React from "react";
import "./Profile.css";
import {BsBookmarkHeart ,BsHeadset ,BsListCheck,BsPerson,BsHeart,BsGearWideConnected,BsBoxArrowLeft} from "react-icons/bs";

function Profile(){

    return(
        <>
        <div className="profilepage">

            <div className="sidebar">
               <div className="sidbarbody">
                    <div className="userimg">
                        <p>
                            yfguyfu
                        </p>

                    </div>
                    <div className="side-items">
                        <div className="side-item">
                        <a href="{}"> <i> {<BsPerson/>}</i> My Profile </a>
                        </div>
                        <div className="side-item">
                        <a href="{}"> <i> {<BsListCheck/>}</i> My Orders </a>
                        </div>
                        <div className="side-item">
                        <a href="{}"> <i> {<BsHeart/>}</i>Favourites </a>
                        </div>
                        <div className="side-item">
                        <a href="{}"> <i> {<BsBookmarkHeart/>}</i> My Watchlist </a>    
                        </div>
                        <div className="side-item">
                        <a href="{}"> <i> {<BsHeadset/>}</i> Inbox </a>               
                        </div>
                        <div className="side-item">
                        <a href="{}"> <i> {<BsGearWideConnected/>}</i> Settinges </a>               
                        </div>
                        <div className="side-item">
                        <a href="{}"> <i> {<BsBoxArrowLeft/>}</i> Logout </a>
                        </div>

                    </div>
           
               </div>
            </div>
            <div className="pagecontent">
                <p>
                    jkjbvkhvjjbkvbbvkhv
                </p>

            </div>

        </div>
        </>
    )
}
export default Profile;
