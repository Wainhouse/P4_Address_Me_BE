import mongoose from 'mongoose';

// import Schema
const { Schema } = mongoose

const UserAddressSchema = new Schema({

    WAT_PAF_ADDRESS_KEY: { type: String, sparse: true, unique: false },
    WAT_COUNTRY: { type: String, sparse: true, unique: false },
    WAT_ADDRESS_LINE_3: { type: String, sparse: true, unique: false },
    WAT_ADDRESS_LINE_4: { type: String, sparse: true, unique: false },
    TOWN: { type: String, sparse: true, unique: false },
    WAT_ADDRESS_LINE_1: { type: String, sparse: true, unique: false },
    WAT_ADDRESS_LINE_2: { type: String, sparse: true, unique: false },
    'HOUSE NUMBER': { type: String, sparse: true, unique: false },
    'BUILDING NAME': { type: String, sparse: true, unique: false },
    'FLAT NUMBER': { type: String, sparse: true, unique: false }

});


const UserIdSchema = mongoose.Schema({
    username: { type: String, sparse: true, unique: false },
    userAddressData: {
        type: [{}],
    },
});

// Remove the unique constraint on all fields
UserAddressSchema.index({}, { unique: false });

export default UserIdSchema;