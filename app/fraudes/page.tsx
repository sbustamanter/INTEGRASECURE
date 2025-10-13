import FraudSelectionForm from "@/components/FraudSelectionForm";

export default function FraudesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-bounce">
              ⚠️ Centro de Prevención de Fraudes
            </h1>
            <p className="text-2xl text-orange-100 mb-4">
              Protección Especializada Contra Todos los Tipos de Fraude Bancario
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 text-white font-bold text-lg">
                🛡️ 12 Tipos de Fraude Cubiertos
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 text-white font-bold text-lg">
                📚 Casos Reales Incluidos
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center text-gray-800 hover:text-blue-600 transition-colors">
              <span className="text-2xl mr-2">🏠</span>
              <span className="font-semibold">Volver al Inicio</span>
            </a>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-600">Selecciona los fraudes que te preocupan</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introduction Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-white to-orange-50 rounded-3xl shadow-2xl p-8 border-2 border-orange-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              🎯 Información Personalizada y Detallada
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Selecciona los tipos de fraude sobre los que quieres recibir información especializada.
              Cada selección incluye casos reales, consejos específicos y pasos detallados de prevención.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                <div className="text-3xl mb-2">📖</div>
                <h3 className="font-bold text-blue-800">Casos Reales</h3>
                <p className="text-sm text-blue-600">Ejemplos documentados de fraudes actuales</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                <div className="text-3xl mb-2">🛡️</div>
                <h3 className="font-bold text-green-800">Consejos Específicos</h3>
                <p className="text-sm text-green-600">Estrategias adaptadas a cada tipo de amenaza</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200">
                <div className="text-3xl mb-2">📋</div>
                <h3 className="font-bold text-purple-800">Pasos Detallados</h3>
                <p className="text-sm text-purple-600">Guías paso a paso para protegerte</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fraud Selection Form */}
        <FraudSelectionForm />

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 rounded-3xl shadow-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">📊 Estadísticas Alarmantes de Fraude Bancario</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-300 mb-2">$5.8B</div>
              <p className="text-sm text-gray-300">Pérdidas por fraude en 2023</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">238%</div>
              <p className="text-sm text-gray-300">Aumento en ciberataques</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">1 de 4</div>
              <p className="text-sm text-gray-300">Personas han sido víctimas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-300 mb-2">15 seg</div>
              <p className="text-sm text-gray-300">Frecuencia de ataques</p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 animate-pulse">
              ⚠️
            </div>
          </div>
          <p className="text-gray-300 text-lg mb-2">
            © 2024 Centro de Prevención de Fraudes Bancarios
          </p>
          <p className="text-orange-300 font-semibold">
            Tu seguridad financiera es nuestra prioridad 🔒
          </p>
        </div>
      </footer>
    </div>
  );
}