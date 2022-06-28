const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const {item} = req.body;

  const trasnformedItem = {
    price_data: {
      currency: 'eur',
      product_data: {
        images: [item.image],
        name: item.name,
      },
      unit_amount: item.price *100,
    },
    description: item.description,
    quantity: item.quantity,
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'ideal'],
    line_items: [trasnformedItem],
    mode: 'payment',
    sucess_url: redirectUrl + '?status=success',
    cancel_url: redirectUrl + '?status=cancel',
    metadata: {
      images: item.image,
    },
  });

  res.json({id:session.id});


}

export default CreateStripeSession;
