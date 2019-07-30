module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/assessment-test/' // prod
        : '/', // dev
};