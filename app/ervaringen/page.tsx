import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Quote, Heart, Users, TrendingUp, Clock, MessageCircle, Video, FileText, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Patiëntervaringen met rTMS Behandeling | rTMS-behandeling.nl",
  description:
    "Lees echte ervaringen van patiënten met rTMS behandeling. Ontdek wat anderen ervaren hebben tijdens hun hersteltraject bij depressie, angst en andere klachten.",
  keywords:
    "rTMS ervaringen, patiëntverhalen, rTMS testimonials, herstel depressie, behandelervaringen, rTMS resultaten, patiëntreview",
  openGraph: {
    title: "Patiëntervaringen met rTMS Behandeling",
    description:
      "Lees echte ervaringen van patiënten met rTMS behandeling. Ontdek wat anderen ervaren hebben tijdens hun hersteltraject.",
    url: "https://rtms-behandeling.nl/ervaringen",
    siteName: "rTMS Behandeling Nederland",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patiëntervaringen met rTMS Behandeling",
    description: "Lees echte ervaringen van patiënten met rTMS behandeling.",
  },
  alternates: {
    canonical: "https://rtms-behandeling.nl/ervaringen",
  },
}

export default function ErvaringenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Users className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ervaringen met rTMS behandeling</h1>
            <p className="text-xl text-blue-100 mb-8 text-pretty">
              Ontdek wat andere patiënten hebben ervaren tijdens hun rTMS behandeltraject. Echte verhalen van herstel,
              uitdagingen en hoop.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Heart className="h-4 w-4 mr-2" />
                Echte patiëntverhalen
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="h-4 w-4 mr-2" />
                Bewezen resultaten
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <MessageCircle className="h-4 w-4 mr-2" />
                Deel je ervaring
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Waarom ervaringen belangrijk zijn */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Waarom ervaringen belangrijk zijn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <FileText className="h-6 w-6 mr-3" />
                  Persoonlijk inzicht naast wetenschappelijk bewijs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Wetenschappelijke studies tonen de effectiviteit van rTMS aan, maar persoonlijke ervaringen geven
                  inzicht in hoe de behandeling daadwerkelijk voelt en wat je kunt verwachten.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Emotionele aspecten van het behandeltraject
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Praktische tips van andere patiënten
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Realistische verwachtingen over het proces
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Clock className="h-6 w-6 mr-3" />
                  Wat je mag verwachten van een traject
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Elk rTMS-traject is uniek, maar patiëntervaringen helpen je voorbereiden op verschillende fases van de
                  behandeling en mogelijke uitkomsten.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Typisch behandelverloop:</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Week 1-2:</span>
                      <span>Wennen aan behandeling</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Week 3-4:</span>
                      <span>Eerste verbeteringen</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Week 5-6:</span>
                      <span>Duidelijke vooruitgang</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Patiënten delen hun verhaal */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Patiënten delen hun verhaal</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-blue-800">Ervaring van Maria – traject bij depressie</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Depressie</Badge>
                  <Badge variant="outline">6 weken behandeling</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 italic">
                    "Na jaren van medicatie zonder resultaat was ik sceptisch over rTMS. De eerste weken voelde ik
                    weinig verschil, maar vanaf week 4 merkte ik dat ik weer energie kreeg. Nu, 3 maanden later, voel ik
                    me als herboren."
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Resultaat:</strong> 70% verbetering in depressiescore na 6 weken
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-blue-800">Ervaring van Jan – herstel na meerdere behandelingen</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Behandelresistente depressie</Badge>
                  <Badge variant="outline">8 weken</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 italic">
                    "Ik had al verschillende antidepressiva geprobeerd zonder succes. rTMS was mijn laatste hoop. Het
                    duurde 6 weken voordat ik echt verschil merkte, maar toen ging het snel. Ik kan weer genieten van
                    kleine dingen."
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Bijzonderheid:</strong> Combinatie met psychotherapie voor optimaal resultaat
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="text-blue-800">
                  Ervaring van Lisa – combinatie met cognitieve gedragstherapie
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Angststoornis</Badge>
                  <Badge variant="outline">rTMS + CGT</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 italic">
                    "De combinatie van rTMS en gesprektherapie was perfect voor mij. rTMS hielp mijn hersenen
                    'ontvankelijker' te maken voor de therapie. Ik leerde nieuwe denkpatronen terwijl mijn brein zich
                    herstelde."
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Tip:</strong> "Begin met CGT tijdens de rTMS-behandeling voor het beste resultaat"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="text-blue-800">Ervaring van Tom – omgaan met bijwerkingen</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Depressie</Badge>
                  <Badge variant="outline">Lichte bijwerkingen</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 italic">
                    "De eerste twee weken had ik hoofdpijn na elke sessie. Het team stelde me gerust dat dit normaal
                    was. Met paracetamol en rust ging het over. Het resultaat was het waard - ik voel me veel beter."
                  </p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Advies:</strong> "Communiceer altijd over bijwerkingen met je behandelteam"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wat patiënten als positief ervaren */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Wat patiënten als positief ervaren</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-green-200">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Verbetering in stemming en functioneren</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Meer energie en motivatie</li>
                  <li>• Beter kunnen concentreren</li>
                  <li>• Verbeterde slaapkwaliteit</li>
                  <li>• Minder negatieve gedachten</li>
                  <li>• Meer interesse in activiteiten</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Impact op dagelijks leven</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Betere relaties met familie</li>
                  <li>• Meer productiviteit op werk</li>
                  <li>• Plezier in hobby's en sociale activiteiten</li>
                  <li>• Verbeterd zelfvertrouwen</li>
                  <li>• Toekomstperspectief</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Vergelijking met eerdere behandelingen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Minder bijwerkingen dan medicatie</li>
                  <li>• Sneller resultaat dan alleen therapie</li>
                  <li>• Geen dagelijkse medicatie-inname</li>
                  <li>• Langdurig effect</li>
                  <li>• Geen gewichtstoename</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wat patiënten als lastig ervaren */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Wat patiënten als lastig ervaren</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center">
                  <Clock className="h-6 w-6 mr-3" />
                  Intensiteit van het behandeltraject
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">
                  Dagelijkse sessies gedurende 4-6 weken kunnen belastend zijn voor werk en privéleven.
                </p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Tip van patiënten:</strong> Plan vrije dagen in de eerste week en communiceer met je
                    werkgever over flexibele werktijden.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Bijwerkingen tijdens de eerste weken
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">
                  Hoofdpijn, vermoeidheid en lokale gevoeligheid komen voor, vooral in het begin.
                </p>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Geruststelling:</strong> Deze bijwerkingen zijn tijdelijk en verdwijnen meestal na 1-2
                    weken.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  Geduld en volhouden voor resultaat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">
                  Verbetering is vaak pas merkbaar na 3-4 weken, wat frustrerend kan zijn.
                </p>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Motivatie:</strong> Houd een dagboek bij om kleine verbeteringen te herkennen die je anders
                    zou missen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video- en schriftelijke testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Video- en schriftelijke testimonials</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <Video className="h-6 w-6 mr-3" />
                  Korte video's van patiënten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <Video className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Video testimonial van Sarah</p>
                  <p className="text-sm text-gray-500 mt-2">"Mijn ervaring met rTMS bij angststoornis"</p>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Bekijk video
                  </Button>
                </div>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <Video className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Video testimonial van Mark</p>
                  <p className="text-sm text-gray-500 mt-2">"Van sceptisch naar overtuigd - mijn rTMS reis"</p>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Bekijk video
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <FileText className="h-6 w-6 mr-3" />
                  Geciteerde reviews met toestemming
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-l-green-500 pl-4">
                  <p className="text-gray-700 italic mb-2">
                    "rTMS heeft mijn leven veranderd. Na 20 jaar depressie voel ik me eindelijk weer mezelf."
                  </p>
                  <p className="text-sm text-gray-500">- Patiënt A., 45 jaar</p>
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="border-l-4 border-l-blue-500 pl-4">
                  <p className="text-gray-700 italic mb-2">
                    "Professioneel team, duidelijke uitleg, en vooral: het werkt!"
                  </p>
                  <p className="text-sm text-gray-500">- Patiënt B., 38 jaar</p>
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center">
                  <BarChart3 className="h-6 w-6 mr-3" />
                  Ervaringen in cijfers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
                  <p className="text-gray-700">Patiënten ervaart significante verbetering</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9.2/10</div>
                  <p className="text-gray-700">Gemiddelde tevredenheidsscore</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                  <p className="text-gray-700">Zou rTMS aanbevelen aan anderen</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <p className="text-sm text-purple-800">Gebaseerd op 150+ patiënten (2023-2024)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Veelgestelde vragen */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Veelgestelde vragen naar aanleiding van ervaringen
          </h2>
          <div className="grid md:grid-cols-1 max-w-4xl mx-auto gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Hoe verschillen ervaringen per persoon?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">Elke patiënt reageert anders op rTMS. Factoren die invloed hebben:</p>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• Type en ernst van de klachten</li>
                  <li>• Eerdere behandelingen en medicatie</li>
                  <li>• Leeftijd en algemene gezondheid</li>
                  <li>• Levensstijl en ondersteuning thuis</li>
                  <li>• Combinatie met andere therapieën</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Kan ik uitgaan van hetzelfde resultaat?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">Hoewel we geen garanties kunnen geven, laten onderzoeken zien dat:</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-green-800">
                    <li>• 60-70% van patiënten ervaart significante verbetering</li>
                    <li>• 30-40% bereikt volledige remissie van symptomen</li>
                    <li>• Resultaten zijn vaak duurzaam (6+ maanden)</li>
                  </ul>
                </div>
                <p className="text-gray-700">Tijdens de intake bespreken we uw specifieke situatie en verwachtingen.</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800">Wat als rTMS bij mij minder goed werkt?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">Ook als rTMS niet volledig werkt, zijn er mogelijkheden:</p>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• Aanpassing van behandelprotocol</li>
                  <li>• Combinatie met andere therapieën</li>
                  <li>• Onderhoudssessies voor langdurig effect</li>
                  <li>• Alternatieve behandelopties bespreken</li>
                </ul>
                <div className="bg-orange-50 p-3 rounded-lg mt-4">
                  <p className="text-sm text-orange-800">
                    <strong>Belangrijk:</strong> We blijven u begeleiden tot we de beste oplossing voor uw situatie
                    hebben gevonden.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Zelf je ervaring delen */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Zelf je ervaring delen</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Contactformulier voor patiënten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Voornaam (voor publicatie)</label>
                    <Input placeholder="Bijv. Maria" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type behandeling</label>
                    <Input placeholder="Bijv. rTMS voor depressie" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Uw ervaring</label>
                    <Textarea placeholder="Deel uw ervaring met rTMS behandeling..." rows={6} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rating" />
                    <label htmlFor="rating" className="text-sm text-gray-700">
                      Ik geef toestemming voor publicatie van mijn ervaring
                    </label>
                  </div>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">Ervaring delen</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Privacy en toestemming voor publicatie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Uw privacy is belangrijk</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• We publiceren alleen met uw expliciete toestemming</li>
                    <li>• Alleen voornaam wordt gebruikt, geen achternaam</li>
                    <li>• Medische details worden geanonimiseerd</li>
                    <li>• U kunt altijd vragen om verwijdering</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Waarom ervaringen delen?</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Help andere patiënten bij hun beslissing</li>
                    <li>• Draag bij aan bewustwording over rTMS</li>
                    <li>• Geef hoop aan mensen met vergelijkbare klachten</li>
                    <li>• Verbeter de kwaliteit van zorg</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Contact:</strong> Voor vragen over privacy kunt u contact opnemen via
                    privacy@rtms-behandeling.nl
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om uw eigen rTMS-ervaring te beginnen?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laat u inspireren door de verhalen van anderen en ontdek of rTMS ook voor u de oplossing kan zijn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50">
              Plan een intakegesprek
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Meer informatie
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
