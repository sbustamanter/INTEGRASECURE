"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface FormData {
  nombre: string;
  email: string;
  fraudTypes: string[];
}

const fraudTypes = [
  { id: "phishing", label: "🎣 Phishing Bancario", desc: "Emails y sitios falsos" },
  { id: "cards", label: "💳 Fraude con Tarjetas", desc: "Uso no autorizado de tarjetas" },
  { id: "phone", label: "📞 Estafas Telefónicas", desc: "Llamadas fraudulentas" },
  { id: "identity", label: "🆔 Robo de Identidad", desc: "Suplantación de identidad" },
  { id: "malware", label: "🦠 Malware Bancario", desc: "Software malicioso" },
  { id: "social", label: "🎭 Ingeniería Social", desc: "Manipulación psicológica" },
  { id: "atm", label: "🏧 Fraudes en Cajeros", desc: "Skimming y clonación" },
  { id: "investment", label: "📈 Estafas de Inversión", desc: "Esquemas fraudulentos" }
];

export default function FormRecommendation() {
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

  const handleFraudTypeChange = (fraudTypeId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      fraudTypes: checked
        ? [...prev.fraudTypes, fraudTypeId]
        : prev.fraudTypes.filter(id => id !== fraudTypeId)
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
      const response = await fetch("/api/send-email", {
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
          text: "¡Perfecto! Te hemos enviado las recomendaciones personalizadas a tu email.",
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

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
          <span className="mr-2">🛡️</span>
          Recomendaciones Personalizadas
        </CardTitle>
        <CardDescription className="text-center text-blue-100">
          Selecciona los tipos de fraude sobre los que quieres recibir información específica
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
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
                className="border-2 border-blue-200 focus:border-blue-500 rounded-lg"
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
                className="border-2 border-blue-200 focus:border-blue-500 rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-gray-700 font-semibold text-lg">
              ¿Sobre qué tipos de fraude quieres recibir información? 
              <span className="text-sm text-gray-500 font-normal">(Selecciona uno o más)</span>
            </Label>

            <div className="grid md:grid-cols-2 gap-3">
              {fraudTypes.map((fraudType) => (
                <div
                  key={fraudType.id}
                  className={`flex items-start space-x-3 p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                    formData.fraudTypes.includes(fraudType.id)
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300 shadow-md"
                      : "bg-white border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <Checkbox
                    id={fraudType.id}
                    checked={formData.fraudTypes.includes(fraudType.id)}
                    onCheckedChange={(checked) => handleFraudTypeChange(fraudType.id, checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={fraudType.id}
                      className="text-sm font-semibold text-gray-800 cursor-pointer block"
                    >
                      {fraudType.label}
                    </label>
                    <p className="text-xs text-gray-600 mt-1">{fraudType.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {message && (
            <div
              className={`p-4 rounded-xl text-sm font-medium border-2 ${
                message.type === "success"
                  ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border-green-300"
                  : "bg-gradient-to-r from-red-50 to-pink-50 text-red-800 border-red-300"
              }`}
            >
              <div className="flex items-center">
                <span className="mr-2">
                  {message.type === "success" ? "✅" : "❌"}
                </span>
                {message.text}
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span className="mr-2">📧</span>
                Recibir Recomendaciones Personalizadas
              </div>
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200">
          <div className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <p className="text-sm font-semibold text-yellow-800 mb-1">
                ¿Por qué personalizar?
              </p>
              <p className="text-xs text-yellow-700">
                Cada tipo de fraude requiere estrategias de protección específicas. 
                Al seleccionar tus áreas de interés, recibirás consejos más relevantes y efectivos.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}