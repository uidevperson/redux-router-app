import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, actions) {
	switch(actions.type) {
		case FETCH_POSTS:
			return _.mapKeys(actions.payload.data, 'id');
		default:
			return  state
	}
}