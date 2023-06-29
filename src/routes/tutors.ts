import {Router} from 'express';
import {auth} from '../controllers/auth';
import { authentication } from '../middlewares/authentication';
import {getAllTutors, postTutors, putTutors, deleteTutors} from '../controllers/tutor';
import {postPets, putPets, deletePets} from '../controllers/pet';

const router = Router();



// Get all Tutors
router.get('/tutor/pet', authentication, getAllTutors);

// Post Tutor
router.post('/tutor', postTutors);

// Post Pet
router.post('/pet/:tutorId', authentication, postPets);

//Put Tutor
router.put('/tutor/:Id', authentication, putTutors);

// Put Pet
router.put('/pet/:petId/tutor/:tutorId', authentication, putPets);

// Delete Tutor
router.delete('/tutor/:Id', authentication, deleteTutors);

// Delete Pet
router.delete('/tutor/:tutorId/pet/:petId', authentication, deletePets);

// Auth Tutor
router.post('/auth', auth);


export {router}