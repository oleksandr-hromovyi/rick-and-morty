class Services {

    _apiBase = `https://rickandmortyapi.com/api/`;
    
    getResource = async (url) => {
        let response = await fetch(url);
        
        if(!response.ok) {
            throw new Error (`Could not fetch ${url}, status ${response.status}`);
       }
       return await response.json();
    }
       getAllCharacters = async (page) => {
            let response = await this.getResource(`${this._apiBase}character?page=${page}`)
            return response.results.map(this.transformCharacter);
        }
    
       getCharacter = async (id) => {
            let response = await this.getResource(`${this._apiBase}character/${id}`)
            return this.transformCharacter(response)
        }
       transformCharacter = (char) => {
        return {
            name: char.name,
            status: char.status,
            image: char.image,
            location: char.location.name,
            id: char.id,
            episode: char.episode,
        }
       } 
}

export default Services;