import type { CaseStudy } from './types'

// Generated from the published Figma site, then hand-reviewed.
const accessibleMove: CaseStudy = {
  slug: "accessible-move",
  name: "Accessible Move",
  accent: "#f54765",
  next: "flow-deployment",
  title: [
    { t: "Safeguarding ", b: 1 },
    { t: "High-Stakes Migrations", b: 1, c: "#f54765" },
    { t: "\n" },
    { t: "Through ", b: 1 },
    { t: "Inclusive Design", b: 1, c: "#f54765" },
  ],
  blocks: [
    {
      type: "stack",
      gap: 30,
      blocks: [
        {
          type: "heading",
          level: 1,
          runs: [
            { t: "Safeguarding ", b: 1 },
            { t: "High-Stakes Migrations", b: 1, c: "#f54765" },
            { t: "\n" },
            { t: "Through ", b: 1 },
            { t: "Inclusive Design", b: 1, c: "#f54765" },
          ],
          align: "center",
        },
        {
          type: "text",
          runs: [
            {
              t: "Redesigning Nutanix Move’s migration interface to eliminate usability barriers while meeting WCAG AA accessibility standards, resulting in 100% user preference for the new design.",
            },
          ],
          align: "center",
        },
      ],
    },
    {
      type: "stack",
      gap: 30,
      blocks: [
        {
          type: "collage",
          bg: "#faabab",
          w: 1036,
          h: 559,
          items: [
            { src: "/assets/img/c335368e50.webp", alt: "", x: 3.96, y: 31.84, w: 91.99, h: 106.44 },
            {
              src: "/assets/img/7930f05093.webp",
              alt: "",
              x: 63.42,
              y: 11.45,
              w: 11.58,
              h: 57.25,
              radius: 4,
              shadow: "rgba(0, 0, 0, 0.25) 3px 4px 20px 0px",
            },
            {
              src: "/assets/img/35481d956e.webp",
              alt: "",
              x: 81.95,
              y: 21.47,
              w: 14.96,
              h: 57.25,
              radius: 4,
              shadow: "rgba(0, 0, 0, 0.25) 4px 4px 20px 0px",
            },
          ],
        },
        {
          type: "columns",
          gap: 143,
          cols: [
            {
              width: 232,
              blocks: [
                { type: "heading", level: 4, runs: [{t: "Role and Timelines", b: 1}] },
                { type: "text", runs: [{t: "Lead UX Designer, Strategy"}] },
                { type: "text", runs: [{t: "~ 4 Months (Full A11Y Project)"}] },
              ],
            },
            {
              width: 253,
              blocks: [
                { type: "heading", level: 4, runs: [{t: "Collaborations (Leadership)", b: 1}] },
                { type: "text", runs: [{t: "Principal PM:", b: 1}, {t: " Snehansu Chatterjee"}] },
                { type: "text", runs: [{t: "A11Y Inspector:", b: 1}, {t: " Rama C. Kishore"}] },
              ],
            },
            {
              width: 265,
              blocks: [
                { type: "heading", level: 4, runs: [{t: "Collaborations (Execution)", b: 1}] },
                { type: "text", runs: [{t: "Engineering Lead: ", b: 1}, {t: "Hardik Jain"}] },
                { type: "text", runs: [{t: "Visual Design: ", b: 1}, {t: "Tanusree Debdas"}] },
              ],
            },
          ],
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 60,
      blocks: [
        {
          type: "stack",
          gap: 30,
          blocks: [
            { type: "heading", level: 2, runs: [{t: "The \"Open-Heart Surgery\" Problem", b: 1}] },
            {
              type: "stack",
              gap: 0,
              blocks: [
                {
                  type: "text",
                  runs: [
                    {
                      t: "Nutanix Move is a mission-critical platform that orchestrates the migration of hundreds of virtual machines (VMs) across complex data centers. For an IT administrator, this is the digital equivalent of performing open-heart surgery on a company’s infrastructure.",
                    },
                  ],
                },
                { type: "spacer" },
                { type: "text", runs: [{t: "The Stakes:", b: 1}] },
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [
                        {
                          t: "A single missed status update or accidental click can cause cascading data loss and downtime.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        {
                          t: "The Core Barrier: The existing dashboard was a \"data maze.\" Critical statuses were hidden, navigation was non-semantic, and the information architecture was collapsing under its own weight.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "stack",
          gap: 30,
          blocks: [
            { type: "heading", level: 2, runs: [{t: "My Role", b: 1}] },
            {
              type: "stack",
              gap: 0,
              blocks: [
                {
                  type: "text",
                  runs: [
                    {
                      t: "As the Lead UX Designer for this initiative , I took end to end ownership of the Nutanix Move redesign. My mission was to transform a high-friction, non-compliant interface into a high-performance migration application.",
                    },
                  ],
                },
                { type: "spacer" },
                { type: "text", runs: [{t: "Core Responsibilities:"}] },
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [
                        { t: "Audit & Strategy: ", b: 1 },
                        {
                          t: "I conducted comprehensive accessibility audits and usability sessions with enterprise customers to pinpoint systematic failures in the legacy architecture.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Information Architecture (IA): ", b: 1 },
                        {
                          t: "I spearheaded the transition from \"data-heavy\" to \"action-oriented\" design utilising Strategic Progressive Disclosure to manage cognitive load.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Inclusive Design Systems: ", b: 1 },
                        {
                          t: "Beyond basic compliance, I worked out a Dual encoding Status System, collaborating with the Visual Design team to ensure critical data was accessible via both color and geometric shape.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Cross-Functional Leadership: ", b: 1 },
                        {
                          t: "I acted as the bridge between Product Management (defining roadmap and timelines), Engineering (navigating technical limitations, and incorporating new visual components), and Visual Design (designing and standardising UI components).",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Validation & Research: ", b: 1 },
                        {
                          t: "I designed and executed A/B testing protocols with 11 enterprise customers to validate the efficacy of the new information hierarchy.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "stack",
          gap: 30,
          blocks: [
            { type: "heading", level: 2, runs: [{t: "Business Impact", b: 1}] },
            {
              type: "stack",
              gap: 0,
              blocks: [
                {
                  type: "text",
                  runs: [
                    {
                      t: "The redesign transformed a high-risk \"data maze\" into a high-performance command center, directly improving the speed and safety of enterprise migrations.",
                    },
                  ],
                },
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [
                        { t: "100% User Validation: ", b: 1 },
                        {
                          t: "All 11 enterprise participants preferred the redesign, specifically citing the separation of Plan-level and VM-level data.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Reduced Cognitive Load: ", b: 1 },
                        {
                          t: "11/11 users found immediate value in surfacing only actionable statuses (Failed, Warning, Ready to Cutover) rather than passive data.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Eradicated Accessibility Barriers: ", b: 1 },
                        {
                          t: "Eliminated systematic keyboard traps and color only status indicators, ensuring the platform meets WCAG-AA standards for inclusive design. \nAdditionally, followed A11Y Reflow standards to define minimum table widths and sticky columns to meet multiple screen resolutions.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Optimised Data Scannability: ", b: 1 },
                        {
                          t: "Standardised data units and progress bar visualisations allowed for instant progress assessments, replacing manual mental math for admins.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Business Risk Mitigation: ", b: 1 },
                        {
                          t: "By achieving compliance and reducing the potential for human error, we significantly lowered the legal and operational risks associated with data center migrations.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Design Adaptability and Scalability: ", b: 1 },
                        {
                          t: "Established a new benchmark for complex data tables across the Nutanix product ecosystem.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        { type: "heading", level: 2, runs: [{t: "Domain Context: Orchestrating IT Complexity", b: 1}] },
        {
          type: "text",
          runs: [
            {
              t: "Nutanix Move operates within enterprise IT environments where migration projects are high-stakes, time-sensitive operations. The migration table serves as the primary \"command center\" for IT administrators who are managing multiple concurrent migration plans.",
            },
          ],
        },
        { type: "image", src: "/assets/img/b86560b63a.gif", alt: "", w: 1010, h: 629 },
        { type: "divider" },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "Each migration plan orchestrates the movement of up to 100 Virtual Machines (VMs). To ensure operational success, the interface must allow admins to constantly monitor four highly dense, concurrent data streams:",
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Plan-Level Metadata: ", b: 1 },
                    { t: "Source/target environments, ownership of plan, and overall progress." },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Granular VM Statuses: ", b: 1 },
                    { t: "Tracking states like in-progress, failed, ready for cutover, and completed." },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Data Transfer Metrics: ", b: 1 },
                    { t: "Monitoring the volume migrated versus the total size." },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Timeline Tracking: ", b: 1 },
                    { t: "Calculating elapsed time and estimated completion." },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/75fb3977d3.webp", alt: "", w: 1010, h: 701 },
        {
          type: "text",
          runs: [
            { t: "The UX Implication: ", b: 1 },
            {
              t: "The interface wasn't just displaying data; it was asking users to cross-reference multiple data types under extreme pressure, making clarity and accessibility non-negotiable.",
            },
          ],
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        {
          type: "heading",
          level: 2,
          runs: [{t: "Research & Problem Discovery: Uncovering Systemic Friction", b: 1}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "To move beyond assumptions, I triangulated insights from enterprise customer usability sessions and comprehensive accessibility (A11Y) audits.",
                },
              ],
            },
            {
              type: "text",
              runs: [
                {
                  t: "This dual pronged approach revealed that the interface wasn't just visually cluttered, it was actively hindering time critical operations and introducing compliance liabilities.",
                },
              ],
            },
          ],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "I identified four critical failure points:"}] },
            {
              type: "list",
              ordered: true,
              items: [
                {
                  runs: [
                    { t: "Cognitive Overload & Poor Information Hierarchy", b: 1 },
                    {
                      t: "\nThe table suffered from a severe signal-to-noise imbalance. Critical alerts and nice-to-have data received equal visual weight.",
                    },
                  ],
                  gap: 1,
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "The \"Everything Column\": ", b: 1 },
                    {
                      t: "The status column attempted to communicate overall plan progress, up to six different individual VM states, hover details, and interactive elements all at once.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "User Impact: ", b: 1 },
                    {
                      t: "Users reported feeling overwhelmed by the data density, frequently missing critical status changes that required immediate intervention.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/8cb6cbab2c.webp", alt: "", w: 1010, h: 648 },
        {
          type: "list",
          ordered: true,
          start: 2,
          items: [
            {
              runs: [
                { t: "Fractured Navigation & Mental Models", b: 1 },
                {
                  t: "\nUsers were forced to learn and remember hidden interaction patterns rather than relying on intuitive navigation.",
                },
              ],
              gap: 1,
              children: [
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [
                        { t: "Hidden Hierarchies: ", b: 1 },
                        {
                          t: "The table contained two completely distinct information architectures. Users had to click plan names to access metadata, but had to click the status column to see VM-level details.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "User Impact: ", b: 1 },
                        {
                          t: "Instead of monitoring health, IT administrators wasted valuable time hunting for hidden information during high-stakes, time-sensitive migration operations.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=429-9789&scaling=min-zoom&content-scaling=fixed&page-id=241%3A9211&starting-point-node-id=429%3A9789&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1036,
          h: 750,
        },
        {
          type: "list",
          ordered: true,
          start: 3,
          items: [
            {
              runs: [
                { t: "Severe Accessibility & Compliance Risks", b: 1 },
                {
                  t: "\nThe audits exposed critical WCAG violations that not only created legal liability but actively excluded users with disabilities.",
                },
              ],
              gap: 1,
              children: [
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [
                        { t: "Keyboard Traps: ", b: 1 },
                        {
                          t: "Combining source and target information into single interactive table cells broke proper keyboard navigation.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/72aac392e1.webp", alt: "", w: 1010, h: 570 },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "spacer" },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [],
                  children: [
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "Exclusionary Visuals: ", b: 1 },
                            {
                              t: "Critical system statuses relied exclusively on just color coding, failing WCAG guidelines and locking out colourblind administrators.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/780e97563e.webp", alt: "", w: 1010, h: 570 },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "spacer" },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [],
                  children: [
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "Screen Reader Barriers: ", b: 1 },
                            {
                              t: "The complex, nested information lacked the semantic structure required for assistive technologies to parse the data.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "list",
          ordered: true,
          start: 4,
          items: [
            {
              runs: [
                { t: "Data Presentation Inconsistencies", b: 1 },
                { t: "\nThe lack of standardisation forced users to perform mental math on the fly." },
              ],
              gap: 1,
              children: [
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [
                        { t: "Mixed Units: ", b: 1 },
                        {
                          t: "Data sizes were displayed using a confusing mix of GiB and TiB units without any standardisation.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        {
          type: "heading",
          level: 2,
          runs: [{t: "Strategic Framework: Navigating Constraints & Establishing Principles", b: 1}],
        },
        {
          type: "text",
          runs: [
            {
              t: "Before entering the ideation phase, I collaborated closely with Engineering and Product Management to define the technical boundaries of the project. In enterprise software, acknowledging constraints early prevents costly downstream rework.",
            },
          ],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "Technical Constraints & Strategic Trade-offs", b: 1}] },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Data-Driven Breakpoints: ", b: 1 },
                    {
                      t: "Product telemetry revealed that 100% of our user base operated on minimum display resolutions of 1366x800px. This allowed me to confidently establish our baseline canvas size and optimise the data density for standard enterprise monitor setups.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Dynamic UI Stability: ", b: 1 },
                    {
                      t: "Because migration data streams live, the interface had to seamlessly accommodate real-time status updates without causing jarring layout shifts or disrupting the user's ongoing workflows.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Strategic Deprioritization:", b: 1 },
                    {
                      t: " Knowing there was a strict architectural limit of 100 VMs per migration plan, I made the strategic call to deprioritize the \"VM Count\" display. Since users consistently configured plans to the maximum limit, the static \"100\" provided no actionable insight, allowing us to reclaim valuable primary real estate.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        {
          type: "heading",
          level: 2,
          runs: [{t: "Solution Development: Engineering the Information Architecture", b: 1}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "Phase 1: Stress-Testing the Data Density", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "My initial design hypothesis explored a \"flat\" architecture. The goal was to see if we could surface all information simultaneously to prevent users from having to dig for data.",
                },
              ],
            },
            {
              type: "text",
              runs: [
                {
                  t: "I separated source and target into individual columns and exposed all six VM statuses upfront.",
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/dbba3eed3e.webp", alt: "", w: 1010, h: 570 },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "When tested against realistic enterprise data loads, this hypothesis failed—and it failed instructively. The density resulted in severe space constraints, text truncation, and a visually chaotic UI that rendered interactive elements unclickable.",
                },
              ],
            },
            {
              type: "text",
              runs: [
                { t: "The Key Insight:", b: 1 },
                {
                  t: " Not all data is created equal, and user attention is a strictly finite resource. To solve the interface, I first had to solve the data hierarchy.",
                },
              ],
            },
          ],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "Phase 2: Systematic Data Triage", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "I conducted a rigorous audit of every data point in the table, categorizing them based on user urgency and technical necessity.",
                },
              ],
            },
            {
              type: "list",
              ordered: true,
              items: [
                {
                  runs: [
                    { t: "Deconstructing the Table Columns", b: 1 },
                    {
                      t: "\nI evaluated each column to determine its primary function and required visual weight:",
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/fcf27cbffb.webp", alt: "", w: 950, h: 407 },
        { type: "image", src: "/assets/img/381f1323f7.webp", alt: "", w: 950, h: 404 },
        { type: "image", src: "/assets/img/61516401eb.webp", alt: "", w: 950, h: 404 },
        {
          type: "list",
          ordered: true,
          start: 2,
          items: [
            {
              runs: [
                { t: "The Status Matrix: Actionable vs. Informational", b: 1 },
                {
                  t: "\nThe biggest cognitive drain was the status column. I mapped the VM statuses into two distinct behavioral buckets:",
                },
              ],
              gap: 1,
              children: [
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [],
                      children: [
                        {
                          type: "list",
                          ordered: false,
                          items: [
                            {
                              runs: [
                                { t: "Action-Required (Primary Visibility): ", b: 1 },
                                {
                                  t: "Statuses that demand immediate human intervention. Failed, Ready to Cutover, and Warning. \nThese earned primary visual real estate.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/fc25cdc68b.webp", alt: "", w: 950, h: 404 },
        {
          type: "list",
          ordered: false,
          items: [
            {
              runs: [],
              children: [
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [],
                      children: [
                        {
                          type: "list",
                          ordered: false,
                          items: [
                            {
                              runs: [
                                { t: "Informational (Progressive Disclosure): ", b: 1 },
                                {
                                  t: "Statuses where the system is working as intended and no response is required. In Progress and Cutover in Progress. These were strategically hidden behind on-demand interactions (tooltips) to reduce visual noise.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/0aff23fde1.webp", alt: "", w: 613, h: 404 },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        {
          type: "heading",
          level: 2,
          runs: [{t: "The Final Solution: An Actionable, Accessible Command Center", b: 1}],
        },
        {
          type: "stack",
          gap: 10,
          blocks: [
            {
              type: "stack",
              gap: 0,
              blocks: [
                {
                  type: "text",
                  runs: [
                    {
                      t: "Translating the data into a high-performance UI meant shifting the paradigm of the migration table. It could no longer be a passive data dump, it had to function as a responsive, decision-driving engine.",
                    },
                  ],
                },
                {
                  type: "text",
                  runs: [
                    {
                      t: "By applying strict information hierarchy and inclusive design principles, I restructured the interface into a scalable command center.",
                    },
                  ],
                  gap: 1,
                },
                {
                  type: "list",
                  ordered: true,
                  items: [
                    {
                      runs: [
                        { t: "Semantic Architecture & Cognitive Ease: ", b: 1 },
                        {
                          t: "To reduce the cognitive load of parsing massive data grids, I rebuilt the column architecture to prioritize immediate comprehension:",
                        },
                      ],
                      gap: 1,
                      children: [
                        {
                          type: "list",
                          ordered: false,
                          items: [
                            {
                              runs: [
                                { t: "Decoupling Mixed Data:", b: 1 },
                                {
                                  t: " \"Plan Status\" and \"VM Status\" were untangled into strictly separate columns with clear, distinct semantic meanings, eliminating the friction of processing two different operational levels at once.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "embed",
              src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=479-13771&scaling=scale-down-width&content-scaling=fixed&page-id=241%3A9211&starting-point-node-id=479%3A13771&show-proto-sidebar=1&embed-host=share",
              title: "Interactive Figma prototype",
              w: 1010,
              h: 559,
            },
          ],
        },
        {
          type: "stack",
          gap: 10,
          blocks: [
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Visualizing Progress: ", b: 1 },
                    {
                      t: "Raw numerical units for \"Data Migrated\" were replaced with an intuitive visual progress bar, allowing administrators to gauge migration velocity at a glance without doing mental math. Hover interactions provide the exact GiB/TiB metrics for those who need deep dives.",
                    },
                  ],
                },
              ],
            },
            {
              type: "embed",
              src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=481-13803&scaling=scale-down-width&content-scaling=fixed&page-id=241%3A9211&starting-point-node-id=481%3A13803&embed-host=share",
              title: "Interactive Figma prototype",
              w: 1010,
              h: 559,
            },
            { type: "video", src: "/assets/video/3aa3f67078.mp4", w: 1010, h: 545 },
          ],
        },
        {
          type: "stack",
          gap: 10,
          blocks: [
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Contextual Expansion: ", b: 1 },
                    {
                      t: "Source and Target environments were separated into dedicated columns, with secondary metadata tucked neatly into on-demand hover panels.",
                    },
                  ],
                },
              ],
            },
            { type: "video", src: "/assets/video/3e5eae503e.mp4", w: 1010, h: 569 },
          ],
        },
        {
          type: "stack",
          gap: 10,
          blocks: [
            {
              type: "list",
              ordered: true,
              start: 2,
              items: [
                {
                  runs: [
                    { t: "Action-Driven Progressive Disclosure: ", b: 1 },
                    {
                      t: "To ensure critical issues were never missed, we engineered the interface to surface only what mattered:",
                    },
                  ],
                  gap: 1,
                  children: [
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "Signal Over Noise: ", b: 1 },
                            {
                              t: "The primary view of the VM Status column now strictly displays states requiring immediate human intervention— Ready for Cutover, Failed, and Warning, ",
                            },
                          ],
                          gap: 1,
                        },
                        {
                          runs: [
                            { t: "Secondary Tooltips: ", b: 1 },
                            {
                              t: "Informational, non-urgent states (like In Progress and Completed) were grouped into a unified, interactive tooltip accessible on hover. This single decision drastically reduced visual noise and improved the user's time-to-resolution for critical errors.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { type: "video", src: "/assets/video/08dbe3521a.mp4", w: 950, h: 535 },
          ],
        },
        {
          type: "stack",
          gap: 10,
          blocks: [
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [],
                  children: [
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "Contextual Actions: ", b: 1 },
                            {
                              t: "Plan-level operations (start, pause, delete) were removed from the immediate view and nested within a dedicated, scalable \"Actions\" menu, preventing accidental clicks on high-stakes operations.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { type: "image", src: "/assets/img/405875e513.webp", alt: "", w: 950, h: 536 },
          ],
        },
        {
          type: "stack",
          gap: 10,
          blocks: [
            {
              type: "list",
              ordered: true,
              start: 3,
              items: [
                {
                  runs: [
                    { t: "Inclusive by Design: Enterprise-Grade Accessibility (A11Y): ", b: 1 },
                    {
                      t: "Meeting accessibility compliance was not a checklist item, it was a foundational design principle. I partnered closely with the visual design and engineering teams to eliminate the legacy system's critical violations:",
                    },
                  ],
                  gap: 1,
                  children: [
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "Shape-Based Indicators: ", b: 1 },
                            {
                              t: "We designed distinct, recognizable geometric shapes for each status type, completely removing the reliance on color-coding and ensuring full usability for color-blind administrators.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { type: "image", src: "/assets/img/8fe658c107.webp", alt: "", w: 950, h: 536 },
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              runs: [],
              children: [
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [
                        { t: "Keyboard & Screen Reader Support: ", b: 1 },
                        {
                          t: "We engineered a logical, sequential tab order so the entire data grid is focusable and navigable without a mouse. We backed this with semantic HTML markup and descriptive ARIA labels, allowing visually impaired users to confidently manage complex migrations via screen readers.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "stack",
          gap: 10,
          blocks: [
            {
              type: "list",
              ordered: true,
              start: 4,
              items: [
                {
                  runs: [
                    { t: "Scalable & Responsive Framework: ", b: 1 },
                    {
                      t: "Enterprise tables must flex across environments without breaking. I established a responsive grid system designed for longevity:",
                    },
                  ],
                  gap: 1,
                  children: [
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "Optimized Breakpoints: ", b: 1 },
                            {
                              t: "The primary grid was meticulously optimized for our users' baseline 1366px displays (Most common screensize as per our telemetry data).",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { type: "image", src: "/assets/img/a025ada904.webp", alt: "", w: 950, h: 536 },
          ],
        },
        {
          type: "stack",
          gap: 10,
          blocks: [
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [],
                  children: [
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "Graceful Degradation: ", b: 1 },
                            {
                              t: "For smaller viewports, I implemented a robust horizontal scroll behavior anchored by a sticky \"Plan Name\" column, ensuring users never lose their spatial context.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { type: "image", src: "/assets/img/cd1d49d6ec.webp", alt: "", w: 950, h: 536 },
          ],
        },
        {
          type: "stack",
          gap: 10,
          blocks: [
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [],
                  children: [
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "Future-Proofing: ", b: 1 },
                            {
                              t: "I established and documented strict minimum column widths, ensuring that as product capabilities expand, the UI remains structurally sound and visually balanced.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { type: "image", src: "/assets/img/f32f27effa.webp", alt: "", w: 950, h: 340 },
          ],
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        {
          type: "heading",
          level: 2,
          runs: [{t: "Scaling the Impact: Establishing a Universal Design Pattern", b: 1}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "The success of the decentralized status architecture (separating Plan-level from VM-level data) proved we hadn't just fixed a single table; we had established a highly scalable enterprise design pattern.",
                },
              ],
            },
            {
              type: "text",
              runs: [
                {
                  t: "Following the overwhelming positive reception of the VM migration interface, leadership tasked us with applying this same framework to Files Migration.",
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Systematizing the Architecture: ", b: 1 },
                    {
                      t: "We applied the exact same strict semantic separation, successfully decoupling overall plan statuses from individual shares statuses. \nThis ensured administrators didn't have to learn a new mental model when switching between migration types.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Extending the Visual Language:", b: 1 },
                    {
                      t: " Because file servers introduce unique operational states not found in VM migrations, I collaborated closely with the visual design team to engineer a new bespoke, shape-based icons. This expansion maintained our strict, color-agnostic accessibility standards while enriching the platform's overarching design system.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/3ef624c1b7.webp", alt: "", w: 1010, h: 570 },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        {
          type: "heading",
          level: 2,
          runs: [{t: "Validation & Business Impact: Proving the Value of Clarity", b: 1}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "To measure the success of the redesign, I didn't just want to know if users liked it better; I needed to know if they could perform high-stakes migrations safer and faster.",
                },
              ],
            },
            {
              type: "text",
              runs: [
                {
                  t: "I facilitated comparative A/B usability testing with 11 enterprise IT administrators, simulating a live migration environment with induced system failures to test cognitive load under pressure.",
                },
              ],
            },
            { type: "spacer" },
            { type: "text", runs: [{t: "Quantitative & Qualitative Triumphs:", b: 1}] },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Drastic Reduction in Time-to-Action: ", b: 1 },
                    {
                      t: "By surfacing only actionable VM statuses (Failed, Warning), 9 out of 11 users instantly recognized the new action hierarchy without prompting. We measured a reduction in time-to-identify critical VM failures, proving the effectiveness of our progressive disclosure strategy.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Elimination of Cognitive Fatigue: ", b: 1 },
                    {
                      t: "11 out of 11 users reported that decoupling the Plan Status from the VM Status radically simplified their workflow. The visual shape-based indicators removed the mental math and strain from their dashboards.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Achieved Enterprise Compliance: ", b: 1 },
                    {
                      t: "We successfully eliminated the critical keyboard traps and color-contrast violations, bringing the interface up to WCAG standards and significantly mitigating legal and compliance risks for the business.",
                    },
                  ],
                },
              ],
            },
            { type: "spacer" },
            { type: "text", runs: [{t: "Iterative Learnings & Constructive Friction:", b: 1}] },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    {
                      t: "While 100% of users preferred the new interface, 2 out of 11 users required a brief orientation to adapt to the new hidden action patterns. However, once understood, their efficiency matched the rest of the cohort.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    {
                      t: "Similarly, a small fraction (2 out of 11) expressed a nostalgic preference for raw data text over visual progress bars, highlighting the tension between legacy enterprise habits and modern UX paradigms.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        { type: "heading", level: 2, runs: [{t: "Strategic Takeaways", b: 1}] },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "Reflecting on this zero-to-one redesign within a complex ecosystem, three core principles emerged that now guide my approach to enterprise UX:",
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Accessibility is a Catalyst, Not a Constraint: ", b: 1 },
                    {
                      t: "Designing for edge cases (like color blindness and screen readers) didn't compromise the aesthetic; it actively drove a cleaner, more systemic visual language that benefited every user.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Progressive Disclosure Requires Design Courage: ", b: 1 },
                    {
                      t: "In enterprise software, removing visible data feels inherently risky. Stakeholders often equate \"more data\" with \"more value.\" However, intentionally hiding secondary information is the only way to create true operational clarity.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Domain Complexity Demands Immersion: ", b: 1 },
                    {
                      t: "You cannot design a migration command center without deeply understanding the technical anxiety of the person orchestrating it. Genuine comprehension of the technical constraints and user workflows is what moves a design from merely \"looking good\" to actually working.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        { type: "image", src: "/assets/img/c4e2a53782.webp", alt: "", w: 128, h: 128 },
        { type: "heading", level: 3, runs: [{t: "Thank you for Reading", b: 1}], align: "center" },
        {
          type: "text",
          runs: [
            {
              t: "I’m always happy to talk about progressive disclosure, inclusive design systems, \nor how to engineer cognitive clarity in high-stakes environments.",
            },
          ],
          align: "center",
        },
      ],
    },
  ],
}

export default accessibleMove
