const mod_quiz = require("../models/quiz");
const mod_category = require("../models/categories");
const mod_question = require('../models/questions')
const mod_option = require('../models/options')

function index(req, res) {
  mod_category.findAll({
    include: [{ model: mod_quiz,
      }]
    })
  .then((data) => {
    res.send(data);
  });
}

const modules = {
  index,
};

module.exports = modules;
