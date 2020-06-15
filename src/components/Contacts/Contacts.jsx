import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import PropTypes from 'prop-types';

import './Contacts.scss';

const Contacts = ({ lang, data }) => {
  const latitude = data[0].node && data[0].node.acf && Number(data[0].node.acf.settings_lat);
  const longitude = data[0].node && data[0].node.acf && Number(data[0].node.acf.settings_long);

  const mapState = { center: [latitude, longitude], zoom: 16 };

  return (
    <div className="contacts">
      <div className="contacts__inner">
        <YMaps>
          <Map state={mapState} className="contacts__map">
            <Placemark geometry={[latitude, longitude]} options={{
              // iconLayout: 'default#image',
              iconImageHref: '../../static/assets/placemark.svg',
              iconImageSize: [60, 68],
              iconImageOffset: [0, -30],
            }} />
          </Map>
        </YMaps>

        <div className="contacts__info">
          <h1 className="contacts__title">{lang === 'RU' ? 'Контакты' : 'Contacts'}</h1>

          <div className="contacts__main">
            <p className="contacts__address">
              {lang === 'RU' ? 'Адрес:' : 'Address:'} {'  '}
              {data.map(item => (
                <span className="contacts__address-text" key={item.node.acf.settings_address_rus}>
                  {lang === 'RU'
                    ? item.node && item.node.acf && item.node.acf.settings_address_rus
                    : item.node && item.node.acf && item.node.acf.settings_address_eng}
                </span>
              ))}
            </p>
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
          </div>
        </div>
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
