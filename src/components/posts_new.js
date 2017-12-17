import React, { Component } from 'React';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

		renderField(field) {
			// destructing field object
			const { meta: {touched, error} } = field;
			const className =`form-group  ${touched && error ? 'has-danger': '' }`;

			return (
				<div className={className}>
				<label><b>{field.label}</b></label>
					<input 
						className="form-control" 
						type="text" 
						{...field.input} 
					/>
					<div className="text-help">
						{ touched ? error : '' }
					</div>
				</div>
			);
		}

		onSubmit(values) {
			console.log(values);
		}

		render() {
			const { handleSubmit } = this.props;

			return (
			<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
				<Field 
					label ='title'
					name="title"
					component={this.renderField}
				/>
				<Field 
					label ='categories'
					name="categories"
					component={this.renderField}
				/>
				<Field 
					label ='contents'
					name="contents"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to='/' className="btn btn-danger" >Cancel</Link>
			</form>
			);
		}
	}

function validate(values) {

	const errors = {};
	// validate the inputs from values
	if(!values.title){
		errors.title = 'Enter a title';
	}
	if(!values.categories){
		errors.categories = 'Enter categories';
	}
	if(!values.contents){
		errors.contents = 'Enter content';
	}
	//if errors empty submit form else invalid form values
	return errors;
}

export default reduxForm({
	validate,
	form: 'postsNewForm'
})(PostsNew);
