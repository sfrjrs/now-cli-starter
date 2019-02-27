module.exports = (req, res) => {
    const reply = {
        message: 'This is an example of a Node.js API. I\'m not sure yet how all this works.' 
    };

    res.end(JSON.stringify(reply));
};