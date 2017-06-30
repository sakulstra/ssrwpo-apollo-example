import {createApolloServer} from 'meteor/apollo'
import {makeExecutableSchema} from 'graphql-tools'
import {statsTypeDef, statsResolvers, statsQueries} from '/imports/api/stats/server'

const schema = makeExecutableSchema({
	typeDefs: [
		statsTypeDef,
		`type Query {
			${statsQueries}
		}`
	],
	resolvers: {
		Query: {
			...statsResolvers.Query
		}
	}
})

createApolloServer({
	schema
})