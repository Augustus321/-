# git命令

## 01.关联远程仓库

1. 没有本地仓库时

   ```c
   mkdir aa (创建一个文件夹，aa 为文件夹名)
   cd aa (指定进入该目录，aa 为文件夹名称，如果有文件夹，则不需要这两步)
   git init (必需操作)
   touch README.md
   git add README.md
   git commit -m "first commit" (以上三步是用于检查是否能正确推送)
   git remote add origin https://gitee.com/Augustus321/aa.git (必需操作，后面是仓库地址)
   git push -u origin "master" (必需操作，第一次推送要写 -u ，相当于将本地的 master 分支和远程的 master 分支关联)
   ```

2. 没有本地仓库时，直接找一个空文件夹克隆拉取

   ```c
   git clone https://gitee.com/Augustus321/aa.git
   ```

3. 已有本地仓库时

   ```c
   git remote add origin https://gitee.com/Augustus321/aa.git
   git push -u origin "master"
   ```

## 02.推送远程仓库

```c
git add .
git commit -m "更新说明" (这两步为必需操作)
git pull (这里拉取一下，以防冲突，最好是在开始写项目前拉取一下)
git push (普通推送)
git push origin 分支名 (推送已有的分支)
git push --set-upstream origin 分支名 (本地有该分支，但远程仓库的推送方式)
```

## 03.操作分支

### 1.新建分支

```c
git branch 分支名
```

### 2.切换分支

```c
git checkout 分支名
```

### 3.新建并切换分支

```c
git checkout -b 分支名
```

### 4.查看分支

```c
git branch (列出本地已经存在的分支，当前分支有 * 号标记)
git branch -r (查看远程版本库的分支列表)
git branch -a (晰所有分支列表，remotes/开头的表示远程分支)
```

### 5.删除分支

```c
git branch -d 分支名 (删除本地分支，不能删除当前所在的分支，删除前先切换分支)
git branch -D 分支名 (如果报错：The branch '分支名' is not fully merged.意思是：分支未完全合并。这时可以使用 -D 强制删除)
git push origin :分支名 (删除远程分支，注意前面的冒号)
```

## 04.拉取远程仓库代码

```c
git pull (普通拉取，建议每次开始写项目前都拉取一下，以防冲突)
git pull origin 远程分支名 (本地分支名默认和远程分支名一样)
git pull origin 远程分支名:本地分支名 (指定远程分支和本地分支)
```

## 05.合并分支

1. 完成自己的项目并提交

   ```c
   git add .
   git commit -m "已完成某功能，提交到该分支"
   git push -u origin 分支名称
   ```

2. 切换到master分支

   ```c
   git checkout master
   ```

3. 如果有其他人开始，就先把master分支的代码拉一下（尽量每次都拉一下）

   ```c
   git pull origin master
   ```

4. 将分支代码合并到master

   ```c
   git merge 分支名称
   ```

5. 查看状态

   ```c
   git status
   ```

6. 推送到远程仓库

   ```c
   git push origin master
   ```
