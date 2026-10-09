import type { CaseStudy } from './types'

// Generated from the published Figma site, then hand-reviewed.
const moveInPlace: CaseStudy = {
  slug: "move-in-place",
  name: "Move-in-Place",
  accent: "#15792e",
  next: "accessible-move",
  title: [
    { t: "Designing for ", b: 1 },
    { t: "Zero-Touch Trust", b: 1, c: "#15792e" },
    { t: ": Converting Live Infrastructure ", b: 1 },
    { t: "Without the Panic", b: 1, c: "#15792e" },
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
            { t: "Designing for ", b: 1 },
            { t: "Zero-Touch Trust", b: 1, c: "#15792e" },
            { t: ": Converting Live Infrastructure ", b: 1 },
            { t: "Without the Panic", b: 1, c: "#15792e" },
          ],
          align: "center",
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "Move-in-Place or Cluster Conversion is a seamless, self-paced cluster conversion solution.",
                },
              ],
              align: "center",
            },
            {
              type: "text",
              runs: [{t: "A UX-driven innovation that’s led to new deals, boost in 250+ conversion, "}],
              align: "center",
            },
            { type: "text", runs: [{t: "and led to Nutanix Move adoption by 17%."}], align: "center" },
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
          bg: "#a0d5b1",
          w: 1036,
          h: 559,
          items: [
            { src: "/assets/img/c4a24dcf05.webp", alt: "home screen", x: 19.98, y: 37.57, w: 57.53, h: 66.73 },
            {
              src: "/assets/img/bcdd16c03b.webp",
              alt: "",
              x: 4.92,
              y: 15.74,
              w: 34.94,
              h: 34.35,
              shadow: "rgba(0, 0, 0, 0.1) 4px 4px 4px 0px",
            },
            {
              src: "/assets/img/bfc953ffc7.webp",
              alt: "what's this",
              x: 71.33,
              y: 19.32,
              w: 23.84,
              h: 55.1,
              shadow: "rgba(0, 0, 0, 0.1) -4px 4px 10px 0px",
            },
            { src: "/assets/img/070332f2ad.webp", alt: "move popoover", x: 7.24, y: 63.51, w: 13.9, h: 32.56 },
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
                { type: "text", runs: [{t: "~ 1 Year"}] },
              ],
            },
            {
              width: 253,
              blocks: [
                { type: "heading", level: 4, runs: [{t: "Collaborations", b: 1}] },
                { type: "text", runs: [{t: "UX Researcher:", b: 1}, {t: " Tamalika Chatterjee"}] },
                { type: "text", runs: [{t: "Principal PM:", b: 1}, {t: " Snehansu Chatterjee"}] },
              ],
            },
            {
              width: 265,
              blocks: [
                { type: "heading", level: 4, runs: [{t: "Collaborations (Engineering)", b: 1}] },
                { type: "text", runs: [{t: "Engineering Director: ", b: 1}, {t: "Amit Agrawal"}] },
                { type: "text", runs: [{t: "Engineering Lead: ", b: 1}, {t: "Parag Rahangdale"}] },
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
            {
              type: "heading",
              level: 2,
              runs: [{t: "The Challenge: Designing for \"Zero-Touch\" Trust", b: 1}],
            },
            {
              type: "stack",
              gap: 0,
              blocks: [
                {
                  type: "text",
                  runs: [
                    {
                      t: "Following the Broadcom acquisition of VMWare, introduction of steep license models, and product realignments, customers needed to migrate their infrastructure from ESXi (VMWare’s Hypervisor) to AHV (Nutanix’s Hypervisor) for its simplicity, cost-effectiveness, and customer-first approach.",
                    },
                  ],
                },
                { type: "spacer" },
                {
                  type: "text",
                  runs: [
                    {
                      t: "However, the existing process was a \"nuke and pave\" operation, wiping live servers and reinstalling the hypervisor. This presented a massive psychological barrier for Admins:",
                    },
                  ],
                },
                {
                  type: "list",
                  ordered: false,
                  items: [
                    { runs: [{t: "High Risk:", b: 1}, {t: " Potential data loss on production workloads."}] },
                    {
                      runs: [{t: "High Cost:", b: 1}, {t: " Typically required duplicate hardware (swing gear)."}],
                    },
                    { runs: [{t: "Terror-Inducing: ", b: 1}, {t: "Required manual downtime coordination."}] },
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
              type: "text",
              runs: [
                {
                  t: "I led the UX strategy to transform this high-risk, manual operation into a guided, in-place workflow that gave Admins the confidence to hit \"Execute\" on their live infrastructure.",
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
              type: "columns",
              gap: 30,
              cols: [
                {
                  width: 237,
                  blocks: [
                    { type: "tile", src: "/assets/img/7621d19dfd.webp", size: 168, icon: 128 },
                    {
                      type: "heading",
                      level: 5,
                      runs: [{t: "Immediate Feature Adoption & Trust", b: 1}],
                      align: "center",
                    },
                    {
                      type: "text",
                      runs: [
                        { t: "During the Early Access (EA) release, customers " },
                        { t: "successfully completed 250+ cluster conversions", b: 1 },
                        {
                          t: ". This high adoption rate validated our \"Trust Architecture,\" proving we had successfully overcome the user's fear of the \"point of no return.”",
                        },
                      ],
                    },
                  ],
                },
                {
                  width: 237,
                  blocks: [
                    { type: "tile", src: "/assets/img/d3441e5cc5.webp", size: 168, icon: 128 },
                    {
                      type: "heading",
                      level: 5,
                      runs: [{t: "90% Uptick in AHV Adoption", b: 1}],
                      align: "center",
                    },
                    {
                      type: "text",
                      runs: [
                        { t: "By 2026, we have more than " },
                        { t: "4M VMs running on AHV (est.)", b: 1 },
                        { t: ", which has doubled in 2 years with an " },
                        { t: "average of conversion of 100 VMs every 2 weeks", b: 1 },
                      ],
                    },
                  ],
                },
                {
                  width: 168,
                  blocks: [
                    { type: "tile", src: "/assets/img/3e9d1aa7f4.webp", size: 168, icon: 128 },
                    { type: "heading", level: 5, runs: [{t: "Driving Revenue", b: 1}], align: "center" },
                    {
                      type: "text",
                      runs: [
                        {
                          t: "The intuitive \"Blast Radius\" control and \"Surgical Rollback\" features instilled enough confidence to directly help ",
                        },
                        { t: "win a major enterprise deal.", b: 1 },
                      ],
                    },
                  ],
                },
                {
                  width: 168,
                  blocks: [
                    { type: "tile", src: "/assets/img/9898ef464a.webp", size: 168, icon: 128 },
                    {
                      type: "heading",
                      level: 5,
                      runs: [{t: "Platform Growth & Discoverability", b: 1}],
                      align: "center",
                    },
                    {
                      type: "stack",
                      gap: 0,
                      blocks: [
                        {
                          type: "text",
                          runs: [{t: "The launch drove a 17% overall uptick in Nutanix Move installations.", b: 1}],
                        },
                        {
                          type: "text",
                          runs: [
                            {
                              t: "Furthermore, the Information Architecture overhaul, transitioning to the new Category First Home Screen, correlated with a ",
                            },
                            { t: "12% growth in secondary migrations (Files and Security Policies)", b: 1 },
                            { t: ", proving the business value of designing for discoverability." },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              variant: "cards",
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
        { type: "heading", level: 2, runs: [{t: "Context", b: 1}] },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "Many customers run Nutanix Clusters with VMware ESXi as the hypervisor. This setup is fully supported because Nutanix is hypervisor-agnostic, allowing customers to choose any hypervisor that best fits their needs. Customers choose ESXi because of following reasons:",
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                { runs: [{t: "ESXi is one of the most popular hypervisors in the market"}] },
                { runs: [{t: "Familiarity among infrastructure administrators"}] },
                {
                  runs: [
                    {
                      t: "Offers advanced features compared to Nutanix’s AHV (but Nutanix is catching up fast)",
                    },
                  ],
                },
                { runs: [{t: "Driven by business SLAs and legacy dependencies"}] },
              ],
            },
            { type: "spacer" },
            {
              type: "text",
              runs: [
                {
                  t: "With Nutanix AHV + Prism Central rapidly evolving, customers are now motivated to fully transition to Nutanix for:",
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                { runs: [{t: "A unified platform experience"}] },
                { runs: [{t: "Better pricing and licensing flexibility"}] },
                { runs: [{t: "Superior User Experience and customer support"}] },
              ],
            },
            { type: "spacer" },
            {
              type: "text",
              runs: [
                {
                  t: "To complete this transition, customers must replace ESXi with AHV on each node — uninstalling ESXi and installing AHV cluster-wide.",
                },
              ],
            },
            { type: "spacer" },
          ],
        },
        { type: "image", src: "/assets/img/4d4d35b47d.webp", alt: "", w: 1036, h: 410 },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        { type: "heading", level: 2, runs: [{t: "Research: Decoding Admin Anxiety", b: 1}] },
        { type: "heading", level: 3, runs: [{t: "Quantitative study: The Why", b: 1}] },
        {
          type: "text",
          runs: [
            {
              t: "To gain insights into how customers currently handle conversions, how their infrastructure looks like, and what are their inhibitions, I partnered with the Product Manager (PM) and UX Researcher to design a short, focused survey.",
            },
          ],
        },
        {
          type: "collage",
          bg: "#a0d5b1",
          w: 1036,
          h: 559,
          items: [{src: "/assets/img/f211b290d5.webp", alt: "", x: 13.32, y: 17.71, w: 73.36, h: 94.63}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [{t: "Key insights gathered are not just technical but psychological too:-"}],
            },
            {
              type: "list",
              ordered: true,
              items: [
                {
                  runs: [{t: "The Black Box Problem (Trust vs. Abstraction)", b: 1}],
                  children: [
                    {
                      type: "list",
                      ordered: true,
                      items: [
                        {
                          runs: [
                            { t: "The Insight: ", b: 1 },
                            { t: "100% of conversions were previously done manually via CLI (Command Line)." },
                          ],
                          gap: 1,
                        },
                        {
                          runs: [
                            { t: "The Why:", b: 1 },
                            {
                              t: " Admins avoided GUI tools because they \"abstracted away the details.\" They viewed simple interfaces as suspicious \"Black Boxes\" that might hide critical failures.",
                            },
                          ],
                          gap: 1,
                        },
                        {
                          runs: [
                            { t: "Strategic Pivot: ", b: 1 },
                            {
                              t: "We realised we couldn't just build a \"Simple\" UI. We had to build a Transparent one. We decided to expose the \"ugly\" backend validation logs in the UI to give Admins the visibility of a script with the usability of a GUI.",
                            },
                          ],
                          gap: 2,
                        },
                      ],
                    },
                  ],
                },
                {
                  runs: [{t: "The Scale Anxiety (Designing for 800+ VMs)", b: 1}],
                  children: [
                    {
                      type: "list",
                      ordered: true,
                      items: [
                        {
                          runs: [
                            { t: "The Insight:", b: 1 },
                            { t: " Customers managed massive environments (up to 16 nodes/800+ VMs)." },
                          ],
                          gap: 1,
                        },
                        {
                          runs: [
                            { t: "The Design Implication:", b: 1 },
                            {
                              t: " At this scale, a generic \"Bulk Action\"/”single click” dashboard like interface is dangerous. A single mis-click could wipe a data centre.",
                            },
                          ],
                          gap: 1,
                        },
                        {
                          runs: [
                            { t: "The Fix: ", b: 1 },
                            {
                              t: "This drove our decision to use a Linear Wizard Pattern. We intentionally constrained the user's freedom, forcing them to validate the entire cluster state step-by-step before unlocking the \"Execute\" button.",
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
        { type: "heading", level: 3, runs: [{t: "One on One Qualitative Deep Dives: The How", b: 1}] },
        {
          type: "text",
          runs: [
            {
              t: "With this in mind, we reached out to 6/9 customers who were interested in having 1:1 deep dive conversations (3 customers never responded back)",
            },
          ],
        },
        {
          type: "stack",
          gap: 20,
          blocks: [
            {
              type: "stack",
              gap: 0,
              blocks: [
                { type: "text", runs: [{t: "1. Qualitative Insight: The Psychology of the Admin", b: 1}] },
                {
                  type: "text",
                  runs: [
                    { t: "The Persona: ", b: 1 },
                    {
                      t: "While the titles ranged from Sr. IT Engineer to CTO, our 1:1 deep dives revealed a shared psychological profile: The Risk Averse Skeptic.",
                    },
                  ],
                },
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [
                        { t: "The Mindset: ", b: 1 },
                        {
                          t: "They operate on a \"Zero Trust\" basis. \"delight\" is secondary for them as they care about predictability.",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "The Environment: ", b: 1 },
                        {
                          t: "They manage an average of 10-15 clusters with ~100 VMs per cluster. (averaged and summarised across studies)",
                        },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "The Design Implication: ", b: 1 },
                        {
                          t: "At this scale, a \"conversion\" isn't just a task, it’s a potential disaster. A single failure affects hundreds of workloads. Therefore, our design couldn't just be a “pretty” and \"easy”, it had to be verifiable and deliberately detailed to enable informed choices",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { type: "image", src: "/assets/img/53d7b119bb.webp", alt: "", w: 1010, h: 568 },
          ],
        },
        { type: "divider" },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "list",
              ordered: true,
              start: 2,
              items: [{runs: [{t: "The Problem Space: \"Expensive Safety\" vs. \"Manual Terror\"", b: 1}]}],
            },
            {
              type: "text",
              runs: [
                {
                  t: "We mapped the existing conversion methods to understand why customers were stalling. We found they were trapped between two bad options:",
                },
              ],
            },
          ],
        },
        {
          type: "columns",
          gap: 30,
          cols: [
            {
              width: 503,
              blocks: [
                { type: "image", src: "/assets/img/0290388fb9.webp", alt: "", w: 503, h: 168 },
                {
                  type: "stack",
                  gap: 0,
                  blocks: [
                    {
                      type: "text",
                      runs: [{t: "Option A: The \"Swing Gear\" Tax (Duplicate Cluster)", b: 1}],
                    },
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "The Method: ", b: 1 },
                            {
                              t: "Buy a second set of hardware (Swing Gear), migrate VMs there, wipe the original, and migrate back.",
                            },
                          ],
                          gap: 1,
                        },
                        {
                          runs: [
                            { t: "The Pain: ", b: 1 },
                            {
                              t: "It is safe but expensive. It doubles the hardware cost just for a one time operation. This is expensive for many SMBs.",
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
              width: 503,
              blocks: [
                { type: "image", src: "/assets/img/f5bd8b25b4.webp", alt: "", w: 503, h: 168 },
                {
                  type: "stack",
                  gap: 0,
                  blocks: [
                    {
                      type: "text",
                      runs: [{t: "Option B: The \"Open-Heart Surgery\" (Manual Conversion)", b: 1}],
                    },
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "The Method: ", b: 1 },
                            {
                              t: "Manually move VMs node-by-node, wipe the node, reinstall the OS, and move VMs back.",
                            },
                          ],
                          gap: 1,
                        },
                        {
                          runs: [
                            { t: "The Pain: ", b: 1 },
                            {
                              t: "It costs $0 but carries maximum risk. There is no \"Undo\" button. If a script fails halfway, the node is bricked, and going back is a set of painful manual tasks.",
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
        { type: "heading", level: 3, runs: [{t: "Design Mandates: The Trust Framework", b: 1}] },
        {
          type: "text",
          runs: [
            {
              t: "To win these customers, we couldn't just build a \"feature.\" We had to build a Safety Net. We translated their raw needs into four non-negotiable design pillars:",
            },
          ],
        },
        {
          type: "columns",
          gap: 30,
          cols: [
            {
              width: 237,
              blocks: [
                { type: "image", src: "/assets/img/177d4c1b3b.webp", alt: "", w: 168, h: 168 },
                {
                  type: "stack",
                  gap: 0,
                  blocks: [
                    { type: "text", runs: [{t: "In-Place Efficiency", b: 1}] },
                    { type: "text", runs: [{t: "Eliminate the \"Swing Gear\" tax."}] },
                    {
                      type: "text",
                      runs: [{t: "Convert the cluster on the existing hardware without data loss."}],
                    },
                  ],
                },
              ],
            },
            {
              width: 168,
              blocks: [
                { type: "image", src: "/assets/img/9765a68204.webp", alt: "", w: 168, h: 168 },
                {
                  type: "stack",
                  gap: 0,
                  blocks: [
                    { type: "text", runs: [{t: "Granular Control (Batching)", b: 1}] },
                    { type: "text", runs: [{t: "Reject the \"All or Nothing\" approach."}] },
                    {
                      type: "text",
                      runs: [
                        {
                          t: "Allow Admins to convert in batches to limit the \"blast radius\" of any potential failure.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              width: 168,
              blocks: [
                { type: "image", src: "/assets/img/2140843a1c.webp", alt: "", w: 168, h: 168 },
                {
                  type: "stack",
                  gap: 0,
                  blocks: [
                    { type: "text", runs: [{t: "The Panic Button (Rollback)", b: 1}] },
                    { type: "text", runs: [{t: "The No. 1 barrier to adoption was fear."}] },
                    {
                      type: "text",
                      runs: [
                        {
                          t: "We prioritised a robust Rollback mechanism that could revert the infrastructure to its original state should things went south.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              width: 168,
              blocks: [
                { type: "image", src: "/assets/img/1841c51550.webp", alt: "", w: 168, h: 168 },
                {
                  type: "stack",
                  gap: 0,
                  blocks: [
                    { type: "text", runs: [{t: "\"Glass Box\" Automation", b: 1}] },
                    {
                      type: "text",
                      runs: [
                        {
                          t: "Instead of a \"Black Box\" wizard, the UI must visualise every automated step (VM prep, Networking etc), giving the Admin the comfort of manual control with the speed of automation.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          variant: "cards",
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        { type: "heading", level: 2, runs: [{t: "How will in-place cluster conversion work?", b: 1}] },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "To understand how the conversion is done in the backend, without inturrupting the running apps or having to purchase the “swing gear”, please follow through the below shown prototype.",
                },
              ],
            },
            {
              type: "text",
              runs: [{t: "The below shown prototype is simplified for the purpose of the case study.", b: 1}],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=1-32&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A32&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1036,
          h: 629,
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
          runs: [{t: "Strategic Decision: Defining the Home for Conversion", b: 1}],
        },
        { type: "image", src: "/assets/img/dfbce77ccb.webp", alt: "", w: 1036, h: 300 },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                { t: "The Conflict:", b: 1 },
                { t: " We faced a critical architectural debate on where this feature should live." },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Engineering Preference: ", b: 1 },
                    {
                      t: "Nutanix’s Prism Central/Prism Element. Since the conversion happens on the cluster, building it here was technically cheapest and fastest.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "The Risk: ", b: 1 },
                    { t: "Prism Central and" },
                    { t: " ", b: 1 },
                    {
                      t: "Prism Element are a \"Daily Management\" console. Adding a \"One-Time Conversion\" tool here would create permanent UI bloat for a temporary task.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                { t: "My Proposal: ", b: 1 },
                { t: "I advocated for Nutanix Move, Nutanix’s dedicated migration application." },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "The Rationale: ", b: 1 },
                    {
                      t: "I argued for a clean separation of concerns based on the user's mental model: \"Migration or conversion is a one time, transient utility, and not a permanent management state.\" Nutanix’s Move is already an established and highly used application for one time migrations. The sentiment holds.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "The Trade-off: ", b: 1 },
                    {
                      t: "This decision increased engineering scope (requiring new API bridges between Move and the Cluster), which I had to defend to the Engineering Director.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "columns",
          gap: 30,
          cols: [
            {
              width: 168,
              blocks: [{type: "image", src: "/assets/img/ec82735921.webp", alt: "", w: 168, h: 168}],
            },
            {
              width: 419,
              blocks: [
                { type: "text", runs: [{t: "The Outcome: ", b: 1}, {t: "We chose Nutanix Move."}] },
                {
                  type: "list",
                  ordered: false,
                  items: [
                    {
                      runs: [
                        { t: "UX Win: ", b: 1 },
                        { t: "Kept the core Prism interfaces clean for day to day operations." },
                      ],
                      gap: 1,
                    },
                    {
                      runs: [
                        { t: "Business Win: ", b: 1 },
                        {
                          t: "Positioned the tool correctly as a specialised utility, driving upsells for the Move platform.",
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
          runs: [{t: "Case Study Detour: Rethinking Navigation for a Multi-Product Platform", b: 1}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                { t: "The Catalyst: ", b: 1 },
                {
                  t: "Historically, Nutanix Move was a single-purpose tool for all things migrations (VM-the most used capability, Files and security policies). However, the introduction of \"Cluster Conversion\" signalled a shift: Move was evolving from a tool into a platform. The existing flat navigation structure was rigid, cluttered, and unable to accommodate this new product line without breaking.",
                },
              ],
              gap: 1,
            },
            {
              type: "text",
              runs: [
                { t: "The Hidden Debt: ", b: 1 },
                {
                  t: "Beyond the scaling issue, we had a discoverability crisis. Powerful capabilities like Files Migration were shown in the flat list, leading to low adoption simply because there wasn’t much education designed around it",
                },
              ],
            },
            { type: "spacer" },
            {
              type: "text",
              runs: [
                { t: "The Strategic Redesign: ", b: 1 },
                {
                  t: "I undertook a complete overhaul of the Information Architecture to solve for Scalability and Discovery as illustrated below :",
                },
              ],
            },
            {
              type: "list",
              ordered: true,
              items: [
                {
                  runs: [
                    { t: "From Flat to Hierarchical: ", b: 1 },
                    {
                      t: "I grouped capabilities by intent as \"Migration\" vs. \"Conversion\", creating a scalable bucket for future features.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/b590b66e4b.webp", alt: "", w: 1010, h: 518 },
        {
          type: "list",
          ordered: true,
          start: 2,
          items: [
            {
              runs: [
                { t: "Home Screen as a Directory:", b: 1 },
                {
                  t: " I introduced a dashboard-style entry point that creates a \"menu of services,\" instantly exposing undervalued features like Files Migration to every user. This also gave me a room to quickly educate about each capability and serve an ongoing migrations metric against each service.",
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/5bc843e892.webp", alt: "", w: 1010, h: 683 },
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
          runs: [{t: "Defining User Needs: Mapping the \"Zero-Trust\" Journey", b: 1}],
        },
        {
          type: "columns",
          gap: 30,
          cols: [
            {
              width: 199,
              blocks: [{type: "image", src: "/assets/img/29ad194c78.webp", alt: "", w: 199, h: 199}],
            },
            {
              width: 807,
              blocks: [
                {
                  type: "text",
                  runs: [
                    {
                      t: "I collaborated with PM and Engg Director and translated the Admin's anxiety into a structured narrative. Each phase of the design had to answer a specific need:",
                    },
                  ],
                },
                { type: "spacer" },
                { type: "text", runs: [{t: "Phase 1: Validation (Certainty)", b: 1}] },
                {
                  type: "list",
                  ordered: false,
                  items: [
                    { runs: [{t: "\"I need to know my cluster is eligible before I commit.\"", b: 1, i: 1}] },
                    {
                      runs: [
                        {
                          t: "We built a Pre-conversion Check system that acts as a strict gateway, preventing users from proceeding with incompatible configurations.",
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
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "Phase 2: Planning (Control)", b: 1}] },
            {
              type: "list",
              ordered: false,
              items: [
                { runs: [{t: "\"I need to move at my own pace, not the tool's pace.\"", b: 1, i: 1}] },
                {
                  runs: [
                    {
                      t: "We designed a Stage Builder that allows Admins to plan their conversion (e.g., Dev VMs first, followed by staging and prod), ensuring they can pause and verify success at every checkpoint.",
                    },
                  ],
                },
              ],
            },
            { type: "spacer" },
            { type: "text", runs: [{t: "Phase 3: Execution (Transparency)", b: 1}] },
            {
              type: "list",
              ordered: false,
              items: [
                { runs: [{t: "\"I need to see the ugly details to trust the progress.\"", b: 1, i: 1}] },
                {
                  runs: [
                    {
                      t: "We rejected simple progress bars in favour of Granular Status Logs, visualising every backend step (VM Prep to Node Imaging to Network Switch).",
                    },
                  ],
                },
              ],
            },
            { type: "spacer" },
            { type: "text", runs: [{t: "Phase 4: Fallback (Safety)", b: 1}] },
            {
              type: "list",
              ordered: false,
              items: [
                { runs: [{t: "\"I need an Undo button if anything goes wrong\"", b: 1, i: 1}] },
                {
                  runs: [
                    {
                      t: "We architected a Rollback Workflow that treats failure as a managed state, allowing users to revert specific entities without losing the entire cluster.",
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
          runs: [{t: "Execution Part 1 : Designing the Trust Architecture", b: 1}],
        },
        { type: "heading", level: 3, runs: [{t: "The \"Empty State\" as an Educator", b: 1}] },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                { t: "The Design Challenge: ", b: 1 },
                {
                  t: "\nSince \"In-Place Conversion\" was a new industry concept, users had no existing mental model for how it worked. An empty dashboard would only increase their confusion and hesitation.",
                },
              ],
            },
            { type: "spacer" },
            {
              type: "text",
              runs: [
                { t: "The Solution: Visualising the Mental Model", b: 1 },
                { t: "\nI utilised the \"Zero Data\" state as an educational real estate." },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Visual Storytelling: ", b: 1 },
                    {
                      t: "I collaborated with our Visual Design team to create a 3-step instructional graphic (Add → Order → Convert).",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "The Goal:", b: 1 },
                    {
                      t: " This wasn't decoration; it was a safety primer. By mapping out the journey upfront, we demystified the \"black box\" process before the user even clicked the first button.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Outcome: ", b: 1 },
                    {
                      t: "Users in testing confirmed that seeing the \"steps\" illustrated reduced their anxiety about \"accidentally\" starting a conversion.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/7e1d2d5e0f.webp", alt: "", w: 1010, h: 683 },
        {
          type: "text",
          runs: [
            {
              t: "Once the Admin connects one or more of their cluster (via standard IP/Auth validation) for conversion, the system immediately transitions from 'Education' to 'Action'. As shown below.",
            },
          ],
        },
        { type: "image", src: "/assets/img/6f2f71848a.webp", alt: "", w: 1010, h: 683 },
        { type: "divider" },
        {
          type: "heading",
          level: 3,
          runs: [{t: "Designing for Control : Cluster Conversion Plan Creation", b: 1}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "Once the Admin selects a cluster and validates the ISO compatibility (Steps 1–3), they enter the critical orchestration phase. This is where we shift from 'Configuration' to 'Risk Strategy'.",
                },
              ],
            },
            { type: "spacer" },
            {
              type: "text",
              runs: [
                {
                  t: "Deep Dive - Designing the \"Blast Radius\" Control (Step 4: Arrange Hosts and VMs):",
                  b: 1,
                },
              ],
            },
            { type: "text", runs: [{t: "The Challenge:", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "Converting 100+ VMs at once is reckless. If one thing fails, the entire production environment goes down.",
                },
              ],
            },
            { type: "spacer" },
            { type: "text", runs: [{t: "The Solution - Visual Staging Builder:", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "I designed a Stage-Based Orchestration model that forces Admins to think in \"safe batches.\"",
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Sequential Logic: ", b: 1 },
                    {
                      t: "Users can drag-and-drop VMs into defined stages (e.g. Stage 1: Dev Test → Stage 2: Non-Critical → Stage 3: Production).",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "The \"Pause\" Safety Net:", b: 1 },
                    {
                      t: " I introduced optional \"Pauses\" between stages. If configured, the system halts automatically after the stage, forcing the Admin to verify stability before manually authorising the next wave. This turns a terrifying bulk operation into a series of controlled, manageable checkpoints.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "The Default Order: ", b: 1 },
                    {
                      t: "That said, not all clusters are equally important and may not need equal, deliberate attention. We implemented an \"Auto-Generate Default Order\" logic. The system analyses the cluster and proposes a recommended order (e.g., separating dependencies), which the Admin can then tweak. This changed the user task from \"Creation\" (hard) to \"Review\" (easy).",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=17-47&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=17%3A47&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 750,
        },
        { type: "divider" },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=26-108&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=26%3A108&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 750,
        },
        { type: "divider" },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "The Challenge - Solving for Scale:", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "While adding VMs to stage, selecting specific VMs is daunting when the list is 1, 000+ rows long. Scrolling is impossible, and Admins rarely memorise IP addresses",
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "The Insight: ", b: 1 },
                    {
                      t: "Admins don't think in \"Rows\"; they think in \"Groups\" (e.g., \"All my Database Servers\" or \"Everything on Host A\").",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [{t: "The Solution: ", b: 1}, {t: "I designed a Metadata-Driven Filter System ."}],
                  children: [
                    {
                      type: "list",
                      ordered: false,
                      items: [
                        {
                          runs: [
                            { t: "Contextual Attributes:", b: 1 },
                            {
                              t: " Instead of a generic search bar, I exposed infrastructure-specific filters like ESXi Groups, VM Tags, and Host Affinity.",
                            },
                          ],
                        },
                        {
                          runs: [
                            { t: "The Win: ", b: 1 },
                            {
                              t: "This turned a manual hunt into a 5-second bulk query (e.g., \"Select all VMs tagged 'Production' in 'Group B'\").",
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
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=26-162&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=26%3A162&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 750,
        },
        { type: "divider" },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "The Detail - Micro interactions:", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "Planning a migration is rarely linear; Admins frequently change their minds. I designed stage-level actions to support non-destructive restructuring.",
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=34-2134&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A2134&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 750,
        },
        { type: "divider" },
        {
          type: "heading",
          level: 3,
          runs: [{t: "Designing for Compliance : Cluster Conversion Plan Creation (Conti’d)", b: 1}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "Deep Dive - Solving the \"Federal\" Block (Compliance vs Scale) (Step 5: Prepare VMs):",
                  b: 1,
                },
              ],
            },
            { type: "text", runs: [{t: "The Context - What is \"VM Preparation\"?", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "\"Preparation\" isn't just a status label; it’s a surgical software operation. The system must access the VM to strip out legacy VMware binaries and inject Nutanix drivers (NGT) so the machine can boot on the new hypervisor. This requires high-level \"Root\" credentials.",
                },
              ],
            },
            { type: "spacer" },
            { type: "text", runs: [{t: "The Initial Hypothesis:", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "The Binary Choice : We initially designed the workflow with two distinct, mutually exclusive paths:",
                },
              ],
            },
            {
              type: "list",
              ordered: true,
              items: [
                {
                  runs: [
                    { t: "Fully Automatic: ", b: 1 },
                    { t: "The system handles everything (requires users to provide Root Credentials)." },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=34-2277&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A2277&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 949,
        },
        {
          type: "list",
          ordered: true,
          start: 2,
          items: [
            {
              runs: [
                { t: "Fully Manual: ", b: 1 },
                { t: "The user runs scripts on every VM (requires zero credentials)." },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/32831903f5.webp", alt: "", w: 1010, h: 1047 },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "The Discovery:", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "The Federal Deadlock : User testing with Federal and Banking clients revealed a critical flaw. These enterprise customers were trapped in a paradox:",
                },
              ],
            },
            {
              type: "list",
              ordered: true,
              items: [
                {
                  runs: [
                    { t: "Security blocked Automation: ", b: 1 },
                    {
                      t: "Strict policies forbid sharing root passwords for sensitive High Value Assets (HVAs), ruling out the \"Automatic\" path.",
                    },
                  ],
                },
                {
                  runs: [
                    { t: "Scale blocked Manual: ", b: 1 },
                    {
                      t: "Converting 800+ VMs manually was operationally impossible, ruling out the \"Manual\" path.",
                    },
                  ],
                },
              ],
            },
            { type: "spacer" },
            { type: "text", runs: [{t: "The Solution - \"Mixed Mode\" Strategy:", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "I realised they didn't need one or the other, they needed both simultaneously. I designed a hybrid \"Mixed Mode\" workflow that allows Admins to bulk-automate 90% of standard VMs while surgically isolating the 10% high-security assets for manual intervention.",
                },
              ],
            },
            {
              type: "text",
              runs: [
                { t: "The Design Decision - Progressive Disclosure: ", b: 1 },
                {
                  t: "The challenge was complexity. For the average user, \"Mixed Mode\" is confusing and unnecessary.",
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Hiding the Complexity: ", b: 1 },
                    {
                      t: "I decided not to present \"Mixed Mode\" as a third upfront option. The flow starts as \"Automatic\" by default.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "On-Demand Power: ", b: 1 },
                    {
                      t: "\"Mixed Mode\" is only triggered if a user explicitly overrides the preparation method for a specific VM row. This keeps the interface clean for 80% of users while invisibly supporting the complex needs of the top 20%.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=38-2318&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=38%3A2318&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 949,
        },
        { type: "divider" },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [{t: "The \"Dead-End\" Prevention - Designing Actionable Failures:", b: 1}],
            },
            {
              type: "text",
              runs: [
                {
                  t: "In testing, we found that \"VM Preparation\" was the highest failure point (due to bad passwords or firewalls).",
                },
              ],
            },
            {
              type: "text",
              runs: [
                { t: "The Anti-Pattern: ", b: 1 },
                {
                  t: "Most tools just say \"Failed\" and force the user to cancel the wizard to fix the issue.",
                },
              ],
            },
            {
              type: "text",
              runs: [{t: "The Solution: ", b: 1}, {t: "I designed an In-Context, educationary flow."}],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "I" },
                    { t: "nline Diagnostics: ", b: 1 },
                    {
                      t: "If a VM fails preparation, the user can hover on error to see the specific log (e.g., \"Authentication Failed\").",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Immediate Fix: ", b: 1 },
                    {
                      t: "Crucially, I added an \"Edit & Retry\" action directly within the error modal. This allows Admins to update the credentials for that specific VM and re-run the script without losing their place in the wizard.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=42-2374&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42%3A2374&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 949,
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        { type: "heading", level: 2, runs: [{t: "Execution Part 2 : Visualising the \"Black Box\"", b: 1}] },
        { type: "heading", level: 3, runs: [{t: "1. The Blueprint: Mapping the \"Invisible\" States", b: 1}] },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                { t: "The Design Challenge: ", b: 1 },
                {
                  t: "\nOnce the Admin clicks \"Convert,\" the system takes over a complex operation involving re-imaging nodes and migrating networking. In the past, CLI tools hid this complexity, leaving Admins terrified that the system had silently crashed during the 4+ hour wait.",
                },
              ],
            },
            {
              type: "text",
              runs: [
                {
                  t: "To solve this, I collaborated with the Backend Engineering and Lead to map the full Finite State Machine of the conversion process. \nWe defined not just the \"Happy Path,\" but every possible failure, pause, and recovery state.",
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/507be75019.webp", alt: "", w: 1010, h: 1347 },
        { type: "divider" },
        { type: "text", runs: [{t: "Refining the State Diagram :", b: 1}] },
        { type: "image", src: "/assets/img/7a17a04788.webp", alt: "", w: 1010, h: 314 },
        { type: "divider" },
        {
          type: "list",
          ordered: true,
          start: 2,
          items: [{runs: [{t: "The Design Impact: Translating Logic to Trust", b: 1}]}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "list",
              ordered: true,
              items: [
                {
                  runs: [
                    { t: "The Granular visibility: ", b: 1 },
                    {
                      t: "\nA cluster goes through multiple intermediate states (e.g. Moving VMs → Imaging Node → Rebooting etc).\n\n",
                    },
                    { t: "The Fix: ", b: 1 },
                    {
                      t: "We rejected a global percentage in favour of Per-Node Progress, giving Admins visibility into exactly where the process is and why it might be waiting.. This confirms the system is alive and active.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "Non-Blocking Monitoring: ", b: 1 },
                    {
                      t: "\nRecognising that migration is a long-running background task, I decoupled the progress view from the session.\n\n",
                    },
                    { t: "The Fix: ", b: 1 },
                    {
                      t: "Admins can navigate away to manage other clusters and return to the Conversion Dashboard at any time without interrupting the operation.",
                    },
                  ],
                },
              ],
            },
            { type: "spacer" },
            {
              type: "text",
              runs: [
                {
                  t: "Before pushing pixels, I built upon the previously shown state diagram and finalised the user actions an admin can take during each state. This informed the API Creation process.",
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=42-2454&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42%3A2454&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 719,
        },
        { type: "divider" },
        {
          type: "list",
          ordered: true,
          start: 3,
          items: [{runs: [{t: "The Solution: A \"Glass-Box\" Monitoring Dashboard", b: 1}]}],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              runs: [
                { t: "The \"Draft\" State - Designing for Asynchronous Work: ", b: 1 },
                {
                  t: "\n\nI introduced a 'Draft' state to support asynchronous workflows. Admins can configure complex conversion plans on a Friday, validate them, and save them to execute during a maintenance window on Saturday. This decoupling reduces the pressure of \"live\" configuration.",
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=70-257&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=70%3A257&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 719,
        },
        {
          type: "list",
          ordered: true,
          start: 2,
          items: [
            {
              runs: [
                { t: "The \"Active\" State - The Glass Box:", b: 1 },
                {
                  t: "\n\nWhile the cluster converts, I surface the specific backend operation (e.g., \"Imaging Node B\"). Crucially, this view is non blocking, the Admin can leave the page to manage other tasks and return to check the \"Heartbeat\" without interrupting the process.",
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=71-273&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=71%3A273&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 719,
        },
        {
          type: "list",
          ordered: true,
          start: 3,
          items: [
            {
              runs: [
                { t: "The \"Exception\" State - Actionable Failure:", b: 1 },
                {
                  t: "\n\nIn a distributed system, partial failures are inevitable. Instead of a generic error, I designed contextual recovery actions (e.g., \"Edit Plan & Retry\"), allowing Admins to fix specific roadblocks mid-flight without scraping the entire plan.",
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=74-7878&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=74%3A7878&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 719,
        },
        {
          type: "text",
          runs: [
            {
              t: "From asynchronous planning (Drafts) to Validation & Preparation to deep observability (Progress) and surgical recovery (Retry), the dashboard supports the Admin through the entire lifecycle of the conversion.",
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
          runs: [{t: "Execution Part 3 : Designing the \"Undo\" Button for Data Centers", b: 1}],
        },
        { type: "heading", level: 3, runs: [{t: "The \"Empty State\" as an Educator", b: 1}] },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "The Fear Factor:", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "The #1 barrier to adoption wasn't technical, it was psychological. Admins were terrified of the \"Point of No Return.\" They feared that if the automation failed halfway, they would be left with a \"bricked\" production cluster and no way back.",
                },
              ],
            },
            { type: "spacer" },
            { type: "text", runs: [{t: "The Solution: Confidence Through Reversibility", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "I designed the Rollback Workflow not just as a recovery tool but as a mechanism to encourage users to take the leap. Knowing there was an \"Escape Hatch\" increased their willingness to start the migration.",
                },
              ],
            },
            { type: "text", runs: [{t: "we decided to offer two levels of rollback:"}] },
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              runs: [
                { t: "Full Cluster Rollback:", b: 1 },
                {
                  t: "\nReverts the entire cluster to its pre-conversion state — ideal for critical failures or when a clean reset is needed.",
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=74-9680&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=74%3A9680&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 719,
        },
        {
          type: "list",
          ordered: true,
          start: 2,
          items: [
            {
              runs: [
                { t: "Selective VM/Host Rollback:", b: 1 },
                {
                  t: "\nAllows users to rollback specific VMs or hosts, offering granular control and minimizing disruption to unaffected components.",
                },
              ],
            },
          ],
        },
        { type: "image", src: "/assets/img/7b68140e87.webp", alt: "", w: 1010, h: 701 },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [{t: "Key Design Decision : The \"Post-Failure\" State (Smart Defaults)", b: 1}],
            },
            {
              type: "text",
              runs: [
                { t: "A critical UX dilemma emerged: ", b: 1 },
                {
                  t: "Once a VM is selectively rolled back, it exists in a state of limbo. It still needs to be converted, but when? Do we force the Admin to immediately re-assign it to a new stage, or do we automate it?",
                },
              ],
            },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "The Insight:", b: 1 },
                    {
                      t: " A rollback means something went wrong. The Admin is currently in a high-stress, troubleshooting mindset. Popping up a modal asking them to re-architect their migration plan introduces unnecessary decision fatigue.",
                    },
                  ],
                  gap: 1,
                },
                {
                  runs: [
                    { t: "The Solution: ", b: 1 },
                    {
                      t: "I implemented a Smart Default logic. The system automatically catches the rolled-back VM and injects it into the immediate subsequent stage.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/YxPzWBKZlLUnvtwA01VDRx/move-in-place-case-study?node-id=78-6346&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=78%3A6346&embed-host=share",
          title: "Interactive Figma prototype",
          w: 1010,
          h: 719,
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              runs: [
                { t: "The Balance of Control : ", b: 1 },
                {
                  t: "This auto-placement removes the cognitive load of micro-management. However, because we had already designed a robust \"Edit Plan\" capability, we preserved User Freedom. If the Admin disagrees with the default placement, they can simply edit the paused plan and move the VM elsewhere.",
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
        { type: "heading", level: 2, runs: [{t: "Beyond V1: Scaling the Trust Architecture", b: 1}] },
        {
          type: "stack",
          gap: 0,
          blocks: [
            { type: "text", runs: [{t: "The Strategic Roadmap:", b: 1}] },
            {
              type: "text",
              runs: [
                {
                  t: "While the MVP successfully de-risked the conversion process , enterprise infrastructure is constantly evolving. My roadmap for the next iteration focuses on transitioning from \"Active Monitoring\" to \"Asynchronous Trust.\"",
                },
              ],
            },
          ],
        },
        {
          type: "columns",
          gap: 30,
          cols: [
            {
              width: 325,
              blocks: [
                { type: "tile", src: "/assets/img/eead08f97f.webp", size: 168, icon: 128 },
                {
                  type: "stack",
                  gap: 0,
                  blocks: [
                    { type: "text", runs: [{t: "Centralized Audit & Event-Driven Observability", b: 1}] },
                    {
                      type: "text",
                      runs: [
                        { t: "The Vision: ", b: 1 },
                        {
                          t: "Currently, the dashboard requires active session monitoring. The next phase introduces a global Tasks & Audit System paired with asynchronous notifications .",
                        },
                      ],
                    },
                    { type: "spacer" },
                    {
                      type: "text",
                      runs: [
                        { t: "The Impact: ", b: 1 },
                        {
                          t: "This empowers Admins to \"fire and forget.\" They will receive realtime alerts only when intervention is required. Furthermore, the centralised Task Log will provide an audit trail for security compliance, allowing teams to self-resolve errors without support tickets .",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              width: 168,
              blocks: [
                { type: "tile", src: "/assets/img/fd1f01d89b.webp", size: 168, icon: 128 },
                {
                  type: "stack",
                  gap: 0,
                  blocks: [
                    { type: "text", runs: [{t: "Dynamic Orchestration (\"Pause-Anywhere\")", b: 1}] },
                    {
                      type: "text",
                      runs: [
                        { t: "The Vision: ", b: 1 },
                        { t: "The current \"Pause\" guardrail must be predefined during plan creation." },
                      ],
                    },
                    { type: "text", runs: [{t: "I am designing a Dynamic Intervention capability ."}] },
                    { type: "spacer" },
                    {
                      type: "text",
                      runs: [
                        { t: "The Impact: ", b: 1 },
                        {
                          t: "This will allow Admins to halt the migration mid-flight based on unforeseen external factors (e.g a sudden network spike) without corrupting the state machine . This shifts the product from a rigid script to a highly flexible orchestration engine.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              width: 168,
              blocks: [
                { type: "tile", src: "/assets/img/1dfefd118c.webp", size: 168, icon: 128 },
                {
                  type: "stack",
                  gap: 0,
                  blocks: [
                    { type: "text", runs: [{t: "Telemetry-Driven Simplification", b: 1}] },
                    {
                      type: "text",
                      runs: [
                        { t: "The Vision: ", b: 1 },
                        {
                          t: "We are currently capturing telemetry on how users interact with the Staging Builder, specifically, whether they manually sequence individual Nodes/VMs or rely on the system's default logic .",
                        },
                      ],
                    },
                    { type: "spacer" },
                    {
                      type: "text",
                      runs: [
                        { t: "The Impact: ", b: 1 },
                        {
                          t: "If the data proves that Node placement is not a user priority, I plan to deprecate that UI. By abstracting node arrangement entirely to the backend, we can drastically reduce the cognitive load of the wizard.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          variant: "cards",
        },
      ],
    },
    { type: "divider" },
    {
      type: "stack",
      gap: 30,
      blocks: [
        { type: "heading", level: 2, runs: [{t: "The Final Section: The Outcome & Reflections", b: 1}] },
        {
          type: "list",
          ordered: true,
          items: [{runs: [{t: "The Business Outcome: UX as a Sales Multiplier", b: 1}]}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "\"Move-in-Place\"/Cluster Conversion wasn't just a feature release; it was a strategic move to capture market share during the VMware acquisition turmoil . By transforming a high-risk, over-the-days manual chore into a trusted, observable workflow, the design directly impacted the bottom line:",
                },
              ],
            },
            { type: "spacer" },
            {
              type: "list",
              ordered: false,
              items: [
                {
                  runs: [
                    { t: "Executive Spotlight: ", b: 1 },
                    {
                      t: "The feature's strategic importance was cemented when it was officially unveiled by the Nutanix CEO during the keynote at the annual .NEXT event .",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "stack",
          gap: 60,
          blocks: [
            { type: "image", src: "/assets/img/bdd668fb9a.webp", alt: "", w: 1010, h: 758 },
            {
              type: "columns",
              gap: 30,
              cols: [
                {
                  width: 237,
                  blocks: [
                    { type: "tile", src: "/assets/img/7621d19dfd.webp", size: 168, icon: 128 },
                    {
                      type: "heading",
                      level: 5,
                      runs: [{t: "Immediate Feature Adoption & Trust", b: 1}],
                      align: "center",
                    },
                    {
                      type: "text",
                      runs: [
                        { t: "During the Early Access (EA) release, customers " },
                        { t: "successfully completed 250+ cluster conversions", b: 1 },
                        {
                          t: ". This high adoption rate validated our \"Trust Architecture,\" proving we had successfully overcome the user's fear of the \"point of no return.”",
                        },
                      ],
                    },
                  ],
                },
                {
                  width: 237,
                  blocks: [
                    { type: "tile", src: "/assets/img/d3441e5cc5.webp", size: 168, icon: 128 },
                    {
                      type: "heading",
                      level: 5,
                      runs: [{t: "90% Uptick in AHV Adoption", b: 1}],
                      align: "center",
                    },
                    {
                      type: "text",
                      runs: [
                        { t: "By 2026, we have more than " },
                        { t: "4M VMs running on AHV (est.)", b: 1 },
                        { t: ", which has doubled in 2 years with an " },
                        { t: "average of conversion of 100 VMs every 2 weeks", b: 1 },
                      ],
                    },
                  ],
                },
                {
                  width: 168,
                  blocks: [
                    { type: "tile", src: "/assets/img/3e9d1aa7f4.webp", size: 168, icon: 128 },
                    { type: "heading", level: 5, runs: [{t: "Driving Revenue", b: 1}], align: "center" },
                    {
                      type: "text",
                      runs: [
                        {
                          t: "The intuitive \"Blast Radius\" control and \"Surgical Rollback\" features instilled enough confidence to directly help ",
                        },
                        { t: "win a major enterprise deal.", b: 1 },
                      ],
                    },
                  ],
                },
                {
                  width: 168,
                  blocks: [
                    { type: "tile", src: "/assets/img/9898ef464a.webp", size: 168, icon: 128 },
                    {
                      type: "heading",
                      level: 5,
                      runs: [{t: "Platform Growth & Discoverability", b: 1}],
                      align: "center",
                    },
                    {
                      type: "stack",
                      gap: 0,
                      blocks: [
                        {
                          type: "text",
                          runs: [{t: "The launch drove a 17% overall uptick in Nutanix Move installations.", b: 1}],
                        },
                        {
                          type: "text",
                          runs: [
                            {
                              t: "Furthermore, the Information Architecture overhaul, transitioning to the new Category First Home Screen, correlated with a ",
                            },
                            { t: "12% growth in secondary migrations (Files and Security Policies)", b: 1 },
                            { t: ", proving the business value of designing for discoverability." },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              variant: "cards",
            },
          ],
        },
        { type: "divider" },
        {
          type: "list",
          ordered: true,
          start: 2,
          items: [{runs: [{t: "Final Thoughts: Designing for Psychology, Not Just Pixels", b: 1}]}],
        },
        {
          type: "stack",
          gap: 0,
          blocks: [
            {
              type: "text",
              runs: [
                {
                  t: "The biggest takeaway from this project was that in enterprise infrastructure, psychological safety is the most important feature. The technical automation was impressive, but it was the UX decisions such as intentional friction, smart defaults, and radical transparency, that actually convinced users to click \"Convert.\"",
                },
              ],
            },
            {
              type: "text",
              runs: [
                {
                  t: "I learned that as a UX Designer, my job isn't just to make the system usable but also to make the user brave.",
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
              t: "I’m always happy to talk about complex systems, finite state machines, or how to design for enterprise trust.",
            },
          ],
          align: "center",
        },
      ],
    },
  ],
}

export default moveInPlace
