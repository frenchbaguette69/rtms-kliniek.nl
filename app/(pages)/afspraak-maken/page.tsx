"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check, Calendar, MapPin, User, MessageSquare } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

interface FormData {
  service: string
  location: string
  preferredDate: string
  preferredTime: string
  firstName: string
  infix: string
  lastName: string
  email: string
  phone: string
  dob: string
  postcode: string
  city: string
  message: string
  consent: boolean
}

const initialFormData: FormData = {
  service: "Intake rTMS 30 minuten",
  location: "Heiloo — Kennemerstraatweg 464, unit 1.03, 1851 NG",
  preferredDate: "",
  preferredTime: "",
  firstName: "",
  infix: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  postcode: "",
  city: "",
  message: "",
  consent: false,
}

const steps = [
  { id: 1, title: "Afspraak", icon: Calendar, description: "Kies je behandeling" },
  { id: 2, title: "Locatie & Tijd", icon: MapPin, description: "Wanneer en waar" },
  { id: 3, title: "Gegevens", icon: User, description: "Jouw informatie" },
  { id: 4, title: "Afronding", icon: MessageSquare, description: "Laatste details" },
]

export default function AfspraakMakenPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [state, setState] = useState<FormState>("idle")
  const [error, setError] = useState<string | null>(null)

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.service
      case 2:
        return !!formData.location && !!formData.preferredDate
      case 3:
        return !!(
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.dob &&
          formData.postcode &&
          formData.city
        )
      case 4:
        return formData.consent
      default:
        return false
    }
  }

  async function onSubmit() {
    setState("submitting")
    setError(null)

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const { message } = await res.json().catch(() => ({ message: "Fout bij versturen." }))
        throw new Error(message || "Fout bij versturen.")
      }
      setState("success")
    } catch (err: any) {
      setError(err.message || "Er ging iets mis.")
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <main className="min-h-screen  flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Afspraak aangevraagd!</h1>
          <p className="text-gray-600 mb-6">
            Bedankt! Je aanvraag is verzonden. We nemen spoedig contact met je op om de afspraak te bevestigen.
          </p>
          <button
            onClick={() => {
              setState("idle")
              setCurrentStep(1)
              setFormData(initialFormData)
            }}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Nieuwe afspraak maken
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Afspraak maken</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan hier een intake of rTMS-afspraak. Na verzending nemen we zo snel mogelijk contact met je op om de
            gewenste datum/tijd te bevestigen.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => {
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id
              const isValid = isStepValid(step.id)

              return (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <div className="flex items-center w-full">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted
                          ? "bg-green-600 text-white"
                          : isActive
                            ? "bg-green-600 text-white"
                            : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {isCompleted ? <Check className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                          isCompleted ? "bg-green-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                  <div className="text-center mt-2">
                    <p className={`text-sm font-medium ${isActive ? "text-green-600" : "text-gray-500"}`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-400 hidden sm:block">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Kies je afspraak</h2>
                <p className="text-gray-600">Selecteer het type behandeling dat je wilt boeken</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    value: "Intake rTMS 30 minuten",
                    label: "Intake rTMS",
                    duration: "30 minuten",
                    description: "Eerste kennismaking en intake",
                  },
                  {
                    value: "rTMS 30 minuten",
                    label: "rTMS Behandeling",
                    duration: "30 minuten",
                    description: "Reguliere behandelsessie",
                  },
                  {
                    value: "rTMS kennismaking + gEEG 60 minuten",
                    label: "rTMS + gEEG",
                    duration: "60 minuten",
                    description: "Kennismaking met EEG-meting",
                  },
                ].map((service) => (
                  <label
                    key={service.value}
                    className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                      formData.service === service.value
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="service"
                        value={service.value}
                        checked={formData.service === service.value}
                        onChange={(e) => updateFormData("service", e.target.value)}
                        className="w-5 h-5 text-green-600 mr-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900">{service.label}</h3>
                          <span className="text-sm font-medium text-green-600">{service.duration}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Location & Time */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Locatie & Tijd</h2>
                <p className="text-gray-600">Waar en wanneer wil je langskomen?</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Voorkeurslocatie</label>
                  <select
                    value={formData.location}
                    onChange={(e) => updateFormData("location", e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="Heiloo — Kennemerstraatweg 464, unit 1.03, 1851 NG">
                      Heiloo — Kennemerstraatweg 464, unit 1.03, 1851 NG
                    </option>
                    <option value="Volendam — Heideweg 1B, 1132 DA (Gezondheidscentrum)">
                      Volendam — Heideweg 1B, 1132 DA (Gezondheidscentrum)
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gewenste datum *</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => updateFormData("preferredDate", e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gewenste tijd</label>
                    <input
                      type="time"
                      value={formData.preferredTime}
                      onChange={(e) => updateFormData("preferredTime", e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Personal Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Jouw gegevens</h2>
                <p className="text-gray-600">We hebben wat informatie van je nodig</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Voornaam *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tussenvoegsel</label>
                    <input
                      type="text"
                      value={formData.infix}
                      onChange={(e) => updateFormData("infix", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Achternaam *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mailadres *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefoonnummer *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Geboortedatum *</label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => updateFormData("dob", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postcode *</label>
                    <input
                      type="text"
                      value={formData.postcode}
                      onChange={(e) => updateFormData("postcode", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Plaats *</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateFormData("city", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Final Details */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Laatste details</h2>
                <p className="text-gray-600">Nog eventuele opmerkingen?</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Eventuele opmerking</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Eventuele bijzonderheden, medicatiegebruik of vragen…"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => updateFormData("consent", e.target.checked)}
                      className="w-5 h-5 text-green-600 mt-0.5"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      Ik ga akkoord dat mijn gegevens worden gebruikt om contact op te nemen over mijn afspraak.
                    </span>
                  </label>
                </div>

                {state === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700 text-sm">
                      {error || "Er ging iets mis bij het versturen. Probeer het opnieuw."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Vorige
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid(currentStep)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  isStepValid(currentStep)
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Volgende
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onSubmit}
                disabled={!isStepValid(currentStep) || state === "submitting"}
                className={`flex items-center px-8 py-3 rounded-lg font-medium transition-colors ${
                  isStepValid(currentStep) && state !== "submitting"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {state === "submitting" ? "Versturen…" : "Afspraak aanvragen"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Honeypot field */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
    </main>
  )
}
