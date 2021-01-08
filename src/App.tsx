import React from 'react';
import { View, StatusBar, Text } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar backgroundColor="#bb1223" barStyle="light-content" />
    <View style={{
      flex: 1, backgroundColor: '#bb1223', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <Text style={{ color: 'white', fontSize: 28 }}>React Native Boilerplate</Text>
      <Text style={{ color: 'white', fontSize: 18, fontStyle: 'italic' }}>Developed by: Marcelo Galdino</Text>
    </View>
  </>
);

export default App;
