module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    ['@babel/plugin-proposal-export-namespace-from'],
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@lib': './src/lib',
          '@apis': './src/apis',
          '@storages': './src/storages',
        },
      },
    ],
  ],
};
