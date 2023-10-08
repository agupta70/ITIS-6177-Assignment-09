export const handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(event.queryStringParameters.keyword +' from Aditya Kumar Gupta!'),
    };
    return response;
};
