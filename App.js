import * as React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View>
        <AddEntry />
      </View>
    </Provider>
  );
}