export function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-bold text-foreground">Luxury Livings</h3>
            <p className="font-body text-sm text-muted-foreground">
              Creating inclusive and luxurious living spaces for diverse communities and senior lifestyles.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-body text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Senior Living
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LGBTQ+ Communities
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Luxury Residences
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Wellness Programs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-body text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  News & Updates
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Community Events
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-body text-sm font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="font-body text-sm text-muted-foreground">© 2024 Luxury Livings. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
