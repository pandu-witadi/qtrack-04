//
//
const bcrypt = require('bcrypt')
const path = require('path')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
})

const buildData = () => {
    const data = {
        is_admin: true,
        is_sso: false,
    }


    if (process.env.DEFAULT_ADMIN_EMAIL) {
        data.email = process.env.DEFAULT_ADMIN_EMAIL;
    }
    if (process.env.DEFAULT_ADMIN_PASSWORD) {
        data.password = bcrypt.hashSync(process.env.DEFAULT_ADMIN_PASSWORD, 10)
    }
    if (process.env.DEFAULT_ADMIN_NAME) {
        data.name = process.env.DEFAULT_ADMIN_NAME
    }
    if (process.env.DEFAULT_ADMIN_USERNAME) {
        data.username = process.env.DEFAULT_ADMIN_USERNAME
    }

    return data
}


console.log('db:init .. start')

const url_mongo = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`
const dbase = process.env.DB_NAME

const client = new MongoClient(url_mongo)
console.log('db:init .. connect to mongodb ' + url_mongo + '  dbase: ' + dbase)

async function run() {
    try {
        // Connect to the "insertDB" database and access its "haiku" collection
        const database = client.db(dbase)
        const user = database.collection("user_account")
        const data = buildData()
        console.log(data)

        let user_el = await user.findOne({ email: data.email })
        if (user_el)
            await user.deleteOne({ email: data.email })

        const result = await user.insertOne(data)
        console.log(`A document was inserted with the _id: ${result.insertedId}`)
    } catch(err) {
        console.log(err)
        await client.close()
    } finally {
        // Close the MongoDB client connection
        await client.close()
    }
}

// Run the function and handle any errors
run().catch(console.dir)

console.log('db:init .. end')
