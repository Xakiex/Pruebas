import {Router} from 'express'
import {
    getEmployees, 
    getEmployee, 
    createEmployee, 
    updateEmployee, 
    deleteEmployee
} from '../controllers/employees.controllers.js'

const router = Router()

router.get('/employees', getEmployees);
/*router.get('/employees', (req, res) => res.send('obteniendo empleados'))*/

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployee);
//router.put('/employees/:id', updateEmployee);
router.patch('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

export default router