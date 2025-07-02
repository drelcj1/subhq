import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using SubHQ's services, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                SubHQ provides digital payment services including but not limited to airtime purchase, data bundle
                purchase, bill payments, TV subscription renewals, and educational service purchases. We reserve the
                right to modify or discontinue any service at any time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To use our services, you must create an account and provide accurate, complete, and current
                  information. You are responsible for:
                </p>
                <ul className="space-y-2">
                  <li>• Maintaining the confidentiality of your account credentials</li>
                  <li>• All activities that occur under your account</li>
                  <li>• Notifying us immediately of any unauthorized use</li>
                  <li>• Ensuring your account information remains accurate and up-to-date</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>All payments are processed securely through our platform. By making a purchase, you agree to:</p>
                <ul className="space-y-2">
                  <li>• Pay all charges incurred by your account</li>
                  <li>• Provide valid payment information</li>
                  <li>• Accept our refund and cancellation policies</li>
                  <li>• Pay any applicable taxes or fees</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>You may not use our service:</p>
                <ul className="space-y-2">
                  <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>
                    • To violate any international, federal, provincial, or state regulations, rules, laws, or local
                    ordinances
                  </li>
                  <li>
                    • To infringe upon or violate our intellectual property rights or the intellectual property rights
                    of others
                  </li>
                  <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>• To submit false or misleading information</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                SubHQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use of the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice
                or liability, under our sole discretion, for any reason whatsoever and without limitation, including but
                not limited to a breach of the Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Questions about the Terms of Service should be sent to us at:</p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Email: legal@subhq.ng</p>
                <p>Phone: +234 800 123 4567</p>
                <p>Address: Lagos, Nigeria</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
