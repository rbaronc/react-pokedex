
const PokeStringNormalizationService = {
    normalizePokemonDetails: (details: string)=>{
        return details.replace('\n', ' ').replace('\f', ' ');
    }
};

export default PokeStringNormalizationService;