//
//
const Errors = {
    NOT_ENOUGH_RIGHTS: {
        notEnoughRights: 'Not enough rights',
    },
    USER_NOT_FOUND: {
        userNotFound: 'User not found',
    },
};

module.exports = {
    inputs: {
        id: {
            type: 'string',
            // regex: /^[0-9]+$/,
            required: true,
        },
    },

    exits: {
        notEnoughRights: {
            responseType: 'forbidden',
        },
        userNotFound: {
            responseType: 'notFound',
        },
    },

    async fn(inputs) {
        await sails.helpers.utils.logApi(this.req.isSocket, `DELETE /api/users/${inputs.id} : users/delete`)

        let user = await sails.helpers.users.getOne(inputs.id);

        if (!user) {
            throw Errors.USER_NOT_FOUND;
        }

        if (user.email === sails.config.custom.defaultAdminEmail) {
            throw Errors.NOT_ENOUGH_RIGHTS;
        }

        user = await sails.helpers.users.deleteOne.with({
            record: user,
            request: this.req,
        });

        if (!user) {
            throw Errors.USER_NOT_FOUND;
        }

        return {
            item: user,
        }
    }
}
