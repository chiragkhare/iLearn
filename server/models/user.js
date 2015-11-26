var mongoose = require('mongoose');

var bcrypt=require('bcrypt-nodejs'),
SALT_WORK_FACTOR=10;
// Create the UserSchema.
var UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
   Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
  Address:{
      type: Array,
      required: true,
      "default": []
    },
  PhoneNum: {
        type: Array,
        required: true,
        "default": []
  },
  UserPassword: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  Role: {
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

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('UserPassword')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.UserPassword, salt, null, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.UserPassword = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


// Export the model.
module.exports = UserSchema;