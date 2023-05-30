# git命令

## 01.关联远程仓库

1. 没有仓库时

   ```c
   mkdir aa (文件夹名称)
   cd aa (文件夹名称，如果有文件夹，则不需要这两步)
   git init (必需操作)
   touch README.md
   git add README.md
   git commit -m "first commit" (以上三步是用于检查是否能正确推送)
   git remote add origin https://gitee.com/Augustus321/aa.git (必需操作，后面是仓库地址)
   git push -u origin "master" (必需操作)
   ```

2. 已有仓库时

   ```c
   git remote add origin https://gitee.com/Augustus321/aa.git
   git push -u origin "master"
   ```

## 02.推送远程仓库

