import icons from "react-morph-material-icons/build/shapes";
import MorphIcon from "react-morph-material-icons";
import CodeMirror from "react-codemirror";
import ReactDOM from "react-dom";
import styles from "./styles";
import React from "react";
import exampleCode from "./example";

import "./theme-codemirror.less";

var randomizer = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
require('codemirror/mode/javascript/javascript');

class SampleIconRandom extends React.Component {
  constructor() {
    super();

    this.state = {
      fills: ['#4CAF50', '#03A9F4', '#FF5722', '#00BCD4', '#F50057', '#f44336', '#00BCD4'],
      fill: '#4CAF50'
    };
  }

  componentDidMount() {
    var self = this;

    setInterval(() => {
      self.setState({ fill: self.state.fills[randomizer(0, 6)] });
      self.refs.MorphIconRef.morph(Object.keys(icons.action)[randomizer(0, 162)]);
    }, 1600);
  }

  render() {
    var props = {
      options: { easing: 'quart-in-out', duration: 350 },
      // Styles prop for icon (svg)
      style: { fill: this.state.fill },
      // Icons shapes with svg
      shapes: icons.action,
      // Icon Size (px)
      size: 50,
      // Ref link to element
      ref: "MorphIconRef"
    };

    return <MorphIcon {...props} />;
  }
}

class HomeView extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.header.root}>
          <h2 style={styles.header.top}>React Materal Design Icons</h2>
          <h3 style={styles.header.sub}>Material icons with morph animations</h3>
          <div>
            <div style={{ marginTop: 25 }}><SampleIconRandom /></div>
            <div style={{ textAlign: 'left', marginTop: 25 }}>
              <CodeMirror options={{ lineNumbers: true, theme: 'material' }} value={exampleCode} mode="javascript" />
            </div>
          </div>
        </div>
        <div style={styles.icons}>
          {Object.keys(icons).map((category, indexOfCategories) => {
            return (
              <div key={`category-icon-${category}`} style={{ marginTop: 35 }}>
                <h4 style={{ color: '#FFF', fontWeight: 500 }}>{category.toUpperCase()}</h4>
                <div>
                  {Object.keys(icons[category]).map((icon, indexOfIcons) => {
                    var attrs = {
                      style: { fill: '#FFF', display: 'block', width: '100%' },
                      dangerouslySetInnerHTML: { __html: icons[category][icon] },
                      width: 50, height: 50,
                      viewBox: "0 0 24 24"
                    };

                    return (
                      <div style={styles.icon} key={`icon-of-row-${icon}`}>
                        <svg {...attrs}></svg>
                        <span style={{ fontSize: 12, color: '#FFF' }}>{icon}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HomeView />, document.querySelector('main'));
