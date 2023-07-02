import CorrectedAddressData from '../models/CorrectedAddressData.js';

async function correctDataWaterSet(correctDataWater, incorrectDataWater, batchSize = 1000) {
    const correctedData = [];
    const changes = [];
    const correctDataWaterHash = {};

    for (let i = 0; i < correctDataWater.length; i++) {
        const record = correctDataWater[i];
        correctDataWaterHash[record.WAT_PAF_ADDRESS_KEY] = record;
    }

    let batchCorrectedData = [];
    let batchChanges = [];

    for (let i = 0; i < incorrectDataWater.length; i++) {
        const incorrectRecord = incorrectDataWater[i];
        const correctRecord = correctDataWaterHash[incorrectRecord.WAT_PAF_ADDRESS_KEY];
        const recordChanges = [];

        for (const key in incorrectRecord) {
            if (incorrectRecord[key] !== correctRecord[key]) {
                recordChanges.push({
                    field: key,
                    oldValue: incorrectRecord[key],
                    newValue: correctRecord[key]
                });
                incorrectRecord[key] = correctRecord[key];
            }
        }

        batchCorrectedData.push(incorrectRecord);
        batchChanges.push({
            WAT_PAF_ADDRESS_KEY: incorrectRecord.WAT_PAF_ADDRESS_KEY,
            changes: recordChanges
        });

        // Save the batch of corrected data and changes in the database
        if (batchCorrectedData.length === batchSize) {
            await CorrectedAddressData.insertMany(batchCorrectedData);
            // await Changes.insertMany(batchChanges);

            // Clear the batch arrays
            batchCorrectedData = [];
            // batchChanges = [];
        }
    }

    // Save any remaining data in the last batch
    if (batchCorrectedData.length > 0) {
        await CorrectedAddressData.insertMany(batchCorrectedData);
        // await Changes.insertMany(batchChanges);
    }

    return { correctedData, changes };
}

export default correctDataWaterSet;
















// // The function correctDataWaterSet takes in two arguments, correctDataWater and incorrectDataWater, which are arrays of records.
// async function correctDataWaterSet(correctDataWater, incorrectDataWater) {

//     // An array to store the corrected records.
//     const correctedData = [];

//     // An array to store information about changes made to the incorrect data.
//     const changes = [];

//     // An object to store the correct data, where each record's primary key (WAT_PAF_ADDRESS_KEY
//     // ) is used as a key.
//     const correctDataWaterHash = {};

//     // Loop through the correct data and add each record to the correctDataWaterHash object.
//     for (let i = 0; i < correctDataWater.length; i++) {
//         const record = correctDataWater[i];
//         correctDataWaterHash[record.WAT_PAF_ADDRESS_KEY
//         ] = record;
//     }

//     // Loop through the incorrect data and make necessary changes to each record.
//     for (let i = 0; i < incorrectDataWater.length; i++) {
//         const incorrectRecord = incorrectDataWater[i];
//         // Find the correct record for the current incorrect record using the WAT_PAF_ADDRESS_KEY
//         const correctRecord = correctDataWaterHash[incorrectRecord.WAT_PAF_ADDRESS_KEY
//         ];
//         // An array to store information about changes made to the current record.
//         const recordChanges = [];

//         // Loop through the properties of the incorrect record.
//         for (const key in incorrectRecord) {
//             // If the value of the current property in the incorrect record doesn't match the value in the correct record,
//             // make the change and store the information about the change.
//             if (incorrectRecord[key] !== correctRecord[key]) {
//                 recordChanges.push({
//                     field: key,
//                     oldValue: incorrectRecord[key],
//                     newValue: correctRecord[key]
//                 });
//                 incorrectRecord[key] = correctRecord[key];
//             }
//         }

//         // Add the corrected record to the correctedData array.
//         correctedData.push(incorrectRecord);
//         // Add information about changes made to the current record to the changes array.
//         changes.push({
//             WAT_PAF_ADDRESS_KEY
//                 : incorrectRecord.WAT_PAF_ADDRESS_KEY
//             , changes: recordChanges
//         });
//     }
//     // Save the batch of corrected data and changes in the database
//     if (batchCorrectedData.length === batchSize) {
//         await CorrectedAddressData.insertMany(batchCorrectedData);
//         // await Changes.insertMany(batchChanges);

//         // Clear the batch arrays
//         batchCorrectedData = [];
//         // batchChanges = [];
//     }


//     // Save any remaining data in the last batch
//     if (batchCorrectedData.length > 0) {
//         await CorrectedAddressData.insertMany(batchCorrectedData);
//         // await Changes.insertMany(batchChanges);
//     }

//     return { correctedData, changes };
// }



// export default correctDataWaterSet;
