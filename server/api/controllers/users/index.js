module.exports = {
    async fn() {
        await sails.helpers.utils.logApi(this.req.isSocket, `GET /api/users : users/index`)

        const users = await sails.helpers.users.getMany();

          return {
              items: users,
        };
    },
};
