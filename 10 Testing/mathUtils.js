module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    fetchData: () => {
        return new Promise(resolve => {
            setTimeout(() => resolve('Data from external service'), 1000);
        });
    }
};