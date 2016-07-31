export default `// Example usage Morph icon lib.
import icons from "react-morph-material-icons/build/shapes";
import MorphIcon from "react-morph-material-icons";

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
`;
