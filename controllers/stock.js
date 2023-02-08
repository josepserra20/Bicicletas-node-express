const Stock = require("../models/stock");

const stockModule = ( () => {

    async function createStock(req, res) {
       
        const { bike } = req.body;
        const { store } = req.body;

        try {
            const stockSave = await Stock.findOneAndUpdate({ bike: bike, store: store }, { $inc: { Totalstock: 1 } }, { new: true, upsert: true });
            res.status(200).json(stockSave);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async function updateRentable(req, res) {

        const { bike } = req.body;
        const { store } = req.body;

        try {

            const rentable = await Stock.findOne( { bike: bike, store: store } );
            
            if (rentable.Totalstock > rentable.Rentable) {
                const rented = await Stock.findOneAndUpdate({ bike: bike, store: store }, { $inc: {Rentable: +1 }}, { new: true });
                res.status(200).json(rented);
            } else {
                res.status(404).send({ message: "No hay stock alquilable disponible" });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async function getAllStock(req, res) { 
            
            try {
                const stock = await Stock.find();
                res.status(200).json(stock);
            } catch (error) {
                res.status(500).send(error);
            }

    }

    async function getAllBikesByStoreId(req, res) {

        const { id } = req.params;

        try {
            const bikes = await Stock.find({ store: id }).populate('bike');
            res.status(200).json(bikes);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async function deleteStock(req, res) {
        
        const { id } = req.params;

        try {
            const stock = await Stock.findByIdAndDelete(id);
            res.status(200).json(stock);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    return {
        createStock,
        updateRentable,
        getAllStock,
        getAllBikesByStoreId,
    }

})();

exports.stockModule = stockModule;