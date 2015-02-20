'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Reward Schema
 */
var RewardSchema = new Schema({
	reward: {
		type: String,
		default: '',
		required: 'Please tell us your reward',
		trim: true
	},
	redeemed: {
		type: Boolean,
		default: false
	},
	class: {
		type: String,
		default: 'normal'
	},
	value: {
		type: Number
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	milestone: {
		type:Schema.Types.Mixed,
		default: 'milestone 001'
	}
});

mongoose.model('Reward', RewardSchema);
