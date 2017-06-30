import {Stats} from '../model'

if (!Stats.findOne()) {
	Stats.insert({transactions: 1000})
}