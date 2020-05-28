const  express =  require('express');
const ongcontrole =  require('./controllers/ongcontrole');
const incidentcontrole =  require('./controllers/incidentcontrole');
const ProfileController =  require('./controllers/incidentcontrole');
const SessionController =  require('./controllers/SessionController');

const routes =  express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs', ongcontrole.index);
routes.post('/ongs',ongcontrole.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents',incidentcontrole.index);
routes.post('/incidents',incidentcontrole.create);
routes.delete('/incidents/:id',incidentcontrole.delete)
module.exports =  routes; 