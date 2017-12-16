import React, { Component } from 'React';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>PostsIndex</div>
		);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);