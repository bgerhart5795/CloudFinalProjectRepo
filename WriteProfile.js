const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event, context, callback) => {
    // Captures the requestId from the context message
    const requestId = context.awsRequestId;

    // Handle promise fulfilled/rejected states
    await createProfile(event, requestId).then(() => {
        callback(null, {
            statusCode: 201,
            body: 'success'
            
        });
    }).catch((err) => {
        console.error(err)
    })
};

// Function createProfile
// Writes message to DynamoDb table Profile
function createProfile(event, requestId) {
    var data = JSON.parse(JSON.stringify(event, null, 2));
    const params = {
        TableName: 'Profile',
        Item: {
            'ProfileID' : requestId,
            'Name' : data.Name,
            'Age' :  data.Age,
            'Image' : data.Image,
            'Music' : data.Music,
            'Motto' : data.Motto
         
        }
    }
    return ddb.put(params).promise();
}
