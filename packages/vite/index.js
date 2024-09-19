// import { Plugin } from 'vite'
function createIconPlugin() {
    return {
        name: 'vite:icon',
        configResolved: function (resolvedConfig) {
        },
        resolveId: function (id) {
            console.log(id);
            return null;
        },
        configureServer: function (server) {
            server.middlewares.use(function (req, res, next) {
                console.log(req);
                next();
            });
        }
    };
}

export { createIconPlugin };
