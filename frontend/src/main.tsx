import "antd/dist/reset.css";
import { App as AntApp, ConfigProvider, theme } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          // 主操作用近黑色，亮底上最克制、最显质感
          colorPrimary: "#1f2329",
          colorSuccess: "#16a34a",
          colorWarning: "#d97706",
          colorError: "#dc2626",
          colorInfo: "#4f46e5",
          colorBgBase: "#f7f8fa",
          colorBgContainer: "#ffffff",
          colorBgElevated: "#ffffff",
          colorText: "#1a1c20",
          colorTextSecondary: "#6a707c",
          colorBorder: "#e8eaef",
          colorBorderSecondary: "#f3f4f6",
          borderRadius: 10,
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', system-ui, sans-serif",
          fontFamilyCode:
            "'JetBrains Mono', 'SFMono-Regular', 'Cascadia Code', Consolas, 'Liberation Mono', monospace",
          boxShadow: "0 1px 3px rgba(16, 24, 40, 0.05), 0 8px 24px rgba(16, 24, 40, 0.06)",
          boxShadowSecondary: "0 1px 2px rgba(16, 24, 40, 0.05)"
        },
        components: {
          Button: {
            controlHeightLG: 42,
            primaryShadow: "0 1px 2px rgba(16, 24, 40, 0.08)",
            defaultShadow: "0 1px 2px rgba(16, 24, 40, 0.05)"
          },
          Input: {
            activeBorderColor: "#1f2329",
            hoverBorderColor: "#d8dbe3"
          }
        }
      }}
    >
      <AntApp>
        <App />
      </AntApp>
    </ConfigProvider>
  </React.StrictMode>
);
