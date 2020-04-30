import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    iconName: 'sun',
    message: "Holy sweat, it's summer.",
  },
  winter: {
    iconName: 'snowflake',
    message: 'Brrr, winter is so cool!',
  },
};

const getSeason = (month, lat) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const { lat, month } = props;
  const season = getSeason(month, lat);
  const display = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${display.iconName} icon left massive`}></i>
      <h1>{display.message}</h1>
      <i className={`${display.iconName} icon right massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
