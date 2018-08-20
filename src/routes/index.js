const express = require('express');
const router = express.Router();

const Task = require('../models/task');

const auth = require('../middlewares/auth');

const userCtrl = require('../controller/user');

router.get('/', async (req, res)=> {
    const tasks = await Task.find();
    res.render('index',{
        tasks
    });
});

router.post('/add', async (req , res) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});

router.get('/turn/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status
    await task.save();
    res.redirect('/');
    
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('edit',{
        task
    });
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Task.update({_id: id},req.body);
    res.redirect('/');
});

router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
});



router.post('/addUser',userCtrl.signUp);
router.post('/login',userCtrl.signIn);


router.get('/private',auth, (req, res) => {
    res.status(200).send({mensaje:'acceso'});
});

module.exports = router;