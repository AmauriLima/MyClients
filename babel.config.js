module.exports = {
  presets: [
    'babel-preset-expo',
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@services': './src/services',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@components': './src/components',
        },
      },
    ]
  ],
};
