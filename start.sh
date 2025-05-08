#!/bin/bash

# In ra thông báo để biết quá trình đang bắt đầu
echo "Starting up the containers..."

# Chạy docker-compose up với option --build để đảm bảo build lại image trước khi chạy
docker-compose up --build
