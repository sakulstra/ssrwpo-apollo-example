import React from 'react'
import {Link} from 'react-router-dom'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const StatsPage = ({loading, error, stats}) => {
	if (loading) return <div>loading</div>
	if (error) return <div>error</div>
	return (
		<div>
			<h2>{stats.transactions}</h2>
			<Link to='/'>Link to Home</Link>
		</div>
	)
}

const GET_STATS = gql`
  query getStats($skip: Int, $limit: Int) {
    getStats(skip: $skip, limit: $limit) {
      _id
      transactions
    }
  }
`

const withStats = graphql(GET_STATS, {
	props: ({ data: { error, loading, getStats } }) => {
		return {
			loading,
			error,
			stats: getStats || {}
		}
	},
	options: (ownProps) => (
		{
			variables: {
				skip: ownProps.skip,
				limit: ownProps.limit,
			}
		}
	)
})

export default withStats(StatsPage)