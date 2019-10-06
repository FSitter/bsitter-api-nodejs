export default function (sequelize, DataTypes) {
    const sittingRequest = sequelize.define(
        "sittingRequest", // Model Name
        {
            acceptedBabysitter: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            sittingDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            startTime: {
                type: DataTypes.TIME,
                allowNull: false,
            },
            endTime: {
                type: DataTypes.TIME,
                allowNull: false,
            },
            sittingAddress: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM('PENDING', 'CONFIRM', 'CANCEL', 'ONGOING', 'DONE'),
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );

    sittingRequest.associate = function (models) {
        models.sittingRequest.hasMany(models.invitation, {
            foreignKey: 'sittingRequestId',
            sourceKey: 'id'
        }, {
            foreignKey: 'sender',
            sourceKey: 'createdUser'
        });
        models.sittingRequest.hasMany(models.transaction);
    }

    return sittingRequest;
}
