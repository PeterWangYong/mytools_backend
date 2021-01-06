module.exports = {
  // 通过preset使用一组插件
  presets: [
    [
      // preset包名
      '@babel/preset-env',
      // preset的Options
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
