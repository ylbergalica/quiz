const mod_quiz = require("../../models/quiz");
const mod_category = require("../../models/categories");
const mod_question = require('../../models/questions')
const mod_option = require('../../models/options')

function getQuizzes(req, res){
	let id = req.params.id

	mod_category.findOne({
		where: {id : id},
		include: [{ model: mod_quiz, include:[{model:mod_question}]}]
	})
	.then((data) => {
		res.render('admin/admin_quiz', {category: data})
	})
}

function addQuiz(req, res, id) {
	let name = req.body.name
	let category_id = req.body.category_id

	mod_quiz.create({
		name: name,
		categoryId: category_id
	}).then(() => {
		res.redirect('/admin/'+category_id+'/quizzes')
	})
}

function delQuiz(req, res){
	let id = req.params.id
	let category_id = req.params.category_id

	mod_quiz.destroy({
		where: {id: id}
	}).then(() => {
		res.redirect(`/admin/${category_id}/quizzes`)
	})
}

function emptyQuiz(req, res){
	let quiz_id = req.params.id
	let category_id = req.params.category_id

	mod_quiz.findOne({
		where: {id: quiz_id},
		include: [{model: mod_question}]
	})
	.then((data) => {
		let question_ids=[]

		data.questions.forEach(item=>{
			question_ids.push(item.id)
		})
		mod_question.destroy({where: {id: question_ids}})
	})
	.then(() =>{
		res.redirect(`/admin/${category_id}/quizzes`)
	})
}

function editQuiz(req, res){
	let id = req.body.quiz_id
	let name = req.body.name
	let category_id = req.body.category

	mod_quiz.update(
		{name: name},
		{where: {id: id}}
	)
	.then(() =>{
		res.redirect(`/admin/${category_id}/quizzes`)
	})
}

const quizzes = {
	getQuizzes,
	addQuiz,
	delQuiz,
	emptyQuiz,
	editQuiz
}

module.exports = quizzes