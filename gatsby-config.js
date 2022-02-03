require("dotenv").config({
    path: `.env`,
})

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: 'Gatsby Airtable Tutorial 1'
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: process.env.GATSBY_AIRTABLE_API_KEY, // may instead specify via env, see below
                concurrency: 5, // default, see using markdown and attachments for more information
                tables: [
                    {
                        baseId: process.env.GATSBY_AIRTABLE_TABLE_ID,
                        tableName: `MonsterBase`,
                        separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
                        separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
                    }
                ]
            }
        }
    ]
}