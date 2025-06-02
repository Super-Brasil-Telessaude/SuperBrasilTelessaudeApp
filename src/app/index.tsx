import React from 'react';
import { View } from 'react-native';

import ImageIcon from '../components/ImageIcon/ImageIcon';
import OnLoad from '../components/LoadButton/OnLoad';

// Importando a imagem local
const telesaudeImg = require('../../assets/images/telesaude.png');

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageIcon
        source={telesaudeImg}
        size={320}
      />

      <OnLoad loading={true}>
        Carregando
      </OnLoad>
    </View>
  );
}
