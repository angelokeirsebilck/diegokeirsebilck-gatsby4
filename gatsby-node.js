const path = require(`path`);
const slugify = require('slugify');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;

  await createResolvers({
    STRAPI_UploadFile: {
      imageFile: {
        type: `File`,
        // projection: { url: true },
        async resolve(source, args, context, info) {
          let sourceUrl = `${process.env.STRAPI_URL}${source.url}`;

          if (process.env.NODE_ENV === 'production') {
            sourceUrl = source.url;
          }

          return createRemoteFileNode({
            url: sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};
