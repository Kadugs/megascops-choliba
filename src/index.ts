import {app} from './configs/express-config';
import {Request, Response} from 'express';

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

app.get('/bolinha', (req: Request, res: Response) => {
	res.json({
		message: 'Hello World'
	});
});
