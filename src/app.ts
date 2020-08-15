 
import express, { response } from 'express';

const server = express();
const port = 1337;

server.listen(process.env.port,()=>console.log("Listening"));

server.get('/webhook' , (req,resp) => {
    const VERIFY_TOKEN = 'adgjl13579';
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    if(mode && token)
    {
        if(mode === 'subscribe' && token === VERIFY_TOKEN)
        {
            console.log("Successful get");
            resp.status(200).send(challenge);
        }
        else
        {
            resp.sendStatus(403);//Forbidden
        }
    }
}
);

