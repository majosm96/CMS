const mongoose = require('mongoose')

const Page = require('../models/Page')

function getPage(req, res) {
  Page.find()
    .exec((err, pages) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(pages)
    })
}

function addPage(request, response) {
  console.log(request.body)
  let page = new Page();
  page.name = request.body.name;
  page.url = request.body.url;
  page.text = request.body.text;

  //Saves the new page and checks for errors
  page.save(function (error) {
    //Checks if an error happened
    if (error) {
        //An error happened. It sends the error
        response.send(`An error occurred: ${error}`)
    }
    response.json(page)
  });
}


module.exports = {
  getPage,
  addPage,
}

