
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Bell, BookOpen, Users } from "lucide-react";

export const Newsletter = () => {
  return (
    <section id="newsletter" className="relative py-20 md:py-32 bg-muted overflow-hidden">
      {/* Diagonal pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #a58d4e 0px,
            #a58d4e 1px,
            transparent 1px,
            transparent 20px
          )`
        }}
      />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ostanite <span className="text-primary">informirani</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prijavite se na naš newsletter i prvi saznajte o novim tečajevima, 
              edukativnim sadržajima i ekskluzivnim ponudama
            </p>
          </div>

          {/* Newsletter Card */}
          <Card className="overflow-hidden shadow-xl border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-6">
                    Što dobivate s našim newsletterom?
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Bell className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground">Rane najave</div>
                        <div className="text-sm text-muted-foreground">
                          Prvi saznajte o novim tečajevima i rasporedu
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground">Ekskluzivni sadržaji</div>
                        <div className="text-sm text-muted-foreground">
                          Besplatni e-bookovi, videouputstva i savjeti
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground">Popusti za članove</div>
                        <div className="text-sm text-muted-foreground">
                          Ekskluzivne ponude samo za pretplatnike
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Form */}
                <div>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-card-foreground">
                        Prijavite se na newsletter
                      </h4>
                    </div>

                    {/* Brevo Embed Placeholder */}
                    <div className="bg-card border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Mail className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
                      <p className="text-muted-foreground font-medium mb-2">
                        Brevo Newsletter Form
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ovdje će biti ugrađena Brevo newsletter forma
                      </p>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Prijavite se
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Poštujemo vašu privatnost. Možete se odjaviti bilo kada.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust indicators */}
          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">Pretplatnika</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Mjesečno</div>
                <div className="text-sm text-muted-foreground">Nova izdanja</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">0</div>
                <div className="text-sm text-muted-foreground">Spam poruka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
