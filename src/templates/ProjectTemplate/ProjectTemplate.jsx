import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { graphql } from 'gatsby';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { useStateWithLocalStorage } from '../../helpers';

import '@brainhubeu/react-carousel/lib/style.css';

import SliderArrow from '../../components/SliderArrow/SliderArrow';

import './ProjectTemplate.scss';

export default ({ data }) => {
  const project = data.allWordpressWpProjects.nodes[0];
  const [lang, setLang] = useStateWithLocalStorage('astraLang');
  const [galleryValue, setGalleryValue] = useState(0);
  console.log(project);
  return (
    <Layout isInnerPage lang={lang} engClick={() => setLang('ENG')} ruClick={() => setLang('RU')}>
      <div className="project-item">
        <div className="project-item__img-wrap">
          <img
            src={
              project &&
              project.acf &&
              project.acf.photo &&
              project.acf.photo.localFile &&
              project.acf.photo.localFile.publicURL
                ? project.acf.photo.localFile.publicURL
                : null
            }
            alt=""
            className="project-item__img"
          />
        </div>

        <div className="project-item__content">
          <div className="project-item__info">
            <h1 className="project-item__title">
              {project && project.acf && (
                <>
                  {lang === 'RU'
                    ? project.acf.title_rus
                    : project.acf.title_eng || project.acf.title_rus}
                </>
              )}
            </h1>
            <div className="project-item__list">
              {project && project.acf && (project.acf.square_rus || project.acf.square_eng) && (
                <div className="project-item__info-item">
                  <div className="project-item__info-title">
                    {lang === 'RU' ? 'Площадь:' : 'Square:'}
                  </div>
                  <div className="project-item__info-desc">
                    {lang === 'RU'
                      ? project.acf.square_rus
                      : project.acf.square_eng || project.acf.square_rus}{' '}
                    m2
                  </div>
                </div>
              )}

              {project && project.acf && (project.acf.city_rus || project.acf.city_eng) && (
                <div className="project-item__info-item">
                  <div className="project-item__info-title">
                    {lang === 'RU' ? 'Город:' : 'City:'}
                  </div>
                  <div className="project-item__info-desc">
                    {lang === 'RU'
                      ? project.acf.city_rus
                      : project.acf.city_eng || project.acf.city_rus}
                  </div>
                </div>
              )}

              {project && project.acf && (project.acf.address_rus || project.acf.address_eng) && (
                <div className="project-item__info-item">
                  <div className="project-item__info-title">
                    {lang === 'RU' ? 'Адрес:' : 'Address:'}
                  </div>
                  <div className="project-item__info-desc">
                    {' '}
                    {lang === 'RU'
                      ? project.acf.address_rus
                      : project.acf.address_eng || project.acf.address_rus}
                  </div>
                </div>
              )}

              {project &&
                project.acf &&
                (project.acf.architector_rus || project.acf.architector_eng) && (
                  <div className="project-item__info-item">
                    <div className="project-item__info-title">
                      {lang === 'RU' ? 'Архитектор:' : 'Architect:'}
                    </div>
                    <div className="project-item__info-desc">
                      {' '}
                      {lang === 'RU'
                        ? project.acf.architector_rus
                        : project.acf.architector_eng || project.acf.architector_rus}
                    </div>
                  </div>
                )}

              {project && project.acf && (project.acf.time_rus || project.acf.time_eng) && (
                <div className="project-item__info-item">
                  <div className="project-item__info-title">
                    {lang === 'RU' ? 'Время создания проекта:' : 'Creation time:'}
                  </div>
                  <div className="project-item__info-desc">
                    {lang === 'RU'
                      ? project.acf.time_rus
                      : project.acf.time_eng || project.acf.time_rus}
                  </div>
                </div>
              )}
            </div>
          </div>

          {lang !== 'RU' &&
            project &&
            project.acf &&
            project.acf.content_eng_projects.map((item, index) => (
              <div key={`key-index_${index}`}>
                {Object.prototype.hasOwnProperty.call(item, 'text') && (
                  <div className="project-item__text">
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                )}

                {Object.prototype.hasOwnProperty.call(item, 'quote') && (
                  <div className="project-item__quote">{item.quote}</div>
                )}

                {Object.prototype.hasOwnProperty.call(item, 'gallery') && (
                  <Carousel
                    centered
                    infinite
                    arrows
                    slidesPerPage={2}
                    className="project-item__gallery"
                    keepDirectionWhenDragging
                    arrowLeft={<SliderArrow name="angle-double-left" />}
                    arrowLeftDisabled={<SliderArrow name="angle-left" />}
                    arrowRight={<SliderArrow isRight name="angle-double-right" />}
                    arrowRightDisabled={<SliderArrow isRight name="angle-right" />}
                    addArrowClickHandler
                    breakpoints={{
                      980: {
                        slidesPerPage: 1,
                      },
                    }}
                  >
                    {item.gallery.map(img => (
                      <div className="project-item__slider-item" key={img.localFile.publicURL}>
                        <img
                          className="project-item__slider-item-img"
                          src={img.localFile.publicURL}
                          alt=""
                        />
                      </div>
                    ))}
                  </Carousel>
                )}

                {Object.prototype.hasOwnProperty.call(item, 'gallery_with_thumbnails') && (
                  <>
                    <Carousel
                      centered
                      infinite
                      arrows
                      slidesPerPage={1}
                      className="project-item__gallery-with-thumbnails"
                      keepDirectionWhenDragging
                      arrowLeft={<SliderArrow name="angle-double-left" />}
                      arrowLeftDisabled={<SliderArrow name="angle-left" />}
                      arrowRight={<SliderArrow isRight name="angle-double-right" />}
                      arrowRightDisabled={<SliderArrow isRight name="angle-right" />}
                      addArrowClickHandler
                      value={galleryValue}
                      onChange={value => setGalleryValue(value)}
                    >
                      {item.gallery_with_thumbnails.map(img => (
                        <img
                          className="project-item__slider-item-img"
                          src={img.localFile.publicURL}
                          alt=""
                          key={img.localFile.id}
                        />
                      ))}
                    </Carousel>

                    <Dots
                      thumbnails={item.gallery_with_thumbnails.map(img => (
                        <img
                          className="project-item__thumbnail-img"
                          src={img.localFile.publicURL}
                          alt=""
                          key={img.localFile.id}
                        />
                      ))}
                      value={galleryValue}
                      onChange={value => setGalleryValue(value)}
                      number={item.gallery_with_thumbnails.length}
                    />
                  </>
                )}

                {Object.prototype.hasOwnProperty.call(item, 'single_photo') && (
                  <div
                    className={`project-item__single-img-container project-item__single-img-container_${item.align}`}
                  >
                    <div className="project-item__single-img-wrap">
                      <img
                        src={item.single_photo.localFile.publicURL}
                        alt=""
                        className="project-item__single-img"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}

          {lang === 'RU' &&
            project &&
            project.acf &&
            project.acf.content_rus_projects.map((item, index) => (
              <div key={`key-index_${index}`}>
                {Object.prototype.hasOwnProperty.call(item, 'text') && (
                  <div className="project-item__text">
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                )}

                {Object.prototype.hasOwnProperty.call(item, 'quote') && (
                  <div className="project-item__quote">{item.quote}</div>
                )}

                {Object.prototype.hasOwnProperty.call(item, 'gallery') && (
                  <Carousel
                    centered
                    infinite
                    arrows
                    slidesPerPage={2}
                    className="project-item__gallery"
                    keepDirectionWhenDragging
                    arrowLeft={<SliderArrow name="angle-double-left" />}
                    arrowLeftDisabled={<SliderArrow name="angle-left" />}
                    arrowRight={<SliderArrow isRight name="angle-double-right" />}
                    arrowRightDisabled={<SliderArrow isRight name="angle-right" />}
                    addArrowClickHandler
                    breakpoints={{
                      980: {
                        slidesPerPage: 1,
                      },
                    }}
                  >
                    {item.gallery.map(img => (
                      <div className="project-item__slider-item" key={img.localFile.publicURL}>
                        <img
                          className="project-item__slider-item-img"
                          src={img.localFile.publicURL}
                          alt=""
                        />
                      </div>
                    ))}
                  </Carousel>
                )}

                {Object.prototype.hasOwnProperty.call(item, 'gallery_with_thumbnails') && (
                  <div className="project-item__gallery-with-thumbnails-wrap">
                    <Carousel
                      centered
                      infinite
                      arrows
                      slidesPerPage={1}
                      className="project-item__gallery-with-thumbnails"
                      keepDirectionWhenDragging
                      arrowLeft={<SliderArrow name="angle-double-left" />}
                      arrowLeftDisabled={<SliderArrow name="angle-left" />}
                      arrowRight={<SliderArrow isRight name="angle-double-right" />}
                      arrowRightDisabled={<SliderArrow isRight name="angle-right" />}
                      addArrowClickHandler
                      value={galleryValue}
                      onChange={value => setGalleryValue(value)}
                    >
                      {item.gallery_with_thumbnails.map(img => (
                        <img
                          className="project-item__slider-item-img"
                          src={img.localFile.publicURL}
                          alt=""
                          key={img.localFile.id}
                        />
                      ))}
                    </Carousel>

                    <Dots
                      thumbnails={item.gallery_with_thumbnails.map(img => (
                        <img
                          className="project-item__thumbnail-img"
                          src={img.localFile.publicURL}
                          alt=""
                          key={img.localFile.id}
                        />
                      ))}
                      value={galleryValue}
                      onChange={value => setGalleryValue(value)}
                      number={item.gallery_with_thumbnails.length}
                    />
                  </div>
                )}

                {Object.prototype.hasOwnProperty.call(item, 'single_photo') && (
                  <div
                    className={`project-item__single-img-container project-item__single-img-container_${item.align}`}
                  >
                    <div className="project-item__single-img-wrap">
                      <img
                        src={item.single_photo.localFile.publicURL}
                        alt=""
                        className="project-item__single-img"
                      />
                    </div>
                  </div>
                )}

                {Object.prototype.hasOwnProperty.call(item, 'photo_1') && (
                  <div className="project-item__images-line">
                    <div className="project-item__images-item">
                      <img
                        src={item.photo_1.localFile.publicURL}
                        alt=""
                        className="project-item__images-item-img"
                      />
                    </div>

                    <div className="project-item__images-item">
                      <img
                        src={item.photo_2.localFile.publicURL}
                        alt=""
                        className="project-item__images-item-img"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    allWordpressWpProjects(filter: { slug: { eq: $slug } }) {
      nodes {
        acf
        slug
        categories {
          name
          slug
        }
      }
    }
  }
`;
