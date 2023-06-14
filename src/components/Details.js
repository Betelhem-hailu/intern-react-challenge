import { useEffect, useState } from "react";
const Details = ({detail}) => {

  return (
    <div className="side-container">
    <div className="header">
    <div className="title">{detail.name}</div>
    </div>
    <div className="content">
    <div className="text-wrapper">
    <div className="line">
    <h3 className="text">Height</h3>
    <h3 className="author">{detail.height}</h3>
    </div>
    <div className="line">
    <h3 className="text">Mass</h3>
    <h3 className="author">{detail.mass}</h3>
    </div>
    <div className="line">
    <h3 className="text">Hair color</h3>
    <h3 className="text">{detail.hair_color}</h3>
    </div>
    <div className="line">
    <h3 className="text">Skin color</h3>
    <h3 className="text">{detail.skin_color}</h3>
    </div>
    <div className="line">
    <h3 className="text">Eye color</h3>
    <h3 className="text">{detail.eye_color}</h3>
    </div>
    <div className="line">
    <h3 className="text">Birth year</h3>
    <h3 className="text">{detail.birth_year}</h3>
    </div>
    <div className="line">
    <h3 className="text">Gender</h3>
    <h3 className="text">{detail.gender}</h3>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Details