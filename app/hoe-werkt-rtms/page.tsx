import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Brain, Zap, Clock, Shield, CheckCircle, ArrowRight, Users, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Hoe werkt rTMS behandeling? | Werkingsmechanisme en behandelproces | rTMS Behandeling",
  description:
    "Ontdek hoe rTMS behandeling werkt: van magnetische stimulatie tot neuroplasticiteit. Leer over het behandelproces, wetenschappelijke onderbouwing en wat u kunt verwachten.",
  keywords:
    "hoe werkt rTMS, rTMS werkingsmechanisme, magnetische stimulatie, neuroplasticiteit, prefrontale cortex, behandelproces rTMS, hersenstimulatie",
  openGraph: {
    title: "Hoe werkt rTMS behandeling? | Werkingsmechanisme en behandelproces",
    description:
      "Ontdek hoe rTMS behandeling werkt: van magnetische stimulatie tot neuroplasticiteit. Leer over het behandelproces, wetenschappelijke onderbouwing en wat u kunt verwachten.",
    url: "https://rtms-behandeling.nl/hoe-werkt-rtms",
    siteName: "rTMS Behandeling",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoe werkt rTMS behandeling? | Werkingsmechanisme en behandelproces",
    description:
      "Ontdek hoe rTMS behandeling werkt: van magnetische stimulatie tot neuroplasticiteit. Leer over het behandelproces, wetenschappelijke onderbouwing en wat u kunt verwachten.",
  },
  alternates: {
    canonical: "https://rtms-behandeling.nl/hoe-werkt-rtms",
  },
}

export default function HoeWerktRTMSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Brain className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Hoe werkt rTMS behandeling?</h1>
            <p className="text-xl text-blue-100 mb-8 text-pretty">
              Ontdek het wetenschappelijke werkingsmechanisme achter rTMS en wat u kunt verwachten tijdens het
              behandelproces
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Magnetische stimulatie
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Brain className="h-4 w-4 mr-2" />
                Neuroplasticiteit
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Wetenschappelijk bewezen
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Wat is rTMS en het werkingsmechanisme */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wat is rTMS en het werkingsmechanisme</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              rTMS gebruikt magnetische velden om specifieke hersengebieden te stimuleren en de natuurlijke
              herstelprocessen van de hersenen te activeren
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Magnetische stimulatie van hersencellen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  rTMS gebruikt krachtige magnetische pulsen om neuronen in specifieke hersengebieden te activeren. Deze
                  magnetische velden dringen door de schedel heen en stimuleren de hersencellen zonder operatie of
                  medicatie.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Niet-invasieve behandeling
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Precisie stimulatie mogelijk
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Geen systemische bijwerkingen
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Brain className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Neuroplasticiteit en herstel van netwerken</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Door herhaalde stimulatie worden nieuwe neurale verbindingen gevormd en bestaande netwerken versterkt.
                  Dit proces van neuroplasticiteit ligt ten grondslag aan het therapeutische effect van rTMS.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Versterking neurale netwerken
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Langdurige veranderingen
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Natuurlijk herstelproces
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Brain className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Waarom de prefrontale cortex wordt gestimuleerd</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  De prefrontale cortex speelt een cruciale rol bij stemmingsregulatie, emotionele verwerking en
                  executieve functies. Bij depressie en angststoornissen is dit gebied vaak onderactief.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Stemmingsregulatie
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Emotionele verwerking
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Executieve functies
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Het behandelproces stap voor stap */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Het behandelproces stap voor stap</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Een gestructureerd behandelproces zorgt voor optimale resultaten en veiligheid
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4 text-sm font-bold">
                  1
                </div>
                <CardTitle className="text-blue-800">Intake en veiligheidscheck</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Uitgebreide anamnese, medische screening en controle op contra-indicaties zoals metalen implantaten.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Medische geschiedenis</li>
                  <li>• Medicatie overzicht</li>
                  <li>• Veiligheidsscreening</li>
                  <li>• Informed consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4 text-sm font-bold">
                  2
                </div>
                <CardTitle className="text-blue-800">Plaatsing van de coil op het hoofd</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Nauwkeurige positionering van de magnetische coil boven het doelgebied in de prefrontale cortex.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Anatomische landmarken</li>
                  <li>• Motorische drempel bepaling</li>
                  <li>• Optimale positionering</li>
                  <li>• Comfort controle</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4 text-sm font-bold">
                  3
                </div>
                <CardTitle className="text-blue-800">Toediening van magnetische pulsen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Gecontroleerde afgifte van magnetische pulsen volgens een vooraf bepaald protocol.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• 10 Hz stimulatie</li>
                  <li>• 4 seconden aan/26 uit</li>
                  <li>• 3000 pulsen per sessie</li>
                  <li>• Continue monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4 text-sm font-bold">
                  4
                </div>
                <CardTitle className="text-blue-800">Duur van een sessie en aantal sessies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Standaard behandelschema van 20 sessies over 4 weken, elke sessie duurt ongeveer 20 minuten.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• 20 minuten per sessie</li>
                  <li>• 5 dagen per week</li>
                  <li>• 4 weken behandeling</li>
                  <li>• Evaluatie na 2 weken</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wat ervaart de patiënt tijdens een sessie? */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wat ervaart de patiënt tijdens een sessie?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De meeste patiënten ervaren rTMS als een comfortabele behandeling met minimale bijwerkingen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Geluid en tikjes op de schedel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Tijdens de behandeling hoort u een klikkend geluid en voelt u lichte tikjes op de schedel. Dit is
                  normaal en wijst erop dat het apparaat correct werkt.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Wat u kunt verwachten:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Ritmisch klikkend geluid</li>
                    <li>• Lichte tikjes op de hoofdhuid</li>
                    <li>• Gehoorbescherming beschikbaar</li>
                    <li>• Gewenning na enkele sessies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Eventuele napijn of ongemak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sommige patiënten ervaren lichte hoofdpijn of gevoeligheid van de hoofdhuid na de eerste sessies. Dit
                  verdwijnt meestal snel.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Normale reacties:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Lichte hoofdpijn (30% van patiënten)</li>
                    <li>• Gevoelige hoofdhuid</li>
                    <li>• Verdwijnt binnen 1-2 uur</li>
                    <li>• Paracetamol indien nodig</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Direct weer naar huis na de behandeling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Na de sessie kunt u direct naar huis. Er zijn geen beperkingen voor autorijden, werken of andere
                  dagelijkse activiteiten.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Na de behandeling:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Geen herstelperiode nodig</li>
                    <li>• Autorijden toegestaan</li>
                    <li>• Werk en sport mogelijk</li>
                    <li>• Normale dagelijkse routine</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wetenschappelijke onderbouwing */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wetenschappelijke onderbouwing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              rTMS is een evidence-based behandeling met sterke wetenschappelijke onderbouwing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Richtlijnen en aanbevelingen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  rTMS is opgenomen in internationale behandelrichtlijnen voor depressie en wordt aanbevolen door
                  toonaangevende psychiatrische organisaties.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    FDA goedkeuring (2008)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Europese richtlijnen
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Nederlandse GGZ standaarden
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Klinische studies over werkingsmechanisme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Meer dan 100 gerandomiseerde gecontroleerde studies hebben de effectiviteit van rTMS aangetoond bij
                  verschillende psychiatrische aandoeningen.
                </p>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-800">60-70%</div>
                    <div className="text-sm text-gray-600">Respons bij depressie</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-800">40-50%</div>
                    <div className="text-sm text-gray-600">Remissie percentage</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Ervaringen uit de praktijk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Praktijkervaring bevestigt de onderzoeksresultaten. Patiënten rapporteren significante verbetering in
                  stemming en functioneren.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Hoge patiënttevredenheid
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Duurzame effecten
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Minimale bijwerkingen
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vergelijking met andere behandelmethoden */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vergelijking met andere behandelmethoden</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              rTMS biedt unieke voordelen ten opzichte van traditionele behandelmethoden
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Verschil met medicatie (antidepressiva)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">rTMS voordelen:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Geen systemische bijwerkingen
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Geen gewichtstoename of seksuele bijwerkingen
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Geen ontwenningsverschijnselen
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Effectief bij medicatieresistentie
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Medicatie nadelen:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Bijwerkingen zoals vermoeidheid, gewichtstoename</li>
                      <li>• Seksuele disfunctie (30-70% van patiënten)</li>
                      <li>• Ontwenningsverschijnselen bij stoppen</li>
                      <li>• Dagelijkse inname vereist</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Verschil met ECT (elektroconvulsietherapie)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">rTMS voordelen:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Geen anesthesie nodig
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Geen geheugenverlies
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Ambulante behandeling
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Minder stigmatiserend
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">ECT kenmerken:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Volledige anesthesie vereist</li>
                      <li>• Risico op geheugenverlies</li>
                      <li>• Ziekenhuisopname nodig</li>
                      <li>• Sneller effect bij ernstige depressie</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">rTMS als aanvulling op psychotherapie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  rTMS kan uitstekend gecombineerd worden met psychotherapie en versterkt vaak de effectiviteit van
                  beide behandelingen.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">Synergie-effecten:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• rTMS verbetert neuroplasticiteit</li>
                      <li>• Therapie wordt effectiever</li>
                      <li>• Snellere symptoomverbetering</li>
                      <li>• Duurzamere resultaten</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">Praktische voordelen:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Beide ambulant mogelijk</li>
                      <li>• Geen medicatie-interacties</li>
                      <li>• Flexibele planning</li>
                      <li>• Holistische benadering</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Veelgestelde vragen over het behandelproces */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Veelgestelde vragen over het behandelproces</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Antwoorden op de meest gestelde vragen over wat u kunt verwachten
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="pijn" className="border border-blue-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-blue-800">Doet rTMS pijn?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  <p className="mb-4">
                    rTMS is over het algemeen niet pijnlijk. De meeste patiënten beschrijven het gevoel als lichte
                    tikjes op de hoofdhuid. Tijdens de eerste sessies kan er enige gevoeligheid zijn, maar dit
                    vermindert snel naarmate u gewend raakt aan de behandeling.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Wat u kunt verwachten:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Eerste sessie: mogelijk wat ongemak</li>
                      <li>• Na 2-3 sessies: gewenning treedt op</li>
                      <li>• Pijnschaal: gemiddeld 2-3 van 10</li>
                      <li>• Behandeling kan altijd gestopt worden</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="effect" className="border border-blue-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-blue-800">
                  Hoe snel merk ik effect?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  <p className="mb-4">
                    De meeste patiënten beginnen na 2-3 weken verbetering te merken. Sommigen voelen al na een week
                    verschil, terwijl anderen pas na de volledige behandelcyclus van 4 weken optimaal effect ervaren.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Tijdlijn verbetering:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Week 1: mogelijk eerste signalen</li>
                        <li>• Week 2-3: duidelijke verbetering</li>
                        <li>• Week 4: optimaal effect</li>
                        <li>• Na behandeling: verdere verbetering mogelijk</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Eerste tekenen:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Beter slapen</li>
                        <li>• Meer energie</li>
                        <li>• Verbeterde concentratie</li>
                        <li>• Positievere gedachten</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="autorijden" className="border border-blue-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-blue-800">
                  Kan ik na een sessie werken of autorijden?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  <p className="mb-4">
                    Ja, na een rTMS sessie kunt u direct weer normale activiteiten ondernemen. Er zijn geen beperkingen
                    voor autorijden, werken of sporten. Dit is een groot voordeel ten opzichte van andere behandelingen
                    zoals ECT.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Direct mogelijk:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Autorijden</li>
                        <li>• Werken</li>
                        <li>• Sporten</li>
                        <li>• Sociale activiteiten</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Aandachtspunten:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Lichte hoofdpijn mogelijk</li>
                        <li>• Paracetamol indien nodig</li>
                        <li>• Voldoende drinken</li>
                        <li>• Luister naar uw lichaam</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Meer weten over rTMS behandeling?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvend gesprek over de mogelijkheden van rTMS voor uw situatie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Plan een afspraak
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Bel ons direct
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
