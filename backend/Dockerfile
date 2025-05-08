# Chọn base image chính thức của Node.js
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json trước để tận dụng cache layer (nên nếu bạn chỉ sửa code (không sửa `package.json`), thì không cần `npm install` lại → build nhanh hơn)
COPY package*.json ./

# Cài đặt các dependency
RUN npm install

# Sao chép toàn bộ mã nguồn vào container (thư mục /app, do đã config với WORKDIR /app)
COPY . .

# Expose cổng mà app lắng nghe
EXPOSE 5050

# Lệnh chạy app
CMD ["node", "index.js"]
