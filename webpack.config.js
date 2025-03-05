module.exports = {
    entry: {
        test: "./test.scss",
    },
    module: {
        rules: [
            // sass
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        ident: "postcss",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "@tailwindcss/postcss",
                                ],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
};
