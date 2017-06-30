import React from 'react'
import { createRouter, logger } from 'meteor/ssrwpo:ssr'
import { ApolloProvider } from 'react-apollo'
import 'isomorphic-fetch'
import { RootRouter } from '/imports/env/router'
import { client } from '/imports/env/apollo'
import PropTypes from 'prop-types';

const MainApp = (props, { store }) => {
	console.log(store) //is empty
	return (
		<ApolloProvider store={store} client={client}>
			<RootRouter/>
		</ApolloProvider>
	)
}

MainApp.contextTypes = {
	store: PropTypes.object.isRequired,
};

createRouter(MainApp)
logger.info('started ssr')