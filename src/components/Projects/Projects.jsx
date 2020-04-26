import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Filters from '../Filters/Filters';

import './Projects.scss';

const Projects = ({ magic, list }) => {
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
          {filteredList && filteredList.length && filteredList.map(item => (
            <div className="projects__item" key={item.id}>
              <a href="/" className="projects__item-img-wrap" >
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
              </a>

              <div className="projects__item-title-wrap">
                <a href="/" className="projects__item-title">{item.title}</a>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  magic: PropTypes.bool.isRequired,
};

export default Projects;
