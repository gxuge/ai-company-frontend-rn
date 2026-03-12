# RN 项目运行说明（Expo）

本项目是 **Expo + React Native（expo-router）**。

## 1. 环境准备

- Node.js：建议 `18.18+` 或 `20 LTS`
- npm：建议 `9+`
- 手机安装 **Expo Go**（可选，用于真机调试）
- Android 模拟器（Android Studio）或 iOS 模拟器（仅 macOS）

## 2. 安装依赖

在项目根目录执行：

```bash
npm install
```

> 当前仓库已有 `package-lock.json`，默认使用 `npm`。

## 3. 启动项目

### 启动开发服务

```bash
npm run start
```

也可以直接执行 `npx expo start`。启动后在同一局域网下用手机 Expo Go 扫码，即可直接预览。

### 直接在 Android 启动

```bash
npm run android
```

### 直接在 iOS 启动（仅 macOS）

```bash
npm run ios
```

### 启动 Web

```bash
npm run web
```

## 4. 调试方式

执行 `npm run start` 后，可在终端交互界面中：

- 按 `a`：打开 Android
- 按 `i`：打开 iOS（仅 macOS）
- 按 `w`：打开 Web
- 扫码：用 Expo Go 在真机运行

## 5. 常见问题

### 端口被占用

按提示切换端口，或先结束占用 8081 端口的进程。

### 缓存问题（白屏/资源异常）

```bash
npx expo start -c
```

### 依赖异常

```bash
rm -rf node_modules package-lock.json
npm install
```

Windows PowerShell 可用：

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

## 6. 已确认的项

- Expo CLI 版本：`54.0.23`
- `package.json` 脚本：`start / android / ios / web`
