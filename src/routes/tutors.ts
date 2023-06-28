import {Router} from 'express'
import tutor from '../controllers/tutor';
import pet from '../controllers/pet';

const router = Router();



// Get all Tutors
router.get('/tutor/pet', tutor.getAllTutors)

// Post Tutor
router.post('/tutor', tutor.postTutors)

// Post Pet
router.post('/pet/:tutorId', pet.postPets)

//Put Tutor
router.put('/tutor/:Id', tutor.putTutors)

// Put Pet
router.put('/pet/:petId/tutor/:tutorId', pet.putPets)

// Delete Tutor
router.delete('/tutor/:Id', tutor.deleteTutors)

// Delete Pet
router.delete('/tutor/:tutorId/pet/:petId', pet.deletePets)


export {router}