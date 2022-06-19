import React from "react"
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = ({
	root:{
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	link:{
		padding:10,
		fontSize:18,
	}
})

class NavBar extends React.Component{
	constructor(props) {
		super(props)
	}

	render() {
		let {classes} = this.props

		return (
			<div className = {classes.root}>
				<div className = {classes.link}>link</div>
			</div>
		)
	}
}

export default NavBar