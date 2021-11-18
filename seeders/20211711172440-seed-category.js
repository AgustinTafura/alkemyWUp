var categories = [
    'category1', 'category2', 'category3'
]

module.exports = {
    up: async (queryInterface, Sequelize) => {

        for (const index in categories) {
            await queryInterface.bulkInsert('Categories', [{
                name: categories[index],
            }]);
        }
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};