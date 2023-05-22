import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase, { clientPromise } from '@/utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('newsletterDB');
      const collection = db.collection('subscribers');

      await collection.insertOne({ email });

      return res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
