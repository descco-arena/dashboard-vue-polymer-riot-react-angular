import Vue from 'vue';
import items from './components/items';

import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import createLogger from 'redux-logger';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducers);

import * as ItemAction from './action/ItemAction';
import * as reduxMixinsCreator from 'vue-redux';
const reduxMixins = reduxMixinsCreator(ItemAction);

new Vue({
  el: '[data-js="app"]',
  mixins: [reduxMixins],
  data: {
    store: store
  },
  components: {
    'items-view': items
  }
})
