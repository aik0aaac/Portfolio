/**
 * Local環境に本ポートフォリオ用のサーバーを立ち上げるサンプルコード。
 * 参考にさせていただいた記事1: https://pisuke-code.com/node-js-basic-way-to-build-server/
 * 参考にさせていただいた記事2: https://qiita.com/yamachan360/items/38a0d3c06eec1dfc3d6d
 */
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// サーバー立ち上げ
const server = http.createServer(function (req, res) {
  // URLには先頭に「/」が含まれるので除去
  const url = (req.url === '/' ? 'index.html' : req.url.slice(1))
  // URLを元にどのページが呼び出されたのか判定
  if (fs.existsSync(url)) {
    fs.readFile(url, (err, data) => {
      if (!err) {
        res.writeHead(200, {
          // Content-Typeは種類毎に変更
          'Content-Type': getType(url)
        });
        res.end(data);
      } else {
        // ページファイルが読み込めなければ500エラー
        res.statusCode = 500;
        res.end();
      }
    });
  } else {
    // ページファイルが見つからなければ404エラー
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**
 * URL文字列を元に、指定されたリソースがどのContent-typeか返却
 * @param {*} _url URL文字列
 */
function getType(_url) {
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'svg+xml'
  }
  for (let key in types) {
    if (_url.endsWith(key)) {
      return types[key];
    }
  }
  return 'text/plain';
}

