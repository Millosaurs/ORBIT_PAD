"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 px-6 md:px-12 py-16 bg-background">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <div className="space-y-8 text-muted-foreground">
                        {/* Introduction */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                1. Introduction
                            </h2>
                            <p className="leading-relaxed">
                                Welcome to Orbits LLC ("we," "our," or "us"). We
                                are committed to protecting your privacy and
                                ensuring the security of your personal
                                information. This Privacy Policy explains how we
                                collect, use, disclose, and safeguard your
                                information when you visit our website or use our
                                services.
                            </p>
                            <p className="leading-relaxed">
                                By using our services, you agree to the
                                collection and use of information in accordance
                                with this policy. If you do not agree with our
                                policies and practices, please do not use our
                                services.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                2. Information We Collect
                            </h2>
                            <h3 className="text-xl font-semibold text-foreground">
                                2.1 Personal Information
                            </h3>
                            <p className="leading-relaxed">
                                We may collect personal information that you
                                voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Contact us through our website or Discord</li>
                                <li>Request a quote or consultation</li>
                                <li>Enter into a service agreement with us</li>
                                <li>Subscribe to our newsletter or updates</li>
                                <li>Participate in surveys or feedback</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                This information may include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Discord username and ID</li>
                                <li>Company name and business information</li>
                                <li>Phone number</li>
                                <li>Payment information</li>
                                <li>Project requirements and specifications</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-6">
                                2.2 Automatically Collected Information
                            </h3>
                            <p className="leading-relaxed">
                                When you visit our website, we automatically
                                collect certain information about your device,
                                including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Referring URLs</li>
                                <li>Pages viewed and time spent on pages</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-6">
                                2.3 Communication Records
                            </h3>
                            <p className="leading-relaxed">
                                All communications conducted through Discord,
                                email, or other channels are logged and retained
                                for record-keeping, quality assurance, and legal
                                compliance purposes. This includes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Initial project inquiries and quotes</li>
                                <li>All Discord messages and conversations</li>
                                <li>Project specifications and requirements</li>
                                <li>Change requests and revisions</li>
                                <li>Payment confirmations and receipts</li>
                            </ul>
                        </section>

                        {/* How We Use Your Information */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                3. How We Use Your Information
                            </h2>
                            <p className="leading-relaxed">
                                We use the information we collect for the
                                following purposes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    To provide, operate, and maintain our services
                                </li>
                                <li>
                                    To communicate with you about your projects
                                </li>
                                <li>To process payments and transactions</li>
                                <li>
                                    To respond to your inquiries and provide
                                    customer support
                                </li>
                                <li>
                                    To improve our website and service offerings
                                </li>
                                <li>
                                    To send you technical notices, updates, and
                                    administrative messages
                                </li>
                                <li>
                                    To detect, prevent, and address technical
                                    issues or fraudulent activities
                                </li>
                                <li>
                                    To comply with legal obligations and enforce
                                    our terms of service
                                </li>
                                <li>
                                    To maintain records of all project
                                    specifications and communications
                                </li>
                            </ul>
                        </section>

                        {/* Information Sharing */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                4. Information Sharing and Disclosure
                            </h2>
                            <p className="leading-relaxed">
                                We do not sell, trade, or rent your personal
                                information to third parties. We may share your
                                information in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>Service Providers:</strong> We may
                                    share information with third-party service
                                    providers who perform services on our behalf
                                    (e.g., payment processors, hosting providers,
                                    Discord platform)
                                </li>
                                <li>
                                    <strong>Legal Requirements:</strong> We may
                                    disclose information if required by law or in
                                    response to valid requests by public
                                    authorities
                                </li>
                                <li>
                                    <strong>Business Transfers:</strong> In the
                                    event of a merger, acquisition, or sale of
                                    assets, your information may be transferred
                                </li>
                                <li>
                                    <strong>With Your Consent:</strong> We may
                                    share information with your explicit consent
                                </li>
                            </ul>
                        </section>

                        {/* Discord Communications */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                5. Discord Communications
                            </h2>
                            <p className="leading-relaxed">
                                All official project communications are conducted
                                through Discord. By engaging our services, you
                                acknowledge and agree that:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Discord is our primary communication platform
                                </li>
                                <li>
                                    All conversations, files, and messages shared
                                    through Discord are logged and archived
                                </li>
                                <li>
                                    You must maintain an active Discord account
                                    for the duration of the project
                                </li>
                                <li>
                                    Discord's own privacy policy and terms of
                                    service apply to the platform usage
                                </li>
                                <li>
                                    We are not responsible for Discord's data
                                    handling practices or security measures
                                </li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                6. Data Security
                            </h2>
                            <p className="leading-relaxed">
                                We implement reasonable security measures to
                                protect your personal information from
                                unauthorized access, alteration, disclosure, or
                                destruction. These measures include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Secure server infrastructure</li>
                                <li>Encrypted data transmission (SSL/TLS)</li>
                                <li>Regular security assessments</li>
                                <li>Limited access to personal information</li>
                                <li>Secure payment processing</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                However, no method of transmission over the
                                Internet or electronic storage is 100% secure. We
                                cannot guarantee absolute security of your
                                information.
                            </p>
                        </section>

                        {/* Data Retention */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                7. Data Retention
                            </h2>
                            <p className="leading-relaxed">
                                We retain your personal information for as long as
                                necessary to fulfill the purposes outlined in this
                                Privacy Policy, unless a longer retention period
                                is required by law. Specifically:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Project communications and specifications are
                                    retained indefinitely for legal and dispute
                                    resolution purposes
                                </li>
                                <li>
                                    Payment records are retained in accordance
                                    with tax and accounting regulations
                                </li>
                                <li>
                                    Client information is retained for the
                                    duration of the business relationship and for
                                    a reasonable period thereafter
                                </li>
                            </ul>
                        </section>

                        {/* Your Rights */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                8. Your Rights
                            </h2>
                            <p className="leading-relaxed">
                                Depending on your location, you may have certain
                                rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>Access:</strong> Request access to
                                    your personal information
                                </li>
                                <li>
                                    <strong>Correction:</strong> Request
                                    correction of inaccurate information
                                </li>
                                <li>
                                    <strong>Deletion:</strong> Request deletion of
                                    your information (subject to legal retention
                                    requirements)
                                </li>
                                <li>
                                    <strong>Objection:</strong> Object to
                                    processing of your information
                                </li>
                                <li>
                                    <strong>Portability:</strong> Request transfer
                                    of your information to another service
                                </li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                To exercise these rights, please contact us using
                                the information provided in the Contact section
                                below.
                            </p>
                        </section>

                        {/* Cookies */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                9. Cookies and Tracking Technologies
                            </h2>
                            <p className="leading-relaxed">
                                We use cookies and similar tracking technologies
                                to track activity on our website and store certain
                                information. You can instruct your browser to
                                refuse all cookies or to indicate when a cookie is
                                being sent. However, if you do not accept cookies,
                                you may not be able to use some portions of our
                                website.
                            </p>
                        </section>

                        {/* Third-Party Links */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                10. Third-Party Links
                            </h2>
                            <p className="leading-relaxed">
                                Our website may contain links to third-party
                                websites. We are not responsible for the privacy
                                practices or content of these external sites. We
                                encourage you to review the privacy policies of
                                any third-party sites you visit.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                11. Children's Privacy
                            </h2>
                            <p className="leading-relaxed">
                                Our services are not intended for individuals
                                under the age of 18. We do not knowingly collect
                                personal information from children. If you believe
                                we have collected information from a child, please
                                contact us immediately.
                            </p>
                        </section>

                        {/* International Transfers */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                12. International Data Transfers
                            </h2>
                            <p className="leading-relaxed">
                                Your information may be transferred to and
                                maintained on computers located outside of your
                                state, province, country, or other governmental
                                jurisdiction where data protection laws may differ
                                from those in your jurisdiction. By using our
                                services, you consent to such transfers.
                            </p>
                        </section>

                        {/* Changes to Policy */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                13. Changes to This Privacy Policy
                            </h2>
                            <p className="leading-relaxed">
                                We may update our Privacy Policy from time to
                                time. We will notify you of any changes by posting
                                the new Privacy Policy on this page and updating
                                the "Last updated" date. You are advised to review
                                this Privacy Policy periodically for any changes.
                                Changes are effective when posted on this page.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                14. Contact Us
                            </h2>
                            <p className="leading-relaxed">
                                If you have any questions about this Privacy
                                Policy or our data practices, please contact us:
                            </p>
                            <div className="ml-4 space-y-2">
                                <p>
                                    <strong>Company:</strong> Orbits LLC
                                </p>
                                <p>
                                    <strong>Email:</strong> hello@orbitsllc.com
                                </p>
                                <p>
                                    <strong>Discord:</strong> Join our server for
                                    support
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
