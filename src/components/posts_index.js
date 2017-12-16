import _ from 'lodash';
import React, { Component } from 'React';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts(){
		return _.map(this.props.posts, (post) => {
			return (
				<li key={post.id} className ='list-group-item'>{post.title}</li>
			);
		});
	}

	render() {
		// console.log({this.props.posts.map(prop => prop.id)});
		return (
		<div>
			<h3>Posts</h3>
			<ul className="list-group">
				{this.renderPosts()}
			</ul>
		</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);