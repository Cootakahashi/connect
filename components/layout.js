import React from "react";

export default function Layout({ children }) {
  return (
    <div className="layout px-40">
      {children}
      <style jsx>{`
        .layout {
          margin-left: auto;
          margin-right: auto;
          max-width: 1200px;
          padding-left: 80px;
          padding-right: 80px;
        }
      `}</style>
    </div>
  );
}
