import fallData from 'public/Data/Fall2018.json';
import springData from 'public/Data/Spring2019.json';

export default (req,res) => {
    res.status = 200;
    const d = [...fallData, ...springData];

    const profData = d.reduce( (acc,curr) =>{
        if(!acc[curr.professor])
            acc[curr.professor] = [];

        acc[curr.professor].push(curr);
        return acc;
    }, {} );

    res.json(profData);

}