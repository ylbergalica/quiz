import React from "react"
import { withStyles } from '@material-ui/core/styles'
import NavBar from './NavBar'

const styles = ({

})

class Page extends React.Component{
	constructor(props){
		super(props)
	}
	render() {
		let {children} = this.props

		return(
			<div>
				<NavBar/>
				{children}
			</div>
		)
	}
}

export default Page