import { validateEmail } from "@/utils/funcs";
import Subscriber from "@/models/subscribers";
import dbConnect from "@/utils//db";

export async function subscribeToNewsletter(email, name = null) {
  const validEmail: boolean = validateEmail(email);
  if (!email) return { error: { message: `email_required` } };
  if (!validEmail) return { error: { message: `invalid_email_format` } };

  const alreadySubscribed = await isAlreadySubscribed(email);

  if (alreadySubscribed) {
    return { error: { message: `already_subscribed` } };
  }

  const subscriber = new Subscriber({
    email,
    name,
  });

  dbConnect();

  await subscriber.save();
  return { success: { message: `subscribed_successfully` } };
}

export async function isAlreadySubscribed(email) {
  const existingSubscriber = await Subscriber.findOne({ email });
  return !!existingSubscriber; // Returns true if the subscriber exists, false otherwise
}

export async function unsubscribeFromNewsletter(email) {
  const alreadySubscribed = await isAlreadySubscribed(email);

  if (!alreadySubscribed) {
    return { error: { message: `not_subscribed` } };
  }

  try {
    await Subscriber.findOneAndDelete({ email });

    return { success: { message: `unsubscribed_successfully` } };
  } catch (error) {
    return { error: { message: `unsubscribe_failed` } };
  }
}