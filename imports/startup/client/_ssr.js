import React from 'react'
import {createRouter, logger} from 'meteor/ssrwpo:ssr'
import {ApolloProvider} from 'react-apollo'
import 'isomorphic-fetch'
import {RootRouter} from '/imports/env/router'
import {client} from '/imports/env/apollo'

const MainApp = (props, context) => (
	<ApolloProvider client={client}>
		<RootRouter/>
	</ApolloProvider>
)

createRouter({
	MainApp
}).then(() => {
	logger.info('started ssr')
})
