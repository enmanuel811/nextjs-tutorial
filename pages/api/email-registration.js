import path from 'path'; //to get the file path
import fs from 'fs'; //to be able to read the file
import AllEvents from '@/src/components/events/events-page';

function buildPath(){
    //cwd: current working directory
   return path.join(process.cwd(),'data','data.json');
}

function extractData(filePath){
    const jsonData = fs.readFileSync(filePath);
     const data = JSON.parse(jsonData);
     return data;
}

export default function handler(req,res){
    const {method} = req;

    //access our data
    //extract our data
        //res 4004 if there are not allEvents
        //allEvents - loop through them and identify the eventId
        //add the email into emails_registered - write on our data
            // only if that email doesnt exists 
            //check the format of the email is OK

    const filePath = buildPath();
    const {events_categories,allEvents} = extractData(filePath);

    if(!allEvents){
        return res.status(404).json({message:
        "No events data found!"});
    }

    if(method ==="POST"){
        const{email,eventId} = req.body;
        
        if(!email | !email.includes('@')){
            res.status(422).json({message:"Invalid email address"});
            return;
        }
        const newAllEvents = allEvents.map(ev =>{
        if(ev.id === eventId){
            if(ev.emails_registered.includes(email)){
                res.status(409).json({message:'This email is already registered!'})
                return ev;
            }
            return {
                //we use the spread ... operator to dont have to pass the other properties
                //and we use it for the email to keep the already email in the list
                ...ev, emails_registered:[...ev.emails_registered,email]

            }
        }

        return ev;
        });
        fs.writeFileSync(filePath,JSON.stringify({events_categories,allEvents:newAllEvents}));
        //we add our code here
        res.status(200).json({message:"you has been registered successfully with the email: "+email +" "+eventId})

    }
}