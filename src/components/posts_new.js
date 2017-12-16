import React, { Component } from 'React';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
		render() {
			return (
			<form>
				<Field 
					name="title"
				
				/>
			</form>
			);
		}
	}


export default reduxForm({
	form: 'postsNewForm'
})(PostsNew);
