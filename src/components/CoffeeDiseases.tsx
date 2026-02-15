import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, Skull, BookOpen, Shield, Droplet, Bug } from "lucide-react";

interface CoffeeDisease {
  nameAm: string;
  nameEn: string;
  cause: string;
  causeAm: string;
  symptomsAm: string;
  symptomsEn: string;
  managementAm: string;
  managementEn: string;
  impactAm: string;
  impactEn: string;
  icon: React.ReactNode;
  severity: "critical" | "high" | "medium";
}

const coffeeDiseases: CoffeeDisease[] = [
  {
    nameAm: "የቡና ቅጠል ዝገት (CLR)",
    nameEn: "Coffee Leaf Rust (CLR)",
    cause: "Hemileia vastatrix",
    causeAm: "በ Hemileia vastatrix ፈንገስ የሚከሰት",
    symptomsAm: "በቅጠሎች ላይ ቢጫ-ብርቱካንማ ዱቄት መሰል ቁስሎች ይታያሉ። ከባድ ቅጠል መርገፍ እና ቅርንጫፍ ድርቀት ያስከትላል። ስፖሮች ከተቀመጡ በኋላ በአማካይ 33 ቀናት ስፖሩሌሽን ይጀምራል።",
    symptomsEn: "Yellow-orange powdery lesions appear on leaves. Causes severe defoliation and branch drought. The pathogen requires an average of 33 days to begin sporulation from spore deposition.",
    managementAm: "መደበኛ ክትትል፣ ፀረ ፈንገስ አጠቃቀም፣ የሚቋቋሙ ዝርያዎችን መጠቀም። የተበከሉ ቅጠሎችን ማስወገድ።",
    managementEn: "Regular monitoring, fungicide application, use of resistant varieties. Remove infected leaves promptly.",
    impactAm: "በአንድ ዓመት ውስጥ ዋና ምርታማነትን ይቀንሳል፣ በቅርንጫፍ ድርቀት ምክንያት በቀጣይ ዓመታትም ሁለተኛ ኪሳራ ያስከትላል።",
    impactEn: "Reduces primary productivity in a single year and causes secondary losses in subsequent years due to branch drought.",
    icon: <AlertTriangle className="w-6 h-6" />,
    severity: "critical",
  },
  {
    nameAm: "የፎማ ቅጠል ነጠብጣብ (PLS)",
    nameEn: "Phoma Leaf Spot (PLS)",
    cause: "Phoma tarda",
    causeAm: "በ Phoma tarda ፈንገስ የሚከሰት",
    symptomsAm: "የቅጠል ጫፍ እና ቅርንጫፍ መድረቅ፣ ሮዜት ኒክሮሲስ፣ እና ቅጠል ላይ ነጠብጣቦች ይታያሉ።",
    symptomsEn: "Manifests through leaf tip and branch dieback, rosette necrosis, and leaf spots. Poses significant threat leading to substantial losses in quality and productivity.",
    managementAm: "ከቀዝቃዛ ነፋስ የተጠበቀ ቦታ መምረጥ፣ ንፋስ መከላከያ መዘርጋት፣ ናይትሮጅን(N)፣ ካልሲየም(Ca) እና ጥቃቅን ንጥረ ነገሮችን ያካተተ ሚዛናዊ ማዳበሪያ መጠቀም።",
    managementEn: "Select planting sites less prone to cold winds, implement windbreaks, adopt balanced fertilization with nitrogen (N), calcium (Ca), and micronutrients, and use chemical control when necessary.",
    impactAm: "በጥራት እና ምርታማነት ላይ ከፍተኛ ኪሳራ ያስከትላል። በተለይ ከፍታ ቦታዎች ላይ ከባድ ነው።",
    impactEn: "Leads to substantial losses in both quality and productivity, particularly severe at higher altitudes.",
    icon: <Droplet className="w-6 h-6" />,
    severity: "high",
  },
  {
    nameAm: "ቡኒ ዓይን ነጠብጣብ (BES)",
    nameEn: "Brown Eye Spot / Cercospora Leaf Spot",
    cause: "Cercospora coffeicola",
    causeAm: "በ Cercospora coffeicola ፈንገስ የሚከሰት",
    symptomsAm: "በቅጠሎች ላይ ክብ ቡኒ ነጠብጣቦች ይታያሉ። ከባድ ቅጠል መርገፍ እና ቅርንጫፍ ድርቀት ያስከትላል። ስፖሮች ከተቀመጡ 33 ቀናት በኋላ ስፖሩሌሽን ይጀምራል።",
    symptomsEn: "Circular brown spots on leaves. Causes severe defoliation and branch drought. Sporulation begins 33 days after spore deposition, with 50% of pustules developing in about 40 days.",
    managementAm: "ጥሩ ንጽህና አጠባበቅ፣ መግረዝ፣ እና ፀረ ፈንገስ ሕክምና። የተበከሉ ቅርንጫፎችን ማስወገድ።",
    managementEn: "Good sanitation, pruning, and fungicide treatment. Remove infested branches promptly.",
    impactAm: "ከአንድ ወቅት በላይ ተጽዕኖ ያሳድራል - ዋና ምርት ቅነሳ እና በቅርንጫፍ ድርቀት ምክንያት ለቀጣይ ዓመታት ሁለተኛ ኪሳራ።",
    impactEn: "Impact extends beyond a single growing season — causes primary output decline and secondary losses in following years due to branch dryness.",
    icon: <Bug className="w-6 h-6" />,
    severity: "high",
  },
];

const severityColors = {
  critical: "border-destructive/30 bg-destructive/5",
  high: "border-accent/30 bg-accent/5",
  medium: "border-primary/30 bg-primary/5",
};

const severityBadge = {
  critical: "bg-destructive/10 text-destructive",
  high: "bg-accent/10 text-accent",
  medium: "bg-primary/10 text-primary",
};

const severityLabelAm = {
  critical: "ወሳኝ አደጋ",
  high: "ከፍተኛ አደጋ",
  medium: "መካከለኛ አደጋ",
};

const CoffeeDiseases = () => {
  return (
    <div className="space-y-6">
      {/* Coffee Productivity Section */}
      <Card className="p-6 shadow-medium border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold ethiopic">የቡና ምርታማነት መጨመር</h2>
            <p className="text-sm text-muted-foreground">Increasing Coffee Productivity</p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="ethiopic text-muted-foreground">
            ኢትዮጵያ የአፍሪካ ትልቋ የቡና አምራች እና የዓለም 5ኛ ትልቋ የአረቢካ ቡና ላኪ ናት። ቡና ከሀገሪቷ ኤክስፖርት 22% ይይዛል።
            በቡና በሽታዎች ምክንያት እስከ 57% የምርት ቅነሳ ሊደርስ ይችላል። ይህ የAI ምርመራ ስርዓት ቀደምት ማወቂያ በማድረግ ምርታማነትን ለማሳደግ ይረዳል።
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <div className="bg-muted/50 p-3 rounded-lg text-center">
              <div className="text-xl font-bold text-primary">501K</div>
              <div className="text-xs text-muted-foreground ethiopic">ቶን (2023/24)</div>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg text-center">
              <div className="text-xl font-bold text-primary">600K</div>
              <div className="text-xs text-muted-foreground ethiopic">ሄክታር ቦታ</div>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg text-center">
              <div className="text-xl font-bold text-primary">8.35M</div>
              <div className="text-xs text-muted-foreground ethiopic">ቦርሳ (60kg)</div>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg text-center">
              <div className="text-xl font-bold text-primary">95.3%</div>
              <div className="text-xs text-muted-foreground ethiopic">AI ትክክለኛነት</div>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-3">
            <p className="text-sm ethiopic text-muted-foreground">
              <strong className="text-foreground">📖 ምንጭ:</strong> "Ethiopian Coffee Leaf Disease Detection Using Deep Learning" — Biniyam Yoseph Mamo, St. Mary's University, 2024. 
              CNN ሞዴሉ ከጅማ እና ቦንጋ ግብርና ምርምር ማዕከላት 4,000 የቡና ቅጠል ምስሎችን በመጠቀም ተሰልጥኗል።
            </p>
          </div>
        </div>
      </Card>

      {/* Top 3 Coffee Killers */}
      <Card className="p-6 shadow-medium">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
            <Skull className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold ethiopic">ቡናን የሚገድሉ ቀዳሚ 3 በሽታዎች</h2>
            <p className="text-sm text-muted-foreground">Top 3 Coffee Killers in Ethiopia</p>
          </div>
        </div>
        <p className="ethiopic text-muted-foreground mb-4">
          እነዚህ በሽታዎች በኢትዮጵያ የቡና ምርት ላይ ከፍተኛ ጉዳት የሚያደርሱ ዋና ዋና ፈተናዎች ናቸው። 
          ቀደምት ማወቂያ እና ትክክለኛ ሕክምና ምርታማነትን በእጅጉ ያሻሽላል።
        </p>
        <div className="space-y-4">
          {coffeeDiseases.map((disease, idx) => (
            <div
              key={idx}
              className={`border-2 rounded-xl p-5 space-y-4 ${severityColors[disease.severity]}`}
            >
              {/* Disease Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${severityBadge[disease.severity]}`}>
                    {disease.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">#{idx + 1}</span>
                      <h3 className="text-lg font-bold ethiopic">{disease.nameAm}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{disease.nameEn}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${severityBadge[disease.severity]}`}>
                  {severityLabelAm[disease.severity]}
                </span>
              </div>

              {/* Cause */}
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <span className="ethiopic text-muted-foreground">{disease.causeAm}</span>
                <span className="italic text-muted-foreground">({disease.cause})</span>
              </div>

              {/* Symptoms */}
              <div>
                <h4 className="font-semibold ethiopic mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> ምልክቶች
                </h4>
                <p className="text-sm ethiopic text-muted-foreground">{disease.symptomsAm}</p>
                <p className="text-xs text-muted-foreground mt-1 italic">{disease.symptomsEn}</p>
              </div>

              {/* Impact */}
              <div>
                <h4 className="font-semibold ethiopic mb-1 flex items-center gap-2">
                  <Skull className="w-4 h-4" /> ተጽዕኖ
                </h4>
                <p className="text-sm ethiopic text-muted-foreground">{disease.impactAm}</p>
                <p className="text-xs text-muted-foreground mt-1 italic">{disease.impactEn}</p>
              </div>

              {/* Management */}
              <div className="bg-background/50 p-3 rounded-lg">
                <h4 className="font-semibold ethiopic mb-1 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" /> የመቆጣጠሪያ መንገዶች
                </h4>
                <p className="text-sm ethiopic text-muted-foreground">{disease.managementAm}</p>
                <p className="text-xs text-muted-foreground mt-1 italic">{disease.managementEn}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Additional Pests & Diseases Table */}
      <Card className="p-6 shadow-medium">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-accent/10 text-accent">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold ethiopic">ሌሎች የቡና ተባዮች እና በሽታዎች</h2>
            <p className="text-sm text-muted-foreground">Other Common Coffee Pests & Diseases</p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { nameAm: "የቡና ፍሬ በሽታ (CBD)", nameEn: "Coffee Berry Disease", causeAm: "Colletotrichum kahawae ፈንገስ", symptomAm: "በቡና ፍሬ ላይ ጥቁር ቁስሎች", mgmtAm: "መግረዝ፣ የተበከሉ ፍሬዎችን ማስወገድ፣ ፀረ ፈንገስ" },
            { nameAm: "የቡና መድረቅ በሽታ (CWD)", nameEn: "Coffee Wilt Disease", causeAm: "Gibberella xylarioides ፈንገስ", symptomAm: "ቅጠሎች ቢጫ ይሆናሉ እና ይጠወልጋሉ፣ ዛፉ ይደርቃል", mgmtAm: "የተበከሉ ዛፎችን ቆርጦ ማቃጠል፣ የሚቋቋሙ ዝርያዎችን መጠቀም" },
            { nameAm: "አፊድ (ቅማል)", nameEn: "Aphids", causeAm: "ነፍሳት", symptomAm: "ቅጠሎች ይጠመዛዛሉ፣ እድገት ይቀንሳል", mgmtAm: "ኢንሰክቲሳይዳል ሳሙናዎች፣ ባዮሎጂካል ቁጥጥር" },
            { nameAm: "የቡና ነጭ ግንድ ቦሪ", nameEn: "Coffee White Stem Borer", causeAm: "ነፍሳት", symptomAm: "በቡና ግንድ ውስጥ ዋሻ መቆፈር፣ ቅርንጫፎች መድረቅ", mgmtAm: "መደበኛ መግረዝ፣ የተበከሉ ቅርንጫፎችን ማስወገድ" },
            { nameAm: "የቡና ኒማቶድ", nameEn: "Coffee Nematode", causeAm: "ኒማቶድ", symptomAm: "ድቅቅ ያለ እድገት፣ ሥር ጉብታዎች", mgmtAm: "ሰብል ማሽከርከር፣ አፈር ፉሚጌሽን" },
          ].map((item, idx) => (
            <div key={idx} className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold ethiopic">{item.nameAm}</h4>
                  <p className="text-xs text-muted-foreground">{item.nameEn} — {item.causeAm}</p>
                </div>
              </div>
              <p className="text-sm ethiopic text-muted-foreground mt-2">
                <strong>ምልክት:</strong> {item.symptomAm}
              </p>
              <p className="text-sm ethiopic text-muted-foreground">
                <strong>መቆጣጠሪያ:</strong> {item.mgmtAm}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CoffeeDiseases;
