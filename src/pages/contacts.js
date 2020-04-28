import React from 'react';

import Layout from '../components/Layout/Layout';
import Contacts from '../components/Contacts/Contacts';
import SEO from '../components/seo';

const ContactsPage = () => {
  return (
    <Layout isFullScreen >
      <SEO title="Home" />
      <Contacts />
    </Layout>
  );
};

export default ContactsPage;
