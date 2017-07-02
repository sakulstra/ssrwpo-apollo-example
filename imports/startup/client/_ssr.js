import React from 'react'
import { applyMiddleware } from 'redux';
import { createRouter, logger } from 'meteor/ssrwpo:ssr';
import 'isomorphic-fetch';
import MainApp, { apolloReducer, apolloMiddleware } from '/imports/MainApp';

const appMiddlewares = [
  apolloMiddleware,
];

const storeEnhancers = applyMiddleware(...appMiddlewares);

createRouter({
	MainApp,
  appReducers: { apollo: apolloReducer },
  storeEnhancers,
	hasUrlStore: false,
}).then(() => {
	logger.info('started ssr')
})
