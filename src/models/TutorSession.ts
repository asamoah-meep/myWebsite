
export interface TutorSession{
    date: string
    name: string
    tutor: string
    professor: string
    info: string
    resolve: Resolutions
}

export function getColorFromResolution(session: TutorSession){
    const resolve: Resolutions = session.resolve;
    if (resolve.includes("Unresolved"))
        return "#CF142B";
    else if (resolve === "Resolved: they get it!")
        return "#33A532";
    else
        return "#FAD201";
}

