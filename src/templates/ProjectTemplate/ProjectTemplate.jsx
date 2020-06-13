import React from 'react';
import Layout from '../../components/Layout/Layout';
import { graphql } from 'gatsby';
import Carousel from '@brainhubeu/react-carousel';
import { useStateWithLocalStorage } from '../../helpers';

import '@brainhubeu/react-carousel/lib/style.css';

import SliderArrow from '../../components/SliderArrow/SliderArrow';

import './ProjectTemplate.scss';

export default ({ data }) => {
  const project = data.allWordpressWpProjects.nodes[0];
  const [lang, setLang] = useStateWithLocalStorage('astraLang');

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
        </div>

        <div className="project-item__content">
          {lang !== 'RU' &&
            project &&
            project.acf &&
            project.acf.content_eng_projects.map(item => (
              <>
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
                      <div className="project-item__slider-item">
                        <img
                          className="project-item__slider-item-img"
                          src={img.localFile.publicURL}
                          alt=""
                        />
                      </div>
                    ))}
                  </Carousel>
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
              </>
            ))}

          {lang === 'RU' &&
            project &&
            project.acf &&
            project.acf.content_rus_projects.map(item => (
              <>
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
                      <div className="project-item__slider-item">
                        <img
                          className="project-item__slider-item-img"
                          src={img.localFile.publicURL}
                          alt=""
                        />
                      </div>
                    ))}
                  </Carousel>
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
              </>
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
        acf {
          address_eng
          address_rus
          architector_eng
          architector_rus
          city_eng
          city_rus
          square_eng
          square_rus
          time_eng
          time_rus
          title_eng
          title_rus
          content_eng_projects {
            ... on WordPressAcf_text {
              text
            }
            ... on WordPressAcf_gallery {
              gallery {
                localFile {
                  publicURL
                }
              }
            }
            ... on WordPressAcf_single_photo {
              single_photo {
                localFile {
                  publicURL
                }
              }
              align
            }
            ... on WordPressAcf_quote {
              quote
            }
          }
          photo {
            localFile {
              publicURL
            }
          }
          content_rus_projects {
            ... on WordPressAcf_gallery {
              id
              gallery {
                localFile {
                  publicURL
                }
              }
            }
            ... on WordPressAcf_text {
              text
            }
            ... on WordPressAcf_quote {
              quote
            }
            ... on WordPressAcf_single_photo {
              single_photo {
                localFile {
                  publicURL
                }
              }
              align
            }
          }
        }
        slug
        categories {
          name
          slug
        }
      }
    }
  }
`;
