import { Phone, MapPin, Mail, Facebook } from "lucide-react"
import Link from "next/link"

export function ContactInfoSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Get In Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold text-foreground mb-1">Phone</p>
            
            
             <a href="tel:+977 014566866" className="text-muted-foreground">+977 014566866</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <a
              href="https://www.google.com/maps/place/Palagya+Hotel/@27.7058835,85.3508272,17z/data=!3m1!4b1!4m9!3m8!1s0x39eb1981e4290e07:0xf62e653d652cfb9d!5m2!4m1!1i2!8m2!3d27.7058835!4d85.3508272!16s%2Fg%2F1233610wp!17m2!4m1!1e3!18m1!1e1?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-primary transition"
            >
              <MapPin className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Location</p>
                <p className="text-muted-foreground text-sm">
                  Near Tribhuvan International <br/> Airport, Pashupati, Kathmandu, Nepal
                </p>
              </div>
            </a>
          </div>
          <div className="flex items-start gap-4">
            <Link 
              href="https://www.facebook.com/profile.php?id=100071153694915&rdid=xxlMz2GmaqIwkjxC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16W5NprKK3%2F#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mt-1 flex-shrink-0 hover:text-primary/80 transition-colors"
            >
              <Facebook size={24} />
            </Link>
            <div>
              <p className="font-semibold text-foreground mb-1">Social Media</p>
              <Link 
                href="https://www.facebook.com/profile.php?id=100071153694915&rdid=xxlMz2GmaqIwkjxC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16W5NprKK3%2F#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Follow us on Facebook for updates
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold text-foreground mb-1">Email</p>
              <p className="text-muted-foreground">ekatahotel2069@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
