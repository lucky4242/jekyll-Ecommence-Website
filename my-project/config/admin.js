module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd8cc66dadd8c464d968b9b472f2f7a37'),
  },
});
