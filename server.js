const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 提供静态文件
app.use(express.static('public'));

// 启动服务器
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});