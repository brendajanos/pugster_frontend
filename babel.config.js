console.log('helloWorld');
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'transform-inline-environment-variables',
      {
        include: ['MAPBOX_TOKEN'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
