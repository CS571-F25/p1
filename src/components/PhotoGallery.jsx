import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function PhotoGallery ({photos}) {
    return (
        <Carousel interval={3000} indicators={true} controls={true} fade>
            {photos.map((photo, idx) => (
                <Carousel.Item key={idx}>
                    <img className = "d-block w-100" 
                        src={photo.image} 
                        alt={photo.caption}
                        style={{maxHeight:"500px", objectFit:"contain"}}
                    />
                    {photo.caption && (
                        <Carousel.Caption>
                            <p>{photo.caption}</p>
                        </Carousel.Caption>
                    )}         
                </Carousel.Item>
            ))}
        </Carousel>
    )
}