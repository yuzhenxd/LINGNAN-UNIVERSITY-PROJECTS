# 推送到 GitHub（一次性设置）

本地仓库已准备好：`~/Desktop/LINGNAN-UNIVERSITY-PROJECTS`

GitHub 仓库名建议使用：**`LINGNAN-UNIVERSITY-PROJECTS`**  
（GitHub 不支持空格；显示名可在仓库 Description 里写 `LINGNAN UNIVERSITY PROJECTS`。）

## 方式 A — 终端（推荐，已安装 `gh`）

1. 在终端执行（会打开浏览器登录 GitHub，只需一次）：

```bash
gh auth login
```

按提示选：GitHub.com → HTTPS → Login with a web browser。

2. 创建远程仓库并推送：

```bash
cd ~/Desktop/LINGNAN-UNIVERSITY-PROJECTS
gh repo create LINGNAN-UNIVERSITY-PROJECTS --public --description "LINGNAN UNIVERSITY PROJECTS" --source=. --remote=origin --push
```

若仓库名已被占用，改成例如 `LINGNAN-UNIVERSITY-PROJECTS-homework` 再执行一次。

## 方式 B — 你已在 Chrome 登录 GitHub

1. 打开：https://github.com/new  
2. Repository name：`LINGNAN-UNIVERSITY-PROJECTS`  
3. Description：`LINGNAN UNIVERSITY PROJECTS`  
4. 选 Public 或 Private → **不要**勾选 “Add a README”（本地已有）→ Create repository  
5. 在终端执行 GitHub 页面上 “push an existing repository” 里的命令，或：

```bash
cd ~/Desktop/LINGNAN-UNIVERSITY-PROJECTS
git remote add origin https://github.com/你的用户名/LINGNAN-UNIVERSITY-PROJECTS.git
git push -u origin main
```

## 以后每次交作业

```bash
cd ~/Desktop/LINGNAN-UNIVERSITY-PROJECTS
# 在 CDS-703/ 下新建或修改作业文件夹后：
git add .
git commit -m "CDS-703: 简短说明本次作业"
git push
```
