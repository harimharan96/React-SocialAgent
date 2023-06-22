import React from "react";
import "./Cards.css";
import img1 from "../assets/card-img.jpg";
import img2 from "../assets/card-img2.jpg";
import img3 from "../assets/card-img3.jpg";
import img4 from "../assets/card-img4.jpg";
import img5 from "../assets/card-img5.jpg";
import img6 from "../assets/card-img6.png";

export default function Cards() {
  const datas = [
    {
      img: img1,
      title: "White Granite",
      desc: "White granite is a type of granite that has a light-colored with bright appearance, which is usually speckled with various other colors such as gray, black, or even red. It can brighten up a room and create a sense of spaciousness. ",
    },
    {
      img: img2,
      title: "Millenium Cream",
      desc: "It is a Gold, Cream coloured slab with a polished, leathered. A natural stone that is quarried and processed into slabs and tiles for use in a variety of interior and exterior applications, including countertops, flooring, walls, and fireplace surrounds.",
    },
    {
      img: img3,
      title: "Astoria",
      desc: "It is a elegant natural stone with sparingly scattered spots durable granite with a deep cream background, darker veins of chocolates and grays. This durable slab granite is recommended for interior and exterior usage, even in freezing climates.",
    },
    {
      img: img4,
      title: "Colonial White",
      desc: "Colonial White is a light-coloured background granite with gray and white veining that creates a sophisticated and elegant look. Colonial white granite is highly durable with a long-lasting natural shine.",
    },
    {
      img: img5,
      title: "Black Forest",
      desc: "Black Forest granite is a boldly patterned, polished, high variation natural stone that is known for its deep, rich black color with intricate grey and white veining that creates a dramatic and striking appearance.",
    },
    {
      img: img6,
      title: "Silver Waves",
      desc: "It is prized for its beautiful, wavy pattern of gray and white veining that creates a unique and eye-catching appearance. It is polished to a high shine, which enhances its natural beauty and makes it an ideal choice for use as a countertop, back splash.",
    },
  ];

  return (
    <div className="cards">
      {datas.map((data) => {
        return (
          <div key={data.title} className="card">
            <img src={data.img} alt="" />
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
            <button>Enquiry</button>
          </div>
        );
      })}
    </div>
  );
}
