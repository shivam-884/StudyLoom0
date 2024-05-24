// const mongoose = require("mongoose")

// // Define the Courses schema
// const coursesSchema = new mongoose.Schema({
//   courseName: { type: String },
//   courseDescription: { type: String },
//   instructor: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "User",
//   },
//   whatYouWillLearn: {
//     type: String,
//   },
//   courseContent: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Section",
//     },
//   ],
//   ratingAndReviews: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "RatingAndReviews",
//     },
//   ],
//   price: {
//     type: Number,
//   },
//   thumbnail: {
//     type: String,
//   },
//   tag: {
//     type: [String],
//     required: true,
//   },
//   category: {
//     type: mongoose.Schema.Types.ObjectId,
//     // required: true,
//     ref: "Category",
//   },
//   studentsEnrolled: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "User",
//     },
//   ],
//   instructions: {
//     type: [String],
//   },
//   status: {
//     type: String,
//     enum: ["Draft", "Published"],
//   },
//   createdAt: {
//     type: Date,
//     default: () => Date.now(),
// }
// })

// // Export the Courses model
// module.exports = mongoose.model("Course", coursesSchema)


const mongoose = require("mongoose");

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
  courseName: { type: String },
  courseDescription: { type: String },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  whatYouWillLearn: {
    type: String,
  },
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  ratingAndReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReviews",
    },
  ],
  price: {
    type: Number,
  },
  thumbnail: {
    type: String,
  },
  tag: {
    type: [String],
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
  instructions: {
    type: [String],
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // expiresAt: {
  //   type: Date,
  //   default: () => new Date(Date.now() + 1 * 365 * 24 * 60 * 60 * 1000), // After one year from now
  // },
});

// Create TTL index on expiresAt field
coursesSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);
