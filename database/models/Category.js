module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
          },
    
          name: {
            type: DataTypes.STRING(200),
          }
    },
    {
        tableName: 'categories',
        timestamps: false
    })

    Category.associate = (models => {
        Category.hasMany(models.Product, {
            foreignKey: 'categoryId',
            as: 'products'
        })
    })

    return Category
}