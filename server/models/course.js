var mongoose = require('mongoose');

// Create the CourseSchema.
var CourseSchema = new mongoose.Schema({
  CourseName: {
    type: String,
    required: true
  },
  Duration: {
    type: String,
    required: true
  },
  CourseType: {
    type: String,
    required: true
  },
  CourseFee: {
    type: Number,
    required: true
  },
  Instructor: {
    type: String,
    required: true
  },
  IsActive:{
    type:Boolean,
    default:true,
    required:true
  },
  CreatedBy:{
    type: String,
    default: 'System',
    required: true 
  },
  CreatedDate:{
    type: Date,
    default: Date.now,
    required:true
  },
  UpdatedBy:{
    type: String,
    default: 'System',
    required: true 
  },
  UpdatedDate:{
    type: Date,
    default: Date.now,
    required:true
  }
});

// Export the model.
module.exports = CourseSchema;