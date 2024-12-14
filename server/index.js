const express = require('express');
const app = express();
const PORT = 9000;

// ルートにアクセスした際のレスポンス
app.get('/', (req, res) => {
  res.send('Hello world');
});

// サーバを起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
