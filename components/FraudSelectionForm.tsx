"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

interface FormData {
  nombre: string;
  email: string;
  fraudTypes: string[];
}

const fraudTypes = [
  {
    id: "phishing",
    label: "🎣 Phishing Bancario",
    desc: "Emails y sitios web falsos que imitan a tu banco",
    severity: "Crítico",
    frequency: "Muy Alto",
    color: "from-red-500 to-pink-500"
  },
  {
    id: "cards",
    label: "💳 Fraude con Tarjetas",
    desc: "Uso no autorizado de información de tarjetas",
    severity: "Alto",
    frequency: "Alto",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "phone",
    label: "📞 Estafas Telefónicas",
    desc: "Llamadas fraudulentas solicitando datos bancarios",
    severity: "Alto",
    frequency: "Muy Alto",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "identity",
    label: "🆔 Robo de Identidad",
    desc: "Suplantación de identidad para acceder a cuentas",
    severity: "Crítico",
    frequency: "Medio",
    color: "from-purple-500 to-red-500"
  },
  {
    id: "malware",
    label: "🦠 Malware Bancario",
    desc: "Software malicioso que roba credenciales",
    severity: "Crítico",
    frequency: "Alto",
    color: "from-red-600 to-purple-600"
  },
  {
    id: "social",
    label: "🎭 Ingeniería Social",
    desc: "Manipulación psicológica para obtener información",
    severity: "Alto",
    frequency: "Alto",
    color: "from-pink-500 to-red-500"
  },
  {
    id: "atm",
    label: "🏧 Fraudes en Cajeros",
    desc: "Skimming, clonación y dispositivos maliciosos",
    severity: "Alto",
    frequency: "Medio",
    color: "from-blue-500 to-purple-500"
  },
  {
    id: "investment",
    label: "📈 Estafas de Inversión",
    desc: "Esquemas Ponzi y ofertas fraudulentas",
    severity: "Crítico",
    frequency: "Medio",
    color: "from-green-500 to-blue-500"
  },
  {
    id: "smishing",
    label: "📱 Smishing (SMS)",
    desc: "Mensajes de texto fraudulentos con enlaces maliciosos",
    severity: "Alto",
    frequency: "Muy Alto",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "vishing",
    label: "🎙️ Vishing (Voz)",
    desc: "Llamadas automatizadas y grabaciones falsas",
    severity: "Alto",
    frequency: "Alto",
    color: "from-teal-500 to-blue-500"
  },
  {
    id: "romance",
    label: "💕 Estafas Románticas",
    desc: "Fraudes a través de relaciones falsas online",
    severity: "Alto",
    frequency: "Medio",
    color: "from-pink-400 to-rose-500"
  },
  {
    id: "crypto",
    label: "₿ Fraudes Cripto",
    desc: "Estafas con criptomonedas y wallets falsos",
    severity: "Crítico",
    frequency: "Muy Alto",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: "business",
    label: "🏢 Fraude Empresarial",
    desc: "BEC, facturas falsas y transferencias fraudulentas",
    severity: "Crítico",
    frequency: "Alto",
    color: "from-gray-600 to-blue-600"
  },
  {
    id: "elderly",
    label: "👴 Fraudes a Adultos Mayores",
    desc: "Estafas dirigidas específicamente a personas mayores",
    severity: "Alto",
    frequency: "Alto",
    color: "from-purple-400 to-pink-400"
  },
  {
    id: "charity",
    label: "🤲 Fraudes de Caridad",
    desc: "Organizaciones benéficas falsas y donaciones fraudulentas",
    severity: "Medio",
    frequency: "Medio",
    color: "from-green-400 to-teal-500"
  },
  {
    id: "lottery",
    label: "🎰 Estafas de Lotería",
    desc: "Premios falsos y sorteos inexistentes",
    severity: "Medio",
    frequency: "Alto",
    color: "from-yellow-300 to-green-400"
  }
];

export default function FraudSelectionForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    fraudTypes: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFraudTypeToggle = (fraudTypeId: string) => {
    setFormData(prev => ({
      ...prev,
      fraudTypes: prev.fraudTypes.includes(fraudTypeId)
        ? prev.fraudTypes.filter(id => id !== fraudTypeId)
        : [...prev.fraudTypes, fraudTypeId]
    }));
  };

  const handleSelectAll = () => {
    setFormData(prev => ({
      ...prev,
      fraudTypes: fraudTypes.map(f => f.id)
    }));
  };

  const handleClearAll = () => {
    setFormData(prev => ({
      ...prev,
      fraudTypes: []
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.nombre.trim()) {
      setMessage({ type: "error", text: "Por favor, ingresa tu nombre." });
      return false;
    }
    if (!formData.email.trim()) {
      setMessage({ type: "error", text: "Por favor, ingresa tu email." });
      return false;
    }
    const emailRegex = /^[^\s @]+ @[^\s @]+\.[^\s @]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: "error", text: "Por favor, ingresa un email válido." });
      return false;
    }
    if (formData.fraudTypes.length === 0) {
      setMessage({ type: "error", text: "Por favor, selecciona al menos un tipo de fraude." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-fraud-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: `¡Increíble! Te hemos enviado información detallada sobre ${formData.fraudTypes.length} tipos de fraude a tu email. Incluye casos reales, consejos específicos y pasos de prevención.`,
        });
        setFormData({ nombre: "", email: "", fraudTypes: [] });
      } else {
        setMessage({
          type: "error",
          text: result.error || "Hubo un error al enviar el email. Inténtalo de nuevo.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error de conexión. Por favor, verifica tu conexión a internet e inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Crítico": return "bg-red-500";
      case "Alto": return "bg-orange-500";
      case "Medio": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case "Muy Alto": return "bg-red-400";
      case "Alto": return "bg-orange-400";
      case "Medio": return "bg-yellow-400";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Card className="bg-gradient-to-br from-white to-red-50 border-4 border-red-200 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
            <span className="mr-3">🛡️</span>
            Selección Avanzada de Tipos de Fraude
            <span className="ml-3">⚠️</span>
          </CardTitle>
          <CardDescription className="text-center text-red-100 text-lg">
            Información súper detallada con casos reales, consejos específicos y pasos de prevención
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Personal Information */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">👤</span>
                Información Personal
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-gray-700 font-semibold">Nombre completo</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="border-2 border-blue-300 focus:border-blue-500 rounded-xl text-lg p-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Correo electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu @email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="border-2 border-blue-300 focus:border-blue-500 rounded-xl text-lg p-3"
                  />
                </div>
              </div>
            </div>

            {/* Selection Controls */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-gray-700">
                  Seleccionados: {formData.fraudTypes.length} de {fraudTypes.length}
                </span>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-x-3">
                <Button
                  type="button"
                  onClick={handleSelectAll}
                  variant="outline"
                  className="border-2 border-green-500 text-green-700 hover:bg-green-50"
                >
                  ✅ Seleccionar Todo
                </Button>
                <Button
                  type="button"
                  onClick={handleClearAll}
                  variant="outline"
                  className="border-2 border-red-500 text-red-700 hover:bg-red-50"
                >
                  ❌ Limpiar Todo
                </Button>
              </div>
            </div>

            {/* Fraud Types Selection */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  🎯 Selecciona los Tipos de Fraude que te Preocupan
                </h3>
                <p className="text-gray-600">
                  Cada selección incluye casos reales documentados, consejos específicos y pasos detallados de prevención
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {fraudTypes.map((fraudType) => (
                  <div
                    key={fraudType.id}
                    className={`relative overflow-hidden rounded-2xl border-3 transition-all duration-300 transform hover:scale-105 ${
                      formData.fraudTypes.includes(fraudType.id)
                        ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-400 shadow-xl ring-4 ring-blue-300"
                        : "bg-white border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${fraudType.color} opacity-10`}></div>

                    <div className="relative p-5">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <Checkbox
                          id={fraudType.id}
                          checked={formData.fraudTypes.includes(fraudType.id)}
                          onCheckedChange={() => handleFraudTypeToggle(fraudType.id)}
                          className="mt-1"
                        />
                        <div className="flex flex-col space-y-1">
                          <Badge className={`${getSeverityColor(fraudType.severity)} text-white text-xs px-2 py-1`}>
                            {fraudType.severity}
                          </Badge>
                          <Badge className={`${getFrequencyColor(fraudType.frequency)} text-white text-xs px-2 py-1`}>
                            {fraudType.frequency}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <label htmlFor={fraudType.id} className="cursor-pointer">
                          <h4 className="font-bold text-gray-800 text-lg leading-tight">
                            {fraudType.label}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {fraudType.desc}
                          </p>
                        </label>
                      </div>

                      {/* Selection Indicator */}
                      {formData.fraudTypes.includes(fraudType.id) && (
                        <div className="absolute top-2 right-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">✓</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Display */}
            {message && (
              <div
                className={`p-6 rounded-2xl text-lg font-medium border-3 ${
                  message.type === "success"
                    ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border-green-400"
                    : "bg-gradient-to-r from-red-50 to-pink-50 text-red-800 border-red-400"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">
                    {message.type === "success" ? "🎉" : "❌"}
                  </span>
                  <div>
                    {message.text}
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mr-4"></div>
                    Preparando tu Información Detallada...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <span className="text-3xl mr-3">📧</span>
                    Recibir Información Súper Detallada
                    <span className="text-3xl ml-3">🚀</span>
                  </div>
                )}
              </Button>
            </div>
          </form>

          {/* Information Box */}
          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-3 border-yellow-300">
            <div className="flex items-start">
              <span className="text-4xl mr-4">💡</span>
              <div>
                <p className="text-lg font-bold text-yellow-800 mb-2">
                  ¿Qué recibirás en tu email?
                </p>
                <ul className="text-yellow-700 space-y-1">
                  <li>📖 <strong>Casos reales documentados</strong> de cada tipo de fraude</li>
                  <li>🛡️ <strong>Consejos específicos</strong> adaptados a cada amenaza</li>
                  <li>📋 <strong>Pasos detallados de prevención</strong> fáciles de seguir</li>
                  <li>📊 <strong>Estadísticas actualizadas</strong> y tendencias</li>
                  <li>🚨 <strong>Señales de alerta</strong> para identificar cada fraude</li>
                  <li>⚡ <strong>Qué hacer si eres víctima</strong> - guía de acción inmediata</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}