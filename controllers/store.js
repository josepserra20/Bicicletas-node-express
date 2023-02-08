const Store = require("../models/store");

const storeModule = ( () => {


    async function createStore(req, res) {
        
        const store = new Store(req.body);

        try {
            const storeSave = await store.save();
    
            if (!storeSave) {
                res.status(404).send({ message: "Error al guardar la tienda" });
            } else {
                res.status(200).json(storeSave);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async function getAllStores(req, res) {
    
        try {
            const stores = await Store.find();

            if (!stores) {
                res.status(404).send({ message: "Error al obtener todas las tiendas" });
            } else {
                res.status(200).json(stores);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
    async function getStoreByName(req, res) {

        const { name } = req.params;

        try {

            const storeByName = await Store.findOne({ name: name })
            
            if (!storeByName) {
                res.status(404).send({ message: "Error al buscar la tienda por nombre" });
            } else {
                res.status(200).json(storeByName);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async function updateStore(req, res) {
        
        const { id } =  req.params;
        const update = req.body;

        try {
            const storeUpdated = await Store.findByIdAndUpdate(id, update, { new: true });
            if (!storeUpdated) {
                res.status(404).send({ message: "Error al actualizar la tienda" });
            } else {
                res.status(200).json(storeUpdated);
            }
        } catch (error) {
            res.status(500).send(error);
        }

    }

    async function deleteStore(req, res) { 
            
            const { id }  = req.params;
    
            try {
                const storeDeleted = await Store.findByIdAndDelete(id);
                if (!storeDeleted) {
                    res.status(404).send({ message: "Error al eliminar la tienda" });
                }  else {
                    res.status(200).json(storeDeleted);
                }
            } catch (error) {
                res.status(500).send(error);
            }
    }

    return {
        getAllStores,
        getStoreByName,
        createStore,
        updateStore,
        deleteStore,
    }
})();

exports.storeModule = storeModule;