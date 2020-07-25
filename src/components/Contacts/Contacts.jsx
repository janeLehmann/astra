import React from 'react';
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps';
import PropTypes from 'prop-types';

import { useWindowSize, isBrowser } from '../../helpers';

import './Contacts.scss';

const Contacts = ({ lang, data }) => {
  const windowSize = useWindowSize();
  const mapState = {  center: [58.494634, 34.625389], zoom: isBrowser() && windowSize.innerWidth > 980 ? 5 : 4 };
  const points =  data[0].node && data[0].node.acf.settings_addresses;

  return (
    <div className="contacts">
      <div className="contacts__info">
        <h1 className="contacts__title">{lang === 'RU' ? 'Контакты' : 'Contacts'}</h1>

        <div className="contacts__main">
          {data[0].node && data[0].node.acf && data[0].node.acf && data[0].node.acf.settings_addresses.length >= 1 && (
            <div className="contacts__address">
              {lang === 'RU' ? 'Адреса:' : 'Addresses:'} {'  '}
              {data.map((item, index) => (
                <div className="contacts__address-text-wrap" key={`address-${index}`}>
                  {item.node && item.node.acf && item.node.acf.settings_addresses.map((address, index) => (
                    <div className="contacts__address-text" key={`address-line-${index}`}>
                      - {lang === 'RU'
                        ? address.settings_address_rus
                        : address.settings_address_eng}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {data[0].node && data[0].node.acf && data[0].node.acf && data[0].node.acf.settings_phone && (
            <p className="contacts__phone">
              {lang === 'RU' ? 'Телефон:' : 'Phone:'} {'  '}
              {data.map(item => (
                <a
                  href={`tel:${item.node &&
                  item.node.acf &&
                  item.node.acf &&
                  item.node.acf.settings_phone}`}
                  className="contacts__phone-itself"
                  key={item.node.acf.settings_phone}
                >
                  {item.node && item.node.acf && item.node.acf && item.node.acf.settings_phone}
                </a>
              ))}
            </p>
          )}

          {data[0].node && data[0].node.acf && data[0].node.acf && data[0].node.acf.settings_email && (
            <p className="contacts__phone">
              {lang === 'RU' ? 'Телефон:' : 'Phone:'} {'  '}
              {data.map(item => (
                <a
                  href={`mailto:${item.node &&
                  item.node.acf &&
                  item.node.acf &&
                  item.node.acf.settings_email}`}
                  className="contacts__phone-itself"
                  key={item.node.acf.settings_email}
                >
                  {item.node && item.node.acf && item.node.acf && item.node.acf.settings_email}
                </a>
              ))}
            </p>
          )}

          {data[0].node && data[0].node.acf && data[0].node.acf && data[0].node.acf.settings_telegram && (
            <p className="contacts__phone">
              Telegram: {'  '}
              {data.map(item => (
                <a
                  href={`tg://msg_url?url=${item.node &&
                  item.node.acf &&
                  item.node.acf &&
                  item.node.acf.settings_telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacts__phone-itself"
                  key={item.node.acf.settings_telegram}
                >
                  {item.node && item.node.acf && item.node.acf && item.node.acf.settings_telegram}
                </a>
              ))}
            </p>
          )}
        </div>
      </div>

      <div className="contacts__inner">
        <YMaps>
          <Map state={mapState} className="contacts__map">
            <Clusterer
              options={{
                preset: 'islands#invertedVioletClusterIcons',
                groupByCoordinates: false,
              }}
            >
              {points.map((item, index) => (
                <Placemark key={index} geometry={[item.settings_lat, item.settings_long]} options={{
                  // iconLayout: 'default#image',
                  iconImageHref: '../../static/assets/placemark.svg',
                  iconImageSize: [60, 68],
                  iconImageOffset: [0, -30],
                }} />
              ))}
            </Clusterer>
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  lang: PropTypes.string,
};

Contacts.defaultProps = {
  lang: 'RU',
};

export default Contacts;
