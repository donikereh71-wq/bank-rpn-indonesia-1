export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-pink-50 p-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            BANK RPN INDONESIA
          </h1>
          <p className="text-pink-100">
            Selamat datang di aplikasi perbankan kami
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <p className="text-gray-700 text-center">
            Aplikasi Bank RPN Indonesia untuk Pi Network
          </p>
          <p className="text-gray-500 text-sm text-center mt-4">
            Domain: rpnbank.pi
          </p>
        </div>
      </div>
    </div>
  );
}
