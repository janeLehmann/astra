import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Filters from '../Filters/Filters';
import CircleLoader from '../CircleLoader/CircleLoader';
import { getArraysSameItems } from '../../helpers';

import './Projects.scss';

const Projects = ({ list, lang, categories }) => {
  const [filters, setFilters] = useState([
    {
      id: 'all',
      name: 'Все',
      action: () => {
        setCurrentTabId(0);
        setCurrentTabIdText('all');
      },
    },
  ]);
  const [filteredList, setFilteredList] = useState([]);
  const [currentTabId, setCurrentTabId] = useState(0);
  const [currentTabIdText, setCurrentTabIdText] = useState('all');

  useEffect(() => {
    if (categories && categories.length) {
      getArraysSameItems(categories, list).map((item, index) => {
        setFilters(
          [
            {
              id: 'all',
              name: 'Все',
              action: () => {
                setCurrentTabId(0);
                setCurrentTabIdText('all');
              },
            },
          ].concat({
            id: item.slug,
            name: item.name,
            action: () => {
              setCurrentTabId(index + 1);
              setCurrentTabIdText(item.slug);
            },
          }),
        );
      });
    }
  }, [categories]);

  // useEffect(() => {
  //   setFinalFilters(removeDuplicates(filters, 'id'));
  // }, [filters]);

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
        <h2 className="projects__title">{lang === 'RU' ? 'Проекты' : 'Projects'}</h2>

        <Filters
          className="projects__filters"
          filters={filters}
          currentTabId={currentTabId}
          lang={lang}
        />

        <div className="projects__list">
          {filteredList && filteredList.length ? (
            filteredList.map(item => (
              <div className="projects__item" key={item.slug}>
                <Link to={`/${item.slug}`} className="projects__item-img-wrap">
                  <img
                    className="projects__item-img"
                    src={
                      item &&
                      item.acf &&
                      item.acf.photo &&
                      item.acf.photo.localFile &&
                      item.acf.photo.localFile.publicURL
                        ? item.acf.photo.localFile.publicURL
                        : 'https://picsum.photos/600/600'
                    }
                    alt=""
                  />
                </Link>

                <div className="projects__item-title-wrap">
                  <Link to={`/${item.slug}`} className="projects__item-title">
                    {lang === 'RU' && item.acf ? (
                      <>{item.acf.title_rus} </>
                    ) : (
                      <>{item.acf.title_eng || item.acf.title_rus} </>
                    )}
                  </Link>
                  {item.acf && (item.acf.square_rus || item.acf.city_rus) && (
                    <div className="projects__item-rest">
                      /{' '}
                      {lang === 'RU'
                        ? item.acf.square_rus
                        : item.acf.square_eng || item.acf.square_rus}
                      {' m2 '}
                      {lang === 'RU'
                        ? `, ${item.acf.city_rus}`
                        : `, ${item.acf.city_eng || item.acf.city_rus}`}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
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
      acf: PropTypes.shape({
        photo: PropTypes.shape({
          localFile: PropTypes.shape({
            publicURL: PropTypes.string,
          }),
        }),
        title_eng: PropTypes.string,
        title_rus: PropTypes.string,
        square_eng: PropTypes.string,
        square_rus: PropTypes.string,
        city_eng: PropTypes.string,
        city_rus: PropTypes.string,
      }),
    }),
  ),
};

export default Projects;
