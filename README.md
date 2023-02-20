## Vite构建React TypeScript版

- 创建 安装依赖，文件目录为react-vite-ts
```
yarn create vite react-vite-ts
cd react-vite-ts
yarn

yarn dev
```

- 修改vite.coinfig.ts，配置@做别名
```
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```
- 在tsconfig.json中`compilerOptions`添加paths
```
"compilerOptions": {
    ....
    "paths": {
        "@/*": [
        "./src/*"
        ]
    }
}
```
- 添加`react-router-dom`和`types`，然后在main.tsx引入模块和添加router
```
yarn add react-router-dom
yarn add @types/react-router-dom -D
```
```
<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>
```
- 新建一个test页面，然后添加到routes
```

```