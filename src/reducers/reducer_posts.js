// import React, {Component} from 'react';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, actions) {
	switch(actions.type) {
		case FETCH_POSTS:
			console.log(actions.payload.data);
		default:
			return  state
	}

}