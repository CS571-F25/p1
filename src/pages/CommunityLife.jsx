import React from "react"; 
import photos from "../assets/community.json";
import PhotoGallery from "../components/PhotoGallery";

export default function CommunityLife () {
    const connect = photos.filter(p => p.category==="connect");
    const explore = photos.filter(p => p.category==="explore");
    return (<div style={{paddingTop:"120px"}}>
        <h1>Community Life</h1>
        <p>Being a part of WISE community gives you the chance to...</p>
        <div style={{maxWidth: "800px", margin:"auto", paddingTop:"2rem"}}>
            <h3 className="text-center mb-4">...Connect</h3>
            <PhotoGallery photos={connect}/>
            <br/>
            <h3 className="text-center mb-4">...Explore</h3>
            <PhotoGallery photos={explore}/>
        </div>
        <br/>
    </div>
    );
}