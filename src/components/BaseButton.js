/**
 * Button class.
 * Created by Ngoc Kien Le on 03/10/16.
 * Copyright © 2016 Etnetera a.s. All rights reserved.
 */
/*
 'use strict';

 // import LinearGradient from 'react-native-linear-gradient';

import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
		TouchableOpacity,
		LinearGradient
 } from 'react-native'

 // Color
import VColors from '../general/VColors'

class BaseButton extends React.Component {
   props: {
     type: 'primary' | 'secondary' | 'bordered';
     icon?: number;
     caption: string;
     style?: any;
     bgColor?: string;
     textColor?:string;
     onPress: () => mixed;
   };

   static defaultProps = {
     type: 'primary',
   };

   render() {
     const caption = this.props.caption.toUpperCase();
     let icon;
     if (this.props.icon) {
       icon = <Image source={this.props.icon} style={styles.icon} />;
     }
     let content;
     if (this.props.type === 'primary') {
       content = (
         <LinearGradient
           start={[0.5, 1]} end={[1, 1]}
           colors={['#6A6AD5', '#6F86D9']}
           style={[styles.button, styles.primaryButton]}>
           {icon}
           <Text style={[styles.caption, styles.primaryCaption]}>
             {caption}
           </Text>
         </LinearGradient>
       );
     } else {
       var border = this.props.type === 'bordered' && styles.border;
       content = (
         <View style={[styles.button, border,{ backgroundColor: this.props.bgColor}]}>
           {icon}
           <Text style={[styles.caption,{ color: this.props.textColor}]}>
             {caption}
           </Text>
         </View>
       );
     }
     return (
       <TouchableOpacity
         accessibilityTraits="button"
         onPress={this.props.onPress}
         activeOpacity={0.8}
         style={[styles.container, this.props.style]}>
         {content}
       </TouchableOpacity>
     );
   }
 }

 const HEIGHT = 50;

 const styles = StyleSheet.create({

   container: {
     height: HEIGHT,
    //  borderRadius: HEIGHT / 2,
    //  borderWidth: 1 / PixelRatio.get(),
   },
   button: {
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     paddingHorizontal: 40,
     borderRadius: HEIGHT / 5
   },
   border: {
     borderWidth: 1,
     borderColor: 'white',
     borderRadius: HEIGHT / 5,
   },
   primaryButton: {
     borderRadius: HEIGHT / 2,
     backgroundColor: 'transparent',
   },
   icon: {
     marginRight: 12,
   },
   caption: {
     letterSpacing: 1,
     fontSize: 12,
   },
   primaryCaption: {
     color: 'white',
   },
   secondaryCaption: {
     color: VColors.lightText,
   }
 });

 export default BaseButton */
