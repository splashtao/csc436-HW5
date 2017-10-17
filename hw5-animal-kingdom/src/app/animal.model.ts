export class Animal {
    name : string;
    pyramidLevel: number;
    imageURL : string;

    constructor(pyramidLevel: number, name: string, imageURL: string){
        this.pyramidLevel = pyramidLevel;
        this.name = name;
        this.imageURL = imageURL;

    }

}