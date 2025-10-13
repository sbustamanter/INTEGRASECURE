import FormRecommendation from "@/components/FormRecommendation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              🛡️ Ciberseguridad y IA en la Banca
            </h1>
            <p className="text-xl text-blue-100 animate-slide-up">
              Protección avanzada contra fraudes bancarios con inteligencia artificial
            </p>
            <div className="mt-6 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-medium">
                ✨ Tecnología de vanguardia para tu seguridad
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Tabs */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
            <TabsTrigger
              value="info"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300 rounded-lg font-medium"
            >
              📚 Información
            </TabsTrigger>
            <TabsTrigger
              value="threats"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300 rounded-lg font-medium"
            >
              ⚠️ Amenazas
            </TabsTrigger>
            <TabsTrigger
              value="protection"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white transition-all duration-300 rounded-lg font-medium"
            >
              🔒 Protección
            </TabsTrigger>
          </TabsList>

          {/* Tab: Información */}
          <TabsContent value="info" className="space-y-8 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                      🏦
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Ciberseguridad en la Banca Moderna
                    </h2>
                  </div>
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p>
                      La industria bancaria enfrenta desafíos sin precedentes en materia de ciberseguridad.
                      Con el aumento exponencial de las transacciones digitales, los bancos han tenido que
                      fortalecer sus defensas contra amenazas cada vez más sofisticadas.
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-800">
                        📈 Los ciberataques contra instituciones financieras han aumentado un 238% en los últimos dos años.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                      🤖
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      IA: El Nuevo Guardián Digital
                    </h2>
                  </div>
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p>
                      La Inteligencia Artificial ha revolucionado la forma en que los bancos detectan y
                      previenen fraudes. Los sistemas de IA pueden analizar millones de transacciones
                      en tiempo real, identificando patrones sospechosos.
                    </p>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <p className="font-semibold text-purple-800">
                        🧠 Algoritmos de aprendizaje automático que se adaptan constantemente a nuevas amenazas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 border border-blue-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 animate-pulse">
                      🛡️
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Protégete del Fraude Bancario
                    </h2>
                    <p className="text-gray-600">
                      Recibe consejos personalizados y actualizados sobre cómo mantener
                      tus finanzas seguras en el mundo digital.
                    </p>
                  </div>

                  <FormRecommendation />

                  {/* Enlace a la página de fraudes detallada */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-200">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-red-800 mb-2">
                        🚨 ¿Necesitas Información Más Detallada?
                      </h3>
                      <p className="text-red-700 text-sm mb-4">
                        Accede a nuestra guía completa con 16 tipos de fraude, casos reales de Chile y pasos específicos de prevención
                      </p>
                      <a
                        href="/fraudes"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="mr-2">⚠️</span>
                        Centro Anti-Fraude Completo
                        <span className="ml-2">🇨🇱</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab: Amenazas */}
          <TabsContent value="threats" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🎣", title: "Phishing Bancario", desc: "Emails y sitios web falsos que imitan a tu banco", color: "from-red-500 to-pink-500" },
                { icon: "💳", title: "Fraude con Tarjetas", desc: "Uso no autorizado de información de tarjetas", color: "from-orange-500 to-red-500" },
                { icon: "📞", title: "Estafas Telefónicas", desc: "Llamadas fraudulentas solicitando datos bancarios", color: "from-yellow-500 to-orange-500" },
                { icon: "🆔", title: "Robo de Identidad", desc: "Suplantación de identidad para acceder a cuentas", color: "from-purple-500 to-red-500" },
                { icon: "🦠", title: "Malware Bancario", desc: "Software malicioso que roba credenciales", color: "from-red-600 to-purple-600" },
                { icon: "🎭", title: "Ingeniería Social", desc: "Manipulación psicológica para obtener información", color: "from-pink-500 to-red-500" }
              ].map((threat, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-red-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${threat.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                    {threat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{threat.title}</h3>
                  <p className="text-gray-600 text-center">{threat.desc}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Tab: Protección */}
          <TabsContent value="protection" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl border border-green-200">
                  <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">🔐</span>
                    Defensas con IA
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Detección de anomalías en tiempo real",
                      "Autenticación biométrica avanzada",
                      "Análisis de comportamiento de usuario",
                      "Encriptación adaptativa",
                      "Monitoreo predictivo de amenazas"
                    ].map((defense, index) => (
                      <div key={index} className="flex items-center p-3 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                        <span className="text-gray-700">{defense}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl border border-blue-200">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">🚀</span>
                  El Futuro de la Seguridad
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    La convergencia entre ciberseguridad e inteligencia artificial está creando un
                    ecosistema financiero más seguro y resiliente.
                  </p>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Tecnologías Emergentes:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><span className="text-blue-500 mr-2">⚡</span> IA Cuántica</li>
                      <li className="flex items-center"><span className="text-blue-500 mr-2">🔗</span> Blockchain Avanzado</li>
                      <li className="flex items-center"><span className="text-blue-500 mr-2">🤖</span> Sistemas Autónomos</li>
                      <li className="flex items-center"><span className="text-blue-500 mr-2">🧬</span> Biometría Molecular</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              🛡️
            </div>
          </div>
          <p className="text-gray-300 text-lg">
            © 2024 Ciberseguridad Bancaria. Información educativa sobre seguridad financiera digital.
          </p>
          <p className="text-blue-300 mt-2">
            Protegiendo tu futuro financiero con tecnología de vanguardia
          </p>
        </div>
      </footer>
    </div>
  );
}