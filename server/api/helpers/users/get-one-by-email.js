//
//

module.exports = {
    inputs: {
        email: {
            type: 'string',
            required: true,
        },
    },

    async fn(inputs) {
        const criteria = {
            ['email']: inputs.email
        }

        return User.findOne(criteria)
    }
}
