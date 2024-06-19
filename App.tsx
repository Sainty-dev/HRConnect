import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import EmployeeNavigationHandler from './src/naviagations';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <EmployeeNavigationHandler />
    </NavigationContainer>
  );
}

export default App;
