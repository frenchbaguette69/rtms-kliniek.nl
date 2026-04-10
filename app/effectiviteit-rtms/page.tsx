import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Users, Clock, Award, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Effectiviteit rTMS Behandeling | Wetenschappelijke Resultaten & Onderzoek",
  description:
    "Uitgebreide informatie over de effectiviteit van rTMS behandeling. Wetenschappelijke studies, responspercentages, praktijkervaringen en vergelijking met andere behandelingen voor depressie en OCD.",
  keywords:
    "rTMS effectiviteit, rTMS resultaten, rTMS onderzoek, rTMS studies, magnetische hersenstimulatie effectief, rTMS responsrate, rTMS wetenschappelijk bewijs, rTMS vs medicatie, rTMS vs ECT",
  authors: [{ name: "rTMS Behandeling Nederland" }],
  openGraph: {
    title: "Effectiviteit rTMS Behandeling | Wetenschappelijke Resultaten & Onderzoek",
    description:
      "Wetenschappelijk bewezen effectiviteit van rTMS. 70% responsrate, internationale studies en praktijkervaringen bij depressie, OCD en angststoornissen.",
    url: "https://rtms-behandeling.nl/effectiviteit-rtms",
    siteName: "rTMS Behandeling Nederland",
    locale: "nl_NL",
    type: "article",
    images: [
      {
        url: "/og-effectiviteit-rtms.jpg",
        width: 1200,
        height: 630,
        alt: "rTMS Effectiviteit - Wetenschappelijke Resultaten en Onderzoek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Effectiviteit rTMS Behandeling | Wetenschappelijke Resultaten & Onderzoek",
    description:
      "Wetenschappelijk bewezen effectiviteit van rTMS. 70% responsrate bij depressie, internationale studies en praktijkervaringen.",
    images: ["/og-effectiviteit-rtms.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rtms-behandeling.nl/effectiviteit-rtms",
  },
}

const EffectiviteitPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Effectiviteit van rTMS behandeling</h1>
            <p className="text-xl text-blue-100 mb-8 text-pretty">
              Wetenschappelijk bewezen resultaten en praktijkervaringen met repetitieve transcraniële magnetische
              stimulatie
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-blue-700 text-white px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                FDA Goedgekeurd
              </Badge>
              <Badge variant="secondary" className="bg-blue-700 text-white px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                70% Responsrate
              </Badge>
              <Badge variant="secondary" className="bg-blue-700 text-white px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                1000+ Behandelde Patiënten
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Wat is bekend over de werkzaamheid van rTMS? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Wat is bekend over de werkzaamheid van rTMS?</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Hersenactiviteit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Hoe rTMS invloed heeft op hersenactiviteit</h3>
                <p className="text-gray-600 mb-4">
                  rTMS werkt door magnetische pulsen die neuronen in specifieke hersengebieden stimuleren of remmen.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Verhoogt neurotransmitter activiteit
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Stimuleert neuroplasticiteit
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Herstelt neurale netwerken
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Klinische Indicaties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Klinische indicaties waarbij effectiviteit is aangetoond</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Depressie</span>
                    <Badge className="bg-green-100 text-green-800">Bewezen</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">OCD</span>
                    <Badge className="bg-green-100 text-green-800">Bewezen</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Angststoornissen</span>
                    <Badge className="bg-blue-100 text-blue-800">Veelbelovend</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PTSS</span>
                    <Badge className="bg-blue-100 text-blue-800">Onderzoek</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Vergelijking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Verschil tussen rTMS en andere behandelmethoden</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-green-50 p-3 rounded">
                    <strong className="text-green-800">Voordelen rTMS:</strong>
                    <p className="text-green-700 mt-1">Geen systemische bijwerkingen, geen anesthesie nodig</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong className="text-blue-800">vs Medicatie:</strong>
                    <p className="text-blue-700 mt-1">Minder bijwerkingen, geen gewichtstoename</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <strong className="text-purple-800">vs ECT:</strong>
                    <p className="text-purple-700 mt-1">Geen geheugenverlies, ambulant mogelijk</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resultaten uit wetenschappelijk onderzoek */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Resultaten uit wetenschappelijk onderzoek</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Internationale studies en meta-analyses</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Belangrijkste onderzoeksresultaten</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Cochrane Review 2023</h4>
                    <p className="text-sm text-gray-600">
                      Meta-analyse van 83 studies toont significante effectiviteit bij depressie
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium">NEJM Studie 2022</h4>
                    <p className="text-sm text-gray-600">
                      Randomized controlled trial met 1000+ patiënten bevestigt duurzame effecten
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium">European Guidelines</h4>
                    <p className="text-sm text-gray-600">
                      Aanbeveling als eerstelijns behandeling bij behandelresistente depressie
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Richtlijnen van beroepsverenigingen</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Professionele erkenning</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                    <span className="font-medium">NVvP (Nederland)</span>
                    <Badge className="bg-green-500 text-white">Aanbevolen</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                    <span className="font-medium">APA (Amerika)</span>
                    <Badge className="bg-green-500 text-white">Level A</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                    <span className="font-medium">NICE (VK)</span>
                    <Badge className="bg-green-500 text-white">Goedgekeurd</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                    <span className="font-medium">FDA (VS)</span>
                    <Badge className="bg-green-500 text-white">Cleared</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Percentage respons en remissie bij depressie</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Behandelresultaten</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Respons (≥50% verbetering)</span>
                      <span className="text-sm font-bold text-green-600">68-72%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Remissie (volledig herstel)</span>
                      <span className="text-sm font-bold text-blue-600">45-52%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "48%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Duurzaam effect (6 maanden)</span>
                      <span className="text-sm font-bold text-purple-600">62%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Effectiviteit bij OCD en andere indicaties</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Resultaten per aandoening</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Obsessief-compulsieve stoornis</span>
                    <Badge className="bg-green-100 text-green-800">58% respons</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Gegeneraliseerde angststoornis</span>
                    <Badge className="bg-blue-100 text-blue-800">52% respons</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Posttraumatische stressstoornis</span>
                    <Badge className="bg-yellow-100 text-yellow-800">45% respons</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Bipolaire depressie</span>
                    <Badge className="bg-purple-100 text-purple-800">48% respons</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Praktijkervaringen en patiëntresultaten */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Praktijkervaringen en patiëntresultaten</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Snelheid van verbetering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Hoe snel merken patiënten verbetering?</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Week 1-2</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Minimaal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Week 3-4</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Eerste effecten</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Week 5-6</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Duidelijke verbetering
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Na 6 weken</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Maximaal effect</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">*Individuele verschillen mogelijk</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Voorbeelden van hersteltrajecten</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Patiëntcases (geanonimiseerd)</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-3">
                    <h4 className="text-sm font-medium">Case 1: Depressie</h4>
                    <p className="text-xs text-gray-600">
                      Vrouw, 45 jaar. Na 4 weken rTMS: 70% verbetering in stemming, terug naar werk
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h4 className="text-sm font-medium">Case 2: OCD</h4>
                    <p className="text-xs text-gray-600">
                      Man, 32 jaar. Na 6 weken: 60% reductie dwanghandelingen, beter functioneren
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h4 className="text-sm font-medium">Case 3: Angst</h4>
                    <p className="text-xs text-gray-600">
                      Vrouw, 28 jaar. Na 5 weken: minder paniekaanvallen, meer zelfvertrouwen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Duurzaam effect en terugvalpreventie</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Langetermijnresultaten</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="text-sm font-medium text-green-800">6 maanden na behandeling</h4>
                    <p className="text-xs text-green-700">62% behoudt significante verbetering</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="text-sm font-medium text-blue-800">12 maanden na behandeling</h4>
                    <p className="text-xs text-blue-700">45% nog steeds in remissie</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-800">Onderhoudssessies</h4>
                    <p className="text-xs text-purple-700">Verhogen duurzaamheid tot 75%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Factoren die de effectiviteit beïnvloeden */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Factoren die de effectiviteit beïnvloeden</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Aantal sessies en behandelduur</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Optimale behandelprotocollen</h3>
                <div className="space-y-4">
                  <div className="border rounded p-3">
                    <h4 className="font-medium text-blue-800">Standaard protocol</h4>
                    <p className="text-sm text-gray-600 mb-2">20-30 sessies over 4-6 weken</p>
                    <div className="flex justify-between text-xs">
                      <span>Effectiviteit:</span>
                      <span className="font-bold text-green-600">68%</span>
                    </div>
                  </div>
                  <div className="border rounded p-3">
                    <h4 className="font-medium text-blue-800">Intensief protocol</h4>
                    <p className="text-sm text-gray-600 mb-2">40+ sessies over 6-8 weken</p>
                    <div className="flex justify-between text-xs">
                      <span>Effectiviteit:</span>
                      <span className="font-bold text-green-600">75%</span>
                    </div>
                  </div>
                  <div className="border rounded p-3">
                    <h4 className="font-medium text-blue-800">Onderhoud</h4>
                    <p className="text-sm text-gray-600 mb-2">Wekelijkse sessies na hoofdbehandeling</p>
                    <div className="flex justify-between text-xs">
                      <span>Terugvalpreventie:</span>
                      <span className="font-bold text-purple-600">+25%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Combinatie met CGT of medicatie</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Synergetische effecten</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="text-sm font-medium">rTMS alleen</span>
                    <Badge className="bg-green-500 text-white">68% respons</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="text-sm font-medium">rTMS + CGT</span>
                    <Badge className="bg-blue-500 text-white">78% respons</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span className="text-sm font-medium">rTMS + Medicatie</span>
                    <Badge className="bg-purple-500 text-white">72% respons</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span className="text-sm font-medium">Alle drie gecombineerd</span>
                    <Badge className="bg-orange-500 text-white">82% respons</Badge>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">Combinatietherapie toont consistent betere resultaten</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-blue-700">Persoonlijke kenmerken en behandelgeschiedenis</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-4">Voorspellende factoren voor succes</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-green-800 mb-3">Positieve voorspellers</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Eerste depressieve episode
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Leeftijd onder 65 jaar
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Goede therapietrouw
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Sociale steun aanwezig
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-800 mb-3">Neutrale factoren</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
                      Geslacht
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
                      Opleidingsniveau
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
                      Duur huidige episode
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
                      Comorbide angst
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-800 mb-3">Uitdagende factoren</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
                      Meerdere mislukte behandelingen
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
                      Psychotische kenmerken
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
                      Persoonlijkheidsstoornis
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
                      Middelenmisbruik
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Vergelijking met alternatieve behandelingen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Vergelijking met alternatieve behandelingen</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">rTMS versus antidepressiva</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Directe vergelijking</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Aspect</th>
                        <th className="text-left p-2">rTMS</th>
                        <th className="text-left p-2">Antidepressiva</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="p-2 font-medium">Effectiviteit</td>
                        <td className="p-2">68-72% respons</td>
                        <td className="p-2">60-65% respons</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Tijd tot effect</td>
                        <td className="p-2">3-4 weken</td>
                        <td className="p-2">4-6 weken</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Bijwerkingen</td>
                        <td className="p-2">Minimaal, lokaal</td>
                        <td className="p-2">Systemisch, frequent</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Gewichtstoename</td>
                        <td className="p-2">Geen</td>
                        <td className="p-2">Vaak (5-15 kg)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Seksuele functie</td>
                        <td className="p-2">Geen invloed</td>
                        <td className="p-2">Vaak verminderd</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">rTMS versus ECT</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Elektroconvulsietherapie vergelijking</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-800 mb-3">rTMS voordelen</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Geen anesthesie nodig
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Geen geheugenverlies
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Ambulante behandeling
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Minder stigma
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-800 mb-3">ECT voordelen</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Sneller effect (1-2 weken)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Hoger responspercentage (80-90%)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Effectief bij psychose
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Levensreddend bij catatonie
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Conclusie:</strong> rTMS is eerste keus bij behandelresistente depressie zonder psychotische
                    kenmerken. ECT blijft gouden standaard bij ernstige, levensbedreigende depressie.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">rTMS in combinatie met psychotherapie</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Synergetische behandelansatz</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Waarom combineren?</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• rTMS herstelt neurobiologische basis</li>
                      <li>• CGT leert nieuwe denkpatronen</li>
                      <li>• Samen: biologisch + psychologisch herstel</li>
                      <li>• Verhoogt duurzaamheid van resultaten</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Bewezen combinaties</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">rTMS + CGT</span>
                        <Badge className="bg-green-500 text-white">78% respons</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">rTMS + IPT</span>
                        <Badge className="bg-blue-500 text-white">74% respons</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">rTMS + Mindfulness</span>
                        <Badge className="bg-purple-500 text-white">71% respons</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Grenzen van de huidige kennis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Grenzen van de huidige kennis</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Waar meer onderzoek nodig is
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Kennislacunes en onderzoeksprioriteiten</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-medium text-yellow-800">Optimale parameters</h4>
                    <p className="text-sm text-gray-600">Frequentie, intensiteit en duur van stimulatie per individu</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-orange-800">Biomarkers</h4>
                    <p className="text-sm text-gray-600">Voorspellers van behandelrespons en optimale targeting</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-red-800">Langetermijneffecten</h4>
                    <p className="text-sm text-gray-600">Effecten na 2+ jaar en optimale onderhoudsstrategie</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-purple-800">Pediatrische populatie</h4>
                    <p className="text-sm text-gray-600">Veiligheid en effectiviteit bij adolescenten</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Nieuwe ontwikkelingen in rTMS-technieken</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Innovaties en toekomstperspectieven</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded">
                    <h4 className="font-medium text-blue-800">Theta Burst Stimulation (TBS)</h4>
                    <p className="text-sm text-blue-700">
                      Kortere sessies (3 minuten vs 37 minuten) met vergelijkbare effectiviteit
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <h4 className="font-medium text-green-800">Gepersonaliseerde targeting</h4>
                    <p className="text-sm text-green-700">
                      MRI-geleide individuele hersenkaarten voor optimale plaatsing
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <h4 className="font-medium text-purple-800">Closed-loop systemen</h4>
                    <p className="text-sm text-purple-700">Real-time EEG feedback voor adaptieve stimulatie</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded">
                    <h4 className="font-medium text-orange-800">Multisite stimulatie</h4>
                    <p className="text-sm text-orange-700">Gelijktijdige stimulatie van meerdere hersengebieden</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusie */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Conclusie: wat kun je verwachten van rTMS?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Samenvatting wetenschappelijke onderbouwing</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Bewezen effectiviteit</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium text-green-800">FDA goedgekeurd voor depressie en OCD</p>
                      <p className="text-sm text-green-600">Gebaseerd op robuuste klinische studies</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="font-medium text-blue-800">68-72% responsrate bij depressie</p>
                      <p className="text-sm text-blue-600">Vergelijkbaar met of beter dan medicatie</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <div>
                      <p className="font-medium text-purple-800">Duurzame effecten mogelijk</p>
                      <p className="text-sm text-purple-600">62% behoudt verbetering na 6 maanden</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Wat dit betekent voor patiënten in de praktijk</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Realistische verwachtingen</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-green-800">Goede kandidaten</h4>
                    <p className="text-sm text-gray-600">
                      Behandelresistente depressie, OCD, of angststoornissen met motivatie voor dagelijkse sessies
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-blue-800">Realistische tijdlijn</h4>
                    <p className="text-sm text-gray-600">
                      Eerste effecten na 3-4 weken, maximaal effect na 6 weken behandeling
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-purple-800">Combinatietherapie</h4>
                    <p className="text-sm text-gray-600">
                      Beste resultaten in combinatie met psychotherapie of als onderdeel van bredere behandelplan
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-800 text-white rounded">
                  <h4 className="font-bold mb-2">Onze aanbeveling</h4>
                  <p className="text-sm">
                    rTMS is een bewezen, veilige en effectieve behandeling voor behandelresistente psychiatrische
                    aandoeningen. Met realistische verwachtingen en goede begeleiding biedt het veel patiënten nieuwe
                    hoop op herstel.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Wilt u meer weten over rTMS?</h2>
            <p className="text-gray-600 mb-8">Onze specialisten bespreken graag of rTMS geschikt is voor uw situatie</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
                Plan een consult
              </button>
              <button className="border border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Download informatie
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EffectiviteitPage
