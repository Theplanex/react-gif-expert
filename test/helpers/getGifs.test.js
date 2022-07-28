import { string } from "prop-types";
import getGifs from "../../src/helpers/getGifts";

describe('Probando la funcionalidad del helpers getGifs', () => 
{
    const category = 'saitama';
     test('Probando la funcionalidad del hook getGifs', async () => 
     {
         const getGifsList = await getGifs( category );
         expect(getGifsList.length).toBeGreaterThan(0);
         expect(getGifsList[0]).toEqual({
            id: expect.any(String),
            url:expect.any(String),
            title: expect.any(String)
         })

     }) 
})

