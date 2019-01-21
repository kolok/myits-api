//Only run tests if we've specifically set NODE_ENV to testing
if (process.env.NODE_ENV !== 'testing') {
    throw new Error('NODE_ENV not set')
}

//This starts the app up
import { server } from '../app'

//Set up axios a little bit
import axios from 'axios'
const url = `http://localhost:4001`
const request = axios.create({ baseURL: url })

/////////////
// General //
/////////////
afterAll(async () => {
    //This closes the app but it doesn't stop the tests in
    //Jest when done - that's why we have to --forceExit
    //when running Jest for now.
    return server.close()
})

describe('general actions', () => {
    it('returns homepage', async () => {
        expect.assertions(2)
        const response = await request.get('/')
        expect(response.status).toBe(200)
        expect(response.data.msg).toBe('yeah !! we are up')
    })
})
