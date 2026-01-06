"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { workingCommittee, advisors, employees } from "@/lib/committee-data"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()
  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Unity Hotel and GuestHouse Professional Association</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Unity Hotel and GuestHouse Professional Association of Nepal is a dedicated organization representing the
              hospitality sector in Kathmandu. Established in 2069 B.S., it serves as the umbrella organization for many Hotels and Guest Houses in Kathmandu.
              The association is committed to promoting sustainable tourism, enhancing hospitality standards, and supporting the growth of the hospitality industry in Nepal.</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our member hotels operate in key areas including Naya Basti Tilaganga, Airport Sinamangal, Gausala Pingalasthan, Gyaneshwor, Sukedhara, Chakrapath, Basundhara, and Lazimpat.</p>
            <div className="flex gap-4 mt-6">
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-lg font-semibold text-foreground">+977 01-4586327</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-lg font-semibold text-foreground">ekatahotel2069@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-lg font-semibold text-foreground">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Message from the President</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dear Members, Partners, and Valued Stakeholders,
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As President of the United Hotel and Guest House Professionals Association, Nepal, I am honored to lead an organization
                committed to the growth and excellence of our hospitality industry. Kathmandu, as Nepal's tourism hub,
                is home to a diverse range of hotels catering to global travelers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our association advocates for hotel owners' rights, upholds service standards, and collaborates with
                tourism authorities to enhance the industry's overall development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I encourage all hoteliers to actively engage with Unity  initiatives and utilize our resources to
                strengthen their businesses. Through unity, professionalism, and innovation, we can elevate Kathmandu's
                reputation as a world-class destination while contributing to Nepal's tourism growth.
              </p>
              <div>
                <p className="font-semibold text-foreground">Mr.Saroj Ale</p>
                <p className="text-muted-foreground">President,  United Hotel and Guest House Professionals Association, Nepal</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  United Hotel and Guest House Professionals Association, Nepal is dedicated to fostering excellence in the hospitality
                  industry. We unite hotel owners and managers to promote professional standards, sustainable practices,
                  and collaborative growth.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To establish Kathmandu as the premier hospitality destination in South Asia through innovation,
                  quality service, and community engagement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What We Do</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Represent member interests to government and tourism organizations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Organize training and professional development programs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Facilitate networking and collaboration among members</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Promote sustainable tourism and community development</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Maintain and enhance quality standards in the industry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
  <div className="max-w-7xl mx-auto">
    {/* Working Committee Section */}
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Team</span>
      </div>
      <h2 className="text-3xl font-bold text-foreground mb-2">Working Committee</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">Meet the dedicated Working Committee members who are constantly working for the betterment of the industry</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
      {workingCommittee.map((member, index) => {
        const isPresident = member.position === "President"
        return (
          <div
            key={index}
            className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
              isPresident 
                ? "bg-white dark:bg-slate-900 border border-amber-300/60 hover:border-amber-400/80" 
                : "bg-white dark:bg-slate-900 border border-border/50 hover:border-primary/50"
            }`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              isPresident 
                ? "bg-gradient-to-br from-amber-400/5 to-yellow-400/5" 
                : "bg-gradient-to-br from-primary/5 to-transparent"
            }`}></div>
            
            <div className="p-6 relative z-10">
              <div className="flex flex-col items-center text-center mb-4">
                {/* Member Photo */}
                <div className="relative w-32 h-32 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className={`absolute inset-0 rounded-full p-1 ${
                    isPresident 
                      ? "bg-gradient-to-br from-amber-400/80 via-yellow-500/80 to-amber-500/80" 
                      : "bg-gradient-to-br from-primary to-accent"
                  }`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                      <Image
                        src={member.photo || "/placeholder-user.jpg"}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                  isPresident ? "text-amber-600/80 dark:text-amber-400/80" : "text-primary"
                }`} dangerouslySetInnerHTML={{ __html: member.position }}></p>
                <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h4>
              </div>

              {member.phone && (
                <div className={`flex items-center justify-center gap-2 pt-4 border-t ${
                  isPresident ? "border-amber-200/50" : "border-border/30"
                }`}>
                  <Phone className={`w-4 h-4 shrink-0 ${isPresident ? "text-amber-500/70" : "text-primary/70"}`} />
                  <a
                    href={`tel:+977${member.phone}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:font-medium"
                  >
                    +977 {member.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>

    {/* Advisors Section */}
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Guidance</span>
      </div>
      <h2 className="text-3xl font-bold text-foreground mb-2">Advisors</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">Our esteemed advisors providing guidance and expertise</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
      {advisors.map((member, index) => (
        <div
          key={index}
          className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="p-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-4">
              {/* Member Photo */}
              <div className="relative w-32 h-32 mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                    <Image
                      src={member.photo || "/placeholder-user.jpg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2" dangerouslySetInnerHTML={{ __html: member.position }}></p>
              <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h4>
            </div>

            {member.phone && (
              <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/30">
                <Phone className="w-4 h-4 text-primary/70 shrink-0" />
                <a
                  href={`tel:+977${member.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:font-medium"
                >
                  +977 {member.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Employees Section */}
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Support</span>
      </div>
      <h2 className="text-3xl font-bold text-foreground mb-2">Employees</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">Our dedicated employees supporting the association's operations</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {employees.map((member, index) => (
        <div
          key={index}
          className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="p-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-4">
              {/* Member Photo */}
              <div className="relative w-32 h-32 mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                    <Image
                      src={member.photo || "/placeholder-user.jpg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2" dangerouslySetInnerHTML={{ __html: member.position }}></p>
              <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h4>
            </div>

            {member.phone && (
              <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/30">
                <Phone className="w-4 h-4 text-primary/70 shrink-0" />
                <a
                  href={`tel:+977${member.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:font-medium"
                >
                  +977 {member.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

</main>
      <Footer />
    </div>
  )
}
