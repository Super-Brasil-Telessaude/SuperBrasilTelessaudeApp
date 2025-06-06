import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  className?: string;
};

export default function ButtonPerson({ title, className, ...rest }: Props) {
  return (
    <TouchableOpacity className={`bg-primary p-4 rounded-xl ${className}`} {...rest}>
      <Text className="text-white text-center font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
}
