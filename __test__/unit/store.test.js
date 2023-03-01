const app = require('../../app');
const request = require('supertest');
const mongoDB = require('../../DB/connect');
const migrate = require('../../DB/migrate');

describe('Test CRUD store', () => { 

    beforeAll(async () => {
        mongoDB.connect();
        await migrate.seed();
    });

    afterAll((done) => {
        setTimeout(() => {
            mongoDB.disconnect(done);
        }, 1000);
    });

    test('create a store', async () => { 
            
        const response = await request(app).post("/api/store/new").send({
            id: 4,
            name: "Tienda de prueba"});

        const data = response.body;
        expect(data.name).toBe("Tienda de prueba");
        expect(response.statusCode).toBe(200);

    })

    test('get all stores', async () => { 
            
        const response = await request(app).get("/api/store/all");
        const data = response.body;
        expect(data.length).toBe(5);
        expect(response.statusCode).toBe(200);

    })

    test('get a store by name', async () => { 
            
        const response = await request(app).get("/api/store/name/tienda de Paco");
        const data = response.body;
        expect(data.name).toBe("tienda de Paco");
        expect(response.statusCode).toBe(200);

    })

    test('update a store', async () => {
                
            const response = await request(app).put("/api/store/63c53a2559a5e542f4b0b76c/update").send({
                name: "Update nombre"});
    
            const data = response.body;
            expect(data.name).toBe("Update nombre");
            expect(response.statusCode).toBe(200);
    
        })

    // test('delete a store', async () => {
                    
    //             const response = await request(app).delete("/api/store/63c53a2559a5e542f4b0b76d/delete");
        
    //             const data = response.body;
    //             expect(data.name).toBe("Tienda de Luis");
    //             expect(response.statusCode).toBe(200);

    //             const getTotalStores = await request(app).get("/api/store/all");
    //             const dataTotalStores = getTotalStores.body;
    //             expect(dataTotalStores.length).toBe(4);
        
    //         })

});