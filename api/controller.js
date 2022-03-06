const Team = require('./model');
const _ = require('lodash');

exports.getAll = (req, res, next) => {
    Team.find({})
        .exec()
        .then((teams) => {
            res.json(teams);
        }, (err) => {
            next(err);
        });
};

exports.get = (req, res, next) => {
    Team.findById(req.params.id)
        .exec()
        .then((team) => {
            if(!team) {
                next(new Error("No team found"));
            } else {
                res.json(team);
            }
        }, (err) => {
            next(err);
        });
};

exports.post = (req, res, next) => {
    const newTeam = req.body;
    console.log(newTeam);
    Team.create(newTeam)
        .then((team) => {
            res.json(team);
        }, (err) => {
            console.log(err);
            next(err);
        });
};

exports.put = (req, res, next) => {
    Team.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
        if(err) {
            next(err);
        } else {
            res.json(updated);
        }
    });            
};

exports.delete = (req, res, next) => {
    Team.findByIdAndRemove(req.params.id, (err, removed) => {
        if(err) {
            next(err);
        } else {
            res.json(removed);
        }
    });    
};

