// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    if (context.type === 'before') {
      let body = context.data;
      try {
        if (body && body.token && body.data) {
          const parsedData = body.data;
          let email = '';
          parsedData.forEach(dataToVerify => {
            email = dataToVerify.target.data;
          });
          context.app.service('bloom').create({ 'status': 'true', 'email': email, 'token':body.token });
          context.data = {
            success: true,
            token: body.token
          };
        } else {
          context.app.service('bloom').create({ 'token':body.token, status: 'false' });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Encountered an error while receiving data', {
          error,
        });
        context.app.service('bloom').create({'token':body.token, 'status': 'false' });
        //context.app.service('bloom').emit('changed',{'status':'false'});
        context.data = { success: 'false' };
      }
      return context;
    }
    else {
      return context;
    }
  };
};
