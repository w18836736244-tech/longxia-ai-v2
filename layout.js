export const metadata = {
  title: "龙虾AI",
  description: "AI聊天",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
