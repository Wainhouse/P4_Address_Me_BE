import mongoose from 'mongoose';

const { Schema } = mongoose;

const changesSchema = new Schema({
    WAT_PAF_ADDRESS_KEY: { type: String, required: true },
    changes: [
        {
            field: { type: String, required: true },
            oldValue: { type: String, required: true },
            newValue: { type: String, required: true }
        }
    ]
});

const Changes = mongoose.model('Changes', changesSchema);

export default Changes;
