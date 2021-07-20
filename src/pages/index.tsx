/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/extensions */
import React, { FC } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Zing from '../../static/img/default-monochrome.svg';
import { Quote } from '../components';

const Home:FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      isIndex
    >
      <div style={{
        backgroundImage: 'url(\'https://api.ixiaowai.cn/gqapi/gqapi.php\')', height: '100vh', backgroundSize: '100% 100%', display: 'flex', justifyContent: 'center',
      }}
      >
        <Zing style={{ width: 500 }} />
      </div>
      <Quote />
    </Layout>
  );
};

export default Home;
// style = {{
//   position: 'absolute', top: 400, left: 700, width: 500,
//         }}
