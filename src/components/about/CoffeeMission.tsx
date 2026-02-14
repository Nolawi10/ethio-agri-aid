import { Card } from "@/components/ui/card";
import { Coffee, TrendingUp, Shield, AlertTriangle, Smartphone, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CoffeeMission = () => {
  const { language } = useLanguage();
  const isAm = language === "am";

  const stats = [
    { value: "500K+", label: isAm ? "ዓመታዊ ቶን" : "Tons Annually", icon: BarChart3 },
    { value: "50%+", label: isAm ? "ምርታማነት ጭማሪ" : "Productivity Boost", icon: TrendingUp },
    { value: "50-60%", label: isAm ? "የሰብል ኪሳራ" : "Crop Loss Risk", icon: AlertTriangle },
    { value: "30%", label: isAm ? "ያነሰ ኬሚካል" : "Less Chemicals", icon: Shield },
  ];

  return (
    <div className="space-y-8">
      {/* Coffee Heritage Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Coffee className="w-7 h-7 text-primary" />
          {isAm ? "ቡና እና EthioAgri" : "Coffee & EthioAgri"}
        </h2>
        <p className="text-muted-foreground text-sm">
          {isAm ? "ኢትዮጵያ — የቡና መገኛ" : "Ethiopia — The Birthplace of Coffee"}
        </p>
      </div>

      {/* The Problem & Our Solution */}
      <Card className="p-6 md:p-8 space-y-6">
        <div className="space-y-4 text-muted-foreground">
          {isAm ? (
            <>
              <p>
                ኢትዮጵያ <strong className="text-foreground">የቡና መገኛ</strong> ስትሆን በየዓመቱ ከ<strong className="text-foreground">500,000 ቶን</strong> በላይ ቡና ታመርታለች፣ ይህም ከዓለም ትልልቅ የቡና ላኪዎች አንዷ ያደርጋታል። ሆኖም ግን የቡና ገበሬዎች ትልቅ ፈተና ይገጥማቸዋል፡ ሳይታከሙ ከቀሩ <strong className="text-destructive">ከ50-60% የሰብል ምርታቸውን ሊያጠፉ የሚችሉ በሽታዎች</strong>፣ ይህም ገበሬዎችን በየዓመቱ በሚሊዮኖች የሚቆጠር ዶላር ገቢ ያሳጣቸዋል።
              </p>
              <p className="text-lg font-semibold text-foreground">ተልዕኳችን ይህን ለመቀየር ነው።</p>
              <p>
                ገበሬዎች የቡና በሽታዎችን ቀድመው እንዲያውቁ የሚረዳ <strong className="text-primary">በ AI የሚሰራ የሰብል በሽታ ማወቂያ ሲስተም</strong> ፈጥረናል፣ ይህም ተክሎችን ለማዳን እና ምርትን ለማሳደግ ወቅታዊ እርምጃ እንዲወስዱ ያስችላቸዋል። እነዚህን በሽታዎች በመከላከል ወይም በመቆጣጠር ገበሬዎች <strong className="text-foreground">ምርታማነታቸውን በ50% ወይም ከዚያ በላይ ማሳደግ ይችላሉ</strong>። ለምሳሌ፣ በበሽታ ምክንያት 30% ምርቱን የሚያጣ እርሻ በቀድሞ ማወቂያ ሊያድነው ይችላል — <strong className="text-foreground">በሄክታር 0.7 ቶን ምርትን ወደ 1 ቶን ይመልሳል</strong>። ይህ በገበሬዎች ገቢ፣ በአገር ቡና ምርት እና በወጪ ንግድ ገቢ ላይ ቀጥተኛ ተፅዕኖ አለው።
              </p>
            </>
          ) : (
            <>
              <p>
                Ethiopia is the <strong className="text-foreground">birthplace of coffee</strong> and produces over <strong className="text-foreground">500,000 tons</strong> of coffee annually, making it one of the world's largest coffee exporters. However, coffee farmers face a major challenge: <strong className="text-destructive">diseases that can destroy 50–60% of their crops</strong> if left untreated, costing farmers millions of dollars in lost revenue each year.
              </p>
              <p className="text-lg font-semibold text-foreground">Our mission is to change that.</p>
              <p>
                We have developed an <strong className="text-primary">AI-powered Crop Disease Detection System</strong> that helps farmers detect coffee diseases early, enabling timely action to save plants and maximize harvests. By preventing or controlling these diseases, farmers can <strong className="text-foreground">increase crop productivity by 50% or more</strong>. For example, a farm losing 30% of its harvest due to disease could recover almost all of it with early detection, turning a <strong className="text-foreground">0.7-ton yield per hectare back into 1 ton per hectare</strong>. This has a direct impact on farmer income, national coffee production, and export revenue.
              </p>
            </>
          )}
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-muted/50 rounded-xl p-4 text-center">
              <stat.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Top 3 Coffee Killers */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-center">
          {isAm ? "ከፍተኛ 3 የቡና ገዳዮች" : "Top 3 Coffee Crop Killers"}
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 border-destructive/20 bg-destructive/5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍂</span>
                <div>
                  <h4 className="font-bold text-sm">{isAm ? "የቡና ቅጠል ዝገት (CLR)" : "Coffee Leaf Rust (CLR)"}</h4>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {isAm
                  ? <>ቅጠሎችን በማጥቃት እና ፎቶሲንቴሲስን በመቀነስ እስከ <strong className="text-destructive">40-50% የምርት ኪሳራ</strong> ያስከትላል። ብርቱካናማ ዱቄት መሰል ነጠብጣቦች በቅጠል ስር ይታያሉ፣ በመጨረሻ ቅጠል እንዲረግፍ ያደርጋል።</>
                  : <>Causes up to <strong className="text-destructive">40–50% yield loss</strong> by attacking leaves and reducing photosynthesis. Orange powdery spots appear on leaf undersides, eventually causing defoliation.</>
                }
              </p>
            </div>
          </Card>
          <Card className="p-5 border-destructive/20 bg-destructive/5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🫐</span>
                <div>
                  <h4 className="font-bold text-sm">{isAm ? "የቡና ፍሬ በሽታ (CBD)" : "Coffee Berry Disease (CBD)"}</h4>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {isAm
                  ? <>ፍሬዎችን በቀጥታ ያጠፋል፣ በተበከሉ አካባቢዎች <strong className="text-destructive">ከ30-40% ምርት</strong> ላይ ተጽዕኖ ያሳድራል። ጥቁር ሰመጠ ምልክቶች በአረንጓዴ ፍሬዎች ላይ ይታያሉ፣ ያለጊዜው ፍሬ እንዲረግፍ ያደርጋል።</>
                  : <>Destroys berries directly, affecting <strong className="text-destructive">30–40% of the harvest</strong> in infected areas. Dark sunken lesions appear on green berries, causing premature fruit drop.</>
                }
              </p>
            </div>
          </Card>
          <Card className="p-5 border-destructive/20 bg-destructive/5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🪵</span>
                <div>
                  <h4 className="font-bold text-sm">{isAm ? "የቡና መድረቅ በሽታ" : "Coffee Wilt Disease"}</h4>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {isAm
                  ? <>የውሃ እና የንጥረ ነገር ፍሰትን ይዘጋል፣ በከባድ ሁኔታዎች በተለይ በአረጋዊ ቡና ዛፎች ላይ <strong className="text-destructive">ተክሉ እንዲሞት</strong> ያደርጋል። ፈጣን መድረቅ እና መሞት ያስከትላል።</>
                  : <>Blocks water and nutrient flow, leading to <strong className="text-destructive">plant death</strong> in severe cases, especially in older coffee trees. Causes rapid wilting and dieback.</>
                }
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 via-success/5 to-accent/5">
        <h3 className="text-lg font-bold mb-4 text-center">
          {isAm ? "ለምን አስፈላጊ ነው?" : "Why It Matters"}
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex gap-3 items-start">
            <TrendingUp className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              {isAm
                ? <>የቡና ተክሎችን መጠበቅ <strong className="text-foreground">በአገር አቀፍ ደረጃ በአስር ሚሊዮኖች ብር</strong> የገበሬዎችን ገቢ ሊጨምር ይችላል።</>
                : <>Protecting coffee plants can <strong className="text-foreground">increase farmer income by tens of millions of birr</strong> nationwide.</>
              }
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <BarChart3 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              {isAm
                ? <>በሽታ ኪሳራዎችን መከላከል በየዓመቱ <strong className="text-foreground">ከ125,000-150,000 ቶን ቡና</strong> ለአገራዊ ምርት ሊጨምር ይችላል።</>
                : <>Preventing disease losses could add <strong className="text-foreground">125,000–150,000 tons of coffee per year</strong> to national production.</>
              }
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              {isAm
                ? <>ቀድሞ ማወቅ ገበሬዎች <strong className="text-foreground">አላስፈላጊ ኬሚካል አጠቃቀምን እስከ 30% እንዲቀንሱ</strong> ያስችላቸዋል፣ ዘላቂነትን ያሻሽላል።</>
                : <>Early detection allows farmers to <strong className="text-foreground">reduce unnecessary chemical use by up to 30%</strong>, improving sustainability.</>
              }
            </p>
          </div>
        </div>
      </Card>

      {/* How It Works */}
      <Card className="p-6 text-center space-y-3">
        <Smartphone className="w-10 h-10 text-primary mx-auto" />
        <h3 className="text-lg font-bold">
          {isAm ? "እንዴት ይሰራል?" : "How It Works"}
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {isAm
            ? <>መድረኩ ለመጠቀም ቀላል ሲሆን ከስማርትፎኖች ወይም ታብሌቶች ጋር ይሰራል። ገበሬዎች <strong className="text-foreground">የቅጠል ፎቶ ብቻ ያነሳሉ</strong>፣ AI ያችን በሽታ ይለያል፣ ለህክምና ወይም ለመከላከል <strong className="text-foreground">ፈጣን ምክር ይሰጣል</strong>።</>
            : <>Our platform is easy to use and works with smartphones or tablets. Farmers simply <strong className="text-foreground">take a photo of a leaf</strong>, and our AI identifies the disease, providing <strong className="text-foreground">instant recommendations</strong> for treatment or prevention.</>
          }
        </p>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          {isAm
            ? <>በዚህ ቴክኖሎጂ <strong className="text-primary">የኢትዮጵያ ገበሬዎችን ለማበረታታት</strong>፣ የአገሪቱን የቡና ቅርስ ለመጠበቅ እና ለቡና ኢንዱስትሪ ዘላቂ ዕድገት ለማረጋገጥ — ኢትዮጵያ እንደ ዓለም አቀፍ የቡና መሪ ያላትን ቦታ ለማጠናከር እንፈልጋለን።</>
            : <>With this technology, we aim to <strong className="text-primary">empower Ethiopian farmers</strong>, protect the nation's coffee heritage, and ensure sustainable growth for the coffee industry — strengthening Ethiopia's position as a <strong className="text-foreground">global coffee leader</strong>.</>
          }
        </p>
      </Card>
    </div>
  );
};

export default CoffeeMission;
