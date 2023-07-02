import mongoose from 'mongoose';

import UserIdSchema from '../schemas/UploadUserAdresses.js'

// const UserId = mongoose.model('userId', usernameSchema);
const UserAddressData = mongoose.model('userAddressData', UserIdSchema);

export default UserAddressData;