import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"

import Filters from '../Filters/Filters';
import CircleLoader from '../CircleLoader/CircleLoader';

import './Projects.scss';

const Projects = ({ list }) => {
  const [filters, setFilters] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [currentTabId, setCurrentTabId] = useState(0);
  const [currentTabIdText, setCurrentTabIdText] = useState('all');

  useEffect(() => {
    setFilters([
      {
        id: 'all',
        name: 'Все',
        action: () => {
          setCurrentTabId(0);
          setCurrentTabIdText('all');
        },
      },
    ]);

    list.map((item, index) => {
      setFilters(prevState =>
        prevState.concat([
          {
            id: item.categories[0].slug,
            name: item.categories[0].name,
            action: () => {
              setCurrentTabId(index + 1);
              setCurrentTabIdText(item.categories[0].slug);
            },
          },
        ]),
      );
    });
  }, [list]);

  useEffect(() => {

    if (currentTabIdText !== 'all') {
      setFilteredList(list.filter(item => item.categories[0].slug === currentTabIdText));
    } else {
      setFilteredList(list);
    }

    /* eslint-disable react-hooks/exhaustive-deps */
  }, [currentTabIdText, list, filters]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Проекты</h2>

        <Filters className="projects__filters" filters={filters} currentTabId={currentTabId} />

        <div className="projects__list">
          {filteredList && filteredList.length ? filteredList.map(item => (
            <div className="projects__item" key={item.id}>
              <Link to={item.slug} className="projects__item-img-wrap" >
                <img
                  className="projects__item-img"
                  src={
                    item &&
                    item.featured_media &&
                    item.featured_media.localFile &&
                    item.featured_media.localFile.url
                      ? item.featured_media.localFile.url
                      : null
                  }
                  alt=""
                />
              </Link>

              <div className="projects__item-title-wrap">
                <Link to={item.slug} className="projects__item-title">{item.title}</Link>
              </div>
            </div>
          )) : (
            <div className="projects__loader">
              <CircleLoader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
          url: PropTypes.string,
        })
      })
    })
  ),
};

export default Projects;
