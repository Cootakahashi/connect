export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl mb-2">Your Company</h1>
          <p>〒123-4567 東京都中央区銀座1-1-1</p>
          <p>電話: 03-1234-5678</p>
          <p>Email: info@yourcompany.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/terms">利用規約</a>
          <a href="/privacy">プライバシーポリシー</a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram-icon.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
