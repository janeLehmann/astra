import React from 'react';
import Layout from '../../components/Layout/Layout';
import { graphql } from 'gatsby';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// import SliderArrow from '../../components/SliderArrow/SliderArrow';

import './ProjectTemplate.scss';

export default ({ data }) => {
  const project = data.allWordpressWpProjects.nodes[0];
  console.log('project', project);
  return (
    <Layout>
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
              {project && project.acf && project.acf.title_rus}
            </h1>
            <div className="project-item__list">
              {project && project.acf && project.acf.square_rus && (
                <div className="project-item__info-item">
                  <div className="project-item__info-title">Площадь:</div>
                  <div className="project-item__info-desc">{project.acf.square_rus} m2</div>
                </div>
              )}

              {project && project.acf && project.acf.city_rus && (
                <div className="project-item__info-item">
                  <div className="project-item__info-title">Город:</div>
                  <div className="project-item__info-desc">{project.acf.city_rus}</div>
                </div>
              )}

              {project && project.acf && project.acf.address && (
                <div className="project-item__info-item">
                  <div className="project-item__info-title">Адрес:</div>
                  <div className="project-item__info-desc">{project.acf.address_rus}</div>
                </div>
              )}

              {project && project.acf && project.acf.time_rus && (
                <div className="project-item__info-item">
                  <div className="project-item__info-title">Время создания проекта:</div>
                  <div className="project-item__info-desc">{project.acf.time_rus}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="project-item__content">
          {/* {project &&
            project.acf &&
            project.acf.content_projects.map(item => (
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
                  <div className="project-item__single-img-wrap">
                    <img
                      src={item.single_photo.localFile.publicURL}
                      alt=""
                      className="project-item__single-img"
                    />
                  </div>
                )}
              </>
            ))}*/}
        </div>

        {/*<div dangerouslySetInnerHTML={{ __html: project && project.content }} />*/}
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
          content_eng
          content_rus
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
          }
          photo {
            localFile {
              publicURL
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
