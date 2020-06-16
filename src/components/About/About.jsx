import React from 'react';
import PropTypes from 'prop-types';

import Carousel from '@brainhubeu/react-carousel';
import SliderArrow from '../SliderArrow/SliderArrow';

import './About.scss';

const About = ({main, team, lang}) => {
  return (
    <div className="about">
      {main.map(item => (
        <div className="about__content" key={item.node.acf.about_content_rus}>

          <div className="about__photo-wrap">
            <img src={item.node.acf.about_image && item.node.acf.about_image.localFile && item.node.acf.about_image.localFile.publicURL} alt="" className="about__photo"/>
          </div>

          {lang && (
            <div className="about__text" dangerouslySetInnerHTML={{ __html: lang === 'RU'
                ? item.node.acf.about_content_rus
                : item.node.acf.about_content_eng }} />
          )}

        </div>
      ))}

      <Carousel
        centered
        infinite
        arrows
        slidesPerPage={3}
        className="about__gallery"
        keepDirectionWhenDragging
        arrowLeft={<SliderArrow name="angle-double-left" />}
        arrowLeftDisabled={<SliderArrow name="angle-left" />}
        arrowRight={<SliderArrow isRight name="angle-double-right" />}
        arrowRightDisabled={<SliderArrow isRight name="angle-right" />}
        addArrowClickHandler
        breakpoints={{
          980: {
            slidesPerPage: 1,
          }
        }}
      >
        {team.map(item => (
          <div className="about__slider-item" key={item.acf.name_eng}>
            <div className="about__slider-item-img-wrap">
              <img
                className="about__slider-item-img"
                src={item.acf && item.acf.photo && item.acf.photo.localFile && item.acf.photo.localFile.publicURL}
                alt=""
              />
            </div>

            <div className="about__slider-item-desc-wrap">
              <div className="about__slider-item-title">
                {lang === 'RU' ? item.acf.name_rus : item.acf.name_eng}
              </div>

              <div className="about__slider-item-desc">
                {lang === 'RU' ? item.acf.desc_rus : item.acf.desc_eng}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
};

About.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default About;
