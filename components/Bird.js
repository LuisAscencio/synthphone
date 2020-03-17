import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Images from '../assets/Images';

export default class Bird extends Component {
  render() {
    const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
    const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
    const x = this.props.body.position.x - width;
    const y = this.props.body.position.y - height;

    let image = Images['bird'];
    return (
      <Image
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: height,
        }}
        resizeMode="stretch"
        source={image}
      />
    );
  }
}
