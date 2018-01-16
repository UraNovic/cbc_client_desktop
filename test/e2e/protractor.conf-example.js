exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'firefox'
  },
  baseUrl: 'http://local.cbctrade.com/index_debug.html',

  // Credentials of a funded test account
  user: {
    username: '',
    password: '',
    // Blobvault url
    url: '',
    // Login once, and copy these from your local storage "cbc_auth"
    keys: {
      "id":"",
      "crypt":""
    }
  },

  // cbc address to send cbc to
  counterparty: ''
};