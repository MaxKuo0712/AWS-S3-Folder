let AWS = require('aws-sdk');
let S3 = new AWS.S3({apiVersion: '2006-03-01'});

var params = { 
    Bucket: 's3documentfolder'
}

S3.listObjects(params, (err, data) => {
    if(err)throw err;
    let bucketFolder = data.Contents;

    for (let i = 0; i < bucketFolder.length; i++) {
        if(bucketFolder[i].Size > 0) {
            console.log(bucketFolder[i].Key);
        } else {
            console.log(bucketFolder[i].Key);
        }
    }
});