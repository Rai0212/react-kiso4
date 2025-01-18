// 参考: https://zenn.dev/b1essk/articles/ssr-with-react-express

const express = require('express');
const app = express();
const PORT = 9000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

// app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
