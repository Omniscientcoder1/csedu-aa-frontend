// CommitteeSlider.jsx
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const CommitteeSlider = ({ committee }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {committee.map((member) => (
        <StyledCommitteeCard key={member.name}>
          <ProfileImage src={member.img} alt={member.name} />
          <div className="committee-info">
            <h4 className="committee-name">{member.name}</h4>
            <p className="post">{member.post}</p>
          </div>
        </StyledCommitteeCard>
      ))}
    </Slider>
  );
};

const StyledCommitteeCard = styled.div`
  width: 300px;
  background-color: #fafafa;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 15px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;

  .committee-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .committee-name {
    font-weight: bold;
    font-size: 18px;
    color: #333;
    margin-top: 5px;
  }

  .post {
    font-size: 15px;
    color: #666;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export default CommitteeSlider;
