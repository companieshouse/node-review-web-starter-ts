
// Map incoming path to appropriate route (sometimes called "route dispatch")

import { IndexRoute } from './routes/indexRoute';
import { UserRoute } from './routes/userRoute';
import { CompanyRoute } from './routes/companyRoute';

const router = (app) => {
    app.use('/', IndexRoute);
    app.use('/user', UserRoute);
    app.use('/company', CompanyRoute);
};

export default router;
