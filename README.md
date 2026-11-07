# Pennywise — Student Finance App

React + Vite assignment MVP based on the Pennywise wireframe.

## Run in VS Code
1. Install Node.js 18+.
2. Extract this ZIP and open the `Pennywise-React` folder in VS Code.
3. Open Terminal in VS Code and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL Vite prints (usually http://localhost:5173).

## Build
`npm run build` creates a production build in `dist/`.

## Features
- Dashboard with available balance, monthly budget and savings progress
- Add, edit and delete expenses with categories, dates and notes
- Monthly category breakdown and budget warnings
- Create savings goals and add contributions
- Responsive layout
- Browser localStorage persistence

## Push to GitHub
Create an empty GitHub repository, then run:
```bash
git init
git add .
git commit -m "Build Pennywise student finance app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
Replace the remote URL with your own repository URL.

## Note
This MVP stores data in the browser's localStorage. It does not connect to bank accounts, UPI or a cloud database.
