const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../auth/jwtAuth');

const vacationsController = require('../controllers/vacationsController');

// Multer "Settings"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        let tn = Date.now();
        let dateFile = new Date(tn);
        cb(null, dateFile.getFullYear() + dateFile.getMonth() + dateFile.getDate() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
        cb(null, true)
    else
        cb({ status: 422, message: 'Wrong file type' }, false)
};
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});


router.get('/getVacations', vacationsController.getVacations);
router.get('/getAllVacations', vacationsController.getAllVacations);
router.get('/getVacationById', vacationsController.getVacationById);
router.get('/getuserVacationById', vacationsController.getuserVacationById);
router.post('/insertVacation', upload.single('image'), vacationsController.insertVacation);
router.post('/insertUserVacation', vacationsController.insertUserVacation);
router.delete('/deleteUserVacation', vacationsController.deleteUserVacation);
router.put('/updateVacationByid/:id',upload.single('image'), vacationsController.updateVacationByid);
router.put('/updateFolowersVacationByid', vacationsController.updateFolowersVacationByid);

module.exports = router;