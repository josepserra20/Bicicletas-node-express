const app = require('../../app');
const request = require('supertest');
const mongoDB = require('../../DB/connect');
const migrate = require('../../DB/migrate');


describe('Test CRUD stock', () => { 

    beforeAll(async () => {
        mongoDB.connect();
        await migrate.seed();
    });

    afterAll((done) => {
        
        setTimeout(() => {
            mongoDB.disconnect(done);
        }, 1000);
       
    });

    test('create a stock that doesn`t exist', async () => { 

        const dataStock = { 
            store: "63c53a2559a5e542f4b0b740",
            bike: "63c53a2559a5e542f4b0b765",
        }
            
        const response = await request(app).post("/api/stock/new").send(dataStock);

        const data = response.body;

        expect(data.store).toBe(dataStock.store);
        expect(data.bike).toBe(dataStock.bike);
        expect(data.Totalstock).toBe(1);
        expect(response.statusCode).toBe(200);

    })

    test('update a stock that already exists', async () => { 

        const dataStock = { 
            store: "63c53a2559a5e542f4b0b740",
            bike: "63c53a2559a5e542f4b0b765",
        }
            
        const response = await request(app).post("/api/stock/new").send(dataStock);

        const data = response.body;

        expect(data.store).toBe(dataStock.store);
        expect(data.bike).toBe(dataStock.bike);
        expect(data.Totalstock).toBe(2);
        expect(response.statusCode).toBe(200);

    });

    test('get all stocks', async () => {
            
        const response = await request(app).get("/api/stock/all");
        const data = response.body;
        expect(data.length).toBe(7);
        expect(response.statusCode).toBe(200);
    
    })

    test('rent a bike', async () => {
                
        const response = await request(app).post("/api/rentable/new").send({
            store: "63c53a2559a5e542f4b0b740",
            bike: "63c53a2559a5e542f4b0b765",
        });
        const data = response.body;
        expect(data.Totalstock).toBe(2);
        expect(data.Rentable).toBe(1);
        expect(response.statusCode).toBe(200);
    })

    test('get all bikes by store id', async () => {
                    
            const response = await request(app).get("/api/stock/all/bikes/63c53a2559a5e542f4b0b740");
            const data = response.body;
            expect(data.length).toBe(1);
            expect(response.statusCode).toBe(200);
        })

        test('get all stores by bike id', async () => {
                            
                    const response = await request(app).get("/api/stock/all/stores/63c53a2559a5e542f4b0b765");
                    const data = response.body;
                    expect(data.length).toBe(1);
                    expect(response.statusCode).toBe(200);
                })

                test('rent a bike', async () => {
                                        
                        const response = await request(app).post("/api/rentable/new").send({
                            store: "63c53a2559a5e542f4b0b740",
                            bike: "63c53a2559a5e542f4b0b765",
                        });
                        const data = response.body;
                        expect(data.Totalstock).toBe(2);
                        expect(data.Rentable).toBe(2);
                        expect(response.statusCode).toBe(200);
                    })     
});