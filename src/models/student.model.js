export default (sequelize, DataTypes) =>
    sequelize.define('Student', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });
