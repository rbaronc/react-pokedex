export default class Pokemon {
    public id: number;
    public name: string;
    public pokedexListImage: string;
    
    constructor(id: number, name: string, pokedexListImage: string) {
        this.id = id;
        this.name = name;
        this.pokedexListImage = pokedexListImage;
    }
}