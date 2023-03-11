import {pool} from '../db.js'

export const getEmployees = async(req, res) => {
    try {
        //throw new error('DB Error')
        const {name, salary} = req.body;    
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Error in getEmployees'
        });
    }
    
}

export const getEmployee = async(req, res) => {
    console.log(req.params.id)
    const Errormessage = 'Error in getEmployee # ' + req.params.id
    try {
        throw new error('DB Error')
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({message: 'Employee not found'})
    res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: Errormessage
        })
    }


    /*const {name, salary} = req.body;    
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)*/
}


 
/*export const createEmployee = (req, res) => res.send('creando empleados')*/
export const createEmployee = async(req, res) => {
    const {name, salary} = req.body;
    try {
        
        //Aqui se puede validar que el dato es string, y e salario un entero
        const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary])
        
        //console.log(req.body);
        //console.log({ rows });
        
        res.send({ 
            id: rows.insertId,
            name,
            salary, 
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error in createEmployee'
        })
    }
}


export const deleteEmployee = async (req, res) => {    
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
        
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        });       
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Error in deleteEmployee'
        })
    }
}

export const updateEmployee = async (req, res) => { 
    try {
        const {name, salary} = req.body;
        const {id} = req.params;
        
        const [result] = await pool.query('UPDATE employee set name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
        //const [result] = await pool.query('UPDATE employee set name = ?, salary = ? WHERE id = ?', [name, salary, id]);
        //UPDATE employee SET name='Pedro', salary=10 WHERE id = 8;
        
        if(result.affectedRows <=0) return res.status(404).json({
            message: 'Employee not found'
        });
        
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
    
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Error in updateEmployee'
        })
    }
}