import React from "react";
import "./Gallery.css";

const galleryItems = [
  {
    title: "Still Life with Cat",
    image: "https://images.squarespace-cdn.com/content/v1/635059e0e1d5bf39ce6c09d7/97633575-fc51-4429-9002-fda9ffb50441/Still+Life+With+Pears+-+Eska+Marsh.jpg",
    link: "#",
  },
  {
    title: "The Resting Dog",
    image: "https://images.squarespace-cdn.com/content/v1/635059e0e1d5bf39ce6c09d7/49e9b105-4e08-4620-8637-2f2607652bdd/A+Very+Long+Hound+Eska+Marsh+2022.png",
    link: "#",
  },
  {
    title: "Urban Birds",
    image: "https://images.squarespace-cdn.com/content/v1/635059e0e1d5bf39ce6c09d7/c64c15d6-28cb-4611-a973-bf024d825c37/Still+Life+With+Lemon+-+Eska+Marsh.jpg",
    link: "#",
  },
  {
    title: "City Mouse",
    image: "https://images.squarespace-cdn.com/content/v1/635059e0e1d5bf39ce6c09d7/f8b02ac7-49d7-4603-8584-af514a6c0cf5/Pear+Shaped+-+Eska+Marsh.jpg",
    link: "#",
  },
  {
    title: "Night Creatures",
    image: "https://images.squarespace-cdn.com/content/v1/635059e0e1d5bf39ce6c09d7/d16bf5f1-cb47-4275-a29d-af5814c44eb7/Studio+Brush.jpg",
    link: "#",
  },
  {
    title: "Street Companions",
    image: "https://images.squarespace-cdn.com/content/v1/635059e0e1d5bf39ce6c09d7/4aa4e078-ac4c-483c-bf9f-f205ed0a92fa/Two+Brushes%2C+Eska+Marsh+2021.PNG",
    link: "#",
  },
];

const Gallery = () => (
  <section className="ua-gallery" id="gallery">
    {galleryItems.map((item, idx) => (
      <a className="ua-gallery__item" href={item.link} key={idx}>
        <img src={item.image} alt={item.title} />
        <div className="ua-gallery__caption">{item.title}</div>
      </a>
    ))}
  </section>
);

export default Gallery;
