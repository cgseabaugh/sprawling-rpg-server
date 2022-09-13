var express = require('express');
var router = express.Router();
var userServices = require('../services/userServices.ts');

import UserAccount from "../entity/user";

/* GET users listing. */

router.get('/getAllUsers', async function(req: any, res: any): Promise<UserAccount[]> {
  
  try {
    return res.send(await userServices.getAllUsers())
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error
    })
  }
  
});

router.get('/getById/:id', async function(req: any, res: any, next: any): Promise<UserAccount> {
  
  return res.send(await userServices.findUserById(parseInt(req.params.id)));

});

router.post('/deleteByEmail', async function(req: any, res: any, next: any) {

  const {email} = req.body;
  
  return res.send(await userServices.deleteUserByEmail(email));

});

router.get('/findUserByEmail/:email', async function(req: any, res: any, next: any): Promise<UserAccount> {

  const {email} = req.params.email;
  
  return res.send(await userServices.findUserByEmail(email));


});



router.post('/signInUser', async function(req: any, res: any, next: any): Promise<UserAccount> {

  const {email, password} = req.body

  try{
    return res.send(await userServices.findUserByEmailAndPassword(email, password));
  } catch(e){
    console.log(e);
  }
});

/* POST sign up user */
router.post('/signUpUser', async function(req: any, res: any, next: any): Promise<UserAccount> {

  const user = req.body

  try {
    return res.send(await userServices.createUser(user));
  } catch(e){
    console.log(e)
  }
  
});

router.post('/updateUser', async function(req: any, res: any, next: any): Promise<UserAccount> {

  const user = req.body

  return res.send(await userServices.updateUser(user));
  
});


module.exports = router;
