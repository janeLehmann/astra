import React from 'react';

import Layout from '../components/Layout/Layout';
import Contacts from '../components/Contacts/Contacts';
import SEO from '../components/seo';
import { useStateWithLocalStorage } from '../helpers';
import { graphql } from 'gatsby';

const ContactsPage = ({ data }) => {
  const [lang, setLang] = useStateWithLocalStorage('astraLang');

  return (
    <Layout
      isFullScreen
      isInnerPage
      lang={lang}
      engClick={() => setLang('ENG')}
      ruClick={() => setLang('RU')}
    >
      <SEO title={lang === 'RU' ? 'Контакты' : 'Contacts'} />
      <Contacts lang={lang} data={data && data.allWordpressAcfPages && data.allWordpressAcfPages.edges.filter(item => item.node && item.node.acf && (item.node.acf.settings_address_eng || item.node.acf.settings_address_rus || item.node.acf.settings_long || item.node.acf.settings_lat || item.node.acf.settings_phone))} />
    </Layout>
  );
};

export default ContactsPage;

export const query = graphql`
  query {
    allWordpressAcfPages {
      edges {
        node {
          acf {
            settings_address_eng
            settings_address_rus
            settings_long
            settings_lat
            settings_phone
          }
        }
      }
    }
  }
`;
