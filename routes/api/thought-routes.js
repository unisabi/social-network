const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateCourse,
  deleteCourse,
} = require('../../controllers/thought-Controller');

// /api/courses
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getSingleThought)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
