const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // production(default) 모드는 배포용으로 압축, 난독화, 최적화 등의 작업
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // test : 어떤 파일에 적용할지 확장자 작성
        exclude: '/node_modules/', // exclude : 로더에서 제외할 파일 설정
        loader: 'babel-loader', // loader : 적용할 로더가 1개라면 loader로 설정
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // use : 적용할 로더가 2개 이상이면 use 배열로 설정
        // loader는 뒤에서 부터 읽는다.
        // css 파일들을 읽어서 style 태그로 만들어줌
        // style태그가 아닌 css파일로 번들링하고 싶을 때는 MiniCssExtractPlugin.loader 사용
      },
      {
        test: /\.(ttf|gif|jpe?g|png|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 번들링을 할 때마다 이전 번들링 결과를 제거. 번들 파일 만들 때 사용
    new HtmlWebpackPlugin({
      // HTML 파일에 번들링된 자바스크립트 파일을 삽입해주고 번들링된 결과가 저장되는 폴더에 옮김.
      template: './public/index.html',
    }),
  ],
  entry: './src/index.js', // 웹팩을 실행할 대상 파일
  output: {
    // 웹팩의 결과물에 대한 정보
    path: path.resolve(__dirname, './dist'), // 결과물 경로
    filename: '[name].[chunkhash].js', // 결과물 파일명 // chunk로 나눠진 파일들 이름에 hash를 넣는다.
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime', // runtime을 기준으로 chunk한다. (*chunk : 파일이 몇개의 형태로 분리되어 있는 형태)
    },
  },
  resolve: {
    // 확장자를 생략해도 인식하게 함
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-cheap-source-map', // 번들링된 파일에서 에러 위치 확인
  devServer: {
    // devServer 적용 시, 속성
    publicPath: '/',
    historyApiFallback: true,
    overlay: true,
    hot: true,
  },
};
