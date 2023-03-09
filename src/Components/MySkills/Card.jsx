import React from "react";
import skill1 from "../../Assets/skill1.png"

const Card = () => {
  return (
    <>
      <div className="box btn_shadow">
        <img src={skill1} alt="" />
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          necessitatibus quisquam labore expedita a deserunt, asperiores iste
          sed praesentium maiores autem optio perspiciatis ducimus adipisci
          aliquam facere vel molestias ut.
        </p>
        <a href="/">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default Card;
