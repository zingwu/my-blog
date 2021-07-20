/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/extensions */
import React, { FC } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Quote } from '../components';

const Home:FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      isIndex
    >
      <img src="https://api.ixiaowai.cn/gqapi/gqapi.php" />
      <Quote />
    </Layout>
  );
};

export default Home;
