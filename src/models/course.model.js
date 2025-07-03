export default (sequelize, DataTypes) =>
    sequelize.define('Course', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
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
