import mongoose from 'mongoose';
import schemas from './schemas';
import _ from 'lodash'

export default async function () {
     await mongoose.connect(process.env.DB, {useNewUrlParser: true});
     _.each(schemas, schema => {
             let scma = new mongoose.Schema(schema.schema);
         global[schema.schemaName] = mongoose.model(schema.schemaName, scma)
     });
    // let newUser = new global.users({username: 'Vahe001'})
    // await newUser.save()
}
