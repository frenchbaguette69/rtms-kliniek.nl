import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MapPin, Clock, Car, Train, FileText, Users, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact rTMS Kliniek Nederland | Afspraak Maken & Informatie",
  description:
    "Neem contact op met rTMS Kliniek Nederland voor een intake of informatie. Bel 020 123 4567, plan online een afspraak of stuur een e-mail. Locatie Amsterdam centrum, openingstijden en routebeschrijving.",
  keywords:
    "rTMS contact, rTMS afspraak maken, rTMS kliniek Amsterdam, rTMS intake, magnetische hersenstimulatie contact, rTMS telefoonnummer, rTMS adres, rTMS openingstijden",
  authors: [{ name: "rTMS Behandeling Nederland" }],
  openGraph: {
    title: "Contact rTMS Kliniek Nederland | Afspraak Maken & Informatie",
    description:
      "Neem contact op voor rTMS behandeling. Plan een intake, stel uw vragen of vraag informatie aan. Locatie Amsterdam centrum, telefonisch bereikbaar.",
    url: "https://rtms-behandeling.nl/contact",
    siteName: "rTMS Behandeling Nederland",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "rTMS Kliniek Nederland Contact - Afspraak Maken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact rTMS Kliniek Nederland | Afspraak Maken & Informatie",
    description: "Neem contact op voor rTMS behandeling. Plan een intake, stel uw vragen of vraag informatie aan.",
    images: ["/og-contact.jpg"],
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
    canonical: "https://rtms-behandeling.nl/contact",
  },
}

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact opnemen voor rTMS behandeling</h1>
            <p className="text-xl text-blue-100 mb-8 text-pretty">
              Neem vandaag nog contact met ons op voor een vrijblijvend intakegesprek. Onze specialisten staan klaar om
              al uw vragen te beantwoorden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                Bel direct: 020 123 4567
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                E-mail ons
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Direct een intake plannen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Direct een intake plannen</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Online afspraak maken</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Plan uw intake direct online via ons afsprakensysteem. Kies een tijdstip dat u uitkomt.
                </p>
                <Button className="w-full bg-blue-800 hover:bg-blue-900">Afspraak inplannen</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Telefonisch contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Bel ons direct voor een persoonlijk gesprek en om uw vragen te stellen.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">020 123 4567</p>
                  <p className="text-sm text-gray-500">Ma-vr: 8:00-17:00</p>
                </div>
                <Button className="w-full bg-blue-800 hover:bg-blue-900 mt-4">Direct bellen</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">E-mail of contactformulier</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Stuur ons een bericht via e-mail of vul het contactformulier in.</p>
                <div className="space-y-2">
                  <p className="font-semibold">info@rtms-kliniek.nl</p>
                  <p className="text-sm text-gray-500">Reactie binnen 24 uur</p>
                </div>
                <Button className="w-full bg-blue-800 hover:bg-blue-900 mt-4">E-mail sturen</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Onze contactgegevens */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Onze contactgegevens</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Adres en routebeschrijving
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">rTMS Kliniek Amsterdam</h4>
                    <p className="text-gray-600">
                      Herengracht 123
                      <br />
                      1015 BG Amsterdam
                      <br />
                      Nederland
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Routebeschrijving</h4>
                    <p className="text-gray-600 text-sm">
                      Gelegen in het hart van Amsterdam, op 5 minuten lopen van Amsterdam Centraal. Parkeren mogelijk in
                      de Q-Park Nieuwendijk.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Openingstijden
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Maandag - Vrijdag</span>
                      <span className="font-semibold">8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zaterdag</span>
                      <span className="font-semibold">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zondag</span>
                      <span className="text-gray-500">Gesloten</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Bereikbaarheid</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Car className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">Met de auto</p>
                        <p className="text-sm text-gray-600">Parkeren Q-Park Nieuwendijk (€2,50/uur)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Train className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">Openbaar vervoer</p>
                        <p className="text-sm text-gray-600">5 min lopen vanaf Amsterdam Centraal</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Veelgestelde vragen voor contact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Veelgestelde vragen voor contact</h2>

          <Card className="border-blue-200">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="verwijzing">
                  <AccordionTrigger className="text-blue-800">Heb ik een verwijzing nodig?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Voor rTMS behandeling heeft u een verwijzing nodig van uw huisarts of een specialist (psychiater,
                      neuroloog). Deze verwijzing is noodzakelijk voor vergoeding door de zorgverzekeraar. Zonder
                      verwijzing kunt u ook terecht, maar dan zijn de kosten voor eigen rekening.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wachttijd">
                  <AccordionTrigger className="text-blue-800">
                    Hoe snel kan ik terecht voor een intake?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Gemiddeld kunt u binnen 1-2 weken terecht voor een intakegesprek. In urgente gevallen proberen we
                      u sneller in te plannen. Na de intake kan de behandeling meestal binnen een week starten,
                      afhankelijk van de beschikbaarheid.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="meenemen">
                  <AccordionTrigger className="text-blue-800">
                    Wat moet ik meenemen naar de eerste afspraak?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600 space-y-2">
                      <p>Neem het volgende mee naar uw eerste afspraak:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Verwijsbrief van uw huisarts of specialist</li>
                        <li>Identiteitsbewijs (paspoort of ID-kaart)</li>
                        <li>Zorgverzekeringspas</li>
                        <li>Overzicht van huidige medicatie</li>
                        <li>Relevante medische rapporten of uitslagen</li>
                        <li>Lijst met vragen die u wilt stellen</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Voor professionals en verwijzers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Voor professionals en verwijzers</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Verwijsformulieren</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Download onze verwijsformulieren en richtlijnen voor een snelle en correcte verwijzing.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Standaard verwijsformulier</li>
                  <li>• Urgente verwijzing</li>
                  <li>• Indicatiecriteria</li>
                </ul>
                <Button className="w-full bg-blue-800 hover:bg-blue-900">Formulieren downloaden</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Overleg met een specialist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Heeft u vragen over de geschiktheid van een patiënt? Neem direct contact op met onze specialisten.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="font-semibold">Dr. J. van der Berg</p>
                  <p className="text-sm text-gray-500">Psychiater-directeur</p>
                  <p className="text-sm">j.vandenberg@rtms-kliniek.nl</p>
                </div>
                <Button className="w-full bg-blue-800 hover:bg-blue-900">Contact specialist</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-800" />
                </div>
                <CardTitle className="text-blue-800">Samenwerking en MDO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Wij werken graag samen in multidisciplinaire overleggen voor optimale patiëntenzorg.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Multidisciplinair overleg</li>
                  <li>• Gezamenlijke behandelplannen</li>
                  <li>• Nascholing en training</li>
                </ul>
                <Button className="w-full bg-blue-800 hover:bg-blue-900">MDO aanvragen</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stel je vraag direct online */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Stel je vraag direct online</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Contactformulier</CardTitle>
                <CardDescription>Vul het formulier in en wij nemen binnen 24 uur contact met u op.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="voornaam">Voornaam *</Label>
                      <Input id="voornaam" placeholder="Uw voornaam" />
                    </div>
                    <div>
                      <Label htmlFor="achternaam">Achternaam *</Label>
                      <Input id="achternaam" placeholder="Uw achternaam" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input id="email" type="email" placeholder="uw.email@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="telefoon">Telefoonnummer</Label>
                    <Input id="telefoon" placeholder="06 12345678" />
                  </div>

                  <div>
                    <Label htmlFor="onderwerp">Onderwerp</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer een onderwerp" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="intake">Intake aanvragen</SelectItem>
                        <SelectItem value="informatie">Algemene informatie</SelectItem>
                        <SelectItem value="verwijzing">Vragen over verwijzing</SelectItem>
                        <SelectItem value="kosten">Vragen over kosten</SelectItem>
                        <SelectItem value="anders">Anders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="bericht">Uw vraag of bericht *</Label>
                    <Textarea id="bericht" placeholder="Beschrijf uw vraag of situatie..." rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                    Bericht versturen
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Privacy en gegevensbescherming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Veilige gegevensverwerking</h4>
                    <p className="text-gray-600 text-sm">
                      Uw persoonlijke gegevens worden veilig verwerkt conform de AVG (GDPR). Wij gebruiken uw gegevens
                      uitsluitend voor het beantwoorden van uw vraag en het plannen van afspraken.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Wat doen wij met uw gegevens?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Contact opnemen voor uw vraag</li>
                      <li>• Afspraken inplannen</li>
                      <li>• Medische dossiervorming (na toestemming)</li>
                      <li>• Geen doorverkoop aan derden</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Uw rechten</h4>
                    <p className="text-gray-600 text-sm">
                      U heeft het recht om uw gegevens in te zien, te wijzigen of te laten verwijderen. Neem hiervoor
                      contact op met onze privacy officer.
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-blue-800 text-blue-800 hover:bg-blue-50 bg-transparent"
                  >
                    Privacyverklaring lezen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage
