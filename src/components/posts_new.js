import React, { Component } from 'React';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
		renderField(field) {
			return (
				<div className="form-group">
				<label>{field.label}</label>
					<input 
						className="form-control" 
						type="text" 
						{...field.input} 
					/>
				</div>
			);
		}

		render() {
			return (
			<form>
				<Field 
					label ='Title'
					name="title"
					component={this.renderField}
				/>
				<Field 
					label ='Categories'
					name="categories"
					component={this.renderField}
				/>
				<Field 
					label ='Post Content'
					name="contents"
					component={this.renderField}
				/>
			</form>
			);
		}
	}

function validate(values) {
	
	const errors = {};
	// validate the inputs from values
	if(!value.title || value.title.length < 3){
		errors.title = 'Enter a title';
	}
	if(!value.categories){
		errors.title = 'Enter categories';
	}
	if(!value.contents){
		errors.title = 'Enter content';
	}
	//if errors empty submit form else invalid form values
	return errors;
}

export default reduxForm({
	validate,
	form: 'postsNewForm'
})(PostsNew);
