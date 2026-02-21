import { Receipt, Mail, FileText, Info } from 'lucide-react';

export default function EReimbursements() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Resources</p>
        <h1 className="font-heading text-5xl text-white">e-Reimbursements</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Expense reimbursement process for temple volunteers and staff.
        </p>
      </section>

      {/* Reimbursement Info */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="card mb-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Receipt className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-white mb-4">Reimbursement Process</h2>
                <p className="text-white/70 mb-4">
                  ISKCON of New Jersey values the contributions of our volunteers and staff. If you have incurred 
                  approved expenses on behalf of the temple, you may be eligible for reimbursement.
                </p>
                <p className="text-white/70">
                  Our e-Reimbursement system streamlines the process of submitting and tracking expense claims.
                </p>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-charcoal rounded-lg p-8 border border-gold/20 mb-8">
            <h3 className="font-heading text-xl text-gold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              How to Submit a Reimbursement
            </h3>
            <ol className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm shrink-0">1</span>
                <span>Obtain prior approval from temple management for any expenses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm shrink-0">2</span>
                <span>Keep all original receipts and documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm shrink-0">3</span>
                <span>Request the reimbursement form via email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm shrink-0">4</span>
                <span>Complete the form and attach scanned copies of receipts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm shrink-0">5</span>
                <span>Submit via email for review and processing</span>
              </li>
            </ol>
          </div>

          {/* Important Note */}
          <div className="flex items-start gap-4 p-6 bg-gold/10 rounded-lg border border-gold/30 mb-8">
            <Info className="w-6 h-6 text-gold shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white mb-2">Important Note</h3>
              <p className="text-white/70 text-sm">
                All expenses must be pre-approved by temple management. Reimbursements are typically processed 
                within 2-3 weeks of submission. Please ensure all documentation is complete to avoid delays.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-charcoal rounded-lg p-8 border border-gold/20">
            <h3 className="font-heading text-xl text-white mb-4">Request a Reimbursement Form</h3>
            <p className="text-white/60 mb-4">
              To request the reimbursement form or for questions about the process, please contact:
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
