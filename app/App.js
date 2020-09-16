import React from 'react';
import Navigator from '_navigations';
import {Provider} from 'react-redux';
import store from '_services/redux/store.js';
export default function App() {
  return (
    <Provider store={store}>    
      <Navigator/>
    </Provider>
  );
}



