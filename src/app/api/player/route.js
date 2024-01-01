import { connectToDatabase } from "../../../util/mongo";

export async function GET(req, res) {
    
    const client = await connectToDatabase();

    try {
        const db = client.db();
        const data = await db.collection('player').find().toArray();
        return Response.json({ data });
    } catch (error) {
        console.error('Error:', error);
        return Response.json({ error: 'You done messed the server up.' })
    } finally {
        await client.close();
    }
}
