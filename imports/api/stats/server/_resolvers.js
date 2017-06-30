import {Stats} from '../model'

export const statsResolvers = {
	Query: {
		getStats(_, args, context) {
			return Stats.findOne()
		}
	}
}

export const statsQueries = `
	getStats(skip: Int, limit: Int): Stats
`


export const statsTypeDef = `
	type Stats {
		_id: String
		transactions: Int
	}
`