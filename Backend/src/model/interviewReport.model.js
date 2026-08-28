const mongoose = require("mongoose")


/**
 * job description schema
 * resume text
 * self description
 * 
 * -matchScore : number
 * 
 * Technical questions :[{
 *      question : "",
 *      intention: "",
 *      answer : "",
 * 
 * }]
 * 
 * Behavioral questions :[{
 *      question : "",
 *      intention: "",
 *      answer : "",
 * }]
 * 
 * Skills gaps :[{
 *     skill : "",
 *     severity : {
 *          type: String,
 *          enum: ["low", "medium", "high"]
 * }
 * }]
 * 
 * preparation plan :[{
 *       day: numner,
 *       focus: String,
 *       tasks: [String],
 * }]
 */

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"]
    },
    resume: {
        type: String
    },
    selfDescription: {
        type: String
    },
    matchScore: {
        type: String,
        min: 0,
        max: 100
    },
    
})