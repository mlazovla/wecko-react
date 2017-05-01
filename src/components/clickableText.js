'use strict';

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export const ClickableText = ({style, children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
