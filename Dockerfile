# 使用官方Node镜像
FROM node:22-alpine

# 设置工作目录
WORKDIR app

# 复制package文件并安装依赖
#COPY package*.json ./
#RUN npm install

# 复制项目文件
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["node", ".output/server.index.mjs"]

