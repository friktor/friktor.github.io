import icons from "react-morph-material-icons/build/shapes";
import MorphIcon from "react-morph-material-icons";
import CodeMirror from "react-codemirror";
import ReactDOM from "react-dom";
import styles from "./styles";
import React from "react";

require('codemirror/mode/javascript/javascript');

class SampleIconRandom extends React.Component {
  constructor() {
    super();

    this.state = {
      icons: ['done_all', 'favorite_outline', 'explore', 'translate', 'open_with', 'perm_media', 'new_releases'],
      fills: ['#4CAF50', '#03A9F4', '#3F51B5', '#00BCD4', '#673AB7', '#f44336', '#00BCD4'],
      fill: '#4CAF50'
    };
  }

  componentDidMount() {
    // var self = this;
    //
    // setInterval(() => {
    //   var indexRandomColor = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    //   self.setState({ fill: self.state.fills[indexRandomColor] });
    //   self.refs.MorphIconRef.morph(self.state.icons[indexRandomColor]);
    // }, 1600);
  }

  render() {
    var props = {
      options: { easing: 'quart-in-out', duration: 350 },
      // Styles prop for icon (svg)
      style: { fill: this.state.fill },
      // Icons names allowed for morph by keys
      icons: this.state.icons,
      // Icons shapes with svg
      shapes: icons,
      // Icon Size (px)
      size: 50,
      // Ref link to element
      ref: "MorphIconRef"
    };

    return <MorphIcon {...props} />;
  }
}

class HomeView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div style={styles.header.root}>
          <h2 style={styles.header.top}>React Materal Design Icons</h2>
          <h3 style={styles.header.sub}>Material icons with morph animations</h3>
          <div>
            <div>
              <SampleIconRandom />
            </div>
          </div>
        </div>
        <div style={styles.icons}>
          {Object.keys(icons).map((iconKey, indexIcon) => {
            var attrs = {
              style: { fill: '#FFF', display: 'block', width: '100%' },
              width: 50, height: 50,
              viewBox: "0 0 24 24"
            };

            return (
              <div style={styles.icon}>
                <svg {...attrs}>
                  <g id={`row-icons-${iconKey}`}>
                    {icons[iconKey]}
                  </g>
                </svg>
                <span style={{ fontSize: 12, color: '#FFF' }}>{iconKey}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HomeView />, document.querySelector('main'));
