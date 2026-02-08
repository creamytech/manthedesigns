import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
});

interface CartItem {
  artwork: {
    id: string;
    title: string;
    medium: string;
    dimensions: string;
    price: number;
    imageUrl: string;
    description: string;
  };
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const { items } = (await req.json()) as { items: CartItem[] };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No items in cart" },
        { status: 400 }
      );
    }

    // Build the origin URL for redirects and images
    const origin = req.headers.get("origin") || "http://localhost:3000";

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.artwork.title,
            description: `${item.artwork.medium} — ${item.artwork.dimensions}`,
            images: [`${origin}${item.artwork.imageUrl}`],
          },
          unit_amount: Math.round(item.artwork.price * 100), // Stripe uses cents
        },
        quantity: item.quantity,
      }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      billing_address_collection: "required",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/gallery`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
