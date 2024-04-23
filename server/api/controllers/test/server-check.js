//
//

module.exports = {
    async fn() {
        await sails.helpers.utils.logApi(this.req.isSocket, `GET /api/test : test/server-check`)

        let curDate = new Date()
        return {
            isSuccess: true,
            payload: {
                serverDate: curDate.getFullYear() + "-" + (curDate.getMonth() + 1) + "-" + curDate.getDate(),
                serverTime: curDate.toLocaleTimeString(),
                random: Math.random(),
                baseUrl: sails.config.custom.baseUrl,
                databaseUrl: sails.config.custom.databaseUrl,
                tokenExpiresIn: sails.config.custom.tokenExpiresIn,
                userAvatarsPath: sails.config.custom.userAvatarsPath,
                userAvatarsUrl: sails.config.custom.userAvatarsUrl,
                projectBackgroundImagesPath: sails.config.custom.projectBackgroundImagesPath ,
                projectBackgroundImagesUrl: sails.config.custom.projectBackgroundImagesUrl ,
                attachmentsPath: sails.config.custom.attachmentsPath ,
                attachmentsUrl: sails.config.custom.attachmentsUrl ,
                defaultAdminEmail: sails.config.custom.defaultAdminEmail ,
                oidcIssuer: sails.config.custom.oidcIssuer ,
                oidcClientId: sails.config.custom.oidcClientId ,
                oidcClientSecret: sails.config.custom.oidcClientSecret ,
                oidcScopes: sails.config.custom.oidcScopes ,
                oidcAdminRoles: sails.config.custom.oidcAdminRoles ,
                oidcRolesAttribute: sails.config.custom.oidcRolesAttribute ,
                oidcIgnoreRoles: sails.config.custom.oidcIgnoreRoles ,
                oidcRedirectUri: sails.config.custom.oidcRedirectUri
            }
        }
    }
}
