import mongoose from 'mongoose';

// import Schema
const { Schema } = mongoose

// User Address Data Schema with fields

const usernameSchema = new Schema({
    username: { type: String, required: true, unique: true },
});

const userAddressSchema = new Schema({
    username: [usernameSchema],
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

// Remove the unique constraint on all fields
userAddressSchema.index({}, { unique: false });

const UserAddress = mongoose.model('userAddress', userAddressSchema);

export default UserAddress;