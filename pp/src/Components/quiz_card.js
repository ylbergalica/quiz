import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = ({
	root:{
		borderRadius: "10px",
		border: "solid grey 2px",
		width: 100,
		height: 200,
		display: "flex",
		felxDirection: "row",
		alignItems: "center",
	}
})

class QuizCard extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let classes = this.props.classes
		let name = this.props.name
		let age = this.props.age

		return(
			<div className = {classes.root}>
				<h1>Name</h1>
				<h2>Age</h2>
			</div>
		)
	}
}

export default withStyles(styles)(QuizCard)