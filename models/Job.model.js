const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
  {
    title: {
      type: String,
      require: true,       
    },
    company: {
      type: String,  
      require: true,  
    },
    description: String,      
    date: Date,
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

const Job = model("Job", jobSchema);

module.exports = Job;

