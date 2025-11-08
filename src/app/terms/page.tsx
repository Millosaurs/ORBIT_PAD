"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 bg-background">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-muted-foreground">
                        {/* Introduction */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                1. Agreement to Terms
                            </h2>
                            <p className="leading-relaxed">
                                These Terms of Service ("Terms") constitute a
                                legally binding agreement between you ("Client,"
                                "you," or "your") and Orbits LLC ("Company,"
                                "we," "us," or "our") concerning your access to
                                and use of our services.
                            </p>
                            <p className="leading-relaxed">
                                By engaging our services, submitting a project
                                request, or making a payment, you acknowledge
                                that you have read, understood, and agree to be
                                bound by these Terms. If you do not agree to
                                these Terms, you must not use our services.
                            </p>
                        </section>

                        {/* Services */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                2. Services Provided
                            </h2>
                            <p className="leading-relaxed">
                                Orbits LLC provides software development and
                                design services, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Web application development</li>
                                <li>Mobile application development</li>
                                <li>UI/UX design services</li>
                                <li>Cloud infrastructure solutions</li>
                                <li>Technical consulting</li>
                                <li>Maintenance and support services</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                The specific scope of services for each project
                                will be defined in the initial quote/ticket and
                                subsequent project agreement.
                            </p>
                        </section>

                        {/* Project Scope and Requirements */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                3. Project Scope and Requirements
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                3.1 Initial Quote and Scope Definition
                            </h3>
                            <p className="leading-relaxed">
                                All project requirements, features, and
                                specifications MUST be clearly defined and
                                documented in the initial quote/ticket. This
                                initial documentation serves as the official
                                scope of work and will be logged and retained
                                for the duration of the project and beyond.
                            </p>
                            <p className="leading-relaxed">
                                It is the Client's responsibility to provide
                                complete, accurate, and detailed requirements
                                during the initial consultation phase. Failure
                                to specify requirements during this phase may
                                result in additional charges or project delays.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                3.2 Scope Changes and Additional Features
                            </h3>
                            <p className="leading-relaxed">
                                Any features, functionalities, or requirements
                                not included in the original quote/ticket are
                                considered out of scope and will incur
                                additional charges. This includes but is not
                                limited to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    New pages or screens not originally
                                    specified
                                </li>
                                <li>
                                    Additional integrations or third-party
                                    services
                                </li>
                                <li>
                                    Changes to core functionality or
                                    architecture
                                </li>
                                <li>New features or modules</li>
                                <li>
                                    Significant design revisions beyond agreed
                                    rounds
                                </li>
                                <li>Additional platforms or devices</li>
                            </ul>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                3.3 Change Request Process
                            </h3>
                            <p className="leading-relaxed">
                                All change requests must be submitted through
                                Discord and will be reviewed by our team. We
                                will provide a separate quote for any
                                out-of-scope work, which must be approved and
                                paid before work commences on the changes.
                            </p>
                        </section>

                        {/* Payment Terms */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                4. Payment Terms
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                4.1 Payment Structure
                            </h3>
                            <p className="leading-relaxed">
                                All projects operate on a 50/50 payment split
                                structure:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>First Payment (50%):</strong> Due
                                    upon project acceptance and before work
                                    begins. This payment confirms your
                                    commitment to the project and secures your
                                    project slot in our schedule.
                                </li>
                                <li>
                                    <strong>Second Payment (50%):</strong> Due
                                    upon project completion and before final
                                    delivery of source code, files, and assets.
                                </li>
                            </ul>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                4.2 Non-Refundable Policy
                            </h3>
                            <p className="leading-relaxed font-bold text-foreground">
                                ALL PAYMENTS ARE NON-REFUNDABLE.
                            </p>
                            <p className="leading-relaxed">
                                Once the initial 50% payment is received, work
                                begins immediately and resources are allocated
                                to your project. Therefore:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    The first 50% payment is non-refundable
                                    under any circumstances once work has
                                    commenced
                                </li>
                                <li>
                                    The second 50% payment is non-refundable
                                    once the project is completed and ready for
                                    delivery
                                </li>
                                <li>
                                    Partial refunds will not be issued for any
                                    reason, including but not limited to: client
                                    cancellation, change of mind, business
                                    closure, or dissatisfaction
                                </li>
                                <li>
                                    Failure to provide required materials or
                                    respond to communications does not entitle
                                    you to a refund
                                </li>
                            </ul>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                4.3 Payment Methods
                            </h3>
                            <p className="leading-relaxed">
                                We accept payments through secure payment
                                processors. All payment transaction fees are the
                                responsibility of the Client unless otherwise
                                agreed in writing.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                4.4 Late Payments
                            </h3>
                            <p className="leading-relaxed">
                                If the second payment is not received within 7
                                days of project completion notification, we
                                reserve the right to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Withhold final project deliverables</li>
                                <li>Suspend access to any hosted services</li>
                                <li>
                                    Charge late payment fees of 5% per week or
                                    the maximum allowed by law
                                </li>
                                <li>Pursue legal action to recover payment</li>
                            </ul>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                4.5 Additional Feature Payments
                            </h3>
                            <p className="leading-relaxed">
                                Any additional features or out-of-scope work
                                must be paid in full (100%) before work begins
                                on the changes. These payments are also
                                non-refundable.
                            </p>
                        </section>

                        {/* Communication Policy */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                5. Communication Policy
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                5.1 Official Communication Channel
                            </h3>
                            <p className="leading-relaxed font-bold text-foreground">
                                ALL PROJECT COMMUNICATIONS MUST BE CONDUCTED
                                THROUGH DISCORD.
                            </p>
                            <p className="leading-relaxed">
                                Discord is our exclusive platform for project
                                communication, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Project discussions and updates</li>
                                <li>Requirement clarifications</li>
                                <li>File sharing and asset delivery</li>
                                <li>Feedback and revision requests</li>
                                <li>Progress reports</li>
                                <li>Support requests</li>
                            </ul>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                5.2 Communication Logging
                            </h3>
                            <p className="leading-relaxed">
                                All communications conducted through Discord are
                                logged, archived, and retained indefinitely for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Legal protection and dispute resolution</li>
                                <li>Project documentation and reference</li>
                                <li>Quality assurance and accountability</li>
                                <li>Compliance and audit purposes</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                By using our services, you consent to this
                                logging and understand that all project
                                communications are recorded and may be used as
                                evidence in any disputes.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                5.3 Client Responsibilities
                            </h3>
                            <p className="leading-relaxed">
                                The Client agrees to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Maintain an active Discord account</li>
                                <li>
                                    Respond to communications within 48 business
                                    hours
                                </li>
                                <li>
                                    Provide timely feedback and approvals as
                                    requested
                                </li>
                                <li>
                                    Use only Discord for all project-related
                                    communications
                                </li>
                                <li>
                                    Keep Discord contact information up to date
                                </li>
                            </ul>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                5.4 Response Times
                            </h3>
                            <p className="leading-relaxed">
                                We strive to respond to all communications
                                within 24-48 business hours (Monday-Friday,
                                excluding holidays). Urgent matters will be
                                prioritized accordingly.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                5.5 External Communication Not Binding
                            </h3>
                            <p className="leading-relaxed">
                                Any communications conducted outside of Discord
                                (email, phone, text, social media, etc.) are not
                                considered official and are not binding. Only
                                communications made through our Discord server
                                are legally recognized for project purposes.
                            </p>
                        </section>

                        {/* Project Timeline */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                6. Project Timeline and Delivery
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                6.1 Estimated Timelines
                            </h3>
                            <p className="leading-relaxed">
                                Project timelines are estimates and may vary
                                based on project complexity, client
                                responsiveness, and scope changes. We will
                                provide regular updates on project progress
                                through Discord.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                6.2 Delays Due to Client
                            </h3>
                            <p className="leading-relaxed">
                                If delays occur due to client
                                non-responsiveness, delayed feedback, or failure
                                to provide required materials, the project
                                timeline will be adjusted accordingly. Such
                                delays do not entitle the Client to refunds or
                                compensation.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                6.3 Project Delivery
                            </h3>
                            <p className="leading-relaxed">
                                Upon project completion, we will notify you
                                through Discord. Final deliverables (source
                                code, files, documentation) will be released
                                only after the second 50% payment is received in
                                full.
                            </p>
                        </section>

                        {/* Revisions and Feedback */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                7. Revisions and Feedback
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                7.1 Included Revisions
                            </h3>
                            <p className="leading-relaxed">
                                The number of included revisions is specified in
                                your project plan. Revisions must be within the
                                original scope of work and cannot introduce new
                                features or significant changes to
                                functionality.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                7.2 Additional Revisions
                            </h3>
                            <p className="leading-relaxed">
                                Revisions beyond the included number will be
                                charged at an hourly rate or flat fee, to be
                                determined based on the scope of changes
                                requested.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                7.3 Revision Requests
                            </h3>
                            <p className="leading-relaxed">
                                All revision requests must be submitted through
                                Discord with clear, detailed descriptions of the
                                changes needed. Vague or unclear requests may
                                result in delays.
                            </p>
                        </section>

                        {/* Intellectual Property */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                8. Intellectual Property Rights
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                8.1 Client Ownership
                            </h3>
                            <p className="leading-relaxed">
                                Upon receipt of full payment (both 50%
                                installments), the Client receives ownership of
                                the custom code and designs created specifically
                                for their project, subject to the terms below.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                8.2 Third-Party Components
                            </h3>
                            <p className="leading-relaxed">
                                Projects may include third-party libraries,
                                frameworks, and open-source components, which
                                remain subject to their respective licenses. We
                                do not claim ownership of or transfer rights to
                                these components.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                8.3 Company Rights
                            </h3>
                            <p className="leading-relaxed">
                                We reserve the right to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Use general techniques, methodologies, and
                                    knowledge gained from the project
                                </li>
                                <li>
                                    Display the project in our portfolio (with
                                    Client approval)
                                </li>
                                <li>
                                    Reuse non-specific code patterns and
                                    solutions
                                </li>
                            </ul>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                8.4 Client Materials
                            </h3>
                            <p className="leading-relaxed">
                                The Client retains ownership of all materials,
                                content, logos, and assets provided to us. The
                                Client grants us a license to use these
                                materials solely for the purpose of completing
                                the contracted project.
                            </p>
                        </section>

                        {/* Warranties and Disclaimers */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                9. Warranties and Disclaimers
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                9.1 Service Quality
                            </h3>
                            <p className="leading-relaxed">
                                We warrant that services will be performed in a
                                professional and workmanlike manner consistent
                                with industry standards.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                9.2 No Guarantees
                            </h3>
                            <p className="leading-relaxed">
                                WE DO NOT GUARANTEE:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Specific business results, revenue, or
                                    conversions
                                </li>
                                <li>
                                    Compatibility with all devices or browsers
                                </li>
                                <li>
                                    Uninterrupted or error-free operation of the
                                    delivered product
                                </li>
                                <li>
                                    That the product will meet all of the
                                    Client's requirements (beyond the agreed
                                    scope)
                                </li>
                                <li>
                                    Third-party service availability or
                                    functionality
                                </li>
                            </ul>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                9.3 Disclaimer
                            </h3>
                            <p className="leading-relaxed uppercase">
                                EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, WE
                                PROVIDE SERVICES "AS IS" WITHOUT WARRANTY OF ANY
                                KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                                LIMITED TO WARRANTIES OF MERCHANTABILITY,
                                FITNESS FOR A PARTICULAR PURPOSE, AND
                                NON-INFRINGEMENT.
                            </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">
                                10. Limitation of Liability
                            </h2>
                            <p className="leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Our total liability for any claims arising
                                    from or related to these Terms or our
                                    services shall not exceed the total amount
                                    paid by the Client for the specific project
                                    in question
                                </li>
                                <li>
                                    We shall not be liable for any indirect,
                                    incidental, special, consequential, or
                                    punitive damages, including but not limited
                                    to: loss of profits, data, use, goodwill, or
                                    other intangible losses
                                </li>
                                <li>
                                    We are not responsible for any damages or
                                    losses resulting from third-party services,
                                    hosting providers, or external dependencies
                                </li>
                            </ul>
                        </section>

                        {/* Client Obligations */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                11. Client Obligations and Responsibilities
                            </h2>
                            <p className="leading-relaxed">
                                The Client agrees to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Provide complete, accurate, and timely
                                    information and materials
                                </li>
                                <li>
                                    Respond to requests for feedback and
                                    approvals within reasonable timeframes
                                </li>
                                <li>
                                    Ensure all content provided is legal, does
                                    not infringe on third-party rights, and
                                    complies with applicable laws
                                </li>
                                <li>
                                    Obtain necessary licenses for any
                                    third-party content or services
                                </li>
                                <li>
                                    Not use our services for any illegal or
                                    unauthorized purpose
                                </li>
                                <li>
                                    Maintain adequate security measures for any
                                    accounts and access credentials
                                </li>
                                <li>
                                    Be solely responsible for the content and
                                    legality of their project
                                </li>
                            </ul>
                        </section>

                        {/* Termination */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                12. Termination
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                12.1 Termination by Client
                            </h3>
                            <p className="leading-relaxed">
                                The Client may terminate the project at any
                                time. However, all payments made are
                                non-refundable. If termination occurs after work
                                has begun, the Client forfeits the first 50%
                                payment and receives no deliverables or source
                                code.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                12.2 Termination by Company
                            </h3>
                            <p className="leading-relaxed">
                                We reserve the right to terminate a project if:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    The Client fails to make required payments
                                </li>
                                <li>
                                    The Client is unresponsive for more than 30
                                    days
                                </li>
                                <li>The Client breaches these Terms</li>
                                <li>
                                    The Client engages in abusive or harassing
                                    behavior
                                </li>
                                <li>
                                    The project involves illegal activities or
                                    content
                                </li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                In such cases, all payments made remain
                                non-refundable, and we are under no obligation
                                to deliver any work product.
                            </p>
                        </section>

                        {/* Confidentiality */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                13. Confidentiality
                            </h2>
                            <p className="leading-relaxed">
                                Both parties agree to keep confidential any
                                proprietary or sensitive information shared
                                during the project. However, this obligation
                                does not extend to information that:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Is or becomes publicly available</li>
                                <li>
                                    Was already known to the receiving party
                                </li>
                                <li>
                                    Is independently developed without use of
                                    confidential information
                                </li>
                                <li>Must be disclosed by law or court order</li>
                            </ul>
                        </section>

                        {/* Indemnification */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                14. Indemnification
                            </h2>
                            <p className="leading-relaxed">
                                The Client agrees to indemnify, defend, and hold
                                harmless Orbits LLC, its officers, employees,
                                and contractors from any claims, damages,
                                losses, liabilities, and expenses (including
                                attorney fees) arising from:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>The Client's use of our services</li>
                                <li>
                                    Content or materials provided by the Client
                                </li>
                                <li>Violation of these Terms</li>
                                <li>
                                    Infringement of third-party rights by Client
                                    materials
                                </li>
                                <li>
                                    Illegal activities conducted using the
                                    delivered product
                                </li>
                            </ul>
                        </section>

                        {/* Dispute Resolution */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                15. Dispute Resolution
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                15.1 Good Faith Negotiation
                            </h3>
                            <p className="leading-relaxed">
                                In the event of any dispute, both parties agree
                                to first attempt to resolve the matter through
                                good faith negotiation via Discord.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                15.2 Arbitration
                            </h3>
                            <p className="leading-relaxed">
                                If the dispute cannot be resolved through
                                negotiation within 30 days, both parties agree
                                to binding arbitration in accordance with the
                                rules of the American Arbitration Association.
                                The arbitration shall take place in the
                                jurisdiction where Orbits LLC is registered.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                15.3 Governing Law
                            </h3>
                            <p className="leading-relaxed">
                                These Terms shall be governed by and construed
                                in accordance with the laws of the jurisdiction
                                where Orbits LLC is registered, without regard
                                to its conflict of law provisions.
                            </p>
                        </section>

                        {/* Miscellaneous */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                16. Miscellaneous Provisions
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                16.1 Entire Agreement
                            </h3>
                            <p className="leading-relaxed">
                                These Terms, together with any project-specific
                                agreements and quotes, constitute the entire
                                agreement between the parties and supersede all
                                prior communications and proposals.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                16.2 Amendments
                            </h3>
                            <p className="leading-relaxed">
                                We reserve the right to modify these Terms at
                                any time. Changes will be effective immediately
                                upon posting. Continued use of our services
                                after changes constitutes acceptance of the
                                modified Terms.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                16.3 Severability
                            </h3>
                            <p className="leading-relaxed">
                                If any provision of these Terms is found to be
                                unenforceable or invalid, that provision shall
                                be limited or eliminated to the minimum extent
                                necessary so that these Terms shall otherwise
                                remain in full force and effect.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                16.4 Waiver
                            </h3>
                            <p className="leading-relaxed">
                                No waiver of any term of these Terms shall be
                                deemed a further or continuing waiver of such
                                term or any other term, and our failure to
                                assert any right or provision under these Terms
                                shall not constitute a waiver of such right or
                                provision.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                16.5 Assignment
                            </h3>
                            <p className="leading-relaxed">
                                The Client may not assign or transfer these
                                Terms without our prior written consent. We may
                                assign these Terms without restriction.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">
                                16.6 Force Majeure
                            </h3>
                            <p className="leading-relaxed">
                                We shall not be liable for any failure or delay
                                in performance due to circumstances beyond our
                                reasonable control, including but not limited
                                to: acts of God, war, terrorism, riots, natural
                                disasters, pandemics, government actions, or
                                internet/telecommunications failures.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                17. Contact Information
                            </h2>
                            <p className="leading-relaxed">
                                For questions regarding these Terms of Service,
                                please contact us:
                            </p>
                            <div className="ml-4 space-y-2">
                                <p>
                                    <strong>Company:</strong> Orbits LLC
                                </p>
                                <p>
                                    <strong>Email:</strong> hello@orbitsllc.com
                                </p>
                                <p>
                                    <strong>Discord:</strong> Join our server
                                    for official communications
                                </p>
                            </div>
                            <p className="leading-relaxed mt-4 font-semibold text-foreground">
                                By using our services, you acknowledge that you
                                have read, understood, and agree to be bound by
                                these Terms of Service.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
