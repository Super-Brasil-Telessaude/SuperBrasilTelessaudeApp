import React from 'react';
import { Image, ImageProps, StyleProp, ImageStyle } from 'react-native';

interface ImageIconProps extends ImageProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

const ImageIcon: React.FC<ImageIconProps> = ({ size = 32, style, ...props }) => {
  return (
    <Image
      {...props}
      style={[{ width: size, height: size, resizeMode: 'contain' }, style]}
    />
  );
};

export default ImageIcon;
