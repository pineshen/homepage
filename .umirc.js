export default {
		exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  targets: {
    ie: 9,
  },
    plugins: [
      [
        'umi-plugin-react', {
          antd: true,
        }
      ],
    ]
  }
  