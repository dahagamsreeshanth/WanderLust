class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode=statusCode;
        this.mesasge=message;

    }
}

module.exports= ExpressError;