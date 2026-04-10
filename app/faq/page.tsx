import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, Clock, Euro, Shield, Users, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Veelgestelde vragen over rTMS behandeling | rTMS Behandeling",
  description:
    "Antwoorden op alle vragen over rTMS behandeling: effectiviteit, veiligheid, kosten, vergoeding en praktische informatie. Professionele rTMS therapie in Nederland.",
  keywords:
    "rTMS FAQ, veelgestelde vragen rTMS, rTMS kosten, rTMS vergoeding, rTMS veiligheid, rTMS effectiviteit, magnetische hersenstimulatie vragen",
  openGraph: {
    title: "Veelgestelde vragen over rTMS behandeling",
    description:
      "Antwoorden op alle vragen over rTMS behandeling: effectiviteit, veiligheid, kosten en praktische informatie.",
    url: "https://rtms-behandeling.nl/faq",
    siteName: "rTMS Behandeling",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veelgestelde vragen over rTMS behandeling",
    description:
      "Antwoorden op alle vragen over rTMS behandeling: effectiviteit, veiligheid, kosten en praktische informatie.",
  },
  alternates: {
    canonical: "https://rtms-behandeling.nl/faq",
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Veelgestelde vragen over rTMS behandeling
            </h1>
            <p className="text-xl text-blue-100 text-balance">
              Vind antwoorden op al uw vragen over rTMS behandeling, van effectiviteit tot praktische zaken
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Navigation */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              Snel naar uw vraag
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a href="#algemeen">Algemene vragen</a>
              </Button>
              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a href="#effectiviteit">Effectiviteit</a>
              </Button>
              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a href="#veiligheid">Veiligheid</a>
              </Button>
              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a href="#kosten">Kosten & vergoeding</a>
              </Button>
              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a href="#praktisch">Praktische vragen</a>
              </Button>
              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a href="#professionals">Voor professionals</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Algemene vragen over rTMS */}
        <section id="algemeen" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                <MessageCircle className="h-8 w-8" />
                Algemene vragen over rTMS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="wat-is-rtms">
                  <AccordionTrigger className="text-lg font-semibold">Wat is rTMS precies?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>
                      rTMS staat voor repetitieve Transcraniële Magnetische Stimulatie. Het is een niet-invasieve
                      behandelmethode waarbij magnetische pulsen worden gebruikt om specifieke hersengebieden te
                      stimuleren.
                    </p>
                    <p>
                      De behandeling werkt door middel van een magnetische spoel die tegen het hoofd wordt geplaatst.
                      Deze spoel genereert korte magnetische pulsen die de hersenactiviteit in het doelgebied kunnen
                      beïnvloeden en normaliseren.
                    </p>
                    <p>
                      rTMS is wetenschappelijk bewezen effectief voor verschillende psychiatrische aandoeningen, met
                      name depressie, angststoornissen en dwangstoornissen.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="geschikt-voor">
                  <AccordionTrigger className="text-lg font-semibold">Voor wie is rTMS geschikt?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>rTMS is geschikt voor volwassenen met:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Behandelresistente depressie (medicatie heeft onvoldoende effect gehad)</li>
                      <li>Angststoornissen die niet goed reageren op standaardbehandeling</li>
                      <li>Dwangstoornissen (OCD) met onvoldoende respons op therapie en medicatie</li>
                      <li>Patiënten die bijwerkingen van medicatie willen vermijden</li>
                    </ul>
                    <p>
                      Een uitgebreide intake bepaalt of rTMS geschikt is voor uw specifieke situatie. Factoren zoals
                      medische geschiedenis, huidige medicatie en ernst van klachten worden beoordeeld.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sessie-praktijk">
                  <AccordionTrigger className="text-lg font-semibold">
                    Hoe werkt een sessie in de praktijk?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>Een rTMS-sessie verloopt als volgt:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>U neemt plaats in een comfortabele behandelstoel</li>
                      <li>De therapeut plaatst de magnetische spoel op de juiste positie op uw hoofd</li>
                      <li>De behandeling start met korte magnetische pulsen</li>
                      <li>U hoort een tikkend geluid en voelt lichte tikjes op uw hoofd</li>
                      <li>Tijdens de behandeling kunt u ontspannen, lezen of muziek luisteren</li>
                    </ol>
                    <p>
                      De sessie duurt ongeveer 20-40 minuten. U bent de hele tijd bij bewustzijn en kunt normaal
                      communiceren. Na afloop kunt u direct uw normale activiteiten hervatten.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Effectiviteit en resultaten */}
        <section id="effectiviteit" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                <Shield className="h-8 w-8" />
                Effectiviteit en resultaten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="effectief-depressie">
                  <AccordionTrigger className="text-lg font-semibold">
                    Hoe effectief is rTMS bij depressie?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>
                      Wetenschappelijk onderzoek toont aan dat rTMS zeer effectief is bij behandelresistente depressie:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>60-70% van de patiënten ervaart significante verbetering</li>
                      <li>30-40% bereikt volledige remissie van depressieve klachten</li>
                      <li>Effecten zijn vergelijkbaar met antidepressiva, maar zonder systemische bijwerkingen</li>
                      <li>Combinatie met psychotherapie verhoogt de effectiviteit verder</li>
                    </ul>
                    <p>
                      De effectiviteit is het hoogst bij patiënten met matige tot ernstige depressie die onvoldoende
                      hebben gereageerd op 1-3 antidepressiva.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wanneer-resultaat">
                  <AccordionTrigger className="text-lg font-semibold">Wanneer merk ik resultaat?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>De tijdlijn voor resultaten varieert per persoon:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Week 1-2:</strong> Mogelijk eerste subtiele verbeteringen in slaap en energie
                      </li>
                      <li>
                        <strong>Week 2-3:</strong> Verbetering in stemming en motivatie wordt merkbaarder
                      </li>
                      <li>
                        <strong>Week 3-4:</strong> Significante verbetering in depressieve symptomen
                      </li>
                      <li>
                        <strong>Week 4-6:</strong> Maximale effecten worden meestal bereikt
                      </li>
                    </ul>
                    <p>
                      Sommige patiënten merken al na een week verbetering, anderen hebben de volledige behandelperiode
                      nodig. Geduld is belangrijk - de hersenen hebben tijd nodig om te reageren.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hoeveel-sessies">
                  <AccordionTrigger className="text-lg font-semibold">Hoeveel sessies zijn er nodig?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>Een standaard rTMS-behandeling bestaat uit:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Acute fase:</strong> 20-30 sessies over 4-6 weken (5 dagen per week)
                      </li>
                      <li>
                        <strong>Taper fase:</strong> Geleidelijke afbouw over 2-3 weken
                      </li>
                      <li>
                        <strong>Onderhoud:</strong> Eventuele onderhoudsbehandelingen (maandelijks/driemaandelijks)
                      </li>
                    </ul>
                    <p>
                      Het exacte aantal sessies wordt aangepast op basis van uw respons op de behandeling. Bij goede
                      respons kan het aantal sessies worden verminderd, bij trage respons kan verlenging nodig zijn.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Veiligheid en bijwerkingen */}
        <section id="veiligheid" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                <Shield className="h-8 w-8" />
                Veiligheid en bijwerkingen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="is-veilig">
                  <AccordionTrigger className="text-lg font-semibold">Is rTMS veilig?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>rTMS is een zeer veilige behandeling met meer dan 30 jaar onderzoek en klinische ervaring:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Goedgekeurd door FDA (VS) en EMA (Europa) voor behandeling van depressie</li>
                      <li>Geen systemische bijwerkingen zoals bij medicatie</li>
                      <li>Geen invloed op geheugen of cognitieve functies</li>
                      <li>Geen verdoving of anesthesie nodig</li>
                      <li>Zeer laag risico op ernstige complicaties (&lt;0.1%)</li>
                    </ul>
                    <p>
                      Alle behandelingen worden uitgevoerd door gespecialiseerde therapeuten volgens internationale
                      veiligheidsrichtlijnen.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="bijwerkingen">
                  <AccordionTrigger className="text-lg font-semibold">
                    Welke bijwerkingen kan ik verwachten?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>De meest voorkomende bijwerkingen zijn mild en tijdelijk:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Hoofdpijn (30-40%):</strong> Meestal mild en verdwijnt na enkele sessies
                      </li>
                      <li>
                        <strong>Hoofdhuidgevoeligheid (20-30%):</strong> Lichte pijn of tintelingen ter plaatse
                      </li>
                      <li>
                        <strong>Vermoeidheid (10-20%):</strong> Tijdelijke moeheid na de sessie
                      </li>
                      <li>
                        <strong>Oorsuizen (5-10%):</strong> Tijdelijk, door het geluid van de machine
                      </li>
                    </ul>
                    <p>
                      Ernstige bijwerkingen zoals insulten zijn extreem zeldzaam (&lt;0.1%). Alle bijwerkingen worden
                      nauwkeurig gemonitord en besproken tijdens de behandeling.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="autorijden">
                  <AccordionTrigger className="text-lg font-semibold">
                    Kan ik autorijden na een behandeling?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>In de meeste gevallen kunt u direct na de behandeling autorijden:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>rTMS beïnvloedt uw bewustzijn of reactievermogen niet</li>
                      <li>Geen verdoving of sedatie gebruikt</li>
                      <li>De meeste patiënten voelen zich direct na de sessie normaal</li>
                    </ul>
                    <p>
                      <strong>Uitzonderingen:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Bij hoofdpijn of duizeligheid adviseren we rust</li>
                      <li>Na de eerste sessie observeren we uw reactie</li>
                      <li>Bij ongewone bijwerkingen bespreken we alternatieven</li>
                    </ul>
                    <p>
                      We adviseren altijd om na de eerste sessie iemand mee te nemen of openbaar vervoer te gebruiken.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Kosten en vergoeding */}
        <section id="kosten" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                <Euro className="h-8 w-8" />
                Kosten en vergoeding
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="kosten-traject">
                  <AccordionTrigger className="text-lg font-semibold">Wat kost een volledig traject?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>De kosten voor een complete rTMS-behandeling zijn:</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li>
                          <strong>Intake en diagnostiek:</strong> €200-300
                        </li>
                        <li>
                          <strong>Standaard behandeling (25 sessies):</strong> €4.500-6.000
                        </li>
                        <li>
                          <strong>Onderhoudsbehandelingen:</strong> €150-200 per sessie
                        </li>
                      </ul>
                    </div>
                    <p>De exacte kosten variëren afhankelijk van:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Aantal benodigde sessies</li>
                      <li>Type rTMS-protocol</li>
                      <li>Aanvullende begeleiding</li>
                      <li>Locatie van de behandeling</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vergoeding">
                  <AccordionTrigger className="text-lg font-semibold">
                    Wordt rTMS vergoed door mijn zorgverzekeraar?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>rTMS wordt in toenemende mate vergoed door Nederlandse zorgverzekeraars:</p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p>
                        <strong>Basisverzekering:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Steeds meer verzekeraars nemen rTMS op in het basispakket</li>
                        <li>Vergoeding bij behandelresistente depressie</li>
                        <li>Voorwaarde: verwijzing van psychiater of huisarts</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p>
                        <strong>Aanvullende verzekering:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Veel verzekeraars vergoeden (gedeeltelijk) via aanvullende pakketten</li>
                        <li>Vergoeding variëert van €1.000-5.000 per jaar</li>
                        <li>Check uw polis voor specifieke voorwaarden</li>
                      </ul>
                    </div>
                    <p>We helpen u graag bij het aanvragen van vergoeding en het contact met uw verzekeraar.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="eigen-risico">
                  <AccordionTrigger className="text-lg font-semibold">
                    Valt het onder het eigen risico?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>Of rTMS onder uw eigen risico valt, hangt af van uw verzekering:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Basisverzekering:</strong> Ja, valt onder eigen risico (€385 in 2024)
                      </li>
                      <li>
                        <strong>Aanvullende verzekering:</strong> Meestal niet onder eigen risico
                      </li>
                      <li>
                        <strong>Particuliere behandeling:</strong> Geen eigen risico, volledige eigenbetalig
                      </li>
                    </ul>
                    <p>
                      <strong>Tips voor kostenbeheersing:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Vraag vooraf een kostenopgave aan uw verzekeraar</li>
                      <li>Overweeg een aanvullende verzekering voor volgend jaar</li>
                      <li>Informeer naar betalingsregelingen</li>
                      <li>Sommige werkgevers vergoeden via zorgbudget</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Praktische vragen */}
        <section id="praktisch" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                <Clock className="h-8 w-8" />
                Praktische vragen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="duur-sessie">
                  <AccordionTrigger className="text-lg font-semibold">Hoe lang duurt een sessie?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>De duur van een rTMS-sessie varieert per protocol:</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li>
                          <strong>Standaard rTMS:</strong> 30-40 minuten
                        </li>
                        <li>
                          <strong>Theta Burst Stimulation (TBS):</strong> 10-15 minuten
                        </li>
                        <li>
                          <strong>Voorbereiding en nazorg:</strong> 10-15 minuten
                        </li>
                        <li>
                          <strong>Totale tijd op locatie:</strong> 45-60 minuten
                        </li>
                      </ul>
                    </div>
                    <p>De eerste sessie duurt langer (60-90 minuten) vanwege:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Uitleg over de procedure</li>
                      <li>Bepalen van de juiste stimulatie-intensiteit</li>
                      <li>Positionering van de spoel</li>
                      <li>Monitoring van uw reactie</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hoe-vaak">
                  <AccordionTrigger className="text-lg font-semibold">Hoe vaak moet ik komen?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>Het behandelschema is gestructureerd voor optimale effectiviteit:</p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p>
                        <strong>Acute behandelfase (4-6 weken):</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>5 dagen per week (maandag t/m vrijdag)</li>
                        <li>Weekenden vrij voor herstel</li>
                        <li>Totaal 20-30 sessies</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p>
                        <strong>Taper fase (2-3 weken):</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>3 dagen per week</li>
                        <li>Geleidelijke afbouw</li>
                        <li>Monitoring van effecten</li>
                      </ul>
                    </div>
                    <p>
                      <strong>Flexibiliteit:</strong> Bij ziekte of vakantie kunnen sessies worden ingehaald.
                      Continuïteit is belangrijk voor optimale resultaten.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="meenemen">
                  <AccordionTrigger className="text-lg font-semibold">
                    Wat moet ik meenemen naar de eerste afspraak?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>Voor uw eerste afspraak heeft u het volgende nodig:</p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p>
                        <strong>Verplichte documenten:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Geldig identiteitsbewijs</li>
                        <li>Zorgverzekeringspas</li>
                        <li>Verwijsbrief van huisarts of specialist</li>
                        <li>Ingevulde intake formulieren</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p>
                        <strong>Medische informatie:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Overzicht huidige medicatie</li>
                        <li>Medische geschiedenis (vooral neurologie/psychiatrie)</li>
                        <li>Eerdere behandelrapporten</li>
                        <li>Lijst van allergieën</li>
                      </ul>
                    </div>
                    <p>
                      <strong>Praktische tips:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Draag comfortabele kleding</li>
                      <li>Vermijd metalen sieraden in het haar</li>
                      <li>Neem eventueel een boek of muziek mee</li>
                      <li>Plan tijd in voor de uitgebreide intake (90 minuten)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Voor professionals en verwijzers */}
        <section id="professionals" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                <Users className="h-8 w-8" />
                Voor professionals en verwijzers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="doorverwijzen">
                  <AccordionTrigger className="text-lg font-semibold">
                    Hoe kan ik een patiënt doorverwijzen?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>Doorverwijzing voor rTMS kan via verschillende routes:</p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p>
                        <strong>Directe verwijzing:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Huisarts kan direct verwijzen bij behandelresistente depressie</li>
                        <li>Psychiater/psycholoog kan doorverwijzen</li>
                        <li>Gebruik standaard verwijsformulier</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p>
                        <strong>Overleg vooraf:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Telefonisch consult mogelijk (gratis)</li>
                        <li>Bespreking van indicatie en contra-indicaties</li>
                        <li>Advies over timing en combinatietherapie</li>
                      </ul>
                    </div>
                    <p>
                      <strong>Contactgegevens voor verwijzers:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Telefoon: 020-1234567 (verwijzerlijn)</li>
                      <li>Email: verwijzers@rtms-behandeling.nl</li>
                      <li>Online verwijsformulier beschikbaar</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documentatie">
                  <AccordionTrigger className="text-lg font-semibold">Welke documentatie is nodig?</AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>Voor een complete beoordeling hebben we de volgende informatie nodig:</p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p>
                        <strong>Verplichte documentatie:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Verwijsbrief met diagnose en behandelgeschiedenis</li>
                        <li>Overzicht geprobeerde medicatie en effecten</li>
                        <li>Huidige medicatie en dosering</li>
                        <li>Relevante medische geschiedenis</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p>
                        <strong>Aanvullende informatie (indien beschikbaar):</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Psychologische testresultaten (HAM-D, BDI, etc.)</li>
                        <li>Neuroimaging (MRI/CT) bij neurologische comorbiditeit</li>
                        <li>EEG-resultaten bij epilepsie in voorgeschiedenis</li>
                        <li>Eerdere ECT-ervaringen</li>
                      </ul>
                    </div>
                    <p>
                      We beoordelen elke verwijzing binnen 48 uur en nemen contact op voor eventuele aanvullende vragen.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="overleg-specialist">
                  <AccordionTrigger className="text-lg font-semibold">
                    Is overleg met een specialist mogelijk?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 space-y-4">
                    <p>Wij stimuleren multidisciplinaire samenwerking en bieden verschillende overlegmogelijkheden:</p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p>
                        <strong>Regulier overleg:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Wekelijks multidisciplinair overleg (MDO)</li>
                        <li>Maandelijkse verwijzersbijeenkomst</li>
                        <li>Telefonisch consult op afspraak</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p>
                        <strong>Patiëntspecifiek overleg:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Voor-behandeling: indicatiestelling en planning</li>
                        <li>Tijdens behandeling: voortgang en bijstellingen</li>
                        <li>Na behandeling: nazorg en onderhoudsbehandeling</li>
                      </ul>
                    </div>
                    <p>
                      <strong>Nascholing en kennisdeling:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Kwartaalse nascholingsbijeenkomsten</li>
                      <li>Wetenschappelijke publicaties en onderzoek</li>
                      <li>Accreditatiepunten beschikbaar</li>
                      <li>Gastcolleges op locatie mogelijk</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Nog meer vragen */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                <MessageCircle className="h-8 w-8" />
                Nog meer vragen?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Contact opnemen via formulier
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Uw vraag</label>
                      <Textarea placeholder="Stel hier uw vraag over rTMS behandeling..." className="min-h-[100px]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Naam</label>
                        <Input placeholder="Uw naam" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="uw@email.nl" />
                      </div>
                    </div>
                    <Button className="w-full bg-blue-800 hover:bg-blue-900">Vraag versturen</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Telefonisch of per e-mail bereikbaar
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">Telefoon</p>
                        <p className="text-gray-600">020-1234567</p>
                        <p className="text-sm text-gray-500">Ma-vr 9:00-17:00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">E-mail</p>
                        <p className="text-gray-600">info@rtms-behandeling.nl</p>
                        <p className="text-sm text-gray-500">Reactie binnen 24 uur</p>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="font-semibold text-green-800 mb-2">Spoedgevallen</p>
                      <p className="text-sm text-green-700">
                        Bij acute psychiatrische nood: bel 113 (Zelfmoordpreventie) of ga naar de Spoedeisende Hulp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
