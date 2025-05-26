export interface Tutor {
    name :string
    icon: string
}

const Jeff: Tutor = {
    name: "Jeff",
    icon: '\uf6d5' //dragon
}

const Julia: Tutor = {
    name: "Julia",
    icon: '\uf6be' //cat
}

const Ella: Tutor = {
    name: "Ella",
    icon: '\uf094' // lemon
}

const Alex: Tutor = {
    name: "Alex",
    icon: '\uf6d3' // dog
}

const Alan: Tutor = {
    name: "Alan",
    icon: '\uf4ba' //bird
}

const Hari: Tutor = {
    name: "Hari",
    icon: '\uf7ef' //cheese
}

const Ilias: Tutor = {
    name: "Ilias",
    icon: '\uf6ed' //hippo
}

const Aashish: Tutor = {
    name: "Aashish",
    icon: '\uf6f0' //horse
}
const Gilad: Tutor = {
    name: "Gilad",
    icon: '\uf700' //frog
}
const Cindy: Tutor = {
    name: "Cindy",
    icon: '\uf717' //spider
}

const Jonathan: Tutor = {
    name: "Jonathan",
    icon: '\uf5d1' //apple
}

const Santiago: Tutor = {
    name: "Santiago",
    icon: '\uf7ec' //toast
}

const Rahul: Tutor = {
    name: "Rahul",
    icon: '\uf578' //fish
}

// export {Jeff, Julia, Ella, Alex, Alan, Hari, Ilias,
//      Aashish, Gilad,  Cindy, Jonathan, Santiago, Rahul};
export function fromTutor(tutorName: string){
    tutorName = tutorName.toLowerCase().trim();
    if(tutorName === "jeff")
        return Jeff;
    else if(tutorName === "julia")
        return Julia;
    else if (tutorName === "ella")
        return Ella;
    else if(tutorName === "elex")
        return Alex;
    else if(tutorName === "alan")
        return Alan;
    else if(tutorName === "hari")
        return Hari;
    else if(tutorName === "ilias")
        return Ilias;
    else if(tutorName === "aashish")
        return Aashish;
    else if(tutorName === "gilad")
        return Gilad;
     else if(tutorName === "cindy")
        return  Cindy;
     else if(tutorName === "jonathan")
        return Jonathan;
     else if(tutorName == "santiago")
        return  Santiago;
     else if(tutorName === "rahul")
        return  Rahul;
     else
        //console.log("Unknown tutor " + tutorName + "found");
        return Jeff;
}