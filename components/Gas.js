import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Images from '../assets/Images';

export default class Gas extends Component {
  render() {
    // const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
    // const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
    // const x = this.props.body.position.x - width / 2;
    // const y = this.props.body.position.y - height / 2;

    return (
      <View>
        <Image
          style={{
            position: 'absolute',
            left: 60,
            top: 40,
            width: 30,
            height: 40,
            transform: [{rotate: '180deg'}],
          }}
          resizeMode="stretch"
          source={Images['boost']}
        />
      </View>
    );
  }
}
