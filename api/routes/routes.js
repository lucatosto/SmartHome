'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/listController');
  var profileController = require('../controllers/profileController');


  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
    
//TEST ROUTES
  app.route('/test')
    .get(todoList.test_communication)
    .post(todoList.test_communication_data);

//Profiles Routes
  app.route('/profili')
    .get(profileController.list_all_profile)
    .post(profileController.create_a_profile);

  app.route('/profili/:id')
    .get(profileController.read_a_profile)
    .put(profileController.update_a_profile)
    .delete(profileController.delete_a_task);


  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });



};
