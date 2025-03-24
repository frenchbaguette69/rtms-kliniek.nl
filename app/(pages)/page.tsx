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
    
    {/* Scientific Research Section - Add image */}
    <div className="container w-full border-t border-gray-500"></div>
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold mb-5">Wetenschappelijk Onderzoek en Effectiviteit</h2>
          <p className="mb-4">
            rTMS is geen experimentele behandeling meer, maar een wetenschappelijk onderbouwde therapie met 
            een groeiende hoeveelheid onderzoek dat de effectiviteit aantoont. Enkele belangrijke feiten:
          </p>
          <ul className="list-disc pl-5 space-y-2">
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
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&h=800&auto=format&fit=crop" 
            alt="Wetenschappelijk onderzoek naar rTMS effectiviteit" 
            width={600} 
            height={800}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
    
    {/* Different rTMS Techniques - Add header image */}
    <div className="container w-full border-t border-gray-500"></div>
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-5">Verschillende rTMS Technieken</h2>
      
      <div className="mb-8 overflow-hidden rounded-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&h=500&auto=format&fit=crop" 
          alt="rTMS behandeltechnieken" 
          width={1200} 
          height={500}
          className="w-full object-cover"
        />
      </div>
      
      <p className="mb-6">
        Er zijn verschillende varianten van rTMS beschikbaar, elk met specifieke toepassingen en voordelen:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Keep existing content for the four techniques */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">Hoogfrequente rTMS</h3>
          <p>
            Stimuleert hersenactiviteit met frequenties van 5-20 Hz. Wordt voornamelijk gebruikt bij depressie
            om de activiteit in de linker prefrontale cortex te verhogen. Deze techniek heeft een exciterend effect
            op de hersenen en kan helpen bij het verhogen van de activiteit in onderactieve hersengebieden.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">Laagfrequente rTMS</h3>
          <p>
            Gebruikt frequenties van 1 Hz of lager om hersenactiviteit te verminderen. Deze techniek wordt 
            vaak toegepast bij angststoornissen, PTSS en tinnitus om overactieve hersengebieden te kalmeren. 
            Het heeft een remmend effect op de neurale activiteit.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">Theta Burst Stimulatie (TBS)</h3>
          <p>
            Een nieuwere vorm van rTMS die kortere behandeltijden mogelijk maakt (vaak slechts enkele minuten 
            per sessie in plaats van 30-40 minuten). TBS gebruikt korte bursts van hoogfrequente stimulatie en 
            kan zowel exciterend (iTBS) als inhiberend (cTBS) werken, afhankelijk van het protocol.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">Deep TMS</h3>
          <p>
            Gebruikt een speciaal ontworpen H-spoel die diepere hersengebieden kan bereiken dan standaard rTMS. 
            Deze techniek is FDA-goedgekeurd voor zowel depressie als OCD en kan effectief zijn voor patiënten 
            die niet reageren op conventionele rTMS.
          </p>
        </div>
      </div>
    </div>
    
    {/* rTMS and Medication - Keep the existing layout with comparison image */}
    <div className="container w-full border-t border-gray-500"></div>
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-5">rTMS en Medicatie</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-2/3">
          <p className="mb-4">
            Een belangrijke vraag die veel patiënten hebben, is hoe rTMS zich verhoudt tot medicatie voor psychische 
            aandoeningen. Hier zijn enkele belangrijke punten om te overwegen:
          </p>
          <ul className="list-disc pl-5 space-y-2">
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
          
          {/* Add comparison image */}
          <div className="mt-6 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&h=400&auto=format&fit=crop" 
              alt="Vergelijking rTMS en medicatie" 
              width={800} 
              height={400}
              className="w-full"
            />
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-[#7ed957]">Belangrijk om te weten</h3>
            <p>
              Stop nooit plotseling met uw medicatie zonder overleg met uw behandelend arts. Ook als u start met 
              rTMS-behandeling, is het belangrijk om uw medicatiegebruik te bespreken met uw arts en geen 
              wijzigingen aan te brengen zonder professioneel advies.
            </p>
          </div>
          
          {/* Add illustrative image */}
          <div className="mt-6 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=500&h=650&auto=format&fit=crop" 
              alt="Professioneel medisch advies" 
              width={500} 
              height={650}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
    
    {/* Practical Information - Add illustrated banner */}
    <div className="container w-full border-t border-gray-500"></div>
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-5">Praktische Informatie over rTMS Behandelingen</h2>
      
      <div className="mb-8 relative rounded-3xl overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1200&h=400&auto=format&fit=crop" 
          alt="rTMS behandelkamer" 
          width={1200} 
          height={400}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7ed957]/70 to-transparent flex items-center">
          <div className="p-8 text-white max-w-lg">
            <h3 className="text-2xl font-bold mb-2">Alles wat u moet weten</h3>
            <p>Praktische informatie over uw rTMS behandeltraject bij de rTMS Kliniek</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="md:w-1/4 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-[#7ed957] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold mb-3">Duur en Frequentie</h3>
            <p>
              Een standaard rTMS-behandeltraject bestaat uit 20-30 sessies, verdeeld over 4-6 weken (meestal 
              5 sessies per week). Elke sessie duurt ongeveer 20-40 minuten, afhankelijk van het protocol. 
              Voor sommige patiënten kunnen onderhoudsbehandelingen nodig zijn na het initiële traject.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="md:w-1/4 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-[#7ed957] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold mb-3">Wat te Verwachten Tijdens een Sessie</h3>
            <p>
              Tijdens een rTMS-sessie zit u comfortabel in een stoel. De behandelaar plaatst de magnetische spoel 
              op uw hoofd. U hoort tijdens de stimulatie een klikkend geluid en voelt mogelijk een licht tikkend 
              gevoel. U blijft volledig bij bewustzijn en kunt direct na de behandeling uw dagelijkse activiteiten hervatten.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="md:w-1/4 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-[#7ed957] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold mb-3">Vergoeding</h3>
            <p>
              In Nederland wordt rTMS voor therapieresistente depressie vergoed vanuit de basisverzekering 
              (na verwijzing). Voor andere aandoeningen verschilt de vergoeding per zorgverzekeraar en per 
              aanvullende verzekering. Neem contact met ons op voor de meest actuele informatie over vergoedingen.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="md:w-1/4 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-[#7ed957] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold mb-3">Resultaten en Effectiviteit</h3>
            <p>
              De resultaten van rTMS verschillen per persoon. Sommige patiënten merken al na enkele sessies verbetering, 
              terwijl anderen pas na meerdere weken effect ervaren. Gemiddeld ervaart 50-60% van de patiënten met 
              therapieresistente depressie een significante verbetering, waarvan ongeveer een derde volledige remissie bereikt.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* FAQ section - add illustration */}
    <div className="container w-full border-t border-gray-500"></div>
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold mb-5">Veelgestelde Vragen over rTMS</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Is rTMS pijnlijk?</h3>
              <p>
                rTMS is over het algemeen niet pijnlijk. De meeste patiënten beschrijven de sensatie als een licht 
                tikkend of kloppend gevoel op de hoofdhuid. Sommigen ervaren tijdens de eerste sessies enig ongemak, 
                maar dit vermindert meestal naarmate men aan de behandeling went.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Hoe lang duurt het voordat rTMS werkt?</h3>
              <p>
                Het effect van rTMS is cumulatief en bouwt zich op in de loop van de behandeling. Sommige patiënten 
                merken al na enkele sessies verbetering, maar voor de meesten wordt significante verbetering pas 
                zichtbaar na 2-3 weken behandeling. Het volledige effect wordt vaak pas bereikt na afronding van 
                het gehele behandeltraject.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Zijn er bijwerkingen van rTMS?</h3>
              <p>
                De meest voorkomende bijwerkingen zijn mild en tijdelijk: hoofdpijn, licht ongemak op de plaats van 
                stimulatie, of spierspanning in het gezicht of de hoofdhuid tijdens de behandeling. Ernstige bijwerkingen 
                zoals epileptische aanvallen zijn extreem zeldzaam (minder dan 0,1%) en komen voornamelijk voor bij 
                patiënten met reeds bestaande risicofactoren.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Kan ik autorijden na een rTMS-behandeling?</h3>
              <p>
                Ja, u kunt gewoon autorijden na een rTMS-sessie. De behandeling heeft geen invloed op uw bewustzijn 
                of coördinatie. U kunt direct na de behandeling alle normale dagelijkse activiteiten hervatten, 
                inclusief werk, studie of sporten.
              </p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <div className="sticky top-20">
            <Image 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=500&h=750&auto=format&fit=crop" 
              alt="rTMS behandeling informatie" 
              width={500} 
              height={750}
              className="rounded-2xl shadow-lg"
            />
            <div className="mt-4 bg-[#7ed957] p-6 rounded-xl text-white">
              <h3 className="font-bold text-xl mb-2">Heeft u nog andere vragen?</h3>
              <p className="mb-4">Neem contact met ons op voor meer informatie over rTMS behandelingen.</p>
              <Link href="/contact">
                <span className="inline-block px-4 py-2 bg-white text-[#7ed957] rounded-lg font-semibold hover:bg-gray-100 transition">
                  Contact opnemen
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* rTMS at our clinic - add image gallery */}
    <div className="container w-full border-t border-gray-500"></div>
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-5">rTMS bij rTMS Kliniek</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-3 md:col-span-1 rounded-2xl overflow-hidden h-64">
          <Image 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=500&h=500&auto=format&fit=crop" 
            alt="rTMS Kliniek behandelkamer" 
            width={500} 
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 md:col-span-2 rounded-2xl overflow-hidden h-64">
          <Image 
            src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=1000&h=500&auto=format&fit=crop" 
            alt="rTMS Kliniek team" 
            width={1000} 
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <p className="mb-6">
        Bij rTMS Kliniek bieden wij state-of-the-art rTMS-behandelingen uitgevoerd door ervaren professionals. 
        Wat onderscheidt onze aanpak:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        {/* Keep existing content for the six advantages */}
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Gepersonaliseerde Behandelplannen</h3>
          <p>
            We stemmen elke behandeling af op uw specifieke situatie, met individuele targeting en protocollen 
            op basis van de nieuwste wetenschappelijke inzichten.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Geavanceerde Technologie</h3>
          <p>
            Onze klinieken zijn uitgerust met de nieuwste rTMS-apparatuur, waaronder systemen die nauwkeurige 
            neuronavigatie mogelijk maken voor optimale targeting.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Multidisciplinaire Benadering</h3>
          <p>
            We werken samen met psychiaters, psychologen en andere zorgprofessionals om een holistische 
            behandelervaring te bieden die verder gaat dan alleen rTMS.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Voorafgaande EEG-Analyse</h3>
          <p>
            Om de behandeling te optimaliseren, verrichten we vooraf een uitgebreide EEG-analyse om inzicht 
            te krijgen in uw specifieke hersenactiviteitspatronen.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Comfortabele Omgeving</h3>
          <p>
            Onze behandelruimtes zijn ontworpen met uw comfort in gedachten, met een rustige sfeer die bijdraagt 
            aan een positieve behandelervaring.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Nazorg en Follow-up</h3>
          <p>
            Na uw behandeltraject bieden we uitgebreide nazorg en follow-up om de langetermijneffectiviteit 
            te waarborgen en indien nodig onderhoudsbehandelingen aan te bieden.
          </p>
        </div>
      </div>
      
      {/* Add testimonial with image */}
      <div className="mt-12 bg-gray-50 rounded-3xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&h=800&auto=format&fit=crop" 
              alt="Tevreden patiënt" 
              width={500} 
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <svg className="h-12 w-12 text-[#7ed957] mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
            </svg>
            <p className="text-lg mb-6 italic">
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
    
    {/* Add CTA banner before Locations */}
    <div className="py-16 bg-gradient-to-r from-green-900 to-[#7ed957] my-12 w-[90%] mx-auto rounded-[4rem]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Klaar om de volgende stap te zetten?</h2>
        <p className="text-xl text-white max-w-3xl mx-auto mb-8">
          Onze ervaren specialisten staan klaar om u te helpen met een gepersonaliseerd behandelplan.
          Neem vandaag nog contact op voor een intake gesprek.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <span className="inline-block px-8 py-4 bg-white text-green-900 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Afspraak maken
            </span>
          </Link>
          <Link href="/locaties">
            <span className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-green-900 transition">
              Onze locaties bekijken
            </span>
          </Link>
        </div>
      </div>
    </div>


      <Locations />
    </div>
  );
}
