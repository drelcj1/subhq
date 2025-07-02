import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an account, make a
                  purchase, or contact us for support. This may include your name, email address, phone number, and
                  payment information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Usage Information</h4>
                <p className="text-muted-foreground">
                  We automatically collect certain information about your use of our services, including your IP
                  address, browser type, operating system, and usage patterns.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• To provide and maintain our services</li>
                <li>• To process transactions and send related information</li>
                <li>• To send you technical notices and support messages</li>
                <li>• To communicate with you about products, services, and events</li>
                <li>• To monitor and analyze trends and usage</li>
                <li>• To detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• With service providers who assist us in operating our platform</li>
                <li>• When required by law or to protect our rights</li>
                <li>• In connection with a merger, acquisition, or sale of assets</li>
                <li>• With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access and update your personal information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Object to processing of your personal information</li>
                <li>• Request data portability</li>
                <li>• Withdraw consent at any time</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Email: privacy@subhq.ng</p>
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
