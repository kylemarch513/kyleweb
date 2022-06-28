import Stripe from 'stripe';
import {buffer} from 'micro';

export const config = {
    api: {
        bodyParser : false,
    }
};

export default async function webhookHandler(req, res){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    
    if(req.method ==='POST'){
        const buf = await buffer(req);
        const sig = req.headers('stripe-signiature');
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

        let event;

        try {
            if(!sig || !webhookSecret) return;

            event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

        } catch (error) {
            console.log(`Nyaaa~~ something went wrong: ${error.message}`);
            return res.status(400).send(`Nyaaa~~ something went wrong: ${error.message}`);
        }

        console.log('event', event);

        res.status(200).send();
    }
}