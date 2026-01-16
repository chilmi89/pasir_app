import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gray-800 py-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Login Pasir App
          </h1>
          <p className="text-gray-300 mt-1 text-sm md:text-base">
            Sistem Manajemen Tambang Pasir
          </p>
        </div>

        {/* Form */}
        <div className="p-6 md:p-8">
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@contoh.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              Masuk
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 py-4 text-center border-t border-gray-200">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Pasir App
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;