const mod_quiz = require("../../models/quiz");
const mod_category = require("../../models/categories");
const mod_question = require('../../models/questions')
const mod_option = require('../../models/options')

function getCategories(req, res){
	mod_category.findAll({
		include: [{ model: mod_quiz }]
    })
    .then((data) => {
    	res.render('admin/admin_index', {categories: data});
	})
}

function addCategory(req, res){
	let name = req.body.name

	mod_category.create({
		name: name
	}).then(() => {
		res.redirect('/admin')
	})
}

function delCategory(req, res){
	let id = req.params.id

	mod_category.destroy({
		where: {id: id}
	}).then(() => {
		res.redirect('/admin')
	})
}

function emptyCategory(req, res){
	let category_id = req.params.id

	mod_category.findOne({
		where: {id: category_id},
		include: [{model: mod_quiz}]
	})
	.then((data) => {
		let quiz_ids=[]

		data.quizzes.forEach(item=>{
			quiz_ids.push(item.id)
		})
		mod_quiz.destroy({where: {id: quiz_ids}})
	})
	.then(() =>{
		res.redirect('/admin')
	})
}

function editCategory(req, res){
	let id = req.body.id
	let name = req.body.name

	mod_category.update(
		{name: name},
		{where: {id: id}}
	)
	.then(() =>{
		res.redirect('/admin')
	})
}

const categories = {
	getCategories,
	addCategory,
	delCategory,
	emptyCategory,
	editCategory
}

module.exports = categories