# 使用 node 長期支援版
FROM node:lts-alpine

# 設定工作目錄
WORKDIR /app

# 安裝 pnpm
RUN npm install -g pnpm

# 複製 package.json 和 package-lock.json 至工作目錄
COPY package*.json ./

# 安裝依賴
RUN pnpm install

# 複製所有文件到工作目錄
COPY . .

# 暴露應用程式的端口
EXPOSE 3000

# 啟動應用程式
# CMD ["node", ".output/server/index.mjs"] // 編譯後的檔案
CMD ["pnpm", "run", "dev"]