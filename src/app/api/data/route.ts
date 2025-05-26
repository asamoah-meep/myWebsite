import fallData from 'public/Data/Fall2018.json';
import springData from 'public/Data/Spring2019.json';

export function GET (req: Request): Response {

    const d = [...fallData, ...springData];

    const profData: Record<string, any> = d.reduce( (acc,curr) =>{
        if(!acc[curr.professor])
            acc[curr.professor] = [];

        acc[curr.professor].push(curr);
        return acc;
    }, {} );
    
    return Response.json(profData);
}