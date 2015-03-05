module.exports = {


  friendlyName: 'Get Klout id',


  description: 'Get the Klour id for a user given her Twitter screen name.',


  extendedDescription: '',


  inputs: {


  },


  defaultExit: 'success',


  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    success: {
      description: 'Done.',
    },

  },


  fn: function (inputs,exits) {
    return exits.success();
  },



};
