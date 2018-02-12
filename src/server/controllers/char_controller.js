const axios = require('axios')

let char = [];
let count = 0;

module.exports = {
    create: (req, res) => {
        const {name} = req.body;
        char.push({name, count})
        count++;
    //     const {name} = req.body;
    //     axios.get(`https://swapi.co/api/people?search=`+"Luke")
    //     .then(res => {
    //         axios.get(`https://swapi.co/api/people/${res.data.count}`).then( res => {
    //             let {name, height, hair_color, skin_color, eye_color, birth_year, gender, homeworld} = res.data;
    //         axios.get(`${homeworld}`)
    //         .then(res => {char[index].homeworld = res.data.name; index++})
    //         char.push({name, height, hair_color, skin_color, eye_color, birth_year, gender, homeworld});
    //             }
    //         )
    //     });
        res.status(200).send(char);
    },
    
    delete: (req, res) =>{
        char.splice(0, char.length-1);
        res.status(200).send(char);
    }
}