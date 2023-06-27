import {Router} from 'express'
import tutor from '../controllers/tutor';

const router = Router();

// Get all Tutors
router.get('/tutor/pet', tutor.getAllTutors)

// Post Tutor
router.post('/tutor', tutor.postTutors)

// Post Pet
// router.post('/pet/:tutorId', controller.postPets)

// // Put Tutor
// router.put('/tutor/:Id', controller.putTutors)

// // Put Pet
// router.put('/pet/:petId/tutor/:tutorId', controller.putPets)

// // Delete Tutor
// router.delete('/tutor/:Id', controller.deleteTutors)

// // Delete Pet
// router.delete('/tutor/:tutorId/pet/:petId', controller.deletePets)


export {router}