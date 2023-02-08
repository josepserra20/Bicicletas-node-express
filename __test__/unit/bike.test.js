const app = require('../../app');
const request = require('supertest');
const mongoDB = require('../../DB/connect');
const migrate = require('../../DB/migrate');

describe('Test CRUD bike', () => { 
    
    beforeAll(async () => {
    
        mongoDB.connect();
        await migrate.seed();
        jest.setTimeout(10000);
    });

    afterAll((done) => {
        
        setTimeout(() => {
            mongoDB.disconnect(done);
        }, 1000);
       
    });

    test('connect to datanase ', async () => { 

        const db = mongoDB.connect();
        expect(db).not.toBe(false);
    
    })

    test('create a bike', async () => {

        const response = await request(app).post("/api/bike/new").send({
            name: "Marlin 6 gen 3",
            description: "Mountain bike",
            price: 1000,
            spe_level: "advanced",
            category: "mountain bike",
            weight: 10,
            frame: "aluminio",
            fork: "suspension",
            wheels: "26",
            wheel_size: "26",
            brakes: "disco",
            groupset: "shimano",
            drivetrain: "shimano",
            suspension: "suspension",
            front_travel: "100",
            seatpost: "suspension",
            brand_site: "https://www.giant-bicycles.com/es/mountain-bikes/marlin-6-gen-2-2021",

        });
        const data = response.body;
        expect(data.name).toBe("Marlin 6 gen 3");
        expect(response.statusCode).toBe(200);
    });

    test('get bike by name', async () => { 
        const response = await request(app).get('/api/bike/Marlin 6 gen 2');
        const data = response.body;

        expect(data.name).toBe("Marlin 6 gen 2");
        expect(response.statusCode).toBe(200);

    });

    test('get all bikes', async () => { 
        const response = await request(app).get('/api/bike');
        const data = response.body;

        expect(data.length).toBe(5);
        expect(response.statusCode).toBe(200);

    });

    test('update bike', async () => { 
        const response = await request(app).put('/api/bike/63c53a2559a5e542f4b0b767/update').send({
            name: "Marlin 6 gen 3",
            
        });
        const data = response.body;

        expect(data.name).toBe("Marlin 6 gen 3");
        expect(response.statusCode).toBe(200);
    });

    test('delete bike', async () => { 
        const response = await request(app).delete('/api/bike/63c53a2559a5e542f4b0b767/delete');
        const data = response.body;

        expect(data.name).toBe("Marlin 6 gen 3");
        expect(response.statusCode).toBe(200);

        const getTotalBikes = await request(app).get('/api/bike');
        const dataTotalBikes = getTotalBikes.body;
        expect(dataTotalBikes.length).toBe(4);

    });
});


