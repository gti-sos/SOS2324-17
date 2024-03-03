const API_BASE_ALA = "/api/v1/trimestralpib_stats";

var data = [];

module.exports = (app) => {
    
    // GET => Lista todos los datos
    
    app.get(API_BASE_ALA+"/",(req,res)=>{
        res.status(200).send(JSON.stringify(data));
    }),

    // GET => loadInitialData (al hacer un GET cree 10 o más datos en el array de NodeJS si está vacío)
    app.get(API_BASE_ALA+"/loadInitialData",(req,res) => {
        if(data.length === 0){
            let newdata = [
                { country: "España", date: "IV Trim 2018", trimestral_pib: "305.818 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
                { country: "Alemania", date: "IV Trim 2018", trimestral_pib: "854.124 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "0,10%" },
                { country: "Reino Unido", date: "IV Trim 2018", trimestral_pib: "610.918 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "1,20%" },
                { country: "Francia", date: "IV Trim 2018", trimestral_pib: "598.352 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "1,50%" },
                { country: "Italia", date: "IV Trim 2018", trimestral_pib: "444.875 M€", trimestral_variable_pib: "0,30%", annual_variable_pib: "0,30%" },
                { country: "Portugal", date: "IV Trim 2018", trimestral_pib: "51.989 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "2,70%" },
                { country: "Zona Euro", date: "IV Trim 2018", trimestral_pib: "2.938.241 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "1,20%" },
                { country: "Estados Unidos", date: "IV Trim 2018", trimestral_pib: "4.581.625 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,10%" },
                { country: "Japón", date: "IV Trim 2018", trimestral_pib: "1.074.283 M€", trimestral_variable_pib: "-0,10%", annual_variable_pib: "-0,30%" },
                { country: "China", date: "IV Trim 2018", trimestral_variable_pib: "1,30%", annual_variable_pib: "6,50%" },
                { country: "Argentina", date: "IV Trim 2018", trimestral_pib: "99.846 M€", trimestral_variable_pib: "-1,60%", annual_variable_pib: "-6,40%" },
                { country: "Austria", date: "IV Trim 2018", trimestral_pib: "98.065 M€", trimestral_variable_pib: "1,30%", annual_variable_pib: "2,60%" },
                { country: "Australia", date: "IV Trim 2018", trimestral_pib: "303.808 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,50%" },
                { country: "Bélgica", date: "IV Trim 2018", trimestral_pib: "117.271 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "2,20%" },
                { country: "Bulgaria", date: "IV Trim 2018", trimestral_pib: "14.293 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "3,30%" },
                { country: "Brasil", date: "IV Trim 2018", trimestral_pib: "411.393 M€", trimestral_variable_pib: "-0,40%", annual_variable_pib: "1,10%" },
                { country: "Canadá", date: "IV Trim 2018", trimestral_pib: "371.308 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,70%" },
                { country: "Suiza", date: "IV Trim 2018", trimestral_pib: "157.082 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,00%" },
                { country: "Chile", date: "IV Trim 2018", trimestral_pib: "62.299 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,30%" },
                { country: "Colombia", date: "IV Trim 2018", trimestral_pib: "69.771 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,80%" },
                { country: "Costa Rica", date: "IV Trim 2018", trimestral_pib: "13.094 M€", trimestral_variable_pib: "-0,70%", annual_variable_pib: "0,40%" },
                { country: "Chipre", date: "IV Trim 2018", trimestral_pib: "5.548 M€", trimestral_variable_pib: "2,30%", annual_variable_pib: "6,30%" },
                { country: "Chequia", date: "IV Trim 2018", trimestral_pib: "53.419 M€", trimestral_variable_pib: "0,80%", annual_variable_pib: "2,60%" },
                { country: "Dinamarca", date: "IV Trim 2018", trimestral_pib: "76.815 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "2,10%" },
                { country: "Estonia", date: "IV Trim 2018", trimestral_pib: "6.722 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,60%" },
                { country: "Finlandia", date: "IV Trim 2018", trimestral_pib: "58.941 M€", trimestral_variable_pib: "0%", annual_variable_pib: "0,10%" },
                { country: "Grecia", date: "IV Trim 2018", trimestral_pib: "45.158 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
                { country: "Croacia", date: "IV Trim 2018", trimestral_pib: "13.408 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "3,10%" },
                { country: "Hungría", date: "IV Trim 2018", trimestral_pib: "34.799 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "5,30%" }
              ]
            for(let i=0; i<newdata.length; i++){
                data.push(newdata[i]);
            }
            res.sendStatus(201, "Data created");  
        } else {
            res.status(200).send(JSON.stringify(data));
        }
    }),

    // GET => Get data by host_location

    app.get(API_BASE_ALA + "/:country",(req,res)=>{
        const PAIS = req.params.country;
        const countryDatos = data.filter(p => p.country === PAIS);

        if(countryDatos.length > 0){
            res.status(200).send(JSON.stringify(countryDatos));
        } else {
            res.sendStatus(404, "NOT FOUND");
        }
    }),

    // POST => Crea un nuevo airbnb

    /*app.post(API_BASE_ALA + "/", (req,res) => {
        let newdata = req.body;
        const equal = data.some(old => old.name === newdata.name && old.latitude === newdata.latitude && old.longitude === newdata.longitude);
        if(equal){
            // POST not allowed due to resource already existing
            res.sendStatus(409, "CONFLICT");
        } else if (!newdata || Object.keys(newdata).length === 0){
            // If not valid JSON received
            res.sendStatus(400, "BAD REQUEST");
        } else {
            // Valid POST
            data.push(newdata);
            res.sendStatus(201, "CREATED");
        }
    }),*/

    // PUT => Can't update root directory
    app.put(API_BASE_ALA + "/", (req,res)=> {
        let newdata = req.body;
        res.sendStatus(405,"METHOD NOW ALLOWED");
    }),

    //PUT => Update resource by listing_id
    app.put(API_BASE_ALA + "/:trimestral_pib", (req,res) =>{
        const trimestral_pib = parseInt(req.params.trimestral_pib);
        let newdata = req.body;

        // Encuentra el índice del elemento con el ID dado en la lista de datos
        const index = data.findIndex(p => p.trimestral_pib === trimestral_pib);

        if(index === -1){
            // El elemento con el ID dado no existe, devolver un error 404 NOT FOUND
            res.sendStatus(404, "NOT FOUND");
        } else if (!newdata || Object.keys(newdata).length === 0 || newdata.trimestral_pib !== trimestral_pib){
            // Los datos proporcionados son inválidos o el ID no coincide, devolver un error 400 BAD REQUEST
            res.sendStatus(400, "BAD REQUEST");
        } else {
            // Reemplazar el dato existente con los nuevos datos
            data[index] = newdata;
            res.sendStatus(200, "OK");
        }
    }),

    // DELETE => Delete all data

    app.delete(API_BASE_ALA + "/", (req,res) => {
        data.splice(0, data.length);
        res.status(200).send("ALL DATA DELETED");
    }),

    // DELETE => Delete specific data
    app.delete(API_BASE_ALA + "/:trimestral_pib", (req,res) => {
        const trimestral_pib = parseInt(req.params.trimestral_pib);
        const nuevosDatos = data.filter(entry => entry.listing_trimestral_pib !== trimestral_pib);

        if(nuevosDatos.length < data.length){
            //Delete data from specified filter
            data = nuevosDatos;
            res.sendStatus(200, "OK");
        } else {
            //Try to acces not existing resource
            res.sendStatus(404, "NOT FOUND");
        }
    }),

    // POST => Try to use not allowed method
    app.post(API_BASE_ALA + "/:country", (req,res) =>{
        const PAIS = req.params.country;
        let newdata = req.body;
        res.sendStatus(405, "METHOD NOT ALLOWED");
    });
};