import React, { useState } from 'react';
import Typist from 'react-typist';
import ReactCursorPosition from 'react-cursor-position';
import { animated, useSpring } from 'react-spring';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import './Contacts.scss';

const StartScreen = ({ magic }) => {
  const mapState = { center: [60.001327, 30.296359], zoom: 11 };

  return (
    <div className="contacts">
      <div className="contacts__inner">
        <YMaps>
          <Map state={mapState} className="contacts__map" />
        </YMaps>

        <div className="contacts__info">
          <h1 className="contacts__title">Контакты</h1>

          <div className="contacts__main">
            <p className="contacts__address">Адрес: г. Санкт-Петербургб ул. Какая-нибудь, д.25 - 16</p>
            <p className="contacts__phone">Телефон:
              <a href="tel: +7 (912) 666-66-66" className="contacts__phone-itself">+7 (912) 666-66-66</a>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

StartScreen.propTypes = {
  magic: PropTypes.bool.isRequired,
};

export default StartScreen;
