import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import Locations from "@/components/Locations";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoCards />

      {/* rTMS Behandeling Sectie */}
      <div className="relative flex flex-col md:flex-row items-stretch mx-auto rounded-3xl overflow-hidden mt-12 w-[90%] gap-4 md:gap-16">
        {/* Linkerkant: Afbeelding */}
        <div className="w-full md:w-1/2 flex justify-center items-stretch">
          <Image
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="rTMS behandeling"
            width={2000}
            height={2000}
            className="h-full w-full object-cover rounded-3xl"
            title="rTMS behandeling bij rTMS kliniel"
          />
        </div>

        {/* Rechterkant: Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-900">
            Wat is een rTMS Behandeling en Hoe Werkt Het?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            <strong>Repetitieve Transcraniële Magnetische Stimulatie (rTMS)</strong> is een innovatieve en niet-invasieve behandelmethode voor aandoeningen zoals depressie, angststoornissen en OCD. Door middel van magnetische pulsen stimuleert rTMS specifieke hersengebieden die verantwoordelijk zijn voor stemming en emoties.
          </p>
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">Hoe Werkt rTMS?</h3>
          <p className="mt-4 text-lg text-gray-600">
            Tijdens een rTMS behandeling wordt een elektromagnetische spoel op de hoofdhuid geplaatst. Deze spoel zendt gecontroleerde magnetische pulsen uit die de hersenactiviteit stimuleren en de communicatie tussen neuronen verbeteren. Dit helpt om symptomen van depressie en andere psychische aandoeningen te verminderen.
          </p>
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">Voordelen van rTMS Therapie</h3>
          <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
            <li><strong>Klinisch bewezen effectiviteit</strong> bij depressie en angst</li>
            <li><strong>Geen medicatie nodig</strong> en geen ernstige bijwerkingen</li>
            <li><strong>Pijnloos en niet-invasief</strong>, geen verdoving vereist</li>
            <li><strong>Sessies van slechts 20-30 minuten</strong>, geen lange hersteltijd</li>
          </ul>
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">Is rTMS Geschikt Voor Jou?</h3>
          <p className="mt-4 text-lg text-gray-600">
            rTMS is een ideale behandelmethode voor mensen met een **therapieresistente depressie, angststoornis of OCD**, die niet goed reageren op medicatie of last hebben van bijwerkingen van antidepressiva.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Wil je weten of rTMS therapie jou kan helpen? Lees meer over de behandeling en plan een intake.
          </p>
          <Link href="/rtms-behandeling">
            <span className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-black bg-[#7ed957] rounded-lg hover:bg-green-600 transition">
              rTMS behandeling inplannen
            </span>
          </Link>
        </div>
      </div>

<div className="bg-green-950 rounded-[4rem] md:rounded-[6rem] mt-8 md:mt-24 py-10 md:py-16 w-[90%] mx-auto">
  <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-16">
    {/* Linkerkant: Tekst (1/2 van het scherm) */}
    <div className="w-full md:w-1/2 pr-6">
      <h2 className="text-4xl font-bold text-white">
        rTMS Behandeling: Effectieve Therapie bij Depressie en Angst
      </h2>
      <p className="mt-2 text-lg text-gray-200">
        <strong>Repetitieve Transcraniële Magnetische Stimulatie (rTMS)</strong> 
        is een innovatieve, niet-invasieve behandelmethode voor **depressie, angststoornissen en OCD**. 
        Deze wetenschappelijk bewezen therapie gebruikt magnetische pulsen om de hersenactiviteit te verbeteren 
        en helpt bij **therapieresistente depressie**, zonder de bijwerkingen van medicatie.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-white">Hoe Werkt een rTMS Behandeling?</h2>
      <p className="mt-2 text-lg text-gray-200">
        Tijdens een <strong>rTMS behandeling</strong> wordt een elektromagnetische spoel op de hoofdhuid geplaatst. 
        Deze spoel genereert precieze magnetische pulsen die de neurale activiteit stimuleren in hersengebieden 
        die betrokken zijn bij stemming en emotie. Dit bevordert herstel en vermindert klachten bij psychische aandoeningen.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-white">Voordelen van rTMS Therapie</h2>
      <ul className="mt-2 text-lg text-gray-200 list-disc list-inside">
        <li><strong>Klinisch bewezen effectiviteit</strong> bij depressie en angststoornissen</li>
        <li><strong>Geen medicatie nodig</strong> en dus geen bijwerkingen zoals gewichtstoename of vermoeidheid</li>
        <li><strong>Pijnloos en niet-invasief</strong>, geen verdoving of hersteltijd nodig</li>
        <li><strong>Sessies van slechts 20-30 minuten</strong> met langdurige resultaten</li>
        <li><strong>Snelle verbetering</strong>: Veel patiënten merken al na enkele sessies effect</li>
      </ul>

      <div className="mt-12">
        <a href="/rtms-behandeling" className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-black bg-[#7ed957] rounded-lg hover:bg-green-600 transition">
          meer over rTMS behandeling
        </a>
      </div>
    </div>

    {/* Rechterkant: Afbeelding (1/2 van het scherm) */}
    <div className="w-full md:w-1/2 flex justify-center items-stretch">
      <Image
        src="/rtmsbehandeling.png"
        alt="rTMS Behandeling bij rTMS kliniek"
        width={2000}
        height={2000}
        className="rounded-[3rem] md:rounded-[5rem] object-cover w-full h-full"
        title="rTMS behandeling"
      />
    </div>
  </div>
</div>
    
    {/* Scientific Research Section */}
    <div className="container w-full max-w-7xl mx-auto"></div>
    <div className="container max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">Wetenschappelijk Onderzoek en Effectiviteit</h2>
          <p className="mb-4 text-base md:text-lg">
            rTMS is geen experimentele behandeling meer, maar een wetenschappelijk onderbouwde therapie met 
            een groeiende hoeveelheid onderzoek dat de effectiviteit aantoont. Enkele belangrijke feiten:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
            <li>
              <strong>Klinische studies:</strong> Talrijke klinische studies tonen aan dat rTMS significante verbetering 
              kan bieden bij therapieresistente depressie, met responspercentages van 40-60% en remissiepercentages van 30-40%.
            </li>
            <li>
              <strong>FDA-goedkeuring:</strong> In de VS heeft de FDA rTMS goedgekeurd voor de behandeling van 
              therapieresistente depressie (2008), pijnlijk migrainesyndroom (2013), en obsessief-compulsieve stoornis (2018).
            </li>
            <li>
              <strong>Langetermijneffecten:</strong> Onderzoek suggereert dat de positieve effecten van rTMS 
              na een volledige behandelcyclus vaak meerdere maanden aanhouden, en soms zelfs langer met onderhoudsbehandelingen.
            </li>
            <li>
              <strong>Meta-analyses:</strong> Verschillende meta-analyses bevestigen de effectiviteit van rTMS, 
              vooral bij depressie, angststoornissen en neuropathische pijn.
            </li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <Image 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&h=500&auto=format&fit=crop" 
            alt="Wetenschappelijk onderzoek naar rTMS effectiviteit" 
            width={400} 
            height={500}
            className="rounded-2xl shadow-lg max-w-full h-auto mx-auto"
            unoptimized
            quality={100}
          />
        </div>
      </div>
    </div>
    
    {/* Different rTMS Techniques */}
    <div className="container max-w-7xl mx-auto"></div>
    <div className="container max-w-7xl mx-auto p-8">
      <h2 className="text-3xl md:text-4xl font-semibold mb-5">Verschillende rTMS Technieken</h2>
      
      <div className="mb-8 overflow-hidden rounded-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1000&h=300&auto=format&fit=crop" 
          alt="rTMS behandeltechnieken" 
          width={1000} 
          height={300}
          className="w-full object-cover max-h-[300px]"
          unoptimized
          quality={100}
        />
      </div>
      
      <p className="mb-6 text-base md:text-lg">
        Er zijn verschillende varianten van rTMS beschikbaar, elk met specifieke toepassingen en voordelen:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#7ed957]">Hoogfrequente rTMS</h3>
          <p className="text-base md:text-lg">
            Stimuleert hersenactiviteit met frequenties van 5-20 Hz. Wordt voornamelijk gebruikt bij depressie
            om de activiteit in de linker prefrontale cortex te verhogen. Deze techniek heeft een exciterend effect
            op de hersenen en kan helpen bij het verhogen van de activiteit in onderactieve hersengebieden.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#7ed957]">Laagfrequente rTMS</h3>
          <p className="text-base md:text-lg">
            Gebruikt frequenties van 1 Hz of lager om hersenactiviteit te verminderen. Deze techniek wordt 
            vaak toegepast bij angststoornissen, PTSS en tinnitus om overactieve hersengebieden te kalmeren. 
            Het heeft een remmend effect op de neurale activiteit.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#7ed957]">Theta Burst Stimulatie (TBS)</h3>
          <p className="text-base md:text-lg">
            Een nieuwere vorm van rTMS die kortere behandeltijden mogelijk maakt (vaak slechts enkele minuten 
            per sessie in plaats van 30-40 minuten). TBS gebruikt korte bursts van hoogfrequente stimulatie en 
            kan zowel exciterend (iTBS) als inhiberend (cTBS) werken, afhankelijk van het protocol.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#7ed957]">Deep TMS</h3>
          <p className="text-base md:text-lg">
            Gebruikt een speciaal ontworpen H-spoel die diepere hersengebieden kan bereiken dan standaard rTMS. 
            Deze techniek is FDA-goedgekeurd voor zowel depressie als OCD en kan effectief zijn voor patiënten 
            die niet reageren op conventionele rTMS.
          </p>
        </div>
      </div>
    </div>
    
    {/* rTMS and Medication */}
    <div className="container max-w-7xl mx-auto"></div>
    <div className="container max-w-7xl mx-auto p-8">
      <h2 className="text-3xl md:text-4xl font-semibold mb-5">rTMS en Medicatie</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-2/3">
          <p className="mb-4 text-base md:text-lg">
            Een belangrijke vraag die veel patiënten hebben, is hoe rTMS zich verhoudt tot medicatie voor psychische 
            aandoeningen. Hier zijn enkele belangrijke punten om te overwegen:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
            <li>
              <strong>Combinatietherapie:</strong> rTMS sluit het gebruik van medicatie niet uit. In feite kunnen 
              beide behandelingen vaak synergistisch werken. Veel patiënten ondergaan rTMS terwijl ze hun medicatie 
              blijven gebruiken.
            </li>
            <li>
              <strong>Alternatief voor medicatie:</strong> Voor patiënten die ernstige bijwerkingen ervaren van 
              medicatie of bij wie medicatie niet effectief is gebleken, kan rTMS een waardevol alternatief zijn.
            </li>
            <li>
              <strong>Medicatiereductie:</strong> Sommige patiënten kunnen, in overleg met hun arts, hun medicatie 
              geleidelijk afbouwen na succesvolle rTMS-behandeling. Dit moet echter altijd onder medisch toezicht gebeuren.
            </li>
            <li>
              <strong>Geen systemische bijwerkingen:</strong> Een groot voordeel van rTMS ten opzichte van medicatie 
              is het gebrek aan systemische bijwerkingen zoals gewichtstoename, seksuele disfunctie of maag-darmklachten.
            </li>
          </ul>
          
          <div className="mt-6 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&h=300&auto=format&fit=crop" 
              alt="Vergelijking rTMS en medicatie" 
              width={600} 
              height={300}
              className="w-full max-h-[300px] object-cover"
              unoptimized
              quality={100}
            />
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#7ed957]">Belangrijk om te weten</h3>
            <p className="text-base md:text-lg">
              Stop nooit plotseling met uw medicatie zonder overleg met uw behandelend arts. Ook als u start met 
              rTMS-behandeling, is het belangrijk om uw medicatiegebruik te bespreken met uw arts en geen 
              wijzigingen aan te brengen zonder professioneel advies.
            </p>
          </div>
          
          <div className="mt-6 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=400&h=500&auto=format&fit=crop" 
              alt="Professioneel medisch advies" 
              width={400} 
              height={500}
              className="w-full max-h-[400px] object-cover"
              unoptimized
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
    
    {/* Practical Information */}
    <div className="container max-w-7xl mx-auto"></div>
    <div className="container max-w-7xl mx-auto p-8">
      <h2 className="text-3xl md:text-4xl font-semibold mb-5">Praktische Informatie over rTMS Behandelingen</h2>
      
      <div className="mb-8 relative rounded-3xl overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1000&h=300&auto=format&fit=crop" 
          alt="rTMS behandelkamer" 
          width={1000} 
          height={300}
          className="w-full object-cover max-h-[250px]"
          unoptimized
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7ed957]/70 to-transparent flex items-center">
          <div className="p-8 text-white max-w-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Alles wat u moet weten</h3>
            <p className="text-base md:text-lg">Praktische informatie over uw rTMS behandeltraject bij de rTMS Kliniek</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="md:w-1/4 flex justify-center">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#7ed957] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Duur en Frequentie</h3>
            <p className="text-base md:text-lg">
              Een standaard rTMS-behandeltraject bestaat uit 20-30 sessies, verdeeld over 4-6 weken (meestal 
              5 sessies per week). Elke sessie duurt ongeveer 20-40 minuten, afhankelijk van het protocol. 
              Voor sommige patiënten kunnen onderhoudsbehandelingen nodig zijn na het initiële traject.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="md:w-1/4 flex justify-center">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#7ed957] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Wat te Verwachten Tijdens een Sessie</h3>
            <p className="text-base md:text-lg">
              Tijdens een rTMS-sessie zit u comfortabel in een stoel. De behandelaar plaatst de magnetische spoel 
              op uw hoofd. U hoort tijdens de stimulatie een klikkend geluid en voelt mogelijk een licht tikkend 
              gevoel. U blijft volledig bij bewustzijn en kunt direct na de behandeling uw dagelijkse activiteiten hervatten.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* FAQ section */}
    <div className="container max-w-7xl mx-auto"></div>
    <div className="container max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">Veelgestelde Vragen over rTMS</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Is rTMS pijnlijk?</h3>
              <p className="text-base md:text-lg">
                rTMS is over het algemeen niet pijnlijk. De meeste patiënten beschrijven de sensatie als een licht 
                tikkend of kloppend gevoel op de hoofdhuid. Sommigen ervaren tijdens de eerste sessies enig ongemak, 
                maar dit vermindert meestal naarmate men aan de behandeling went.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Hoe lang duurt het voordat rTMS werkt?</h3>
              <p className="text-base md:text-lg">
                Het effect van rTMS is cumulatief en bouwt zich op in de loop van de behandeling. Sommige patiënten 
                merken al na enkele sessies verbetering, maar voor de meesten wordt significante verbetering pas 
                zichtbaar na 2-3 weken behandeling. Het volledige effect wordt vaak pas bereikt na afronding van 
                het gehele behandeltraject.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Is rTMS vergoed door zorgverzekeraars?</h3>
              <p className="text-base md:text-lg">
                De vergoeding van rTMS-behandeling varieert per zorgverzekeraar en type polis. In Nederland wordt rTMS 
                voor therapieresistente depressie inmiddels door de meeste zorgverzekeraars vergoed vanuit de basisverzekering, 
                mits er aan bepaalde voorwaarden is voldaan. Voor andere aandoeningen kan vergoeding verschillen. 
                We raden aan om vóór de start van de behandeling contact op te nemen met uw zorgverzekeraar om uw specifieke 
                dekking te bespreken. Onze administratie kan u hierbij ondersteunen.
              </p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <div className="sticky top-20">
            <Image 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=350&h=500&auto=format&fit=crop" 
              alt="rTMS behandeling informatie" 
              width={350} 
              height={500}
              className="rounded-2xl shadow-lg mx-auto max-h-[500px] object-cover"
              unoptimized
              quality={100}
            />
            <div className="mt-4 bg-green-950 p-6 rounded-xl text-white">
              <h3 className="font-bold text-xl mb-2">Heeft u nog andere vragen?</h3>
              <p className="mb-4 text-base md:text-lg">Neem contact met ons op voor meer informatie over rTMS behandelingen.</p>
              <Link href="/contact">
                <span className="inline-block px-4 py-2 bg-white text-green-900 rounded-lg font-semibold hover:bg-gray-200 transition">
                  Contact opnemen
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* rTMS at our clinic */}
    <div className="container max-w-7xl mx-auto"></div>
    <div className="container max-w-7xl mx-auto p-8">
      <h2 className="text-3xl md:text-4xl font-semibold mb-5">rTMS bij rTMS Kliniek</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-3 md:col-span-1 rounded-2xl overflow-hidden h-48 md:h-56">
          <Image 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&h=400&auto=format&fit=crop" 
            alt="rTMS Kliniek behandelkamer" 
            width={400} 
            height={400}
            className="w-full h-full object-cover"
            unoptimized
            quality={100}
          />
        </div>
        <div className="col-span-3 md:col-span-2 rounded-2xl overflow-hidden h-48 md:h-56">
          <Image 
            src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=800&h=400&auto=format&fit=crop" 
            alt="rTMS Kliniek team" 
            width={800} 
            height={400}
            className="w-full h-full object-cover"
            unoptimized
            quality={100}
          />
        </div>
      </div>
      
      <p className="mb-6 text-base md:text-lg">
        Bij rTMS Kliniek bieden wij state-of-the-art rTMS-behandelingen uitgevoerd door ervaren professionals. 
        Wat onderscheidt onze aanpak:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#7ed957]">Gepersonaliseerde Behandelplannen</h3>
          <p className="text-base md:text-lg">
            We stemmen elke behandeling af op uw specifieke situatie, met individuele targeting en protocollen 
            op basis van de nieuwste wetenschappelijke inzichten.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#7ed957]">Ervaren Specialisten</h3>
          <p className="text-base md:text-lg">
            Ons team bestaat uit ervaren psychiaters, neurologen en rTMS-specialisten met jarenlange expertise 
            in neuromodulatie. Elke behandeling wordt uitgevoerd door gecertificeerde professionals die regelmatig 
            bijscholing volgen over de nieuwste ontwikkelingen op het gebied van rTMS.
          </p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#7ed957]">Geavanceerde Technologie</h3>
          <p className="text-base md:text-lg">
            Wij werken met de meest moderne rTMS-apparatuur en gebruiken geavanceerde neuronavigatie voor nauwkeurige 
            targeting. Onze kliniek beschikt over verschillende soorten spoelen, waaronder figure-8 en H-spoelen, om 
            optimale stimulatie voor diverse aandoeningen mogelijk te maken.
          </p>
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="mt-12 bg-gray-50 rounded-3xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=350&h=600&auto=format&fit=crop" 
              alt="Tevreden patiënt" 
              width={350} 
              height={600}
              className="h-full w-full object-cover max-h-[400px]"
              unoptimized
              quality={100}
            />
          </div>
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <svg className="h-10 w-10 md:h-12 md:w-12 text-[#7ed957] mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
            </svg>
            <p className="text-base md:text-lg mb-6 italic">
              "Na jaren van worstelen met depressie en verschillende medicaties die niet werkten, was rTMS een 
              keerpunt. Ik voelde me eindelijk weer mezelf worden. De warmte en professionaliteit van het team 
              bij rTMS Kliniek maakte het verschil - ze behandelden me als een persoon, niet als een patiënt."
            </p>
            <div>
              <p className="font-bold">Anna, 42</p>
              <p className="text-gray-600">rTMS behandeling voor therapieresistente depressie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Treatment Success Statistics */}
    <div className="container max-w-7xl mx-auto"></div>
    <div className="container max-w-7xl mx-auto p-8">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Behandelresultaten en Statistieken</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-4xl md:text-5xl font-bold text-green-900 mb-2">70%</div>
          <h3 className="text-xl font-semibold mb-2">Respons bij Depressie</h3>
          <p className="text-gray-600">Van de patiënten ervaart significante verbetering na een volledige behandeling</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-4xl md:text-5xl font-bold text-green-900 mb-2">65%</div>
          <h3 className="text-xl font-semibold mb-2">Angstreductie</h3>
          <p className="text-gray-600">Van de patiënten met angststoornissen ziet vermindering van klachten</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-4xl md:text-5xl font-bold text-green-900 mb-2">4.8</div>
          <h3 className="text-xl font-semibold mb-2">Patiënttevredenheid</h3>
          <p className="text-gray-600">Gemiddelde waardering van onze patiënten (schaal 1-5)</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-4xl md:text-5xl font-bold text-green-900 mb-2">12+</div>
          <h3 className="text-xl font-semibold mb-2">Jaar Ervaring</h3>
          <p className="text-gray-600">Met rTMS behandelingen en duizenden succesvol behandelde patiënten</p>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-xl">
        <p className="text-base md:text-lg text-gray-700">
          * Deze resultaten zijn gebaseerd op onze klinische data en patiëntfeedback over de afgelopen jaren. 
          Individuele resultaten kunnen variëren en zijn afhankelijk van verschillende factoren zoals de specifieke 
          aandoening, ernst van de klachten en andere individuele omstandigheden.
        </p>
      </div>
    </div>
    
    {/* Treatment Process Timeline */}
    <div className="container max-w-7xl mx-auto p-8">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Uw rTMS Behandeltraject</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-green-950 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Intake en Beoordeling</h3>
          <p className="text-gray-600 mb-6 max-w-sm">
            Tijdens een uitgebreid intakegesprek bespreken we uw klachten, medische geschiedenis en behandeldoelen. 
            We bepalen samen of rTMS een geschikte behandeling voor u is.
          </p>
          <div className="hidden md:block absolute h-1 bg-green-950 w-full top-8 left-1/2 -z-10"></div>
        </div>
        
        <div className="relative flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-green-950 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Behandelplan op Maat</h3>
          <p className="text-gray-600 mb-6 max-w-sm">
            We stellen een gepersonaliseerd behandelplan op, inclusief het aantal sessies, de frequentie en de 
            specifieke rTMS-techniek die het beste bij uw situatie past.
          </p>
          <div className="hidden md:block absolute h-1 bg-green-950 w-full top-8 left-1/2 -z-10"></div>
        </div>
        
        <div className="relative flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-green-950 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Start Behandeling</h3>
          <p className="text-gray-600 mb-6 max-w-sm">
            De behandeling start met een proefsessie om de juiste locatie en intensiteit te bepalen. Daarna volgt 
            het volledige behandeltraject van meestal 4-6 weken.
          </p>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-3">Monitoring en Nazorg</h3>
        <p className="text-base md:text-lg text-gray-700">
          Gedurende het hele traject monitoren we uw voortgang nauwkeurig. Na afloop van de behandeling volgt een 
          evaluatie en bespreken we eventuele vervolgstappen of onderhoudsbehandelingen. We blijven beschikbaar 
          voor vragen en ondersteuning.
        </p>
      </div>
    </div>
    
    {/* CTA banner with adjusted container */}
    <div className="container max-w-7xl mx-auto">
      <div className="py-16 bg-green-950 my-12 w-full mx-auto rounded-[4rem]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Klaar om de volgende stap te zetten?</h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8">
            Onze ervaren specialisten staan klaar om u te helpen met een gepersonaliseerd behandelplan.
            Neem vandaag nog contact op voor een intake gesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="inline-block px-8 py-4 bg-white text-green-900 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-200 transition">
                Afspraak maken
              </span>
            </Link>
            <Link href="/locaties">
              <span className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-base md:text-lg font-semibold hover:bg-white hover:text-green-900 transition">
                Onze locaties bekijken
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>

      <Locations />
    </div>
  );
}
