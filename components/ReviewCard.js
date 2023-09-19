import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex">
      <div className="w-16 h-16">
        <img
          className="h-full w-full object-cover"
          src="https://www.unicef.org/sites/default/files/styles/hero_tablet/public/unicef-youth-advocates-3-UN0348822.jpg?itok=z-YojuS5"
          alt="image"
          width="50"
          height="50"
        />
      </div>
      <div className="bg-slate-100 p-4 w-full ml-6 ">
        <h3>Harpreet</h3>
        <p>
          Very friendly in call and good suggestion. understood my issue quite
          well and guided me through the entire process.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
