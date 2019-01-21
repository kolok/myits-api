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

//Grab the db variable
import db from '../src/db/db'

beforeAll(async () => {
    //As the tests start rollback and migrate our tables
    await db.migrate.rollback()
    await db.migrate.latest()
    await db.seed.run('companies')
})

afterAll(async () => {
    //After all the tests are done we're going to close our server
    //and rollback our database.
    await db.migrate.rollback()

    //This closes the app but it doesn't stop the tests in
    //Jest when done - that's why we have to --forceExit
    //when running Jest for now.
    return server.close()
})

/////////////
// General //
/////////////

describe('company actions', () => {
    it('creates a company', async () => {
        expect.assertions(1)

        const response = await request.post('/api/v1/companies', {
          name: 'This is my first company',
          status: 'active',
        })
        // FIXME: it should be 202
        expect(response.status).toBe(200)
    })

    it('shows a company', async () => {
        expect.assertions(3)

        const response = await request.get('/api/v1/companies/' + '1')
        expect(response.status).toBe(200)
        expect(response.data.id).toBe(1)
        expect(response.data.name).toBe('Company 1')
    })
})
