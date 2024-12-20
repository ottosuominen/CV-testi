import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Wrench, Globe } from "lucide-react";

const EducationAndSkills = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      {/* Education Column */}
      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-teal-600" />
            <h3 className="text-2xl font-semibold text-gray-800">Koulutus</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold">Sähkötekniikan kandidaatti ja diplomi-insinööri</h4>
              <p className="text-gray-600">Lut Yliopisto</p>
              <Badge className="mt-1 bg-custom-teal hover:bg-custom-teal/80">2022 - Nykyinen</Badge>
              <p className="mt-2 text-sm text-gray-700">Sivuaine: Energiatalous</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Ylioppilas</h4>
              <p className="text-gray-600">Loimaan lukio</p>
              <Badge className="mt-1">2018 - 2021</Badge>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-teal-600" />
              <h3 className="text-xl font-semibold text-gray-800">Muut koulutukset</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Varusmiespalvelus</h4>
                <p className="text-sm text-gray-600">Porin Prikaati</p>
                <Badge>Jan 2022 - Jun 2022</Badge>
              </div>
              <div>
                <h4 className="font-medium">Sähkötyöturvallisuuskortti (SFS6002)</h4>
                <Badge>May 2023</Badge>
              </div>
              <div>
                <h4 className="font-medium">SPR Hätäensiapukurssi</h4>
                <Badge>May 2023</Badge>
              </div>
              <div>
                <h4 className="font-medium">Pelinohjaaja koulutus</h4>
                <p className="text-sm text-gray-600">Loimaan palloseura LOPS</p>
                <Badge>May 2016</Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Skills Column */}
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-6 h-6 text-teal-600" />
              <h3 className="text-2xl font-semibold text-gray-800">Osaaminen</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Olen ylioppilas ja tulevaisuuden sähkötekniikan DI. Minulla on kokemusta eri sähkönsiirron työtehtävistä, tekniikan alojen kokoonpano-työskentelystä ja suunnittelusta.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Sähkötekniikka</span>
                </div>
                <Progress value={78.2} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Energiatalous</span>
                </div>
                <Progress value={75.2} className="h-2" />
              </div>
              {["Trimble", "Aidon"].map((skill) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill}</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              ))}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Landis+Gyr</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-teal-600" />
              <h3 className="text-xl font-semibold text-gray-800">Kielitaito</h3>
            </div>
            <div className="space-y-4">
              {[
                { lang: "Suomi", level: 100 },
                { lang: "Englanti", level: 90 },
                { lang: "Ruotsi", level: 35 }
              ].map((lang) => (
                <div key={lang.lang}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{lang.lang}</span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EducationAndSkills;
