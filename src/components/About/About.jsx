import React from 'react';

import './About.scss';
import Carousel from '@brainhubeu/react-carousel';
import SliderArrow from '../SliderArrow/SliderArrow';

const About = ({main}) => {
  return (
    <div className="about">
     {/* <div className="about__content">
        {main && main.wordpressPage &&
        main.wordpressPage.acf &&
        main.wordpressPage.acf.main_page.map(item => (
          <>

            {item['__typename'] === 'WordPressAcf_content' && (
              <div className="about__text" key={'WordPressAcf_content'}>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            )}

            {item['__typename'] === 'WordPressAcf_single_photo' && (
              <div className="about__photo-wrap" key={'WordPressAcf_single_photo'}>
                <img src={item.single_photo && item.single_photo.localFile && item.single_photo.localFile.publicURL} alt="" className="about__photo"/>
              </div>
            )}


            {Object.prototype.hasOwnProperty.call(item, 'team') && (
              <Carousel
                centered
                infinite
                arrows
                slidesPerPage={2}
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
                {item.gallery.map(img => (
                  <div className="about__slider-item">
                    <img
                      className="about__slider-item-img"
                      src={img.localFile.publicURL}
                      alt=""
                    />
                  </div>
                ))}
              </Carousel>
            )}

          </>
        ))}
      </div>*/}
    </div>
  )
};

export default About;
