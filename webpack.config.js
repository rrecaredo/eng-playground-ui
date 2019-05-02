const path = require('path');

// For IDE support only

module.exports = {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
        'src': path.resolve(__dirname, 'src'),
    }
};
