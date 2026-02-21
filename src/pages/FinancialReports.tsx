import { BarChart3, Mail, Shield, FileText } from 'lucide-react';

export default function FinancialReports() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Transparency</p>
        <h1 className="font-heading text-5xl text-white">Financial Reports</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Our commitment to financial transparency and accountability.
        </p>
      </section>

      {/* Financial Info */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="card mb-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <BarChart3 className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-white mb-4">Commitment to Transparency</h2>
                <p className="text-white/70 mb-4">
                  ISKCON of New Jersey is committed to maintaining the highest standards of financial 
                  accountability and transparency. As a 501(c)(3) tax-exempt organization, we take our 
                  responsibility to our donors and community seriously.
                </p>
                <p className="text-white/70">
                  Financial reports are available upon request to demonstrate how donations are utilized 
                  to support the temple's mission and programs.
                </p>
              </div>
            </div>
          </div>

          {/* What's Available */}
          <div className="bg-charcoal rounded-lg p-8 border border-gold/20 mb-8">
            <h3 className="font-heading text-xl text-gold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Available Reports
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Annual Financial Statements
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Form 990 (IRS Annual Information Return)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Donation Utilization Reports
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Project-Specific Financial Updates
              </li>
            </ul>
          </div>

          {/* Trust Badge */}
          <div className="flex items-start gap-4 p-6 bg-gold/10 rounded-lg border border-gold/30 mb-8">
            <Shield className="w-8 h-8 text-gold shrink-0" />
            <div>
              <h3 className="font-heading text-lg text-white mb-2">501(c)(3) Status</h3>
              <p className="text-white/70 text-sm">
                ISKCON of New Jersey is a registered 501(c)(3) non-profit organization. All donations 
                are 100% tax-deductible to the extent allowed by law. Our EIN is available upon request.
              </p>
            </div>
          </div>

          {/* Request Reports */}
          <div className="bg-charcoal rounded-lg p-8 border border-gold/20">
            <h3 className="font-heading text-xl text-white mb-4">Request Financial Reports</h3>
            <p className="text-white/60 mb-4">
              To request copies of our financial reports or for any questions regarding temple finances, 
              please contact us:
            </p>
            <a href="mailto:contactus@iskconofnewjersey.org" className="flex items-center gap-3 text-gold hover:text-gold-light transition-colors">
              <Mail className="w-5 h-5" />
              contactus@iskconofnewjersey.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
