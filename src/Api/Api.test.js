import { weatherAPI } from './api';

describe("Api component tests", () => {
    test("test async data to be truthy", async () => {
        expect.assertions(1);
        const data = await weatherAPI.getActualStat('poltavska', 'kremenchuk');
        expect(data).toBeTruthy();
    });

    test("test async data", async () => {
        const testState = {
            temperature: 10,
            pressure: 5,
            humidity: 5,
            wind: 1
        }
        const response = await weatherAPI.getActualStat('poltavska', 'kremenchuk');
        expect(response.data.values[0]).toStrictEqual(testState);
    });

    test("test async data 2", async () => {
        expect.assertions(1);
        try {
            await weatherAPI.getActualStat('test', 'test');
        } catch (e) {
            expect(e.toString()).toEqual('Error: Request failed with status code 404');
        }
    });
})

