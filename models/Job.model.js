const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
  {
    jobTitle: {
      type: String,
      require: true,       
    },
    company: {
      type: String,  
      require: true,  
    },
    jobDescription: String,      
    data: Date,
    location: String,
    workplace: [String],
    status: [String],
    website:  String,
    webUrl: String,
    contact: String,
    notes: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("Job", jobSchema);

module.exports = Job;

