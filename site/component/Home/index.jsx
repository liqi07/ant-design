import React from 'react';
import Link from './Link';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import './index.less';

import * as utils from '../utils';

export default class Home extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    utils.setTitle('Ant Design - 一个 UI 设计语言');
  }
  // To store style which is only for Home and has conflicts with others.
  getStyle() {
    return `
      #react-content,
      #react-content > div {
        height: 100%;
      }
      .main-wrapper {
        background: transparent;
        width: auto;
        margin: 0;
        border-radius: 0;
        padding: 0;
        overflow: unset;
        display: inline;
        min-height: 600px;
      }
      #header {
        position: fixed;
        z-index: 999;
        background: rgba(0, 0, 0, 0.25);
        border-bottom: 1px solid transparent;
        transition: border .5s cubic-bezier(0.455, 0.03, 0.515, 0.955), background .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }
      #header .ant-select-selection,
      #header .ant-menu {
        background: transparent;
      }
      #nav a {
        color: #eee;
        transition: color 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }
      #search-box {
        border-left-color: rgba(235, 237, 238, .5);
        transition: border 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }
      section {
        height: 100%;
        width: 100%;
        background: #fff;
      }
      #footer {
        background: #000;
      }
      #footer,
      #footer h2 {
        color: #999;
      }
      #footer a {
        color: #eee;
      }
    `;
  }

  render() {
    return (
      <div className="main-wrapper">
        <Link />
        <Banner />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <style dangerouslySetInnerHTML={{ __html: this.getStyle() }} />
      </div>
    );
  }
}
