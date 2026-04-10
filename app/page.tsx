import  Hero  from "@/components/Hero"
import  QuickNav  from "@/components/QuickNav"
import  RtmsUitlegSection  from "@/components/RtmsUitlegSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <QuickNav />
      <RtmsUitlegSection />

      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary text-balance">Wat is rTMS?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ontdek de moderne, wetenschappelijk bewezen behandelmethode die levens verandert
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <div className="w-8 h-8 bg-secondary rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-foreground">Niet-invasieve hersenstimulatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  rTMS gebruikt magnetische pulsen om specifieke hersengebieden te stimuleren. Geen operatie, geen
                  medicatie - alleen gerichte, wetenschappelijk bewezen behandeling.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/50 lg:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-foreground">Wanneer wordt rTMS ingezet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Vooral effectief bij therapieresistente aandoeningen. Wanneer traditionele behandelingen onvoldoende
                  helpen of niet verdragen worden, biedt rTMS nieuwe hoop.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-foreground">Voordelen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Geen systemische bijwerkingen, geen narcose nodig. Patiënten kunnen direct na behandeling normale
                  activiteiten hervatten en blijven helder.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/wat-is-rtms-behandeling">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Meer over rTMS behandeling
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary text-balance">Hoe werkt rTMS?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Een kijkje in de wetenschap achter deze innovatieve behandeling
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Magnetische pulsen en neuroplasticiteit</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Magnetische pulsen stimuleren neuronen in specifieke hersengebieden, wat leidt tot veranderingen in
                  neurale verbindingen en verbeterde hersenfunctie.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">Gerichte stimulatie</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Magnetische stimulatie</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Doelgebieden (o.a. prefrontale cortex)</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  De behandeling richt zich op specifieke hersengebieden zoals de prefrontale cortex, die betrokken zijn
                  bij stemming, cognitie en emotieregulatie.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Prefrontale cortex</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Motorische cortex</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-secondary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Gerichte hersengebieden</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 space-x-4">
            <Link href="/hoe-werkt-rtms">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Hoe werkt rTMS
              </Button>
            </Link>
            <Link href="/protocol-en-sessies">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Protocol & sessies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary text-balance">Effectiviteit</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Bewezen resultaten die het verschil maken
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-2 hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <div className="text-4xl font-bold text-secondary mb-2">60-70%</div>
                <CardTitle className="text-lg">Respons- en remissiepercentages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Van de patiënten ervaart significante verbetering, met remissiepercentages van 30-40% bij depressie.
                </p>
                <div className="mt-4 bg-secondary/20 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full w-[70%]"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">✓</div>
                <CardTitle className="text-lg">Wetenschappelijke onderbouwing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Opgenomen in internationale richtlijnen en aanbevolen door de Nederlandse Vereniging voor Psychiatrie.
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-accent/50 transition-all duration-300">
              <CardHeader>
                <div className="text-4xl font-bold text-accent mb-2">4-6</div>
                <CardTitle className="text-lg">Tijdlijn van verbetering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eerste effecten zichtbaar na 2-3 weken, optimale resultaten na 4-6 weken behandeling.
                </p>
                <div className="mt-4 flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5, 6].map((week) => (
                    <div
                      key={week}
                      className={`w-3 h-3 rounded-full ${week <= 4 ? "bg-accent" : "bg-accent/30"}`}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/effectiviteit-rtms">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Meer over effectiviteit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary text-balance">Indicaties</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Bewezen effectief voor verschillende aandoeningen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <div className="w-6 h-6 bg-secondary rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-foreground">Depressie</CardTitle>
                <CardDescription>Therapieresistente depressie</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Behandeling van therapieresistente depressie en unipolaire depressieve episodes bij volwassenen.
                </p>
                <Link href="/rtms-bij-depressie">
                  <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80">
                    Meer over rTMS bij depressie →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-foreground">OCD</CardTitle>
                <CardDescription>Obsessief-compulsieve stoornis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Effectieve behandeling van obsessief-compulsieve stoornis (OCD) bij volwassenen.
                </p>
                <Link href="/rtms-bij-ocd">
                  <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80">
                    Meer over rTMS bij OCD →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-foreground">Tinnitus</CardTitle>
                <CardDescription>Chronische oorsuizen</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Behandeling van chronische tinnitus die het dagelijks functioneren beïnvloedt.
                </p>
                <Link href="/rtms-bij-tinnitus">
                  <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80">
                    Meer over rTMS bij tinnitus →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary text-balance">Protocol & sessies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Uw behandeltraject stap voor stap
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/30"></div>

              <div className="space-y-12">
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                    1
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Intake en veiligheidscheck</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Uitgebreide intake met medische screening, contra-indicaties check en behandelplan opstelling.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                    2
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Aantal sessies en behandelduur</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Standaard 20-30 sessies over 4-6 weken, 5 dagen per week, elke sessie duurt 20-40 minuten.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Onderhouds- of vervolgbehandeling</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Bij goede respons mogelijk onderhoudsbehandeling of vervolgtraject om resultaten te behouden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/protocol-en-sessies">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Volledig protocol bekijken
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Kosten & vergoeding */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-primary">Kosten & vergoeding</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Kosten per traject</h3>
              <p className="text-muted-foreground leading-relaxed">
                Een volledig rTMS-traject kost gemiddeld €3.000-€5.000, afhankelijk van het aantal sessies en de
                specifieke indicatie.
              </p>
              <Link href="/kosten">
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                  Gedetailleerde kostenoverzicht →
                </Button>
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Vergoedingsmogelijkheden</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vergoeding mogelijk via zorgverzekering (aanvullende verzekering) of via de Wet langdurige zorg (Wlz).
              </p>
              <Link href="/vergoeding">
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                  Vergoedingsmogelijkheden →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bijwerkingen & veiligheid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-primary">Bijwerkingen & veiligheid</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Vaak voorkomende bijwerkingen</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lichte hoofdpijn, gevoeligheid op de behandelplaats, en tijdelijke vermoeidheid. Deze klachten zijn
                meestal mild en tijdelijk.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Zeldzame risico's</h3>
              <p className="text-muted-foreground leading-relaxed">
                Epileptische aanval (zeer zeldzaam, minder dan 0.1%), gehoorverlies (bij onvoldoende gehoorbescherming).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Hoe veiligheid wordt gewaarborgd</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strikte protocollen, getraind personeel, continue monitoring tijdens behandeling en noodprocedures.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/bijwerkingen-en-veiligheid">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Volledige veiligheidsinformatie
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ervaringen van patiënten */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-primary">Ervaringen van patiënten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Verhalen uit de praktijk</h3>
              <p className="text-muted-foreground leading-relaxed">
                Echte ervaringen van patiënten die rTMS hebben ondergaan voor verschillende indicaties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Wat patiënten positief ervaren</h3>
              <p className="text-muted-foreground leading-relaxed">
                Geen medicatie-bijwerkingen, behoud van helderheid, mogelijkheid om te blijven werken tijdens
                behandeling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Wat patiënten lastig vinden</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dagelijkse reistijd naar de kliniek, geluid tijdens behandeling, geduld hebben voor resultaten.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/ervaringen">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Lees patiëntenervaringen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locaties */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-primary">Locaties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Heiloo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kennemerstraatweg 464 unit 1.03
                  <br />
                  1851 NG Heiloo
                </p>
                <p className="text-sm text-muted-foreground">Moderne faciliteit met uitgebreide parkeermogelijkheden</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Volendam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Heideweg 1B
                  <br />
                  1132 DA Volendam
                  <br />
                  (Gezondheidscentrum Volendam)
                </p>
                <p className="text-sm text-muted-foreground">
                  Geïntegreerd in gezondheidscentrum voor optimale zorgcoördinatie
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-primary">Veelgestelde vragen (FAQ)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Hoeveel sessies heb ik nodig?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gemiddeld 20-30 sessies over 4-6 weken, afhankelijk van uw specifieke situatie en respons op de
                behandeling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Kan ik werken of autorijden na een sessie?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ja, u kunt direct na de behandeling normale activiteiten hervatten, inclusief werken en autorijden.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Heb ik een verwijzing nodig?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Een verwijzing van uw huisarts of specialist is gewenst voor optimale zorgcoördinatie en mogelijke
                vergoeding.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/faq">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Alle veelgestelde vragen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Voor professionals & verwijzers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-primary">Voor professionals & verwijzers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Wanneer rTMS overwegen</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bij therapieresistente depressie, OCD of tinnitus, of wanneer medicatie niet verdragen wordt.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Verwijzen en overleg</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eenvoudige verwijsprocedure met directe communicatie over behandelplan en voortgang.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Publicaties en nascholing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Toegang tot wetenschappelijke literatuur en mogelijkheden voor nascholing over rTMS.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact voor professionals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary text-balance">Maak een afspraak</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Klaar om de eerste stap te zetten naar herstel? Plan uw intake of neem contact op voor meer informatie.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-foreground">Intake plannen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Plan een uitgebreide intake om te bepalen of rTMS geschikt is voor uw situatie.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Afspraak maken
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-secondary rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-foreground">Contact opnemen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Heeft u vragen over rTMS? Neem contact op voor meer informatie.
                </p>
                <Link href="/wat-is-rtms-behandeling">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  >
                    Meer informatie
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}