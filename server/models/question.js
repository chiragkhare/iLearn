var mongoose = require('mongoose');

// Create the QuestionSchema.
var QuestionSchema = new mongoose.Schema({
  CourseId: {
    type: String,
    required: true
  },
  Question: {
    type: String,
    required: true
  },
  OptionA: {
    type: String,
    required: true
  },
  OptionB: {
    type: String,
    required: true
  },
  OptionC: {
    type: String,
    required: true
  },
  OptionD: {
    type: String,
    required: true
  },
  Answer: {
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


// Export the model schema.
module.exports = QuestionSchema;
