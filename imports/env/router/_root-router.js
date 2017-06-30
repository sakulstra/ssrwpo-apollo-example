import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {
	HomePage,
	StatsPage,
	Error404Page
} from '/imports/ui/pages'

const RootRouter = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route exact path="/stats" component={StatsPage} />
		<Route component={Error404Page} />
	</Switch>
)

export default RootRouter