import { MongoClient, ServerApiVersion } from 'mongodb';

export async function GET (req: Request): Promise<Response> {

    const uri = "mongodb+srv://jef:wfZQqxRLbcKPwHmF@runnablecities.ov3trag.mongodb.net/?retryWrites=true&w=majority&appName=RunnableCities";

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    const {searchParams} = new URL(req.url);
    console.log(searchParams);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const dateFilter = { "date": {"$gte": decodeURIComponent(startDate), "$lte": decodeURIComponent(endDate)}};

    const prof = searchParams.get("professor");
    const profFilter = prof ? {"professor": {"$eq": decodeURIComponent(prof)}} : null;

    const tutor = searchParams.get("tutor");
    const tutorFilter = tutor ? {"tutor": {"$eq": decodeURIComponent(tutor)}} : null;

    const filters = [dateFilter, profFilter, tutorFilter].filter(ele => ele != null);
    let queryFilter = filters[0];
    for(let i = 1; i < filters.length; i++)
        queryFilter = {...queryFilter, ...filters[i]};
    
    // const queryFilter = {...filters}
    console.log(queryFilter);
    let data = [];

    async function run() {
        try {
            await client.connect();
            data = await client.db("PersonalWebsite").collection("TutorSession").find(queryFilter).toArray();
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    await run();

    const profData: Record<string, any> = data.reduce( (acc,curr) =>{
        if(!acc[curr.professor])
            acc[curr.professor] = [];

        acc[curr.professor].push(curr);
        return acc;
    }, {} );

    
    return Response.json(profData);
}