const Bike = require("../models/bike");
const Service = require("../services/bike");

const bikeModule = ( () => {

    async function createBike(req, res) {
       
        const bike = new Bike(req.body);

        try {
            const bikeSave = await bike.save();
            if (!bikeSave) {
                res.status(404).send({ message: "Error al guardar la bicicleta" });
            } else {
                res.status(200).json(bikeSave);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async function getBikes(req, res) {

        try {
            const bikes = await Bike.find();

            if(!bikes) {
                res.status(404).send({ message: "No hay bicicletas" });
            } else {
                res.status(200).json(bikes);
            }
        } catch (error) {
            res.status(500).send(error);

        }
    }

    async function getBikeByName(req, res) { 

        const { name } = req.params;

        try {
            const bikeByName = await Bike.findOne({ name: name });

            if(!bikeByName) {
                res.status(404).send({ message: "No hay bicicleta con el nombre de " + name});
            } else {
                res.status(200).json(bikeByName);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async function updateBike(req, res) {
        
        const { id } = req.params;
        const update = req.body;

        try {
            const bike = await Bike.findByIdAndUpdate( id, update, { new: true } );
            
            if(!bike) {
                res.status(404).send({ message: "No se ha actualizado la bicicleta" });
            } else {
                res.status(200).json(bike);               
            }

        } catch (error) {
            res.status(500).send(error);
        }
    }

    async function deleteBike(req, res) { 
        
        const { id } = req.params;

        try { 
            const bike = await Bike.findByIdAndDelete(id);

            if(!bike) {
                res.status(404).send({ message: "No se ha eliminado la bicicleta" });
            } else {
                res.status(200).json(bike);
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }
    async function getBikeById(req, res) {
        const { id } = req.params;
        try {
            const bike = await Bike.findById(id);
            if (!bike) {
                res.status(404).send({ message: `No se ha encontrado la bicicleta ${id}` });
            } else {
                res.status(200).json(bike);
            }} catch (error) {
                res.status(500).send(error);
            }
        } 

    return {
        getBikes,
        getBikeByName,
        createBike,
        updateBike,
        deleteBike,
        getBikeById,
    }

})();

exports.bikeModule = bikeModule;