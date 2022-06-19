const mod_quiz = require("../../models/quiz");
const mod_category = require("../../models/categories");
const mod_question = require('../../models/questions')
const mod_option = require('../../models/options')

function getQuestions(req, res){
	let quiz_id = req.params.quiz_id

	mod_quiz.findOne({
		where: {id : quiz_id},
		include: [{ model: mod_question, include: [{model: mod_option}]}]
	})
	.then((data) => {
		res.render('admin/admin_questions', {quiz: data})
	})
}

// {"quiz_id":"15","text":"test","option_text":["a","b","c","d"],"option_status":["1","2"]}


function addQuestion(req, res){
	let category_id = req.body.category_id
	let quiz_id = req.body.quiz_id
	let text = req.body.text
	let option_text = req.body.option_text
	let option_status=req.body.option_status

	mod_question.create({
		quizId: quiz_id,
		text: text
	}).then(question => {
		let question_id = question.id
		let _option_data = option_text.map((item,index)=>{
			let _status=false

			if (typeof(option_status) == 'string'){
				_status = option_status == (index+1)
			}
			else{
				let s = option_status.find(i=>{
					return i == (index + 1)
					
				})
				if(s) {
						_status=true
					}
			}
			
			return {text:item,questionId:question_id,status:_status}
		})
		mod_option.bulkCreate(_option_data).then(data => {res.redirect(`/admin/${category_id}/${quiz_id}/questions`)}).catch(error => {res.send(error)})

		// res.redirect(`/admin/${category_id}/${quiz_id}/questions`)
	})
}

function delQuestion(req, res) {
	let id = req.params.id
	let quiz_id = req.params.quiz_id
	let category_id = req.params.category_id

	mod_question.destroy({
		where: {id: id}
	}).then(() => {
		res.redirect(`/admin/${category_id}/${quiz_id}/questions`)
	})
}

function delOption(req, res) {
	let id = req.params.id
	let quiz_id = req.params.quiz_id
	let category_id = req.params.category_id

	mod_option.destroy({
		where: {id: id}
	}).then(() => {
		res.redirect(`/admin/${category_id}/${quiz_id}/questions`)
	})
}

function editQuestion(req, res) {
	let id = req.body.id
	let quiz_id = req.body.quiz_id
	let category_id = req.body.category_id
	let text = req.body.text

	mod_question.update(
		{text: text},
		{where: {id: id}}
	)
	.then(() =>{
		res.redirect(`/admin/${category_id}/${quiz_id}/questions`)
	})
}

function editOption(req, res) {
	let id = req.body.id
	let question_id = req.body.question_id
	let quiz_id = req.body.quiz_id
	let category_id = req.body.category_id
	let text = req.body.text
	let status = req.body.status

	let _status = false
	if(status == 'on'){
		_status = true
	}

	mod_option.update(
		{text: text,
		status: _status},
		{where: {id: id}}
	).then(() =>{
		res.redirect(`/admin/${category_id}/${quiz_id}/questions`)
	})
}

function addOption(req, res) {
	let category_id = req.params.category_id
	let quiz_id = req.params.quiz_id
	let question_id = req.params.question_id

	mod_option.create(
		{text: '',
		status: false,
		questionId: question_id}
	).then(() => {
		res.redirect(`/admin/${category_id}/${quiz_id}/questions`)
	})
}

const questions = {
	getQuestions,
	addQuestion,
	delQuestion,
	delOption,
	editQuestion,
	editOption,
	addOption
}

module.exports = questions