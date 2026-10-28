# OpenCV教學網站（專案藍圖 / AGENTS.md）

> 跨 Agent 通用的專案說明。每次接手先讀本檔與 `handoff.md`；變更歷史見 `CHANGELOG.md`，決策原因見 `docs/decisions.md`。

## 專案簡介

製作 OpenCV 教學網站，第一階段以展示課程內容為主。

## 技術棧與版本

- 原生 HTML、CSS、JavaScript。
- 採用現代瀏覽器標準；具體支援範圍待確認。
- 網站本身無第三方 JavaScript 套件；學生的 Python 練習使用 uv 管理套件。

## 常用指令

- 預覽：直接以瀏覽器開啟 `index.html`。
- 語法檢查：`node --check app.js`。
- 原生靜態網站不需建置。

## 三層邊界

- **永遠要做**：維持課程內容正確、頁面易讀且可用鍵盤操作。
- **要先問我**：公開發布網站、刪除既有課程、大幅改寫課程內容。
- **絕對不要做**：上傳個資或金鑰。

## 目標與路線圖

- [x] 建立跨電腦、跨 AI 工具的專案交接基礎。
- [x] 規劃課程內容與網站頁面。
- [x] 建立並驗證第一版課程展示網站。
- [ ] 依教師試用回饋調整教材及範例提示詞。

## 資料夾結構

- `AGENTS.md`：專案藍圖與工作約定。
- `handoff.md`：目前進度與下一步。
- `CHANGELOG.md`：變更歷史。
- `docs/decisions.md`：重要決策紀錄。
- `.agent/_templates/`：任務計畫與交付紀錄範本。
- `index.html`、`styles.css`、`app.js`：教學網站。
- `assets/`：課程概念示意圖。
- `README.md`：預覽與維護說明。

## Session 開始時必讀

依序閱讀 `handoff.md`、`CHANGELOG.md`、`docs/decisions.md`；與過往任務相關時再讀 `.agent/`。純文字或小型單檔調整可略過後兩者。

## 任務文件工作流程

預期修改 3 個以上檔案、涉及架構／資料結構／API，或使用者要求先規劃時，先在 `.agent/<YYYY-MM-DD>_<task-slug>/` 建立 `implementation_plan.md`，供使用者審核後再執行。完成後寫 `walkthrough.md`。小型修復可直接執行並記入 `CHANGELOG.md`。

## 收工與同步

- 收工時更新路線圖與 `handoff.md`，在 `CHANGELOG.md` 記錄事實；重要方案的理由另記於 `docs/decisions.md`。
- 專案與 `.agent/` 任務紀錄透過目前的 OneDrive 資料夾同步，供其他電腦及 AI 工具接手。
- 修改共用檔案前先讀最新內容。所有回應與文件使用繁體中文。
