#!/bin/bash

# 检查是否传入了年月和目录参数
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "请提供年月和目录作为参数。"
  echo "用法: bash create_markdown_files.sh YYYY-MM directory"
  exit 1
fi

# 获取传入的年月和目录
year_month=$1
directory=$2

# 检查目录是否存在
if [ ! -d "$directory" ]; then
  echo "目录不存在：$directory"
  exit 1
fi

# 获取年月中的年份和月份
year=$(echo $year_month | cut -d'-' -f1)
month=$(echo $year_month | cut -d'-' -f2)

# 计算该月的天数
days_in_month=$(date -d "$year_month-01 +1 month -1 day" "+%d")

# 循环创建 1.md 到 $days_in_month.md 文件
for i in $(seq 1 $days_in_month)
do
  touch $directory/$i.md
done

echo "Markdown 文件已创建完毕！"

# 2024-09 月，确定有多少天， October 创建目录，相对路径
# bash create_markdown_files.sh 2024-09 October
