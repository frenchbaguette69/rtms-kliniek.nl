import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, AlertTriangle, CheckCircle, Phone, Mail, Clock, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bijwerkingen en Veiligheid rTMS | Risico's en Voorzorgsmaatregelen",
  description:
    "Uitgebreide informatie over bijwerkingen, risico's en veiligheid van rTMS behandeling. Leer alles over mogelijke bijwerkingen, contra-indicaties en veiligheidsmaatregelen bij magnetische hersenstimulatie.",
  keywords:
    "rTMS bijwerkingen, rTMS veiligheid, rTMS risicos, magnetische hersenstimulatie bijwerkingen, rTMS contra-indicaties, rTMS hoofdpijn, rTMS insulten, veiligheid hersenstimulatie",
  authors: [{ name: "rTMS Behandeling Nederland" }],
  openGraph: {
    title: "Bijwerkingen en Veiligheid rTMS | Risico's en Voorzorgsmaatregelen",
    description:
      "Transparante informatie over bijwerkingen, risico's en veiligheid van rTMS behandeling. Uitgebreide uitleg over mogelijke bijwerkingen en veiligheidsmaatregelen.",
    url: "https://rtms-behandeling.nl/bijwerkingen-en-veiligheid",
    siteName: "rTMS Behandeling Nederland",
    locale: "nl_NL",
    type: "article",
    images: [
      {
        url: "/og-bijwerkingen-veiligheid.jpg",
        width: 1200,
        height: 630,
        alt: "rTMS Bijwerkingen en Veiligheid - Transparante Informatie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bijwerkingen en Veiligheid rTMS | Risico's en Voorzorgsmaatregelen",
    description: "Transparante informatie over bijwerkingen, risico's en veiligheid van rTMS behandeling.",
    images: ["/og-bijwerkingen-veiligheid.jpg"],
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
    canonical: "https://rtms-behandeling.nl/bijwerkingen-en-veiligheid",
  },
}

export default function BijwerkingenEnVeiligheidPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Bijwerkingen en veiligheid van rTMS</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transparante informatie over de veiligheid, mogelijke bijwerkingen en risico's van rTMS behandeling
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                FDA Goedgekeurd
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm">
                <Shield className="h-4 w-4 mr-2" />
                Niet-invasief
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2 text-sm">
                <Users className="h-4 w-4 mr-2" />
                Miljoenen behandelingen
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Is rTMS een veilige behandeling? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Shield className="h-8 w-8 text-blue-800 mr-3" />
            Is rTMS een veilige behandeling?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg text-green-700">Niet-invasieve en pijnloze methode</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  rTMS is een volledig niet-invasieve behandeling waarbij geen chirurgie, anesthesie of medicatie nodig
                  is. De magnetische pulsen worden van buitenaf toegepast en veroorzaken geen pijn of blijvende schade
                  aan hersenweefsel.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg text-blue-700">Internationale richtlijnen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Onze behandeling volgt strikt de internationale veiligheidsrichtlijnen van de FDA, EMA en Nederlandse
                  beroepsverenigingen. Alle protocollen zijn gebaseerd op decennia van wetenschappelijk onderzoek.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700">Vergelijking met andere behandelingen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  rTMS heeft aanzienlijk minder bijwerkingen dan antidepressiva en is veel veiliger dan ECT
                  (elektroconvulsietherapie), zonder geheugenproblemen of de noodzaak voor anesthesie.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mogelijke bijwerkingen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
            Mogelijke bijwerkingen van rTMS
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-700">Vaak voorkomende lichte bijwerkingen</CardTitle>
                <p className="text-gray-600">Deze bijwerkingen zijn meestal mild en tijdelijk</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-l-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Hoofdpijn of drukgevoel</h4>
                  <p className="text-gray-600 text-sm">
                    Ongeveer 30-40% van patiënten ervaart lichte hoofdpijn na de eerste sessies. Dit verdwijnt meestal
                    binnen enkele uren en neemt af naarmate de behandeling vordert.
                  </p>
                </div>

                <div className="border-l-4 border-l-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Vermoeidheid na een sessie</h4>
                  <p className="text-gray-600 text-sm">
                    Lichte vermoeidheid kan optreden, vergelijkbaar met mentale inspanning. Dit is een teken dat de
                    hersenen reageren op de stimulatie.
                  </p>
                </div>

                <div className="border-l-4 border-l-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Tintelingen of gevoeligheid op de hoofdhuid</h4>
                  <p className="text-gray-600 text-sm">
                    Tijdelijke gevoeligheid of tintelingen ter plaatse van de behandeling. Dit is normaal en verdwijnt
                    binnen enkele uren.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Minder vaak voorkomende klachten</CardTitle>
                <p className="text-gray-600">Deze bijwerkingen komen bij minder dan 10% van patiënten voor</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-l-blue-300 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Duizeligheid of lichte concentratieproblemen</h4>
                  <p className="text-gray-600 text-sm">
                    Soms kan er tijdelijke duizeligheid optreden, vooral bij de eerste behandelingen. Dit is meestal
                    mild en van korte duur.
                  </p>
                </div>

                <div className="border-l-4 border-l-blue-300 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Geleidelijke gewenning bij voortzetting</h4>
                  <p className="text-gray-600 text-sm">
                    De meeste bijwerkingen nemen af naarmate het lichaam went aan de behandeling. Na de eerste week zijn
                    bijwerkingen zeldzaam.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Risico's en complicaties */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Risico's en complicaties</h2>

          <div className="bg-red-50 border-l-4 border-l-red-500 p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Zeldzame risico's (o.a. insulten)</h3>
            <p className="text-red-700 mb-4">
              Het risico op een insult (epileptische aanval) tijdens rTMS is extreem laag: minder dan 0,1% van alle
              behandelingen. Dit risico is vergelijkbaar met het spontane risico in de algemene bevolking.
            </p>
            <ul className="list-disc list-inside text-red-700 space-y-2">
              <li>Wereldwijd zijn er minder dan 100 gerapporteerde gevallen bij miljoenen behandelingen</li>
              <li>Alle gerapporteerde insulten waren van korte duur zonder blijvende gevolgen</li>
              <li>Ons team is getraind in noodprocedures en heeft directe toegang tot medische hulp</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-700">Contra-indicaties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Epilepsie of geschiedenis van insulten</li>
                  <li>• Metalen implantaten in het hoofd (behalve tandvullingen)</li>
                  <li>• Pacemaker of andere elektronische implantaten</li>
                  <li>• Zwangerschap (voorzorgsmaatregel)</li>
                  <li>• Ernstige hartaandoeningen</li>
                  <li>• Verhoogde hersendruk</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700">Voorzorgsmaatregelen bij medicatie</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sommige medicijnen kunnen de drempel voor insulten verlagen</li>
                  <li>• Antidepressiva: meestal geen probleem, maar overleg nodig</li>
                  <li>• Antipsychotica: individuele beoordeling vereist</li>
                  <li>• Stimulantia: mogelijk tijdelijk stoppen</li>
                  <li>• Alcohol: vermijden voor en na behandeling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Veiligheidsmaatregelen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Hoe waarborgen we de veiligheid?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Intake en screening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Uitgebreide medische anamnese en screening op contra-indicaties voorafgaand aan elke behandeling.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">CE-gecertificeerde apparatuur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Gebruik van alleen medisch gecertificeerde rTMS-apparatuur met ingebouwde veiligheidssystemen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Gespecialiseerde professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Alle behandelingen worden uitgevoerd door gecertificeerde rTMS-specialisten met jarenlange ervaring.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Continue monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Voortdurende observatie tijdens behandeling en directe beschikbaarheid van noodprocedures.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde vragen over bijwerkingen</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="duration" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">Hoe lang duren bijwerkingen meestal?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                <p className="mb-4">
                  De meeste bijwerkingen zijn van korte duur en verdwijnen binnen enkele uren na de behandeling:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Hoofdpijn:</strong> 1-4 uur, neemt af na eerste week
                  </li>
                  <li>
                    <strong>Vermoeidheid:</strong> 2-6 uur, meestal mild
                  </li>
                  <li>
                    <strong>Hoofdhuidgevoeligheid:</strong> 30 minuten tot 2 uur
                  </li>
                  <li>
                    <strong>Duizeligheid:</strong> 15-60 minuten, zeldzaam na eerste sessies
                  </li>
                </ul>
                <p className="mt-4">
                  Langdurige bijwerkingen (langer dan 24 uur) zijn zeer zeldzaam en verdienen altijd medische aandacht.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="activities" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">Kan ik werken of autorijden na een sessie?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Autorijden:</h4>
                    <p>In de meeste gevallen kunt u direct na de behandeling autorijden. We adviseren echter:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Na de eerste 2-3 sessies: laat u ophalen of gebruik openbaar vervoer</li>
                      <li>Bij hoofdpijn of duizeligheid: wacht tot klachten verdwenen zijn</li>
                      <li>Luister naar uw lichaam en neem geen risico's</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Werk en dagelijkse activiteiten:</h4>
                    <p>
                      De meeste patiënten kunnen direct na de behandeling hun normale activiteiten hervatten. Vermijd
                      alleen zeer intensieve mentale of fysieke inspanning gedurende 2-3 uur na de sessie.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="complaints" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-lg font-semibold">Wat moet ik doen bij klachten?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-l-green-500 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Lichte klachten (hoofdpijn, vermoeidheid):</h4>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li>Rust en ontspanning</li>
                      <li>Voldoende water drinken</li>
                      <li>Paracetamol indien nodig (max. 1000mg)</li>
                      <li>Vermijd alcohol en cafeïne</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-l-yellow-500 p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      Matige klachten (aanhoudende hoofdpijn, duizeligheid):
                    </h4>
                    <ul className="list-disc list-inside text-yellow-700 space-y-1">
                      <li>Neem contact op met ons team binnen 24 uur</li>
                      <li>Documenteer uw klachten (tijdstip, duur, intensiteit)</li>
                      <li>Vermijd autorijden tot klachten verdwenen zijn</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-l-red-500 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Ernstige klachten (insult, bewustzijnsverlies):</h4>
                    <ul className="list-disc list-inside text-red-700 space-y-1">
                      <li>Bel direct 112 voor medische hulp</li>
                      <li>Informeer medisch personeel over rTMS-behandeling</li>
                      <li>Neem zo snel mogelijk contact met ons op</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">24/7 Bereikbaarheid:</h4>
                    <p className="text-blue-700">
                      Voor spoedeisende vragen buiten kantooruren kunt u ons bereiken via de noodlijn:
                      <span className="font-semibold"> 088-123-4567</span>
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Vragen over veiligheid of bijwerkingen?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Ons ervaren team staat klaar om al uw vragen over de veiligheid van rTMS te beantwoorden. Transparantie en
            uw welzijn staan bij ons voorop.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
              <Link href="tel:088-123-4567" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                088-123-4567
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
            >
              <Link href="mailto:info@rtms-kliniek.nl" className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@rtms-kliniek.nl
              </Link>
            </Button>
          </div>

          <p className="text-blue-200 text-sm mt-6">
            Spoedeisende vragen buiten kantooruren: 088-123-4567 (24/7 bereikbaar)
          </p>
        </section>
      </div>
    </div>
  )
}
