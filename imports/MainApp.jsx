import React from 'react';
import { RootRouter } from '/imports/env/router';
import { ApolloProvider } from 'react-apollo';
import { client } from '/imports/env/apollo';
import PropTypes from 'prop-types';

export const apolloReducer = client.reducer();
export const apolloMiddleware = client.middleware();

const MainApp = (props, { store }) => {
	return (
		<ApolloProvider store={store} client={client}>
			<RootRouter/>
		</ApolloProvider>
	)
}

MainApp.contextTypes = {
	store: PropTypes.object.isRequired,
};

export default MainApp;