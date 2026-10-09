import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const COLORS = {
  green: "#00FF41",
  cyan: "#00D4FF",
  purple: "#C770F0",
  bg: "#060611",
  card: "rgba(0,6,18,0.92)",
};

const STRENGTH_STYLES = {
  Strong: { color: COLORS.green, label: "STRONG" },
  Moderate: { color: COLORS.cyan, label: "MODERATE" },
  Weak: { color: "#FFB020", label: "WEAK / EARLY" },
  Gap: { color: "#FF5F57", label: "GAP — NOT YET MET" },
};

function StrengthBadge({ level }) {
  const s = STRENGTH_STYLES[level] || STRENGTH_STYLES.Gap;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: "4px",
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "0.72em",
        fontWeight: 700,
        letterSpacing: "1px",
        color: s.color,
        border: `1px solid ${s.color}`,
        background: `${s.color}18`,
      }}
    >
      {s.label}
    </span>
  );
}

function SourceLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: COLORS.cyan, wordBreak: "break-all" }}
    >
      {children}
    </a>
  );
}

function CriterionCard({ number, name, regText, level, evidence, gapNote }) {
  return (
    <div
      style={{
        background: COLORS.card,
        border: "1px solid rgba(0,212,255,0.18)",
        borderRadius: "10px",
        padding: "22px 24px",
        marginBottom: "22px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "8px",
        }}
      >
        <h4 style={{ color: "white", margin: 0, fontWeight: 700 }}>
          {number}. {name}
        </h4>
        <StrengthBadge level={level} />
      </div>
      <p
        style={{
          color: "rgba(180,200,230,0.6)",
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "0.8em",
          fontStyle: "italic",
          marginBottom: "14px",
        }}
      >
        Regulatory text: &ldquo;{regText}&rdquo;
      </p>
      <ul style={{ color: "rgba(220,230,245,0.9)", lineHeight: 1.7, paddingLeft: "20px" }}>
        {evidence.map((e, i) => (
          <li key={i} style={{ marginBottom: "6px" }}>
            {e}
          </li>
        ))}
      </ul>
      {gapNote && (
        <p
          style={{
            marginTop: "10px",
            marginBottom: 0,
            padding: "10px 14px",
            background: "rgba(255,176,32,0.08)",
            borderLeft: "3px solid #FFB020",
            borderRadius: "0 6px 6px 0",
            color: "rgba(255,220,150,0.9)",
            fontSize: "0.9em",
          }}
        >
          <strong>To strengthen: </strong>
          {gapNote}
        </p>
      )}
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2
      style={{
        color: "white",
        fontWeight: 700,
        fontSize: "1.6em",
        marginTop: "50px",
        marginBottom: "20px",
        borderBottom: `1px solid rgba(0,212,255,0.2)`,
        paddingBottom: "10px",
      }}
    >
      {children}
    </h2>
  );
}

export default function EB1O1Dossier() {
  useEffect(() => {
    document.title = "Evidence Dossier — Private";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow, noarchive";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <Container
      fluid
      style={{ background: COLORS.bg, minHeight: "100vh", padding: "60px 0 100px" }}
    >
      <Container style={{ maxWidth: "980px" }}>
        {/* Header / disclaimer */}
        <div
          style={{
            background: "rgba(255,95,87,0.08)",
            border: "1px solid rgba(255,95,87,0.35)",
            borderRadius: "10px",
            padding: "18px 22px",
            marginBottom: "36px",
            color: "rgba(255,210,205,0.95)",
            fontSize: "0.92em",
            lineHeight: 1.6,
          }}
        >
          <strong>Private working page — not linked from site navigation.</strong>{" "}
          This page is unlisted and marked <code>noindex</code>, but it is not
          password-protected — anyone with this exact URL can view it. Do not
          share the link publicly. This is a research aid for an immigration
          attorney to review, not legal advice, and not a claim that any
          criterion is legally satisfied — that determination belongs to
          counsel and USCIS.
        </div>

        <h1 style={{ color: "white", fontWeight: 800, fontSize: "2.2em" }}>
          Mohammad Ibrahim Saleem —{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.cyan})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            EB-1A / O-1A Evidence Dossier
          </span>
        </h1>
        <p style={{ color: "rgba(200,220,240,0.7)", fontSize: "1.05em" }}>
          Compiled from public sources (LinkedIn, GitHub, IEEE, Crossref,
          OnePetro, Drilling Contractor, MCP Toplist, USCIS) — last updated
          Sep 13, 2026 (scholarly authorship now confirmed directly against
          Crossref DOI records; one unverifiable citation claim from an
          interim research pass was checked and flagged, not included). Field:{" "}
          <strong style={{ color: COLORS.cyan }}>
            AI Security &amp; Agentic AI Systems Engineering
          </strong>
          .
        </p>

        {/* Honest bottom line up front */}
        <div
          style={{
            background: COLORS.card,
            border: `1px solid ${COLORS.cyan}40`,
            borderRadius: "10px",
            padding: "20px 24px",
            marginTop: "24px",
          }}
        >
          <h3 style={{ color: COLORS.cyan, marginBottom: "10px" }}>
            Bottom line, up front
          </h3>
          <p style={{ color: "rgba(220,230,245,0.9)", lineHeight: 1.7, marginBottom: 0 }}>
            Both EB-1A and O-1A require meeting at least{" "}
            <strong>3 of the applicable criteria</strong> below (a lawyer will
            also weigh overall &ldquo;final merits&rdquo;). As of this
            assembly, evidence is genuinely strong on{" "}
            <strong style={{ color: COLORS.green }}>
              Original Contributions
            </strong>{" "}
            and <strong style={{ color: COLORS.green }}>Scholarly Articles</strong>
            , moderate on{" "}
            <strong style={{ color: COLORS.cyan }}>Critical/Leading Role</strong>
            , and currently weak-to-absent on{" "}
            <strong style={{ color: "#FFB020" }}>Awards</strong>,{" "}
            <strong style={{ color: "#FFB020" }}>Membership</strong>,{" "}
            <strong style={{ color: "#FF5F57" }}>
              Published Material About the Beneficiary
            </strong>
            , and{" "}
            <strong style={{ color: "#FF5F57" }}>Judging</strong>. That's a
            real, buildable case — but it is not yet a slam-dunk filing, and
            the specific Drilling Contractor article cited as a model example
            does <strong>not</strong> name Ibrahim personally (verified by
            direct fetch — it quotes only NOV's Junzhe Wang and Jay Yoon),
            so it does not by itself satisfy Criterion 3.
          </p>
        </div>

        <SectionHeading>Criteria Assessment (8 shared EB-1A / O-1A criteria)</SectionHeading>

        <CriterionCard
          number={1}
          name="Awards"
          regText="Documentation of receipt of nationally or internationally recognized prizes or awards for excellence in the field."
          level="Gap"
          evidence={[
            "$16,000 merit scholarship, University of Houston M.S. Cybersecurity program (GPA 3.98/4.0) — a merit award, but program-level, not field-wide/national.",
            "No independently-judged national/international award identified in public search as of this assembly.",
          ]}
          gapNote="Confirm whether the FIND EVIL Hackathon (EvilTrace AI) resulted in any placement/award — if it did, that's real evidence here. Consider applying for recognized awards in the AI-security field (e.g., conference best-paper awards, CTF placements with public leaderboards, vendor bug-bounty recognitions)."
        />

        <CriterionCard
          number={2}
          name="Membership in Associations"
          regText="Membership in associations that require outstanding achievements of members, as judged by recognized national or international experts."
          level="Gap"
          evidence={[
            "ISC2 Certified in Cybersecurity (CC) — an entry-level certification, not a selective membership judged by experts.",
            "No IEEE Senior Member, ACM Distinguished Member, or similarly selective membership identified.",
          ]}
          gapNote="IEEE Senior Member is realistically attainable (requires 10 years experience or documented extraordinary contributions + endorsement by existing senior members) and is one of the more commonly used O-1A/EB-1A membership criteria for engineers. Worth pursuing given the IEEE FMLDS 2025 publication already in hand."
        />

        <CriterionCard
          number={3}
          name="Published Material About the Beneficiary"
          regText="Published material in professional/major trade publications or major media about the beneficiary, relating to their work in the field."
          level="Weak"
          evidence={[
            <>
              Drilling Contractor article on NOV's Mud Report Automation (
              <SourceLink href="https://drillingcontractor.org/generative-ai-agents-reduce-manual-labor-in-extraction-digitalization-of-mud-report-data-78857">
                drillingcontractor.org, 2026
              </SourceLink>
              ) — verified by direct fetch: this article does NOT name Ibrahim. It quotes only Junzhe Wang (Data Scientist) and Jay Yoon (Manager, Data Science & Applied AI) at NOV. It is evidence the underlying system/project got trade-press coverage, not "about the beneficiary" personally.
            </>,
          ]}
          gapNote='This is the single most important gap to close. Criterion 3 needs press that names Ibrahim specifically. Options: (a) ask a reporter/editor for a follow-up quote attributed to him personally on a future story, (b) pursue a byline/guest article under his own name in a trade or security publication (e.g., a technical write-up of LIMA or PentestThinkingMCP for a security outlet), (c) get an interview/profile (podcast transcript, security newsletter feature) where he is the named subject.'
        />

        <CriterionCard
          number={4}
          name="Judging the Work of Others"
          regText="Participation, individually or on a panel, as a judge of the work of others in the same or an allied field."
          level="Gap"
          evidence={["No peer-review, conference program committee, or hackathon-judging activity identified in public search."]}
          gapNote="Low-effort, high-value to pursue: volunteer as a peer reviewer for an IEEE/ACM security workshop (often just requires asking a paper's program chair, especially with a publication already in hand), or judge a university/regional hackathon or CTF."
        />

        <CriterionCard
          number={5}
          name="Original Contributions of Major Significance"
          regText="Original scientific, scholarly, or business-related contributions of major significance in the field."
          level="Strong"
          evidence={[
            <>
              <strong>LIMA</strong> — first-author LLM/MCP-based autonomous penetration-testing framework. Full text obtained and read directly from the University of Houston lab's own hosting (
              <SourceLink href="https://uhssslab.com/papers_pdf/25_LIMA_FMLDS.pdf">
                uhssslab.com, PDF
              </SourceLink>
              ), not just search snippets. Published claims, quoted exactly: Claude 3.5 finished 4 of 5 test targets (4 HackTheBox machines + 1 custom VM) &ldquo;in a mean time of 13 minutes which is up to 2x faster than the expert and required help only for CAPTCHAs&rdquo;; &ldquo;Claude 3.5 achieves 90–100% autonomous completion on low-complexity boxes&rdquo;; token-cost analysis puts a full autonomous run at &ldquo;≤ $0.05.&rdquo; GPT-4o completed 2 boxes in 17.5 minutes; both models failed on one BurpSuite-dependent target. Co-authors confirmed directly from the paper's byline: Sohan Simha Prabhakar, Abhinav Harsha, Devayani Nagabhushan, William Arthur Conklin, Kyu In Lee, Tania Banerjee (University of Houston).
            </>,
            <>
              <strong>PentestThinkingMCP</strong> — open-source MCP server using Beam Search/MCTS for autonomous attack-path planning. Independently verified adoption metrics (checked directly, not self-reported):{" "}
              <strong>38 GitHub stars, 8 forks</strong> (
              <SourceLink href="https://github.com/ibrahimsaleem/PentestThinkingMCP">
                GitHub API, live figure
              </SourceLink>
              ); listed on{" "}
              <SourceLink href="https://mcptoplist.com/server/smithery%2Fibrahimsaleem%2Fpentestthinkingmcp">
                MCP Toplist
              </SourceLink>{" "}
              since May 27, 2025 (rank fluctuates as the directory grows — checked at #78,187 of 127,763 tracked servers at time of this update; treat the specific rank as a live number, not a fixed credential); also listed on{" "}
              <SourceLink href="https://smithery.ai/server/ibrahimsaleem/pentestthinkingmcp">
                Smithery.ai
              </SourceLink>{" "}
              and Glama.ai's MCP directories. 10,000+ monthly tool calls and 99.99% reliability remain self-reported figures — pull Smithery's own analytics dashboard as primary-source proof for filing.
            </>,
            <>
              <strong>NOV Mud Report Automation</strong> — contributed as co-author/engineer to a production system NOV publicly describes (
              <SourceLink href="https://drillingcontractor.org/generative-ai-agents-reduce-manual-labor-in-extraction-digitalization-of-mud-report-data-78857">
                Drilling Contractor, 2026
              </SourceLink>
              ) as reducing prompt-creation time from ~960 min to ~8.8 min per report with a 2–8% accuracy improvement over manual work — a named, deployed, industry-covered system.
            </>,
            "AT&T: designed the agentic AI governance/security-review pipeline that reduced AI use-case approval time from 10–12 days to under 6 minutes; audited a 15-node LangGraph pipeline and found a critical fail-open defect. (Internal — needs a supporting letter from an AT&T manager for filing purposes, since it isn't independently published.)",
          ]}
          gapNote="This is the strongest category — but AT&T and NOV contributions are currently evidenced only by self-description (resume/LinkedIn), not independent corroboration. A recommendation letter from a supervisor at each company describing the significance of the contribution in their own words is the standard, expected way to firm this up for filing."
        />

        <CriterionCard
          number={6}
          name="Authorship of Scholarly Articles"
          regText="Authorship of scholarly articles in the field, in professional journals or other major media."
          level="Strong"
          evidence={[
            <>
              <strong>Published (2), verified directly against Crossref — the official DOI registry</strong>{" "}
              (the strongest possible source: independent of any Ibrahim-controlled page, and independently checkable by anyone, including counsel or USCIS, by resolving the DOI at doi.org):
            </>,
            <>
              &ldquo;LIMA: Leveraging Large Language Models and MCP Servers for Initial Machine Access&rdquo; — DOI{" "}
              <SourceLink href="https://doi.org/10.1109/fmlds67896.2025.00135">
                10.1109/fmlds67896.2025.00135
              </SourceLink>
              , IEEE, published Nov 2, 2025, pages 68–73. Crossref record lists{" "}
              <strong>Mohammad Ibrahim Saleem as first author</strong>, affiliation &ldquo;University of Houston, Department of Information Science Technology,&rdquo; with Sohan Simha Prabhakar as second author.
            </>,
            <>
              &ldquo;Self-Improving Generative AI Agents for Automated Daily Mud Report Parsing&rdquo; — DOI{" "}
              <SourceLink href="https://doi.org/10.2118/230772-MS">
                10.2118/230772-MS
              </SourceLink>
              , SPE, published Mar 10, 2026, IADC/SPE International Drilling Conference and Exhibition. Crossref author order: Junzhe Wang, <strong>Mohammad Ibrahim Saleem</strong> (2nd), Jay Yoon, Ali Marzban, Meng Li, Ricky Castanos, Ian Holman.
            </>,
            "In progress / not yet published: \"Agentic Lean Embedding System for Vulnerability Discovery\" (active research, first author); \"Auto ARC: AI-Powered Floor Plan Generation\" (IEEE SoutheastCon 2026 — Ibrahim's own GitHub lists this as \"to be submitted,\" not submitted or accepted; use that wording, not stronger language); \"EncoderThinkingMCP\" (IEEE Southwest 2026, experiment phase, no DOI/proceedings record yet).",
          ]}
          gapNote="Both DOIs are independently verifiable at doi.org by anyone with no login required — this is now filing-ready primary-source evidence, stronger than screenshots of ResearchGate or OnePetro (both of which were inconsistently accessible across research passes). Still get the actual PDFs from IEEE Xplore / OnePetro / a co-author for the physical filing exhibit."
        />

        <CriterionCard
          number={7}
          name="Critical or Leading Role"
          regText="Employment in a critical or essential capacity for organizations with a distinguished reputation."
          level="Moderate"
          evidence={[
            <>
              AT&amp;T (Fortune 500, distinguished reputation) — AI Security &amp; Governance Engineer, Jan 2026–present. Ibrahim describes his work as: analyzing large codebases with frontier AI/cybersecurity models — including technologies evaluated through strategic partnerships with leading AI labs — to identify high-impact vulnerabilities and support remediation before exploitation, protecting AT&amp;T's products, customer data, and critical telecom infrastructure.
            </>,
            <>
              <strong>Independently verified public context:</strong> AT&amp;T is a confirmed, named participant in{" "}
              <strong>Project Glasswing</strong> — Anthropic's critical-software vulnerability-detection initiative using Claude Mythos Preview, alongside Cisco, Nvidia, Broadcom, and Palo Alto Networks (
              <SourceLink href="https://www.sdxcentral.com/news/att-doubly-secure-as-it-joins-anthropic-partnership-and-assembles-avengers-for-telco-safety/">
                SDxCentral, 2026
              </SourceLink>
              ). This is exactly the kind of &ldquo;frontier AI lab partnership for vulnerability discovery&rdquo; work Ibrahim describes. Important caveat: the article names no individual AT&amp;T employees or teams — it confirms AT&amp;T's AI-security function operates at this level, not that Ibrahim personally worked on Glasswing specifically. That link has to come from an internal AT&amp;T letter, not this article.
            </>,
            "Founder & AI Product Engineer, HireEase (Nov 2024–present) — by definition a leading role; the venture itself has real traction (40,000+ applications processed, 300+ clients), which helps establish HireEase as a legitimate \"establishment,\" not just a side project.",
            "Founder & AI Engineer, WarmNodeAI (Apr 2026–present) — also a leading role, but pre-revenue/early-stage; weaker as \"distinguished reputation\" evidence until it has independent traction or press.",
          ]}
          gapNote={'This criterion lives or dies on a strong recommendation letter from an AT&T manager/director explicitly using language like "critical," "essential," or "leading" to describe the role and its impact, and explicitly naming which frontier-AI-lab partnership(s) (e.g. Project Glasswing) his work touched, if any — a letter that ties his day-to-day work to a named, publicly-verifiable program like Glasswing would be significantly stronger than generic language.'}
        />

        <CriterionCard
          number={8}
          name="High Salary / Remuneration"
          regText="Has commanded (or will command) a high salary or other significantly high remuneration relative to others in the field."
          level="Gap"
          evidence={["No compensation data available in public sources — this criterion cannot be assessed from public research and needs to come directly from Ibrahim (an offer letter, W-2, or comparison to Bureau of Labor Statistics / OES wage data for the role and region)."]}
          gapNote={'Pull the relevant OES/BLS prevailing wage data for "Software Developer" or "Information Security Engineer" in the Houston/Dallas metro and compare against actual AT&T compensation — if it\'s meaningfully above median, this becomes a usable criterion.'}
        />

        <SectionHeading>Possible Alternate/Additional Path: EB-2 NIW</SectionHeading>
        <div
          style={{
            background: COLORS.card,
            border: `1px solid ${COLORS.purple}50`,
            borderRadius: "10px",
            padding: "20px 24px",
          }}
        >
          <p style={{ color: "rgba(220,230,245,0.9)", lineHeight: 1.7 }}>
            The framing Ibrahim used to describe his AT&amp;T work — &ldquo;helping the US safely
            adopt AI while protecting critical infrastructure&rdquo; — is close to the exact
            language a <strong style={{ color: COLORS.purple }}>National Interest Waiver (NIW)</strong>{" "}
            petition (an EB-2 category) is built around, which requires showing: (1) the proposed
            endeavor has substantial merit and national importance, (2) he is well-positioned to
            advance it, and (3) it would benefit the US to waive the job-offer/labor-certification
            requirement. Unlike EB-1A/O-1A, NIW does not require proving &ldquo;extraordinary
            ability&rdquo; — it requires proving the <em>work itself</em> matters nationally. Given
            AI security for critical telecom infrastructure is a live, named national-security
            topic (see Project Glasswing, and the AT&amp;T-led Alliance for Critical Infrastructure
            coalition with JPMorgan Chase, Mastercard, and Berkshire Hathaway Energy — found during
            this research pass but not yet independently tied to Ibrahim's specific work), this may
            be a genuinely stronger or complementary path worth raising with counsel alongside
            EB-1A/O-1A, rather than instead of it.
          </p>
          <p style={{ color: "rgba(220,230,245,0.9)", lineHeight: 1.7, marginBottom: 0 }}>
            <strong>Self-described (not yet independently corroborated):</strong> Ibrahim's own
            account of his AT&amp;T work — &ldquo;analyzing large codebases with frontier AI and
            cybersecurity models, including technologies evaluated through strategic partnerships
            with leading AI labs, to identify high-impact vulnerabilities and support remediation
            before exploitation.&rdquo; This should be cross-checked against and, ideally, echoed by
            an AT&amp;T supervisor letter before use in a filing.
          </p>
        </div>

        <SectionHeading>Verification Notes &amp; Caveats</SectionHeading>
        <div style={{ background: COLORS.card, border: "1px solid rgba(255,176,32,0.3)", borderRadius: "10px", padding: "20px 24px" }}>
          <ul style={{ color: "rgba(220,230,245,0.9)", lineHeight: 1.8, paddingLeft: "20px", marginBottom: 0 }}>
            <li>The Drilling Contractor article does not name Ibrahim — confirmed by direct page fetch, not just search snippet. Do not present it to counsel as "coverage about him" without that caveat.</li>
            <li>A different, similarly-titled paper — "Automatic Daily Drilling Mud Report Processing Using Generative AI to Maximize the Operational Efficiency" (OTC 2025, authors including V. Avasarala of DeepIQ) — exists and is easy to confuse with Ibrahim's SPE/IADC 2026 paper. They are not the same paper; do not conflate them in a filing.</li>
            <li>The SPE/IADC 2026 paper's author list was corroborated via two independent secondary searches (matching LinkedIn acknowledgments exactly), but the primary OnePetro and ResearchGate pages both returned HTTP 403 during this research session and were never directly read. Get the primary-source PDF before filing.</li>
            <li>"10,000+ monthly tool calls, 99.99% reliability, top-rated on Smithery" for PentestThinkingMCP is self-reported (resume/LinkedIn); independent confirmation would mean a screenshot/export from Smithery's own analytics.</li>
            <li>No independent citations of the LIMA paper were found in this research pass (it's a 2025 paper — plausible it's simply too new). Re-check Google Scholar / IEEE Xplore periodically as citations are a strong, easy-to-verify signal once they exist.</li>
            <li>Project Glasswing (AT&amp;T + Anthropic Claude Mythos, critical-software vulnerability detection) is real and independently verified via SDxCentral — but the article names no individual AT&amp;T employees. It supports the plausibility and national-importance framing of Ibrahim's self-described AT&amp;T work; it does not, by itself, prove Ibrahim personally worked on Glasswing. Needs an AT&amp;T letter to close that link.</li>
            <li style={{ color: "#FF8080" }}>
              <strong>Do not use — appears fabricated:</strong> a separate research pass claimed an independent arXiv paper (Lupinacci et al., &ldquo;The Dark Side of LLMs,&rdquo; arXiv 2507.06850) cites PentestThinkingMCP in a bibliography entry attributed to &ldquo;I. S. Mohammad and C. Agent (2025).&rdquo; This was checked two independent ways during this update — a direct full-text fetch of the arXiv paper, and Semantic Scholar's structured reference list (all 30 references enumerated) — and neither shows any match for &ldquo;PentestThinkingMCP,&rdquo; &ldquo;Saleem,&rdquo; or &ldquo;Mohammad.&rdquo; The claimed citation could not be substantiated and should not be presented to counsel or used in any filing unless someone independently opens that exact page and confirms the exact reference number and bibliography entry with a dated screenshot.
            </li>
            <li>Both DOIs for the published papers (10.1109/fmlds67896.2025.00135 and 10.2118/230772-MS) were verified directly against Crossref, the official DOI registration authority, resolving Ibrahim as first author on LIMA and second author on the SPE paper — this is stronger, more independently checkable evidence than the earlier ResearchGate/OnePetro screenshots, and supersedes the prior "paywalled, unverified" caveat on this page.</li>
            <li style={{ color: "#FF8080" }}>
              <strong>Important discrepancy — resolve before filing:</strong> the full LIMA paper text was obtained directly (not a snippet) and read in full. The published paper tests <strong>5 total targets</strong> (4 HackTheBox machines + 1 custom VM), with Claude 3.5 achieving a mean 13-minute completion time and &ldquo;90–100% autonomous completion on low-complexity boxes,&rdquo; at ≤$0.05/run. It does <strong>not</strong> contain the phrases &ldquo;12/15 HTB boxes,&rdquo; &ldquo;8+ hours to 15 minutes,&rdquo; or &ldquo;95% cost reduction&rdquo; that appear on Ibrahim's resume, LinkedIn, and (until this update) this page. The &ldquo;95% success rate&rdquo; figure is defensible as a rounding of the paper's own &ldquo;90–100%&rdquo; language. The other figures are not supported by this published paper — they may describe separate, unpublished informal testing of the PentestThinkingMCP tool itself, but as currently worded they read as claims about this specific published study, and they are not. This should be corrected on the resume/LinkedIn and either dropped or re-sourced to whatever the actual basis for those numbers is before any legal filing, since a reviewer who pulls the primary source (as was just done here) will find the same mismatch.
            </li>
          </ul>
        </div>

        <SectionHeading>Prompt for a Research Agent (to continue this work)</SectionHeading>
        <p style={{ color: "rgba(200,220,240,0.75)" }}>
          Paste this into a fresh Claude Code / Claude.ai session (with web search enabled) to
          re-run and extend this research later — e.g. checking for new citations, press mentions, or awards:
        </p>
        <pre
          style={{
            background: "#03030a",
            border: "1px solid rgba(0,212,255,0.25)",
            borderRadius: "10px",
            padding: "20px",
            color: "rgba(220,230,245,0.9)",
            fontSize: "0.85em",
            lineHeight: 1.6,
            whiteSpace: "pre-wrap",
            overflowX: "auto",
          }}
        >
{`You are researching public evidence for a potential EB-1A/O-1A extraordinary-ability
petition for Mohammad Ibrahim Saleem — AI Security Engineer at AT&T, Houston TX,
M.S. Cybersecurity (Univ. of Houston, GPA 3.98), founder of WarmNodeAI and HireEase.

Known publications (verify each still resolves and check for NEW citations):
- "LIMA: Leveraging Large Language Models and MCP Servers for Initial Machine Access"
  — IEEE FMLDS 2025 (first author)
- "Self-Improving Generative AI Agents for Automated Daily Mud Report Parsing"
  — IADC/SPE International Drilling Conference & Exhibition, March 2026 (2nd author,
  with Junzhe Wang, Jay Yoon, Ali Marzban, Meng Li, Ricky Castanos, Ian Holman)

Known projects: PentestThinkingMCP (github.com/ibrahimsaleem/PentestThinkingMCP,
listed on Smithery.ai, Glama.ai, LobeHub), ClawProtect, SwitchLane, TokenLess,
EvilTrace AI, Saleem Harness / Meta Harness.

For each of the 8 shared EB-1A/O-1A criteria below, search the open web (not just
LinkedIn/GitHub, which are already known) and report ONLY what you can verify by
actually opening the source page — flag anything you could not directly confirm:

1. Awards — any hackathon placements, CTF leaderboard results, conference best-paper
   awards, or named recognitions since [DATE OF LAST RUN].
2. Association membership — IEEE Senior Member status or similar selective memberships.
3. Published material ABOUT him specifically (not just about a system he worked on) —
   he must be named. Check security news outlets, university press releases, podcast
   transcripts, "so-and-so built this" style tech coverage.
4. Judging — peer review credits, hackathon/CTF judging, program committee membership.
5. Original contributions of major significance — new citations of his papers (Google
   Scholar, IEEE Xplore, Semantic Scholar), new independent write-ups of his open-source
   tools, download/star counts on GitHub repos, any inclusion in "best MCP servers" or
   similar curated lists.
6. Scholarly articles — status of "Auto ARC" (IEEE SoutheastCon 2026) and
   "EncoderThinkingMCP" (IEEE Southwest) — published yet? Any new papers.
7. Critical/leading role — any news about WarmNodeAI or HireEase traction, funding,
   or press.
8. High salary — do not fabricate; only report what's independently, publicly stated.

For every claim, give the exact URL you fetched and quote the specific sentence that
supports it. If something can't be verified by directly opening the page (only inferred
from a search snippet), say so explicitly rather than presenting it as confirmed.`}
        </pre>

        <SectionHeading>Full Source List</SectionHeading>
        <Row>
          <Col md={12}>
            <ul style={{ color: "rgba(200,220,240,0.8)", lineHeight: 2 }}>
              <li><SourceLink href="https://www.linkedin.com/in/ibrahimsaleem91/">LinkedIn profile</SourceLink></li>
              <li><SourceLink href="https://github.com/ibrahimsaleem">GitHub profile</SourceLink></li>
              <li><SourceLink href="https://www.fmlds.org/docs/2025-IEEE-FMLDS-Schedule.pdf">IEEE FMLDS 2025 conference schedule (LIMA, paper #132)</SourceLink></li>
              <li><SourceLink href="https://uhssslab.com/papers_pdf/25_LIMA_FMLDS.pdf">LIMA — full-text PDF, hosted by the University of Houston lab</SourceLink></li>
              <li><SourceLink href="https://drillingcontractor.org/generative-ai-agents-reduce-manual-labor-in-extraction-digitalization-of-mud-report-data-78857">Drilling Contractor — NOV Mud Report Automation article</SourceLink></li>
              <li><SourceLink href="https://doi.org/10.1109/fmlds67896.2025.00135">Crossref — LIMA DOI record (authoritative, first author confirmed)</SourceLink></li>
              <li><SourceLink href="https://doi.org/10.2118/230772-MS">Crossref — SPE/IADC paper DOI record (authoritative, full author list confirmed)</SourceLink></li>
              <li><SourceLink href="https://onepetro.org/SPEDC/proceedings-abstract/26DC/26DC/796172">OnePetro — SPE/IADC 26DC proceedings abstract (paywalled, needs direct access)</SourceLink></li>
              <li><SourceLink href="https://mcptoplist.com/server/smithery%2Fibrahimsaleem%2Fpentestthinkingmcp">MCP Toplist — PentestThinkingMCP listing</SourceLink></li>
              <li><SourceLink href="https://github.com/ibrahimsaleem/PentestThinkingMCP">PentestThinkingMCP — GitHub</SourceLink></li>
              <li><SourceLink href="https://smithery.ai/server/ibrahimsaleem/pentestthinkingmcp">PentestThinkingMCP — Smithery.ai listing</SourceLink></li>
              <li><SourceLink href="https://github.com/ibrahimsaleem/ClawProtect">ClawProtect — GitHub</SourceLink></li>
              <li><SourceLink href="https://github.com/ibrahimsaleem/switchlane">SwitchLane — GitHub</SourceLink></li>
              <li><SourceLink href="https://warmnode.me">WarmNodeAI — live site</SourceLink></li>
              <li><SourceLink href="https://www.sdxcentral.com/news/att-doubly-secure-as-it-joins-anthropic-partnership-and-assembles-avengers-for-telco-safety/">SDxCentral — Project Glasswing / AT&amp;T + Anthropic partnership</SourceLink></li>
              <li><SourceLink href="https://www.uscis.gov/policy-manual/volume-2-part-m-chapter-4">USCIS Policy Manual, Vol. 2, Part M, Ch. 4 (O-1A criteria)</SourceLink></li>
              <li><SourceLink href="https://www.law.cornell.edu/cfr/text/8/204.5">8 CFR 204.5(h)(3) — EB-1A 10 criteria (Cornell LII mirror)</SourceLink></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
