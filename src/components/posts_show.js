import _ from 'lodash';
import React, { Component } from 'React';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

	// componentDidMount() {
	// 	this.props.fetchPosts();
	// }

	// renderPosts(){
	// 	return _.map(this.props.posts, (post) => {
	// 		return (
	// 			<li key={post.id} className ='list-group-item'>{post.title}</li>
	// 		);
	// 	});
	// }

	render() {
		return (
		<div>
			PostsShow
		</div>
		);
	}
}

export default PostsShow;

// function mapStateToProps(state) {
// 	return { posts: state.posts};
// }

// export default connect(mapStateToProps, { fetchPosts })(PostsShow);