import React, { Component, PropTypes } from 'react'

export default class Heading extends Component {

	render() {
		switch (this.props.level) {
			case 1:
				return (<h2>{this.props.content}</h2>)

			case 2:
				return (<h3>{this.props.content}</h3>)

			case 3:
				return (<h4>{this.props.content}</h4>)
		}
	}

}

