let AWS = require('aws-sdk');
let fs = require('fs');
let S3 = new AWS.S3({apiVersion: '2006-03-01'});

async function getBucketList(bucketName) {
    return new Promise( async (resolve, reject) => {
        const params = { Bucket: bucketName };

        try {
            S3.listObjects(params, (err, data) => {
                data ? resolve(data.Contents) : reject(err);
            });
        } catch (error) {
            return reject(error);
        }
    })
}

async function createDir() {
    
}

// async function main() {
//     const lambdaTmpPath = '/tmp';
//     const bucketName = 's3documentfolder';

//     let bucketList = await getBucketList(bucketName);

//     console.log(bucketList);
// }

// main();

exports.handler = async function(event, context, callback) {
    const lambdaTmpPath = '/tmp';
    const bucketName = 's3documentfolder';

    let bucketList = await getBucketList(bucketName);

    console.log(bucketList);
 };