var unitOfWork = require('../libs/unitOfWork.js');

var studentHandler = function() {
	this.createStudent = handleCreateStudentRequest;
	this.getStudent = handleGetStudentRequest;
    this.getStudents = handleGetStudentsRequest;
	this.updateStudent = handleUpdateStudentRequest;
    this.deleteStudent = handleDeleteStudentRequest;
    this.getStudentsByAge = handleGetStudentsByAgeRequest;
};

function handleCreateStudentRequest(req, res, next) {

	var student = req.body;  // get Student object as json object (comes from the request)
    // save the Student and check for errors
    unitOfWork.studentRepository.save(student).then(function (result) {
        res.json({ message: 'Student created!', id: result.insertId });
    }, function (err) {
        res.status(500);
        res.send(err);
		return next(new Error(err));
    });

}

function handleGetStudentsRequest(req, res, next) {
    unitOfWork.studentRepository.getAll().then(function (result) {
        res.json(result);
    }, function (err) {
        res.status(500);
        res.send(err);
		return next(new Error(err));
    });
}

function handleGetStudentRequest(req, res, next) {
    unitOfWork.studentRepository.getById(req.params.id).then(function (result) {
        res.json(result);
    }, function (err) {
        res.status(500);
        res.send(err);
		return next(new Error(err));
    });
}

function handleGetStudentsByAgeRequest(req, res, next) {
    unitOfWork.studentRepository.getByField("age" , req.params.statusId, ["id" , "name"] ).then(function (result) {
        res.json(result);
    }, function (err) {
        res.status(500);
        res.send(err);
		return next(new Error(err));
    });
}


function handleUpdateStudentRequest(req, res, next) {
}

function handleDeleteStudentRequest(req, res, next) {
}
module.exports = studentHandler;