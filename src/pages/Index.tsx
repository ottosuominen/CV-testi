import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink, Briefcase } from "lucide-react";
import EducationAndSkills from "@/components/EducationAndSkills";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center p-6">
          <img 
            src="/ProfilePic.png" 
            alt="Otto Suominen" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg mx-auto mb-6 object-cover object-center select-none"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Otto Suominen</h1>
          <p className="text-xl text-white/90">Ylioppilas Ja Tulevaisuuden<br />Sähkötekniikan Ammattilainen</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Education and Skills Section */}
        <EducationAndSkills />

        {/* Work Experience */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-teal-600" />
            Työkokemus
          </h2>
          <div className="space-y-6">
            {/* Sallila Experience */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Harjoittelija</h3>
                    <p className="text-gray-600">Sallilan Sähkönsiirto Oy</p>
                  </div>
                </div>
                <Badge className="bg-teal-600 whitespace-nowrap">Apr 2023 - Nykyinen</Badge>
              </div>
              <p className="text-gray-700">
                Sallilan Sähkönsiirto Oy:llä toimin kesän ajan täysipäiväisesti ja jatkoin tuntityöntekijänä opintojeni ohella. Työtehtäviäni oli avustavat mittaroinnin ja sähkönsiirron tehtävät.
                Päätehtäviäni oli työmääräinten teko ja niiden tilan valvominen. Tämä edellytti järjestelmien jatkuvaa seurantaa ja tapahtumien dokumentointia. 
                Päivitin myös Sallilan radiosuunnitelman ulkoasun ja sisällön JavaScript-kielellä omaa työtä helpottaakseni. Lisäksi päivitin
                verkkomallinnuksen tietoja GPS-paikannuksen avulla kerättyjen mittausten perusteella. Kartan päivitettyä tietokantaa hyödynnettiin yhteistyössä HeadPower Oy:n
                kanssa mittarinvaihtotyömääräinten tekoon automaation kautta. Radiosuunnitelman hahmotelman löydät alla olevasta linkistä.
                Kohteita ja niiden sijainteja on muutettu turvallisuussyistä.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <a href="Radiosuunnitelma.html" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2" />
                  Karttasovellus
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </Card>

            {/* LUT Experience */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Tuntiopettaja</h3>
                    <p className="text-gray-600">Lut Yliopisto</p>
                  </div>
                </div>
                <Badge>Jan 2023 - May 2023</Badge>
              </div>
              <p className="text-gray-700">
                Toimin tuntiopettajana ABB-luokassa, missä järjestin räätälöityjä harjoituksia
                 ja esityksiä lukio- ja yläkoululaisille. Nämä oppitunnit kattoivat aiheita,
                 kuten sähkönkulutusta, erilaisia sähköntuotantoprosesseja sekä niiden vaikutuksia ilmastoon.
                 Lisäksi pidin tuulituotantorastia, missä opiskelijat pääsivät rakentamaan oman turbiininsa ja testaamaan sen toimintaa.
              </p>
            </Card>

            {/* Assembly Work Experience */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Kokoonpanija</h3>
                    <p className="text-gray-600">Useita yrityksiä</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge>Vallox Oy: Jun 2022 - Aug 2022</Badge>
                  <Badge>Fenestra Oy: Aug 2021 - Dec 2021</Badge>
                  <Badge>Salko Painting Oy: Mar 2021 - Jul 2021</Badge>
                </div>
              </div>
              <p className="text-gray-700">
                Minulla on laaja kokemus erilaisista kokoonpanotöistä. Valloxilla opin ilmastointilaitteiden kokoonpanon eri vaiheista.
                Fenestran Loimaan toimipisteessä perehdyin ikkunoiden tuotannon eri vaiheisiin.
                Lisäksi minulla on kokemusta alumiiniprofiilien jauhemaalauksen eri työvaiheista.
              </p>
            </Card>

            {/* Outdoor Work Experience */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Ulkoaluetyöntekijä</h3>
                    <p className="text-gray-600">Suikkilan Lämpö Oy</p>
                  </div>
                </div>
                <Badge>2017 - 2020</Badge>
              </div>
              <p className="text-gray-700">
                Olen työskennellyt Suikkilan Lämpö Oy:ssä ulkoaluetyöntekijänä useamman kesän ajan.
                Työtehtäväni sisälsivät monipuolisesti ulkoalueiden hoitotehtäviä sekä asiakaspalvelua.
              </p>
            </Card>

            {/* Greenhouse Work Experience */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Kasvihuonetyöntekijä</h3>
                    <p className="text-gray-600">Oksasen puutarha Oy</p>
                  </div>
                </div>
                <Badge>Jul 2017 & 2021</Badge>
              </div>
              <p className="text-gray-700">
                Olen työskennellyt kasvihuonetyöntekijänä Oksasen Puutarha Oy:llä
                kahtena kesänä ja avustin salaatin istutusprosessissa.
              </p>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Yhteystiedot ja Linkit</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 flex items-center gap-4">
              <Mail className="w-6 h-6 text-teal-600" />
              <div>
                <p className="text-sm text-gray-500">Sähköposti</p>
                <p className="text-gray-800">ottosuominen@icloud.com</p>
              </div>
            </Card>
            <Card className="p-6 flex items-center gap-4">
              <Phone className="w-6 h-6 text-teal-600" />
              <div>
                <p className="text-sm text-gray-500">Puhelin</p>
                <p className="text-gray-800">0442688862</p>
              </div>
            </Card>
            <a href="https://sallilasahkonsiirto.fi/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
                <Briefcase className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-500">Työpaikka</p>
                  <p className="text-gray-800">Sallila Sähkönsiirto Oy</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Card>
            </a>
            <a href="https://www.lut.fi/en" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-500">Yliopisto</p>
                  <p className="text-gray-800">Lut Yliopisto</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Card>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-custom-teal text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Otto Suominen</p>
          <div className="mt-4 space-x-6">
            <a href="https://www.linkedin.com/in/otto-suominen" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/ottosuominen" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
