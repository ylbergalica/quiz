var express = require("express");
const router = express.Router();
const acnt_category =require("../../controllers/admin/a_category")
const acnt_quiz =require("../../controllers/admin/a_quiz")
const acnt_question = require("../../controllers/admin/a_questions")

// CATEGORY
router.get('/',function(req,res){
    acnt_category.getCategories(req, res)
})

router.post('/add_category', function(req, res){
	acnt_category.addCategory(req, res)
})

router.get('/del_category/:id', function(req, res){
	acnt_category.delCategory(req, res)
})

router.get('/empty_category/:id', function(req, res){
	acnt_category.emptyCategory(req, res)
})

router.post('/edit_category', function(req, res){
	acnt_category.editCategory(req, res)
})

// QUIZ
router.get('/:id/quizzes', function(req, res){
    acnt_quiz.getQuizzes(req, res)
})

router.post('/add_quiz', function(req, res){
	acnt_quiz.addQuiz(req, res)
})

router.get('/:category_id/del_quiz/:id', function(req, res){
	acnt_quiz.delQuiz(req, res)
})

router.get('/:category_id/empty_quiz/:id', function(req, res){
	acnt_quiz.emptyQuiz(req, res)
})

router.post('/edit_quiz', function(req, res){
	acnt_quiz.editQuiz(req, res)
})

// QUESTION

router.get('/:category_id/:quiz_id/questions', function(req, res){
	acnt_question.getQuestions(req, res)
})

router.post('/add_question', function(req, res) {
	acnt_question.addQuestion(req, res)
})

router.get('/:category_id/:quiz_id/del_question/:id', function(req, res){
	acnt_question.delQuestion(req, res)
})

router.post('/edit_question', function(req, res) {
	acnt_question.editQuestion(req, res)
})

// OPTION

router.get('/:category_id/:quiz_id/:question_id/:id/del_option', function(req, res){
	acnt_question.delOption(req, res)
})

router.post('/edit_option', function(req, res) {
	acnt_question.editOption(req, res)
})

router.get('/:category_id/:quiz_id/:question_id/add_option', function(req, res){
	acnt_question.addOption(req, res)
})

module.exports = router