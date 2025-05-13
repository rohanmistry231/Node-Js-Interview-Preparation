module.exports = {
    getUser: (id) => {
        return new Promise(resolve => {
            setTimeout(() => resolve({ id, name: `User${id}` }), 500);
        });
    }
};