import { Card } from "@/components/ui/card";
import { 
  Users, 
  Code, 
  Leaf, 
  GraduationCap,
  Heart,
  Target,
  Globe,
  Lightbulb,
  Award,
  Zap
} from "lucide-react";
import nolawiImage from "@/assets/team/nolawi.jpg";
import CoffeeMission from "@/components/about/CoffeeMission";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const isAm = language === "am";

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-8 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              {isAm ? "ስለ እኛ" : "About Us"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isAm
                ? "EthioAgri - የኢትዮጵያ ገበሬዎችን በቴክኖሎጂ ለማገዝ የተቋቋመ"
                : "EthioAgri - Empowering Ethiopian farmers through technology"}
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-6 bg-gradient-to-r from-primary/10 via-success/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">
                {isAm ? "ተልዕኳችን" : "Our Mission"}
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                {isAm
                  ? "ብልህ እና በአካባቢ ተገቢ የሆነ ቴክኖሎጂን በመጠቀም በኢትዮጵያ ግብርናን ማጠናከር እና ገበሬዎችን በዘመናዊ መፍትሄዎች ማበረታታት።"
                  : "To strengthen agriculture in Ethiopia using intelligent and locally relevant technology, empowering farmers with modern solutions."}
              </p>
            </div>
          </Card>

          {/* What We Do */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">
              {isAm ? "ምን እናደርጋለን?" : "What We Do"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{isAm ? "የሰብል ምርመራ" : "Crop Diagnosis"}</h3>
                <p className="text-sm text-muted-foreground">
                  {isAm
                    ? "በ AI ቴክኖሎጂ የሰብል በሽታዎችን በፎቶ ብቻ እንለያለን"
                    : "AI-powered disease detection from photos"}
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-7 h-7 text-success" />
                </div>
                <h3 className="font-bold mb-2">{isAm ? "ምክር እና መመሪያ" : "Advice & Guidance"}</h3>
                <p className="text-sm text-muted-foreground">
                  {isAm
                    ? "ለገበሬዎች የሚጠቅም ባህላዊ እና ዘመናዊ የግብርና ምክር እንሰጣለን"
                    : "Traditional and modern farming tips"}
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold mb-2">{isAm ? "የአየር ሁኔታ" : "Weather Forecast"}</h3>
                <p className="text-sm text-muted-foreground">
                  {isAm
                    ? "ለግብርና ተገቢ የሆነ የአየር ሁኔታ መረጃ እናቀርባለን"
                    : "Agriculture-focused weather data"}
                </p>
              </Card>
            </div>
          </div>

          {/* Why We Built This */}
          <Card className="p-6 md:p-8 bg-muted/50">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-destructive" />
                <h2 className="text-xl font-bold">
                  {isAm ? "ለምን ይህን ፈጠርን?" : "Why We Built This"}
                </h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                {isAm ? (
                  <>
                    <p>
                      ኢትዮጵያ ውስጥ ግብርና ለብዙ ሰዎች ዋና የገቢ ምንጭ ነው። ነገር ግን ብዙ ገበሬዎች በሰብል በሽታ፣ ባልተገቢ ውሃ አጠቃቀም እና የአየር ሁኔታ ችግሮች ይጎዳሉ።
                    </p>
                    <p>
                      እነዚህን ችግሮች ለመፍታት EthioAgri ን ፈጠርን - ገበሬዎች በቴክኖሎጂ እንዲጠቀሙ፣ ችግሮችን ቀድመው እንዲያውቁ እና ምርታማነታቸውን እንዲጨምሩ ለመርዳት።
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      In Ethiopia, agriculture is the primary source of income for millions of people. However, many farmers suffer from crop diseases, inefficient water usage, and unpredictable weather conditions.
                    </p>
                    <p>
                      We built EthioAgri to solve these problems - helping farmers leverage technology to identify issues early, make informed decisions, and increase their productivity.
                    </p>
                  </>
                )}
              </div>
            </div>
          </Card>

          {/* Founder Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">
              {isAm ? "መስራች" : "Founder"}
            </h2>
            <Card className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-medium">
                  <img 
                    src={nolawiImage} 
                    alt="Nolawi Hailu"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {isAm ? "ኖላዊ ኃይሉ" : "Nolawi Hailu"}
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      {isAm ? "AI ገንቢ እና መስራች" : "AI Developer & Founder"}
                    </p>
                  </div>

                  <div className="space-y-3 text-muted-foreground">
                    {isAm ? (
                      <>
                        <p>
                          ኖላዊ በኢትዮጵያ ውስጥ የተማረ ተማሪ AI ገንቢ ሲሆን ቴክኖሎጂን ተጠቅሞ ግብርናን ለማሻሻል እና ገበሬዎችን ለመደገፍ ትልቅ ፍላጎት አለው።
                        </p>
                        <p>
                          በኢትዮጵያ ውስጥ ሲያድግ ግብርና ለሰዎች ዕለት ተዕለት ኑሮ ምን ያህል አስፈላጊ እንደሆነ እና እንደ ሰብል በሽታዎች፣ ውሃ በአግባቡ አለመጠቀም እና ወቅታዊ መረጃ ማጣት ገበሬዎችን ምን ያህል እንደሚጎዳ ተመልክቷል። እነዚህ ተሞክሮዎች EthioAgri ን እንዲፈጥር አነሳሱት።
                        </p>
                        <p>
                          ይህን መድረክ ሰው ሰራሽ ብልህነት (AI)፣ የማሽን ትምህርት እና የድር ቴክኖሎጂዎችን በማጣመር ገበሬዎች የሰብል በሽታዎችን እንዲያውቁ፣ ጠቃሚ ግንዛቤዎችን እንዲያገኙ እና የተሻለ የግብርና ውሳኔ እንዲያደርጉ ለመርዳት ፈጠረው።
                        </p>
                        <p>
                          ከዚህ ፕሮጀክት ባሻገር በትምህርት፣ ግብርና እና ዘላቂነት ዘርፎች በበርካታ AI እና STEM ተነሳሽነቶች ላይ ሰርቷል።
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          I'm Nolawi Hailu, a student AI developer from Ethiopia with a strong passion for using technology to improve agriculture and support farmers.
                        </p>
                        <p>
                          Growing up in Ethiopia, I've seen how important agriculture is to people's daily lives and how challenges like crop diseases, inefficient irrigation, and lack of timely information affect farmers. These experiences motivated me to build EthioAgri.
                        </p>
                        <p>
                          I developed this platform by combining artificial intelligence, machine learning, and web technologies to help farmers detect crop diseases, access useful insights, and make better farming decisions. My focus is on creating tools that are affordable, easy to use, and suitable for local farming conditions.
                        </p>
                        <p>
                          Beyond this project, I've worked on multiple AI and STEM initiatives in education, agriculture, and sustainability.
                        </p>
                      </>
                    )}
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-3 pt-2 flex-wrap">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{isAm ? "ተማሪ ገንቢ" : "Student Developer"}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg">
                      <Leaf className="w-5 h-5 text-success" />
                      <span className="text-sm font-medium">AgriTech</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg">
                      <Code className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">AI/ML</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Coffee & EthioAgri */}
          <CoffeeMission />

          {/* Our Values */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">
              {isAm ? "እሴቶቻችን" : "Our Values"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{isAm ? "ፈጠራ" : "Innovation"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {isAm
                      ? "ለገበሬዎች የተሻለ መፍትሄ ለመስጠት ዘመናዊ ቴክኖሎጂ መጠቀም"
                      : "Using cutting-edge technology to provide better solutions for farmers"}
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{isAm ? "ቁርጠኝነት" : "Commitment"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {isAm
                      ? "የገበሬዎችን ኑሮ እና መተዳደሪያ ያለማቋረጥ ለማሻሻል መሰጠት"
                      : "Dedicated to continuously improving farmers' lives and livelihoods"}
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{isAm ? "ተደራሽነት" : "Accessibility"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {isAm
                      ? "ቴክኖሎጂን ለሁሉም ገበሬዎች ቀላል እና ተመጣጣኝ ማድረግ"
                      : "Making technology simple and affordable for all farmers"}
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{isAm ? "ጥራት" : "Quality"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {isAm
                      ? "ለተሻለ ውሳኔ ትክክለኛ እና አስተማማኝ መረጃ ቅድሚያ መስጠት"
                      : "Prioritizing accurate and reliable information for better decisions"}
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <Card className="p-6 text-center bg-gradient-to-r from-primary/5 to-success/5">
            <h3 className="font-bold text-lg mb-2">
              {isAm ? "ጥያቄ ወይም አስተያየት አለዎት?" : "Have questions or feedback?"}
            </h3>
            <p className="text-muted-foreground">
              {isAm
                ? "ለማንኛውም ጥያቄ ወይም አስተያየት እባክዎ ያግኙን!"
                : "We'd love to hear from you!"}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
