'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill Post name',
		trim: true
	},
	url: {
		type: String,
		default: '',
		required: 'Please fill url',
		trim: true
	},
	upvotes: {
		type: Number,
		default: 0
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Post', PostSchema);
