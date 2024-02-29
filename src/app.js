
/*const express = require('express')*/
import express from 'express'

import employeesRoutes from './routes/employees.routes.js'
import datesRoutes from './routes/dates.routes.js'
import usuarioRoutes from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api',employeesRoutes);
app.use('/api',datesRoutes);
app.use('/api',usuarioRoutes);

app.use((req, res, next) => {
    res.status (404).json({
        message: 'End Point No found'
    })
})

export default app