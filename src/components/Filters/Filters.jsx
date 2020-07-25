import React, { useMemo, useEffect, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Helpers
import { useWindowSize } from '../../helpers';

import './Filters.scss';

const Filters = ({ filters, className, currentTabId, lang }) => {
  const windowSize = useWindowSize();
  /**
   * Создаем массив из рефов для каждого из айтемов массива,
   * пришедшего из пропсов
   * */
  const itemsRefArr = useMemo(() => filters.map(() => createRef()), [filters]);

  const [tabsBarActiveStyle, setTabsBarActiveStyle] = useState(null);

  /** Устанавливаем стили для активного таба */
  useEffect(() => {
    if (itemsRefArr && itemsRefArr.length) {
      setTabsBarActiveStyle({
        width: itemsRefArr[currentTabId].current.clientWidth,
        left: itemsRefArr[currentTabId].current.offsetLeft,
      });
    }
  }, [currentTabId, itemsRefArr]);

  return (
    <div
      className={cx('filters', {
        [className]: className,
      })}
    >
      {filters.map((item, index) => (
        <button
          type="button"
          className={cx('filters__item', {
            filters__item_active: windowSize.innerWidth <= 980 && currentTabId === index,
          })}
          key={item.id}
          onClick={item.action}
          ref={itemsRefArr[index]}
        >
          {lang === 'RU' ? item.name : item.id.replace('-', ' ')}
        </button>
      ))}

      {typeof window !== `undefined` && windowSize.innerWidth > 980 && (
        <div className="filters__bar-wrap">
          <div className="filters__bar filters__bar_top" style={tabsBarActiveStyle} />
          <div className="filters__bar filters__bar_bottom" style={tabsBarActiveStyle} />
        </div>
      )}
    </div>
  );
};

Filters.propTypes = {
  className: PropTypes.string,
  lang: PropTypes.string,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      action: PropTypes.func,
    }),
  ),
};

Filters.defaultProps = {
  className: null,
  lang: 'RU',
};

export default Filters;
