module.exports = {
    friendlyName: 'Log api',
    description: 'log API input',

    inputs: {
        isSocket: {
            type: 'boolean',
            defaultsTo: false
        },
        msg: {
            type: 'string',
            defaultsTo: '',
        }
    },

    exits: {
        success: {
          description: 'All done.',
        },
    },


    fn: async function (inputs) {
        let stringArray = ["silly", "verbose", "info"]

        if (stringArray.indexOf(sails.config.log.level) > -1) {
            if (inputs.isSocket)
                sails.log('socket -> ' + inputs.msg)
            else
                sails.log('http -> ' + inputs.msg)
        }
    }

}

