const mongoose = require("mongoose");

// Define example schema
const FormDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  employmentStatus: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

});

// Create example model
const Example = mongoose.model("FormData", FormDataSchema);

module.exports = Example;