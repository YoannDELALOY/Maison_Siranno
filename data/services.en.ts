import { ServiceDataRaw } from './services';

export const servicesData: ServiceDataRaw[] = [
  {
    id: 'web-apps-saas',
    icon: null,
    title: "Web App & SaaS Development",
    description: "Code that drives revenue. Close collaboration, artisanal development expertise, and AI as an accelerator — we deliver your modern, scalable applications in record time.",
    delay: "0s",
    fullDescription: "No more web projects that take 6 months and deliver disappointing results. Thanks to AI — most notably Claude Code — we build your MVPs, SaaS platforms, and custom applications with unmatched velocity, without ever sacrificing quality or the close-knit relationship we maintain with every client. React, Next.js, TypeScript, Tailwind: a modern stack built to last, driven by a craftsman who knows your project inside out.",
    benefits: [
      "MVPs and SaaS delivered 3× faster than a traditional agency",
      "Pixel-perfect design tailored to your brand identity",
      "Scalable architecture ready for growth",
      "Mobile-first, SEO-ready, Core Web Vitals performance",
      "Client autonomy: back-office to manage your own content"
    ],
    useCases: ["SaaS & B2B platforms", "Custom business applications", "Startup MVPs", "Existing site redesigns"],
    technologies: ["Claude Code", "React", "Next.js", "TypeScript", "CMS", "WordPress", "Google AI Studio", "Full-stack apps"],
    processSteps: [
      {
        title: "Discovery & brief",
        description: "Define objectives, target audience, and project specifications.",
        detailedDescription: [
          "The **discovery phase** is the foundation on which the entire project rests. This is where we take the time to understand your world, your ambitions, and the constraints that shape your operational reality. An **insufficient brief** is the number-one cause of digital project failures: we approach it with the rigor of a consulting firm, asking the right questions before a single line of code is written.",
          "At the end of this structured workshop, you have a **clear set of specifications**, a shared vision, and a precise contractual framework that eliminates any grey areas. You know exactly what will be delivered, within what **timeframe** and at what **cost** — with no unpleasant surprises. This is the starting point for a relationship built on trust."
        ],
        clientRequirements: [
          "Your business objectives and target KPIs",
          "Your budget and timeline constraints",
          "Examples of sites or apps that inspire you",
          "Your brand guidelines if they exist (logo, colors, fonts)"
        ],
        agencyWork: [
          "We run a structured discovery workshop (30 to 60 min) to identify your objectives, constraints, and vision",
          "We formalize the technical and functional specifications",
          "We define the technology stack best suited to your project",
          "We establish a delivery schedule with intermediate milestones"
        ]
      },
      {
        title: "Planning",
        description: "Create the site architecture and wireframes (sketches).",
        detailedDescription: [
          "Planning transforms your intentions into a **concrete, validated architecture**. Before writing a single line of code or drawing a single pixel of interface, we model all **user journeys** and the functional structure of your application. This step protects your investment: identifying a design problem on a wireframe takes ten minutes; fixing it in production can take weeks.",
          "By approving the site map and **wireframes** at this stage, you lock in the project scope and give our team a clear direction. Features are prioritized by their real-world impact, the **backlog** is detailed, and technical risks are already anticipated. You enter the design phase with full visibility into what will be built."
        ],
        clientRequirements: [
          "Approval of the proposed site map and wireframes",
          "Feature prioritization (must-have vs. nice-to-have)",
          "Feedback within 48 hours to maintain the schedule"
        ],
        agencyWork: [
          "We create the complete site or application architecture",
          "We produce low-fidelity wireframes in Figma to validate user journeys",
          "We identify technical risks and propose alternatives",
          "We detail the feature backlog with estimations"
        ]
      },
      {
        title: "UI/UX Design",
        description: "Produce the graphic mockups and visual interface.",
        detailedDescription: [
          "Design is far more than aesthetics: it is the **first experience** your users will have of your brand, and it happens in a matter of seconds. We craft interfaces that combine **UX** rigor — fluid journeys, visual hierarchy, effective calls to action — with a premium creative direction that reflects the positioning you deserve. Every screen is designed to **convert** as much as to captivate.",
          "The **design system** we produce at this stage becomes a lasting asset for your company. It ensures visual consistency across all future iterations, reduces **maintenance costs**, and allows your team to extend the application without ever straying from the identity we have built together. You review, we refine — and nothing enters development without your approval."
        ],
        clientRequirements: [
          "Your feedback on the mockups (2 revision cycles included)",
          "Access to your visual assets (vector logos, HD photos)",
          "Final sign-off on the visual identity before development begins"
        ],
        agencyWork: [
          "We design high-fidelity mockups in Figma, aligned with your brand guidelines",
          "We deliver 2 included revision cycles to refine every screen",
          "We apply UX principles to optimize conversions",
          "We produce a reusable design system for future iterations"
        ]
      },
      {
        title: "Development",
        description: "Code the site or configure it via a CMS (e.g. WordPress, Shopify).",
        detailedDescription: [
          "This is where your vision comes to life in code. Thanks to AI agents — led by **Claude Code** — we execute at **three times the velocity** of a traditional agency, without ever sacrificing quality or maintainability. Every component is structured to last, documented to be understood, and tested as we go. And because we work in **direct proximity** with you, every milestone is an opportunity for a genuine human exchange that ensures the final product matches your vision exactly.",
          "Throughout development, you benefit from **complete transparency** thanks to previews accessible at every milestone. You watch your application grow in real time, you can give precise feedback, and we immediately adjust course if needed. This **iterative approach** eliminates bad surprises at delivery and transforms development into a smooth co-creation process."
        ],
        clientRequirements: [
          "Access to your hosting provider or cloud environment",
          "Final copy written or approval of our proposed text",
          "Sign-off on intermediate development milestones"
        ],
        agencyWork: [
          "We build the application with React/Next.js, accelerated by our AI agents (Claude Code) for 3× output without compromising quality",
          "We set up the backend architecture, database, and APIs",
          "We deploy on Vercel or your infrastructure with automated CI/CD",
          "We share progress via accessible previews at every milestone"
        ]
      },
      {
        title: "Content & SEO",
        description: "Integrate text and media, and optimize for search engines.",
        detailedDescription: [
          "A technically flawless application that is not found on **Google** is a missed opportunity. This step ensures your digital investment reaches well beyond your immediate network. We integrate your content with meticulous attention to **semantics**, hierarchy, and the signals that search engines reward — from the very first day the site goes live.",
          "The **technical SEO** optimization we implement (meta tags, Schema.org, Core Web Vitals, Open Graph) creates a solid foundation on which your **organic rankings** can grow over time. You also benefit from a complete analytics setup that will allow you to precisely measure the audience generated and make informed decisions about your future marketing actions."
        ],
        clientRequirements: [
          "Your final copy or approval of our proposed content",
          "A list of your priority keywords in your industry",
          "Access to Google Search Console and Analytics if they already exist"
        ],
        agencyWork: [
          "We integrate your text and media with particular attention to semantic hierarchy",
          "We optimize meta tags, Open Graph, Schema.org, and URL structure",
          "We configure Google Analytics 4 and Search Console",
          "We write alt tags and optimize images for Core Web Vitals"
        ]
      },
      {
        title: "Testing",
        description: "Check display (mobile/desktop) and technical functionality (bugs).",
        detailedDescription: [
          "No project leaves our workshop without going through a **rigorous testing protocol**. We simulate real user conditions — varied devices, multiple browsers, degraded connections — to ensure your application delivers a **flawless experience** in every context. Performance, accessibility, and reliability are evaluated with industry-standard tools (Lighthouse, PageSpeed Insights) and results are documented.",
          "The testing phase is also an opportunity to **involve you directly** in the final validation. Your feedback on your own devices, your critical journeys, your forms — everything is reviewed. We fix every issue before launch, **without exception**. You report, we resolve, we deliver an application that works."
        ],
        clientRequirements: [
          "Testing on your primary devices (mobile, tablet, desktop)",
          "Bug reporting via our shared tracking tool",
          "Validation that your critical journeys function correctly"
        ],
        agencyWork: [
          "We conduct cross-browser testing (Chrome, Firefox, Safari, Edge) and cross-device testing (mobile, tablet, desktop)",
          "We run performance tests (Lighthouse, PageSpeed) and fix identified issues",
          "We test all critical journeys and forms",
          "We document every anomaly and ensure it is corrected before delivery"
        ]
      },
      {
        title: "Launch & maintenance",
        description: "Go live and ensure regular updates.",
        detailedDescription: [
          "**Launch** is a strategic moment that requires careful preparation. We handle every aspect of the production deployment — DNS configuration, SSL certificate, server optimization — so your application is accessible, secure, and performant from **the very first second**. The 48 hours following launch are actively monitored by our team, so any anomalies in real conditions are detected and corrected immediately.",
          "Going live is not the end of our commitment — it is the beginning of a **lasting relationship**. We hand over complete access credentials, technical documentation, and the keys to your independence. **Maintenance packages** tailored to your needs ensure your application stays up to date, secure, and high-performing — while you focus on what you do best: your business."
        ],
        clientRequirements: [
          "Access to DNS settings or delegation to your registrar",
          "Availability on launch day",
          "Selection of the desired maintenance package"
        ],
        agencyWork: [
          "We handle DNS, SSL configuration, and production deployment on your hosting provider",
          "We monitor the application for the 48 hours post-launch",
          "We set up uptime alerts and automatic backups",
          "We hand over full access credentials and technical documentation"
        ]
      },
    ],
    stats: [
      { value: "3×", label: "Faster than a traditional agency" },
      { value: "4–6 wks.", label: "Average MVP delivery time" },
      { value: "98%", label: "Clients satisfied at delivery" },
    ],
    faq: [
      {
        q: "How much does it cost to develop an MVP or a SaaS?",
        a: "A functional MVP starts from €3,500. A full SaaS with back-office and authentication is typically between €8,000 and €20,000 depending on complexity. We define a precise scope together before any commitment.",
      },
      {
        q: "Will you be able to maintain and evolve the application after delivery?",
        a: "Yes. We offer monthly maintenance and evolution contracts. You also have the option to take the code in-house: the entire codebase is documented and open.",
      },
      {
        q: "I don't have a written specification — is that a problem?",
        a: "Not at all. Our discovery session (free, 30 min) is enough to lay the foundations. We write the technical brief ourselves based on your business objectives.",
      },
      {
        q: "What is the difference between your approach and a traditional agency?",
        a: "We work with AI agents (Claude Code, Google AI Studio) that multiply our execution speed by 3. But what truly sets us apart from a traditional agency is proximity: you have a single point of contact who knows your project inside out, from the first line of code to launch.",
      },
    ],
  },
  {
    id: 'automatisation-n8n',
    icon: null,
    title: "Automation & n8n Orchestration",
    description: "Not basic 'zaps'. Complex workflow architectures that interconnect your entire stack and eliminate repetitive manual work once and for all.",
    delay: "0.1s",
    fullDescription: "Every hour spent on repetitive tasks is an hour stolen from your core business. We audit your processes, identify bottlenecks, and build robust n8n/Make workflows that run 24/7 without supervision. The result: zero human error, and time freed up for what truly matters.",
    benefits: [
      "Full audit of your current manual processes",
      "Complex, interconnected n8n/Make workflows",
      "CRM, email, calendar, invoicing, Slack integrations...",
      "Monitoring and alerts in case of anomalies",
      "Complete documentation for your team"
    ],
    useCases: ["Automated lead qualification & nurturing", "Automatic invoicing and follow-ups", "Multi-tool synchronization", "Automated reporting", "Email inbox sorting and auto-reply", "Meeting report generation from transcripts", "Daily industry monitoring and AI summaries", "Automated client onboarding (CRM → email → calendar)", "Inter-team alerts and notifications on business events"],
    technologies: ["n8n", "Make", "Airtable", "Notion", "Slack", "Zapier", "Webhooks"],
    processSteps: [
      {
        title: "Process audit",
        description: "Map your manual tasks and identify bottlenecks.",
        detailedDescription: [
          "The process audit is a deep dive into the inner workings of your organization to reveal what is **costing you time, energy, and money** without you being fully aware of it. We interview your teams, observe your real workflows, and model each manual process with surgical precision. What most companies perceive as an unavoidable routine is often, seen from the outside, a **significant automation opportunity**.",
          "At the conclusion of the audit, you receive a **comprehensive report** that translates each bottleneck into a quantified opportunity. You know exactly how many weekly hours are being consumed unnecessarily, what **ROI** you can expect from each automation, and in what order to address them for maximum immediate impact. It is a clear vision that transforms an intuition into a strategy."
        ],
        clientRequirements: [
          "2 hours of availability for an audit workshop with your teams",
          "Observer access to your main tools (CRM, email, etc.)",
          "A list of your most time-consuming manual tasks"
        ],
        agencyWork: [
          "We run an audit workshop with your teams to map all manual processes",
          "We model your current workflows as clear diagrams",
          "We quantify wasted time and calculate the potential ROI of each automation",
          "We deliver a comprehensive audit report with prioritized recommendations"
        ]
      },
      {
        title: "Prioritization",
        description: "Rank automations by ROI impact and technical complexity.",
        detailedDescription: [
          "Not all automations are equal. Some deliver a **spectacular return on investment** within days; others are technically complex for marginal gain. Prioritization is the strategic step that ensures you concentrate your resources where they have the **most impact**. We apply a proven Impact/Effort matrix to rank your opportunities and build a roadmap that creates value from the very first weeks.",
          "You enter the development phase with a **clear plan**, identified **quick wins**, and a medium-term vision for more complex automations. Budget is allocated optimally, expectations are aligned, and every member of your team understands why we are addressing topics in this order. This strategic discipline is what makes the difference between a successful automation project and one that loses focus."
        ],
        clientRequirements: [
          "Approval of the ROI ranking and proposed priorities",
          "Definition of the budget allocated per automation",
          "Decision on the quick wins to address first"
        ],
        agencyWork: [
          "We rank automations using an Impact/Effort matrix to maximize ROI",
          "We present a phased deployment plan with quick wins first",
          "We estimate development time and return on investment for each workflow",
          "We validate priorities with you and adjust the roadmap to your budget"
        ]
      },
      {
        title: "Architecture",
        description: "Design the workflow architecture and connections between tools.",
        detailedDescription: [
          "A poorly designed workflow is **technical debt** that accumulates: it works for a while, then breaks under the weight of edge cases and tool updates. Our architecture phase exists precisely to prevent this scenario. We design workflows that are **robust, documented, and built to last** — with error handling, recovery mechanisms, and business logic that faithfully reflects your operational rules.",
          "Before writing the first node in **n8n**, you have a complete architecture diagram representing every flow, every condition, and every integration point. This documentation becomes an **operational asset**: it simplifies maintenance, eases onboarding of new team members, and serves as a reference for future evolutions. You are investing in something that endures."
        ],
        clientRequirements: [
          "Approval of the workflow architecture before development",
          "API access or credentials for your tools (transmitted securely)",
          "Confirmation of business rules and edge cases to handle"
        ],
        agencyWork: [
          "We design the complete workflow architecture and their interconnections",
          "We select native connectors or develop custom connectors as needed",
          "We define error handling rules and recovery mechanisms",
          "We document the technical architecture before any development begins"
        ]
      },
      {
        title: "n8n Development",
        description: "Build and test workflows in a staging environment.",
        detailedDescription: [
          "Workflow development takes place in an **isolated staging environment**, meaning your production is never disrupted during construction. We build each flow with particular attention to **conditional logic**, data transformations, and error recovery mechanisms — the three pillars of an industrial-grade workflow that can run for months without supervision.",
          "Every workflow is **exhaustively tested** before being presented to you: nominal scenarios, edge cases, simulated errors, high-volume loads. You validate on real data (anonymized if necessary) and we adjust until the behavior is exactly what you expect. **Nothing goes to production** without your explicit approval."
        ],
        clientRequirements: [
          "Real test dataset (anonymized if necessary)",
          "Workflow approval in staging before production deployment",
          "Feedback within 48 hours on tested scenarios"
        ],
        agencyWork: [
          "We build each workflow in an isolated staging environment",
          "We develop conditional logic, loops, and data transformations",
          "We exhaustively test each nominal scenario and error case",
          "We optimize performance and robustness of every flow"
        ]
      },
      {
        title: "Integration",
        description: "Connect workflows to your existing tools (CRM, ERP, email...).",
        detailedDescription: [
          "Production integration is the moment when your automations come into contact with your **real data and processes**. We manage this transition with the utmost care: progressive deployment, step-by-step validation, **enhanced monitoring** during the first days. Every connection to your tools (CRM, ERP, email) is tested under real conditions before switching the entire flow.",
          "Our experience with **complex integrations** allows us to anticipate unexpected behaviors and correct them before they impact your operations. You benefit from a production deployment **without service interruption** and an active monitoring period during which we intervene immediately if necessary. The production switch is transparent for your teams."
        ],
        clientRequirements: [
          "Admin access to your production tools (CRM, ERP...)",
          "Defined deployment window (outside peak hours)",
          "IT contact available if debugging is needed during deployment"
        ],
        agencyWork: [
          "We connect workflows to your production tools following security best practices",
          "We perform a progressive migration with validation at each step",
          "We monitor the first days of operation under real conditions",
          "We immediately fix any unexpected behavior"
        ]
      },
      {
        title: "Monitoring",
        description: "Set up alerts and supervision dashboards.",
        detailedDescription: [
          "A workflow running silently is a workflow whose health you cannot see. The **monitoring** we put in place transforms your automations into transparent, manageable systems: every execution is tracked, every error triggers an **alert**, every metric is visible in real time. You go from a black box to a fully controlled operational system.",
          "Alerts are configured to notify you **only when your intervention is truly necessary** — no unnecessary noise, but guaranteed responsiveness on critical anomalies. The **supervision dashboard** becomes your operational control tower: a glance tells you your processes are running, and a click tells you exactly what happened in case of an incident."
        ],
        clientRequirements: [
          "Definition of acceptable alert thresholds",
          "Designation of an internal contact to receive notifications",
          "Approval of the supervision dashboard"
        ],
        agencyWork: [
          "We configure email and Slack alerts for every potential failure point",
          "We build a real-time supervision dashboard",
          "We set up automatic recovery mechanisms in case of errors",
          "We configure activity logs for complete traceability"
        ]
      },
      {
        title: "Documentation & training",
        description: "Train your teams and deliver complete workflow documentation.",
        detailedDescription: [
          "The value of an automation does not stop at its technical functioning: it must be **understood, maintained, and adapted** by your team without permanent dependency on our presence. The documentation we deliver is designed for operational staff, not engineers: clear, illustrated, **use-case oriented**. It answers the questions your team members will have six months from now.",
          "The **hands-on training session** we run is calibrated to the actual level of your teams and focused on your concrete use cases, not on theory. At the end of the session, your internal point of contact can adjust common settings, understand an alert, and reach out to our support team meaningfully. You remain **in control of your system**, with us as your safety net."
        ],
        clientRequirements: [
          "Team availability for the training session (2 to 3 hours)",
          "Designation of an internal point of contact for routine maintenance",
          "Approval of the delivered documentation before project close"
        ],
        agencyWork: [
          "We write complete documentation for each workflow (logic, triggers, edge cases)",
          "We run a hands-on training session adapted to your team's level",
          "We create visual guides for common operations",
          "We remain available for 30 days post-delivery to answer your questions"
        ]
      },
    ],
    stats: [
      { value: "20h", label: "Saved on average every week" },
      { value: "0", label: "Human errors on automated processes" },
      { value: "+400", label: "Possible SaaS connections (Notion, Airtable, CRM, Slack…)" },
    ],
    faq: [
      {
        q: "What is the difference between n8n and tools like Zapier?",
        a: "Zapier is excellent for simple automations (if A then B). n8n enables far more complex architectures: loops, multiple conditions, data transformations, error handling, and can be self-hosted for privacy reasons.",
      },
      {
        q: "What happens if a workflow crashes or encounters an error?",
        a: "We systematically configure alerts (email, Slack) and automatic recovery mechanisms. A supervision dashboard gives you real-time visibility across all your flows.",
      },
      {
        q: "Do I need technical skills to use the delivered workflows?",
        a: "No. We design robust workflows and document everything. A hands-on training session is included at delivery. For minor changes, a visual interface allows you to act without touching the code.",
      },
      {
        q: "Can n8n connect to our specific business software?",
        a: "In the vast majority of cases, yes. n8n supports over 400 native integrations. For software without an official connector, we use their API or webhooks to build a custom connection.",
      },
    ],
  },
  {
    id: 'contenu-marketing-ia',
    icon: null,
    title: "AI Content Creation & Marketing",
    description: "Your marketing engine: automated newsletters, social media, AI-generated visuals, sales funnels. An omnipresent brand presence without mobilizing your teams.",
    delay: "0.2s",
    fullDescription: "Content is king, but producing it takes an enormous amount of time. We automate your content machine: personalized newsletters, AI-generated and automatically published social media posts, AI visuals consistent with your brand guidelines, conversion funnels. Your brand is everywhere, your team stays focused on its core business.",
    benefits: [
      "Automated newsletters personalized by segment",
      "AI editorial calendar for social media",
      "Consistent AI-generated visuals (Midjourney, Flux, DALL-E)",
      "Sales funnels and email automation sequences",
      "Monthly content ROI reporting"
    ],
    useCases: ["B2B/B2C marketing automation", "Executive personal branding", "Product launches", "SEO content strategy"],
    technologies: ["NanoBana Pro", "NotebookLM", "Google AI Studio", "Claude Code", "Kling AI"],
    processSteps: [
      {
        title: "Brand audit",
        description: "Analyze your positioning, target audiences, and existing brand guidelines.",
        detailedDescription: [
          "Before producing a single piece of content, we take the time to understand what makes your brand **unique** and what truly distinguishes it from competitors. This audit is not an administrative formality: it is a deep-dive that examines your **positioning**, the consistency of your current communication, and the perception you create in the minds of your target audiences. The insights we draw from it shape the entire **editorial strategy** that follows.",
          "The audit report you receive is a **strategic compass**: it shines a light on the strengths to amplify, the inconsistencies to correct, and the opportunities your competitors have not yet seized. It is on this documented foundation that we build together a content strategy that makes sense for your brand and delivers **measurable results** for your business."
        ],
        clientRequirements: [
          "Access to your existing communications materials",
          "Your brand guidelines and editorial style guide",
          "A description of your ideal customer and personas"
        ],
        agencyWork: [
          "We conduct an in-depth analysis of your positioning, existing content, and competitors",
          "We define your target personas with their challenges and preferred channels",
          "We evaluate the consistency of your current visual and editorial identity",
          "We deliver an audit report with priority strategic recommendations"
        ]
      },
      {
        title: "Editorial strategy",
        description: "Define themes, formats, and frequencies suited to each channel.",
        detailedDescription: [
          "A **solid editorial strategy** is the difference between a coherent digital presence that builds an audience and an exhausting content production effort that leads nowhere. We build your editorial calendar over 3 months with a thematic logic, **formats adapted to each channel**, and a realistic publication frequency that can be sustained over time — without sacrificing quality for quantity.",
          "The **editorial line** we define becomes the reference guide for all content produced under your name, whether AI-generated or written manually. Tone, vocabulary, topics to address and those to avoid, preferred calls to action — everything is documented with precision to guarantee a **consistent brand voice** across all your channels and over time."
        ],
        clientRequirements: [
          "Approval of the editorial calendar and proposed themes",
          "Definition of priority distribution channels",
          "Monthly budget allocated to distribution tools"
        ],
        agencyWork: [
          "We build your 3-month editorial calendar with themes, formats, and frequencies",
          "We write the editorial line and tone guide for each channel",
          "We select the highest-performing formats for your industry",
          "We define content KPIs and measurement methods"
        ]
      },
      {
        title: "AI setup",
        description: "Configure AI models and content generation pipelines.",
        detailedDescription: [
          "The AI setup is the technical step that transforms your brand parameters into **operational instructions** for the generation models. We do not simply plug in a generic model: we configure it with your identity, your lexicon, your values, and your constraints to produce content that sounds **authentically like you** — not like an AI imitating a generic brand.",
          "The **master prompts** we build are the result of meticulous engineering work, tested on real examples and validated with you before any industrialization. They become an **intellectual asset** of your company: reusable, adaptable, and transmissible to your team. The content machine is ready to run at the speed and scale your ambitions demand."
        ],
        clientRequirements: [
          "Examples of content you like (tone, style, format)",
          "Approval of master prompts before industrialization",
          "Access to existing AI subscriptions if already in place"
        ],
        agencyWork: [
          "We configure AI models (Claude, GPT-4, Midjourney) with your brand parameters",
          "We build master prompts rooted in your identity and tested on real examples",
          "We set up the generation, review, and approval pipeline",
          "We create base templates for each content format"
        ]
      },
      {
        title: "Template creation",
        description: "Produce reusable visual templates and master prompts.",
        detailedDescription: [
          "**Templates** are the invisible infrastructure that makes your content production both fast and consistent. We design a library of **visual templates** adapted to each format and network — LinkedIn carousels, Instagram stories, newsletter banners, article visuals — in perfect alignment with your brand guidelines. Every template is designed to be endlessly remixed without losing its impact.",
          "The validation of the **first pilot content** is an essential moment of dialogue: it is the opportunity to refine anything that does not quite match your vision before industrializing production. We incorporate your feedback with precision and deliver a **clear usage guide** so your team can adopt the tools with full autonomy. You inherit a ready-to-use editorial infrastructure."
        ],
        clientRequirements: [
          "Approval of the first visuals and templates (2 cycles included)",
          "Feedback on the editorial tone of pilot content",
          "Decision on priority formats (carousel, video, article...)"
        ],
        agencyWork: [
          "We produce a library of Canva/Figma visual templates consistent with your brand",
          "We create image generation prompts adapted to each format and social network",
          "We produce the first pilot content for validation",
          "We deliver the template usage guide for your team"
        ]
      },
      {
        title: "Automation & distribution",
        description: "Connect publishing tools and automate the editorial calendar.",
        detailedDescription: [
          "Distribution automation is the moment when your **content machine becomes truly autonomous**. We connect your publishing tools — Buffer, Brevo, Mailchimp — into a seamless pipeline that goes from content generation all the way to publication on the right channels, at the right time, **without any manual intervention** on your part. Your teams are freed from the operational burden of distribution to focus on strategy.",
          "The **automated email sequences** and conversion funnels we deploy transform your audience into an active commercial pipeline. Every new contact enters a **personalized journey** that intelligently nurtures them according to their behavior and profile. Before going live, the entire chain is tested end-to-end to guarantee seamless distribution from day one."
        ],
        clientRequirements: [
          "Admin access to your social media accounts and email tools",
          "Approval of the automated publication calendar",
          "Definition of a validation process if desired"
        ],
        agencyWork: [
          "We configure planning and automatic publishing tools (Buffer, Brevo, Mailchimp)",
          "We build generation → review → publication workflows",
          "We set up automated email sequences and conversion funnels",
          "We test the entire distribution chain before going live"
        ]
      },
      {
        title: "Testing & validation",
        description: "Validate tone, visual consistency, and quality on each channel.",
        detailedDescription: [
          "The testing and validation phase is the **safeguard that protects your brand reputation**. Before letting the machine run autonomously, we submit the first batches of content to your critical eye and measure the **engagement** they generate. Every piece of feedback you provide is a valuable signal that refines the calibration of the models and strengthens the consistency of your editorial voice.",
          "We meticulously verify that content published on each channel respects its **specific codes** — what works on LinkedIn is not what performs on Instagram — while maintaining an overall **brand consistency**. It is this dual requirement, channel adaptation and brand coherence, that guarantees a professional and impactful digital presence."
        ],
        clientRequirements: [
          "Review and approval of the first pilot content",
          "Detailed feedback on what does not match your brand voice",
          "Sign-off before the automated chain goes to production"
        ],
        agencyWork: [
          "We submit the first content batches for your approval before any publication",
          "We measure engagement on pilot content and adjust parameters",
          "We verify visual and editorial consistency across all channels",
          "We revise prompts and templates based on your feedback"
        ]
      },
      {
        title: "Reporting & iteration",
        description: "Analyze performance and optimize content every month.",
        detailedDescription: [
          "The **monthly report** is far more than a table of figures: it is a strategic steering moment where data guides the editorial decisions of the following month. We analyze the performance of each format, channel, and topic to identify what **resonates most** with your audience and amplify the content that creates the greatest engagement and conversion.",
          "**Continuous iteration** is the secret of content strategies that improve month after month instead of stagnating. Every analysis feeds concrete adjustments: refined prompts, rebalanced frequencies, emerging formats integrated. You benefit from a living strategy, **driven by data** and oriented toward your business objectives, not vanity metrics."
        ],
        clientRequirements: [
          "Sharing your growth objectives (followers, reach, leads)",
          "Monthly availability of 45 min for the performance review",
          "Approval of proposed strategy adjustments"
        ],
        agencyWork: [
          "We produce a monthly performance report with key metrics for each channel",
          "We analyze the best-performing content and amplify its format",
          "We adjust the editorial strategy based on real data",
          "We proactively propose new content opportunities"
        ]
      },
    ],
    stats: [
      { value: "10×", label: "More content produced at the same cost" },
      { value: "×5", label: "More formats produced from a single source piece" },
      { value: "0h", label: "Of manual writing for your team" },
    ],
    faq: [
      {
        q: "Will AI-generated content sound like AI?",
        a: "Not if done properly. We build master prompts rooted in your brand identity (tone, vocabulary, values) and systematically reviewed. The goal is content that sounds like you, produced faster.",
      },
      {
        q: "How do you ensure visual consistency with our brand guidelines?",
        a: "We create AI-specific style guides for your brand: color palettes, moods, visual references. Every visual is generated with these parameters, ensuring brand consistency across all channels.",
      },
      {
        q: "Can we maintain editorial control over what is published?",
        a: "Absolutely. We can set up a validation workflow where every piece of content goes through you before publication. Production speed does not come at the cost of your control.",
      },
      {
        q: "What is the minimum investment for an AI content strategy?",
        a: "A complete setup (strategy + tools + templates + training) starts at around €2,500. Monthly management is then offered as a retainer from €800/month depending on volumes.",
      },
    ],
  },
  {
    id: 'ia-agents-rag',
    icon: null,
    title: "Artificial Intelligence & RAG Agents",
    description: "Transform your dormant knowledge into an instant interactive resource. AI chatbots on your data, autonomous agents, generative AI integration into your products.",
    delay: "0.3s",
    fullDescription: "Generic AI doesn't know your business. We build RAG (Retrieval-Augmented Generation) systems trained on your proprietary data: internal documentation, knowledge bases, customer history. The result: AI assistants that respond with the precision of a domain expert, available 24/7.",
    benefits: [
      "RAG AI chatbot on your internal documentation",
      "Autonomous agents for lead qualification or support",
      "AI integration into your existing products (API)",
      "Expert fine-tuning and prompt engineering",
      "GDPR compliance: data hosted in Europe"
    ],
    useCases: ["AI customer support levels 1 & 2", "Intelligent sales assistant", "Dynamic FAQ on your products", "Automatic document analysis"],
    technologies: ["ChatGPT", "Claude", "Gemini", "Supabase", "Pinecone", "RAG", "PostgreSQL"],
    processSteps: [
      {
        title: "Data audit",
        description: "Inventory and qualify your document sources (PDFs, databases, wikis...).",
        detailedDescription: [
          "The quality of a **RAG** system is directly proportional to the quality of the data feeding it. The **document audit** is therefore the founding step of the project: we inventory all your information sources — PDFs, internal wikis, databases, archived emails, transcripts — and evaluate their freshness, completeness, and relevance for the target use cases. A poorly structured or outdated document in the vector database generates **incorrect answers**; we identify and treat it before any ingestion.",
          "The audit report we deliver provides an accurate picture of your **documentary capital** and defines the optimal ingestion plan: which sources to process first, which require prior restructuring, and which data to exclude to **protect the quality of answers**. You enter the architecture phase with a clear view of what your agent will — and will not — be able to answer."
        ],
        clientRequirements: [
          "Inventory of your document sources (PDFs, wikis, databases...)",
          "Assessment of the quality and freshness of your documents",
          "Definition of data perimeters authorized for the AI"
        ],
        agencyWork: [
          "We inventory and qualify all your document sources (PDFs, databases, wikis)",
          "We evaluate the quality, freshness, and completeness of your data",
          "We identify documents to clean, restructure, or exclude",
          "We deliver a document audit report with the ingestion plan"
        ]
      },
      {
        title: "RAG architecture",
        description: "Design the vector indexing and retrieval pipeline suited to your needs.",
        detailedDescription: [
          "The **RAG architecture** is the technical choice that determines the performance, precision, and scalability of your AI agent. It is not a trivial decision: the **embedding model**, document segmentation strategy, chosen vector database, and generation model must be selected in coherence with your use cases, data volume, and **privacy constraints**. A poor architecture translates into hallucinations and disappointing performance.",
          "We document the complete architecture before any development and present it to you in accessible language, explaining the **trade-offs made** and their operational consequences. You understand what you are building and why. This transparency is essential for a system that you will need to **maintain and evolve** over time."
        ],
        clientRequirements: [
          "Approval of the proposed technical architecture",
          "Choice of confidentiality level (cloud vs. on-premise)",
          "Definition of the agent's priority use cases"
        ],
        agencyWork: [
          "We design the complete pipeline architecture: ingestion, vectorization, retrieval, generation",
          "We choose embedding and generation models suited to your use case",
          "We select the vector database (Pinecone, ChromaDB, Supabase) according to your constraints",
          "We document the architecture before development for validation"
        ]
      },
      {
        title: "Ingestion & vectorization",
        description: "Transform your data into vectors and store them in the vector database.",
        detailedDescription: [
          "**Vectorization** of your documents is the process by which your organizational knowledge becomes queryable by AI. We develop custom extraction pipelines for each source type — because a contract PDF, a Notion page, and a SQL database are not processed the same way. **Intelligent document segmentation** is particularly critical: too short, and the chunk loses its context; too long, and it dilutes retrieval precision.",
          "The **incremental update** mechanism we put in place ensures your vector database stays synchronized with the evolution of your source documents. When you add a new product to your catalog, publish a new internal policy, or update your technical documentation, the agent is notified **automatically**. Your RAG system is alive, not frozen at the moment of its deployment."
        ],
        clientRequirements: [
          "Provision of source documents in agreed formats",
          "Validation of metadata and classification categories",
          "Access to source systems if direct ingestion is required"
        ],
        agencyWork: [
          "We develop extraction and cleaning pipelines for each source type",
          "We intelligently segment your documents for optimal retrieval",
          "We generate embeddings and index them in the vector database",
          "We set up incremental updates to keep the database current"
        ]
      },
      {
        title: "Prompt engineering",
        description: "Write and refine system instructions for precise, reliable answers.",
        detailedDescription: [
          "**Prompt engineering** is the craft that makes the difference between an agent that answers correctly and one that answers with the precision, tone, and boundaries your context demands. The **system instructions** define your agent's personality, its scope of competence, its behavior when faced with off-topic questions, and how it cites its sources. This meticulous calibration work is what transforms a generic language model into an **expert in your domain**.",
          "We test and refine prompts against a broad panel of **real questions**, representative of what your users will actually ask. Every unsatisfactory behavior is analyzed, understood, and corrected by a precise adjustment of the instructions. You participate in this validation phase; your feedback is the compass that guides the **final calibration**. The agent you receive in production is the result of dozens of invisible iterations."
        ],
        clientRequirements: [
          "Precise description of the expected agent behavior",
          "Examples of ideal question-answer pairs in your domain",
          "Approval of system instructions before the testing phase"
        ],
        agencyWork: [
          "We write the system instructions that define the agent's behavior, tone, and limits",
          "We develop prompt chains for complex scenarios",
          "We test and refine prompts against a broad panel of real questions",
          "We document each prompt engineering choice for maintainability"
        ]
      },
      {
        title: "Agent development",
        description: "Build the AI agent, its tools, and connectors to your systems.",
        detailedDescription: [
          "Agent development goes far beyond connecting to a language model. We build a **complete application architecture**: the tools the agent can use (vector database search, API calls, ticket creation, email sending), the routing logic that decides which tool to use based on context, and the **safety guardrails** that prevent unwanted behaviors.",
          "The interface through which your users will interact with the agent is **adapted to your usage context**: a widget embedded on your website, an API consumable by your internal applications, a Slack bot for your teams, or a dedicated interface. We handle the integration end-to-end, including **authentication**, session management, and **interaction logs** that allow you to audit conversations and improve the system over time."
        ],
        clientRequirements: [
          "API access to systems to connect (CRM, helpdesk...)",
          "Definition of authorized actions and agent limits",
          "Designation of a technical point of contact for integrations"
        ],
        agencyWork: [
          "We develop the AI agent with its tools, connectors, and routing logic",
          "We integrate the agent with your existing systems via secure APIs",
          "We implement safety guardrails and content filters",
          "We set up the user interface adapted to your context (widget, API, Slack...)"
        ]
      },
      {
        title: "Testing & evaluation",
        description: "Measure answer relevance and correct hallucinations.",
        detailedDescription: [
          "Evaluating a RAG system is a **rigorous discipline** that goes far beyond a few manually posed questions. We build a **representative benchmark** of your real use cases and objectively measure the precision rate, retrieval relevance, **residual hallucinations**, and response latency. These metrics give us a quantified view of system quality and guide necessary adjustments.",
          "Your participation in this phase is invaluable: you are the **best judge** of answer relevance in your domain. We run structured user testing sessions and systematically document every unsatisfactory response to understand its root cause — retrieval issue, insufficient prompt, **missing source data** — and correct it at the source. You receive a system whose limitations are known and documented, not hidden."
        ],
        clientRequirements: [
          "Participation in user testing sessions",
          "A set of representative questions from your real use cases",
          "Reporting of incorrect or insufficient answers"
        ],
        agencyWork: [
          "We evaluate answer relevance against a benchmark of representative questions",
          "We measure precision rate, residual hallucinations, and latency",
          "We adjust retrieval parameters and prompts based on results",
          "We document the system's known limitations for informed use"
        ]
      },
      {
        title: "Deployment & compliance",
        description: "Deploy on European infrastructure and validate GDPR compliance.",
        detailedDescription: [
          "Deploying an AI system in production is an act that engages the **responsibility of your company**, particularly when it involves personal or sensitive data. We manage the entire production deployment on **European infrastructure** — data encryption in transit and at rest, strict access controls, interaction logging — to guarantee a level of security and compliance appropriate to your regulatory obligations.",
          "**GDPR compliance** is not a box to check after the fact: it is integrated into the architecture from the design stage. We conduct the compliance audit, draft the appropriate **legal notices**, and support you in writing processing register entries if your DPO requires it. You deploy a system whose legal and operational implications you fully understand and control."
        ],
        clientRequirements: [
          "Approval of the data policy and GDPR compliance",
          "Access to your DPO's processing register if applicable",
          "Definition of the source data update process"
        ],
        agencyWork: [
          "We deploy on European infrastructure (AWS Paris or OVH) with end-to-end encryption",
          "We conduct the GDPR compliance audit and draft appropriate legal notices",
          "We configure access logs and production monitoring",
          "We transfer full access credentials and train your team on maintenance"
        ]
      },
    ],
    stats: [
      { value: "24/7", label: "Availability without interruption" },
      { value: "92%", label: "RAG answer precision rate" },
      { value: "−65%", label: "Of support tickets handled by humans" },
    ],
    faq: [
      {
        q: "What exactly is RAG and why is it better than standard ChatGPT?",
        a: "RAG (Retrieval-Augmented Generation) means the AI first searches YOUR data before answering. Instead of making up answers (hallucinations), it cites verified sources from your documents. It's the difference between an intern and an expert who knows your file inside out.",
      },
      {
        q: "Is our data secure? What about GDPR?",
        a: "Yes. All infrastructure is hosted in Europe (AWS Paris or OVH servers). Your data never passes to third parties without your consent. We can also deploy fully on-premise if necessary.",
      },
      {
        q: "What types of documents can the system ingest?",
        a: "PDFs, Word, Excel, web pages, SQL databases, Notion, Confluence, emails, audio transcripts... Virtually any structured or semi-structured source can be indexed.",
      },
      {
        q: "How long does it take to deploy a first operational agent?",
        a: "A first functional prototype is typically delivered in 2 to 3 weeks. Full production deployment with testing and compliance takes an average of 4 to 6 weeks depending on data volume.",
      },
    ],
  },
  {
    id: 'conseil-formation',
    icon: null,
    title: "Consulting & Training",
    description: "A strategic partner who audits your organization, trains your teams, and ensures genuine adoption of the technologies deployed.",
    delay: "0.4s",
    fullDescription: "The most advanced technology is worthless if your teams don't adopt it. We support you from the strategic audit all the way to training your staff. A long-term relationship built on trust, not a project delivered and forgotten.",
    benefits: [
      "Strategic AI & digital audit of your organization",
      "Team training on deployed tools",
      "Hands-on workshops and skills development",
      "Technology watch and proactive recommendations",
      "Documentation and post-training support"
    ],
    useCases: ["Digital transformation audit", "AI training for SMEs", "CDO as a Service", "Executive team workshops"],
    technologies: ["AI", "Google Workspace", "Cloud", "Automation", "Graphics", "Branding"],
    processSteps: [
      {
        title: "Initial diagnosis",
        description: "Assess your organization's digital maturity and identify priorities.",
        detailedDescription: [
          "The **initial diagnosis** is the starting point of any successful transformation. Too often, companies invest in new tools without having precisely assessed their **current maturity** or their real needs. We bridge this gap by conducting a structured analysis of your organization: existing technology stack, digital practices of your teams, formal and informal processes, and positioning relative to **your industry benchmarks**.",
          "At the end of the diagnosis, you have a **clear and objective snapshot** of your current situation — with the strengths to preserve and the blind spots to address. This documented foundation is indispensable for prioritizing actions with relevance and avoiding investment in solutions poorly suited to your actual context. It is the first act of a transformation based on **facts, not assumptions**."
        ],
        clientRequirements: [
          "2 hours of availability for the diagnostic interview",
          "Observer access to your digital tools",
          "Description of your main current organizational challenges"
        ],
        agencyWork: [
          "We conduct a structured diagnostic interview with your leadership and key teams",
          "We analyze your current technology stack and identify redundancies and gaps",
          "We benchmark your digital maturity against the standards of your industry",
          "We deliver a concise diagnostic with priority action areas"
        ]
      },
      {
        title: "Needs mapping",
        description: "Interview teams and document current usage, blockers, and expectations.",
        detailedDescription: [
          "The true needs of an organization are not always those that leadership expresses first. They live in the **daily frustrations** of operational teams, in the workarounds cobbled together for lack of adequate tools, in the grievances expressed during individual interviews. We go and find these insights where they live: in **direct contact with the people** who do the work every day.",
          "The mapping we deliver translates these qualitative testimonials into a **structured model** of workflows and friction points. This shared document — validated by your teams themselves — creates the **consensus necessary** for any transformation: when staff members recognize their own reality in the analysis, they adopt the proposed solutions far more naturally."
        ],
        clientRequirements: [
          "Availability of key team members for short interviews (30 min)",
          "A list of tools currently used per team",
          "A map of main processes if already documented"
        ],
        agencyWork: [
          "We conduct individual interviews with key team members (30 min each)",
          "We run group workshops to identify blockers and expectations",
          "We model current workflows and friction points",
          "We synthesize needs in a shared document validated by your teams"
        ]
      },
      {
        title: "Roadmap",
        description: "Prioritize actions and define a realistic transformation plan.",
        detailedDescription: [
          "A **digital transformation** without a rigorous roadmap quickly becomes a succession of isolated projects that do not reinforce one another. We build a coherent transformation plan that sequences initiatives in a logical order — **foundations before superstructures** — taking into account your capacity to absorb change, your budget constraints, and your strategic deadlines.",
          "We present **multiple transformation scenarios** — minimal, recommended, ambitious — with their respective impacts on your teams, budget, and timelines. This scenario-based approach gives you the flexibility to choose the **level of ambition** suited to your context, with full visibility into what you give up depending on the option selected. You make an informed decision, not a bet."
        ],
        clientRequirements: [
          "Approval of the proposed priorities and budget trade-offs",
          "Confirmation of the desired transformation timeline",
          "Identification of internal project sponsors"
        ],
        agencyWork: [
          "We build a prioritized transformation plan with objectives, timelines, and budgets",
          "We present multiple scenarios (minimal, recommended, ambitious) with their impacts",
          "We define measurable success indicators for each initiative",
          "We adjust the roadmap based on your feedback to make it realistic and actionable"
        ]
      },
      {
        title: "Tool selection",
        description: "Recommend solutions suited to your context and budget.",
        detailedDescription: [
          "The digital tools market is saturated with solutions that all promise to **revolutionize the way you work**. Our role is to protect you from this noise and guide you toward solutions that genuinely fit your context — team size, technical constraints, budget, **GDPR compliance**, existing integrations. We evaluate options with the same criteria as if we were investing our own money.",
          "The **comparative demos** we conduct allow you to see solutions in action on your own use cases, not on marketing scenarios. Our **final recommendation** is argued, documented, and accompanied by a risk analysis of each option. You make the final decision with full knowledge of the facts, advised by an expert with no commercial interest in steering you toward any particular solution."
        ],
        clientRequirements: [
          "Technical constraints to respect (hosting, existing integrations)",
          "Annual budget allocated to new tools",
          "Final decision on the selected solutions"
        ],
        agencyWork: [
          "We evaluate market solutions against your specific criteria (budget, integrations, GDPR)",
          "We conduct comparative demos of shortlisted solutions",
          "We negotiate pricing terms with vendors if relevant",
          "We write the decision brief with the argued recommendation"
        ]
      },
      {
        title: "Custom training",
        description: "Run hands-on workshops adapted to each team's level.",
        detailedDescription: [
          "The training we design is not a generic course on a tool: it is a **pedagogical program rooted in your real use cases**, adapted to the level of each group, and designed to generate **lasting reflexes** rather than ephemeral theoretical knowledge. We start from concrete situations that your staff live through every day and show how the new tools transform them immediately.",
          "The materials we produce — illustrated guides, Loom videos, quick reference sheets — are designed to **outlast the training session**. Your team members can consult them six months later when they need a refresher, without needing to reach out. The **training investment** thus generates value well beyond the initial session."
        ],
        clientRequirements: [
          "Team availability on agreed training time slots",
          "Access to usual computers and workstations",
          "Designation of an internal relay for post-training questions"
        ],
        agencyWork: [
          "We design a custom training program adapted to each group's level",
          "We run hands-on workshops on your tools and real use cases",
          "We create reusable training materials (guides, Loom videos, quick-reference sheets)",
          "We assess progression and adapt the pace in real time"
        ]
      },
      {
        title: "On-the-ground support",
        description: "Be present during the first weeks of adoption to remove blockers.",
        detailedDescription: [
          "The **first weeks of adoption** are the most critical: this is where good habits form or old ones reassert themselves. Our on-the-ground support during this period is what makes the difference between training that generates **lasting adoption** and training that is forgotten after a few days back at the desk. We are available, reactive, and proactive in removing every blocker as it appears.",
          "This close follow-up also allows us to identify **necessary readjustments** in real time: if certain team members need more support on a specific point, if a tool does not exactly meet the identified need, if new questions emerge from real usage. We document the **best practices** that emerge organically to transform them into shared standards within your team."
        ],
        clientRequirements: [
          "Availability for short weekly check-ins (15 to 30 min)",
          "Reporting of blockers encountered in real use",
          "Openness to adjusting the program if necessary"
        ],
        agencyWork: [
          "We are available for short weekly check-ins to remove blockers",
          "We answer your team's questions via a dedicated channel (Slack or email)",
          "We adjust the training program if certain points require more time",
          "We document emerging best practices to sustain adoption"
        ]
      },
      {
        title: "Review & follow-up",
        description: "Measure adoption, adjust the program, and plan ongoing monitoring.",
        detailedDescription: [
          "The **30- and 90-day review** is the moment of truth: objectively measured adoption indicators tell us what is working, what is resisting, and what deserves reinforcement. This rigor in evaluation is what distinguishes serious support from a mere training service: we take **responsibility for the results** and adjust our program if the objectives are not met.",
          "The review is also an opportunity to identify **new optimization opportunities** that only real usage can reveal. Users develop creative applications we had not anticipated, or express new needs that open up avenues for evolution. This field feedback feeds a **targeted technology watch** that we proactively share with you to keep you ahead of your industry."
        ],
        clientRequirements: [
          "Collection of the adoption indicators defined upstream",
          "Participation in the 30- and 90-day reviews",
          "Decision on what comes next: additional program or full autonomy"
        ],
        agencyWork: [
          "We measure the adoption indicators defined upstream and compare against objectives",
          "We conduct a structured review at 30 and 90 days with adjustment recommendations",
          "We identify new optimization opportunities revealed by real usage",
          "We propose a technology watch plan to anticipate future developments"
        ]
      },
    ],
    stats: [
      { value: "85%", label: "Real adoption rate at 3 months" },
      { value: "4.9/5", label: "Average training satisfaction score" },
      { value: "+2 days", label: "Recovered per month per team member" },
    ],
    faq: [
      {
        q: "Our team is not technical. Are the training sessions accessible?",
        a: "That is precisely our specialty. We adapt the level of each workshop to the participants' profile. No technical prerequisites are required — we start from your daily tasks and progress at your pace.",
      },
      {
        q: "What does a strategic AI audit actually include?",
        a: "The audit covers 4 areas: your business processes (bottlenecks and opportunities), your existing tools (redundancies and gaps), the digital maturity of your teams, and a benchmark against your competitors. It concludes with a prioritized, costed roadmap.",
      },
      {
        q: "Can we engage you on a one-off basis without a long-term commitment?",
        a: "Yes. We offer à la carte engagements: a day-long audit, a single training workshop, or a series of sessions. Ongoing support (CDO as a Service) is an option, not a requirement.",
      },
      {
        q: "How do you measure the effectiveness of the training?",
        a: "We define measurable adoption indicators with you before the training begins (e.g. % tool usage, average time on a task). A 30- and 90-day review is included in every program.",
      },
    ],
  },
  {
    id: 'pilotage-continu',
    icon: null,
    title: "Continuous Management",
    description: "Monthly monitoring of your digital KPIs, ongoing optimization, and priority access to guarantee lasting performance and controlled growth.",
    delay: "0.5s",
    fullDescription: "A live dashboard, real-time adjustments, and a dedicated point of contact every month. We steer your digital indicators, identify growth levers, and iterate continuously to maximize your ROI — without ever losing sight of your business objectives.",
    benefits: [
      "Monthly KPI management and custom dashboards",
      "Continuous optimization of workflows and automations",
      "Detailed ROI reporting and iteration recommendations",
      "Priority access for new features and enhancements",
      "Monthly review meeting with actionable minutes"
    ],
    useCases: ["Monthly digital retainer", "Continuous ROI optimization", "Marketing performance", "AI operational supervision"],
    technologies: ["Maintenance", "Mises à jour", "Datalog", "Analytique", "Monitoring"],
    processSteps: [
      {
        title: "KPI definition",
        description: "Identify with you the key indicators that reflect your business objectives.",
        detailedDescription: [
          "**KPIs** only have value if they faithfully reflect what truly matters for your business. Too often, dashboards are filled with **vanity metrics** — visitors, impressions, open rates — that provide reassurance without guiding decisions. We work with you to identify the 5 to 8 indicators that have a direct connection to your **revenue, retention, or operational efficiency**.",
          "The **KPI reference framework** we deliver at the end of this workshop becomes the compass for all ongoing management: every action we recommend, every optimization we propose, every decision you make is evaluated against these indicators. You finally steer with numbers that mean something, not with dashboards that impress **but don't guide**."
        ],
        clientRequirements: [
          "A list of your business objectives for the next 6 to 12 months",
          "Access to your existing data (GA, CRM, accounting...)",
          "Approval of the selected KPIs and their numeric targets"
        ],
        agencyWork: [
          "We run a KPI definition workshop aligned with your strategic objectives",
          "We select the most relevant metrics from your tool stack",
          "We set realistic and ambitious monthly and quarterly targets",
          "We deliver the documented KPI reference framework that serves as the management compass"
        ]
      },
      {
        title: "Tracking setup",
        description: "Configure analytics tools and centralize data sources.",
        detailedDescription: [
          "Management can only be reliable if the **data feeding it** is equally reliable. Tracking setup is a fundamental technical step that ensures every KPI measured accurately reflects the **reality of your activity** — without duplicates, gaps, or bias from a flawed configuration. We audit your existing tag plan, fix anomalies, and implement **robust, exhaustive data collection**.",
          "The **centralization** of all your data sources — analytics, CRM, advertising, sales, support — into a single repository is what makes management truly powerful. You no longer need to juggle six tools to understand your business performance: **everything is visible in one place**, consistent and updated in real time. The automatic alerts we configure notify you immediately when an indicator deviates from its trajectory."
        ],
        clientRequirements: [
          "Admin access to your analytics tools and data sources",
          "Approval of the proposed tag plan",
          "Deployment window with no impact on your activity"
        ],
        agencyWork: [
          "We configure the tag plan on your site and tools",
          "We connect all your data sources (GA4, CRM, advertising, sales)",
          "We verify the quality of collected data and fix anomalies",
          "We set up automatic alerts in case of deviation"
        ]
      },
      {
        title: "Custom dashboard",
        description: "Build your live dashboard, accessible in real time.",
        detailedDescription: [
          "A good **dashboard** is one your teams consult with interest every morning, not one that collects dust after three weeks of use. We design your dashboard starting from your **actual usage**: who consults it, how often, to make what decisions. Visual clarity, information hierarchy, and **navigational fluidity** transform raw data into actionable insights.",
          "The dashboard we build in **Looker Studio** or Metabase is organized into views adapted to each profile — operational view for your teams, executive summary for leadership, detailed view for marketing. It **refreshes automatically** and is accessible to all authorized users from any device. Your team members are trained to read and interpret it from day one."
        ],
        clientRequirements: [
          "Approval of the displayed views and indicators",
          "Designation of dashboard users",
          "Feedback on preferred ergonomics and visualizations"
        ],
        agencyWork: [
          "We build your dashboard in Looker Studio or Metabase",
          "We organize views by profile (operational, executive, marketing team)",
          "We configure automatic refresh and multi-user access",
          "We train your teams to read and interpret the data"
        ]
      },
      {
        title: "Monthly review",
        description: "Analyze results, gaps, and opportunities together.",
        detailedDescription: [
          "The **monthly review** is the strategic meeting that transforms data into decisions. We do not submit a report of figures — we facilitate a **structured conversation** around your results, gaps relative to objectives, and opportunities the data reveals. Every meeting concludes with **2 to 3 clear priority actions**, a designated owner, and a deadline. Nothing stays vague.",
          "The **preparatory report** we deliver before each meeting allows you to arrive with an already-formed perspective on the key points, without losing time reading cold during the session. This respect for your time is a hallmark of our commitment to **effective collaboration**. In 45 to 60 minutes per month, you have a complete view of your digital performance and a clear direction for the following month."
        ],
        clientRequirements: [
          "Monthly availability of 1 hour for the performance review",
          "Reading the preparatory report before the meeting",
          "Approval or adjustment of next month's objectives"
        ],
        agencyWork: [
          "We prepare a structured report: results vs. objectives, highlights, recommendations",
          "We facilitate the monthly review meeting (45 to 60 min) with a precise agenda",
          "We contextualize figures relative to industry trends",
          "We define together the 2–3 priority actions for the following month"
        ]
      },
      {
        title: "Optimizations",
        description: "Adjust workflows, campaigns, and automations based on data.",
        detailedDescription: [
          "**Continuous optimization** is the engine of sustainable growth. Every month, performance data reveals levers we could not have identified without sufficient historical data: a **conversion page** underperforming, a more responsive audience segment, a workflow whose timing can be improved, an automation whose error rate is rising. We identify these opportunities systematically and propose concrete adjustments — **not general observations**.",
          "The **A/B tests** we run on key elements of your digital assets transform hypotheses into certainties. Every modification is measured, its impact documented, and **learnings are capitalized** to inform subsequent iterations. You benefit from a continuous improvement process that progresses month after month, driven by the data of your own activity."
        ],
        clientRequirements: [
          "Approval of changes before they go to production",
          "Definition of optimization priorities for the month",
          "Access authorization to tools subject to adjustments"
        ],
        agencyWork: [
          "We identify the most impactful optimization levers through data analysis",
          "We implement approved changes to your workflows, campaigns, or automations",
          "We run A/B tests on key elements to validate hypotheses",
          "We measure the impact of each optimization and document learnings"
        ]
      },
      {
        title: "Executive reporting",
        description: "Produce a clear, actionable report for your leadership team.",
        detailedDescription: [
          "**Executive reporting** addresses decision-makers who have little time and much context to process. We design **concise, visually striking reports** that get to the point: your key performances, significant trends, and priority action recommendations. A leader should be able to read this report in **five minutes** and come away with a clear view of the situation and the next steps.",
          "The **industry benchmarks** we systematically integrate provide an indispensable perspective on your raw figures. Knowing that your conversion rate is 2.3% only makes sense if you know that your **industry median** is 1.8%. This contextualization is what allows your leadership team to calibrate their level of ambition and communicate with confidence about the company's digital performance."
        ],
        clientRequirements: [
          "Definition of the report format and recipients",
          "Approval before sending to stakeholders",
          "Feedback on what information to highlight"
        ],
        agencyWork: [
          "We write a concise executive report adapted to a non-technical audience",
          "We produce striking visualizations that facilitate decision-making",
          "We include industry benchmarks to contextualize your performance",
          "We deliver the report ahead of the meeting for preparatory reading"
        ]
      },
      {
        title: "Monitoring & anticipation",
        description: "Monitor market trends and anticipate strategic adjustments.",
        detailedDescription: [
          "In a digital environment evolving at **accelerated speed**, monitoring is not a luxury: it is a **competitive advantage**. We continuously track developments in your industry, algorithm updates, new competitive practices, and emerging technologies that could impact your activity. You are alerted **proactively** when an opportunity or threat materializes — not after your competitors have already seized it.",
          "The **strategic recommendations** we formulate from this monitoring are always contextualized to your specific situation: we do not forward generic newsletters, we bring you actionable insights that fit your roadmap. This **continuous anticipation** is what allows you to stay ahead of your market and capitalize on new opportunities before your competitors."
        ],
        clientRequirements: [
          "Sharing your future strategic directions",
          "Openness to proactive recommendations from our side",
          "Availability for a quick check-in in case of urgent opportunity"
        ],
        agencyWork: [
          "We monitor developments in your industry and relevant technologies",
          "We alert you proactively to identified opportunities or threats",
          "We propose strategic adjustments based on weak market signals",
          "We prepare recommendations for evolving your digital stack"
        ]
      },
    ],
    stats: [
      { value: "100%", label: "Real-time visibility on your KPIs" },
      { value: "+28%", label: "Average ROI after 6 months of management" },
      { value: "1 meeting", label: "Per month is enough to manage everything" },
    ],
    faq: [
      {
        q: "Which KPIs do you track exactly?",
        a: "It depends entirely on your objectives. For e-commerce: conversion rate, average basket, acquisition cost. For SaaS: churn, MRR, activation. We always start by defining together what truly matters for your business.",
      },
      {
        q: "How does the monthly meeting actually work?",
        a: "Each month, we prepare a structured report: results vs. objectives, 3 highlights, 2–3 actionable recommendations. The meeting lasts 45 to 60 min and takes place via video call or in person depending on your preference.",
      },
      {
        q: "Can we cancel the retainer if we are not satisfied?",
        a: "Yes. Our continuous management contracts are cancellable each month with 30 days' notice. We prefer to earn your trust every month rather than lock you into a commitment.",
      },
      {
        q: "Do we need to already have tools in place to get started?",
        a: "No. If you are starting from scratch, we put in place all the tracking and dashboards in the first month. If you already have tools, we connect to them and enrich them.",
      },
    ],
  }
];
