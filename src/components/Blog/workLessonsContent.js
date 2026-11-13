import React from "react";

// Lessons-learned series from enterprise AI security and GenAI engineering work.
// Written as general practice: no employer-internal project names, systems, data, or metrics.
const IMG = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1200&h=800&fit=crop`;


// Simple step diagram so each idea is visual at a glance (and still readable by the "Listen" player).
const Flow = ({ caption, steps }) => (
  <figure style={{ margin: "1.5rem 0" }} aria-label={caption}>
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}>
      {steps.map((st, i) => (
        <React.Fragment key={st}>
          <div style={{ flex: "1 1 120px", padding: "0.75rem", borderRadius: 10, textAlign: "center",
            background: "rgba(199,112,240,0.12)", border: "1px solid rgba(199,112,240,0.5)", fontWeight: 600 }}>{st}</div>
          {i < steps.length - 1 && <span aria-hidden="true" style={{ fontSize: "1.4rem", color: "#c770f0" }}>&rarr;</span>}
        </React.Fragment>
      ))}
    </div>
    <figcaption style={{ textAlign: "center", fontSize: "0.9rem", opacity: 0.8, marginTop: "0.5rem" }}>{caption}</figcaption>
  </figure>
);

const PostVideo = ({ src, poster, title }) => (
  <figure style={{ margin: "1.5rem 0" }}>
    <video controls preload="none" poster={poster} style={{ width: "100%", borderRadius: 12 }} aria-label={title}>
      <source src={src} type="video/mp4" />
    </video>
    <figcaption style={{ textAlign: "center", fontSize: "0.9rem", opacity: 0.8, marginTop: "0.5rem" }}>
      Watch the 70-second version of this post
    </figcaption>
  </figure>
);

const workLessonsContent = {
  "human-stays-the-ship-gate": {
    title: "The AI Drafts, the Human Ships: Designing GenAI Workflows With a Real Approval Gate",
    date: "2026-11-12",
    tags: ["Human-in-the-Loop", "GenAI", "AI Governance", "Workflow Design"],
    heroImage: IMG("1521737604893-d14cc237f11d"),
    Content: () => (
      <>
        <p>
          The fastest way to get an AI workflow rejected in an enterprise is to let it send something to a customer
          on its own. The fastest way to get one adopted is to make it obvious that a person still decides what ships.
        </p>
        <Flow caption="The AI never ships. A person does." steps={["Data comes in", "AI drafts the report", "Evidence attached", "Analyst edits and approves", "Human sends it"]} />
        <p>
          I learned this building a GenAI workflow that turns security observations into customer-ready report drafts.
          The model does a lot of the heavy lifting: grouping findings, researching context, writing a first narrative.
          But the analyst, not the AI, approves every release. That one design choice did more for trust than any
          accuracy number.
        </p>

        <h3>What a real ship gate looks like</h3>
        <ul>
          <li><strong>Drafts are editable files, not sent messages.</strong> The system produces Word and Excel drafts the analyst can change. Nothing leaves the building until a human exports it.</li>
          <li><strong>Every draft carries its evidence.</strong> Each claim links back to the observation that produced it, so the reviewer checks facts instead of re-doing the work.</li>
          <li><strong>The approval is recorded.</strong> Job history, edits and the final decision are stored, so you can answer "who approved this and what did they see?" months later.</li>
          <li><strong>There is no hidden "auto-send" switch.</strong> If the button exists, someone will press it under deadline pressure. Don't build it.</li>
        </ul>

        <h3>Why this makes AI faster, not slower</h3>
        <p>
          A review gate sounds like friction. In practice it removes the biggest blocker: fear. Security, legal and the
          business sign off much sooner on a tool that drafts than on a tool that decides. Analysts also stop
          re-checking everything once they see the evidence trail, so the review itself gets shorter over time.
        </p>

        <h3>Takeaways</h3>
        <ol>
          <li>Decide up front which outputs a human must approve, and make that a hard rule in the architecture.</li>
          <li>Give reviewers evidence next to every AI claim.</li>
          <li>Log the approval, not just the generation.</li>
          <li>Measure time saved only after real reviewed runs, using the same start and end points as the manual process.</li>
        </ol>
      </>
    ),
  },

  "let-code-count-let-ai-talk": {
    title: "Let Code Count, Let AI Talk: A Pattern for Trustworthy AI-Generated Reports",
    date: "2026-11-12",
    tags: ["GenAI", "LLM Engineering", "Reliability", "Design Patterns"],
    heroImage: IMG("1551288049-bebda4e38f71"),
    Content: () => (
      <>
        <p>
          If an LLM writes "We found 14 exposed services" in a report, someone will ask where 14 came from. If the
          honest answer is "the model said so," you have a problem. Models are great at language and unreliable at
          arithmetic and bookkeeping.
        </p>
        <Flow caption="Facts from code, words from the model." steps={["Raw data", "Code counts and classifies", "Model writes the story", "Human reviews"]} />
        <p>
          The pattern I now use for any AI-generated report is simple: <strong>deterministic code owns every number
          and every category; the model owns the words.</strong>
        </p>

        <h3>How the split works</h3>
        <ul>
          <li><strong>Counts and statistics come from code.</strong> Totals, breakdowns and charts are computed from the data, never generated.</li>
          <li><strong>Classification starts from a fixed taxonomy.</strong> Categories come from an agreed list. The model may propose a category, but rules and the taxonomy decide what is allowed.</li>
          <li><strong>The model writes narrative around facts it is given.</strong> It receives the computed numbers and approved categories as input and explains them in plain language.</li>
          <li><strong>Research is grounded.</strong> When the model adds context, it works from normalized tags and public identifiers such as CVE IDs, not raw customer data.</li>
        </ul>

        <h3>Why it matters</h3>
        <p>
          This makes reports reproducible: run the same data twice and the numbers match. It makes testing possible,
          because you can unit-test the counting and classification code. And it makes review faster, because the
          reviewer only has to judge the writing, not audit the math.
        </p>

        <h3>A quick check for your own pipeline</h3>
        <ol>
          <li>Highlight every number in an AI-generated output. Can you trace each one to code?</li>
          <li>List every category label. Does each one come from a fixed list?</li>
          <li>Remove the model entirely. Do the facts still exist? If yes, the model is only narrating, which is what you want.</li>
        </ol>
      </>
    ),
  },

  "mask-before-the-model-sees": {
    title: "Mask Before the Model Sees It: Privacy by Design for LLM Pipelines",
    date: "2026-11-12",
    tags: ["Privacy", "Data Masking", "AI Security", "LLM Security"],
    heroImage: IMG("1563986768609-322da13575f3"),
    Content: () => (
      <>
        <p>
          Most teams think about privacy at the model call: "don't send customer data to the LLM." That's necessary,
          but it isn't enough. Sensitive values leak just as easily through logs, the UI, the API, audit trails and
          the final report.
        </p>
        <Flow caption="Mask once, at the door, and it stays masked everywhere." steps={["Raw identifiers", "Mask at ingestion", "Model, logs, UI, API", "Reports stay masked"]} />
        <p>
          The rule I follow now: <strong>mask identifiers at the very first step, and keep them masked on every
          surface the system has.</strong>
        </p>

        <h3>Where identifiers sneak out</h3>
        <ul>
          <li>Prompts and model context</li>
          <li>Application logs and error traces</li>
          <li>The web UI and API responses</li>
          <li>Audit and history records</li>
          <li>Generated documents and exports</li>
          <li>Calls to external enrichment or research services</li>
        </ul>

        <h3>Masking that keeps the data useful</h3>
        <p>
          The hard part is masking without destroying meaning. With network data, for example, analysts still need to
          know that two addresses sit in the same range, or that a device talks to many others. Topology-preserving
          tokenization replaces real values with consistent tokens while keeping those relationships intact, so the
          analysis still works on masked data. If you need the real values back, reverse the mapping only in a
          tightly controlled place, never in the shared workflow.
        </p>

        <h3>Practical rules</h3>
        <ol>
          <li>Mask at ingestion, before anything else touches the data.</li>
          <li>Send external services only normalized tags or public identifiers, never raw values.</li>
          <li>Treat an "unmasked export" feature as a separate, approved capability, not a checkbox.</li>
          <li>Test it: search your logs, UI and reports for real identifiers after a run. Any hit is a bug.</li>
        </ol>
      </>
    ),
  },

  "your-error-messages-leak": {
    title: "Your Error Messages Are Leaking Data: Constant Safe Errors and How to Test Them",
    date: "2026-11-12",
    tags: ["Application Security", "Secure Coding", "Testing", "Privacy"],
    heroImage: IMG("1555949963-ff9fe0c870eb"),
    Content: () => (
      <>
        <p>
          Here's a bug I see all the time in internal tools: a user submits a form with a bad value, and the
          validation error helpfully repeats the value back, or prints the exception that caused it. It feels
          friendly. It's a data leak.
        </p>
        <Flow caption="Same safe message every time, details stay private." steps={["Bad input", "Constant safe error", "Details to masked log", "Marker test proves no leak"]} />

        <h3>Why reflected errors are dangerous</h3>
        <ul>
          <li>They can echo sensitive input into logs, screenshots and support tickets.</li>
          <li>Exception text often exposes file paths, library versions, queries or configuration.</li>
          <li>In a workflow that handles customer data, a single echoed value can undo all your masking work.</li>
          <li>Reflected input is also the first step toward injection bugs in whatever renders the message.</li>
        </ul>

        <h3>The fix: constant, safe responses</h3>
        <p>
          Return the same generic message for a class of failure ("That value isn't valid for this field") and keep
          the detail server-side, in a log that is itself masked. Users still get enough to fix their input; attackers
          and accidental viewers get nothing.
        </p>

        <h3>Make it stick with non-reflection tests</h3>
        <p>
          Fixing it once isn't enough, because the next feature will reintroduce it. Add regression tests that send
          known marker strings as bad input and assert that the marker never appears in the response, the logs or the
          generated files. Run them alongside static analysis (CodeQL, SonarCloud or similar) so the check happens on
          every change, not during an audit.
        </p>

        <h3>Checklist</h3>
        <ol>
          <li>Grep your error handlers for anything that formats user input or exception messages into a response.</li>
          <li>Replace them with constant messages.</li>
          <li>Add a marker-string test for every input path.</li>
          <li>Confirm valid inputs still behave exactly as before.</li>
        </ol>
      </>
    ),
  },

  "threat-modeling-ai-agent-harness": {
    title: "Threat Modeling an AI Agent Harness: Tools, Memory, and the Approval Loop",
    date: "2026-11-12",
    tags: ["Agentic AI", "Threat Modeling", "AI Security", "Agent Harness"],
    heroImage: IMG("1677442136019-21780ecad995"),
    Content: () => (
      <>
        <p>
          An AI agent is not a chatbot with extra steps. It reads untrusted content, decides on its own, and then
          acts through tools. That changes the threat model completely. The question is no longer "can the model say
          something bad?" but "what can the harness let it do when it is wrong?"
        </p>
        <Flow caption="Every arrow is a place an attacker can push." steps={["Untrusted input", "Agent decides", "Tool call guard", "Sandbox and scoped keys", "Human approves risky actions"]} />
        <PostVideo src="/videos/threat-modeling-ai-agent-harness.mp4" poster="/videos/threat-modeling-ai-agent-harness.jpg" title="Threat modeling an AI agent harness, explained in 70 seconds" />
        <p>
          The harness is everything around the model: the loop that plans and calls tools, the memory, the
          credentials, the sandbox and the approval steps. That's where I spend most of my threat-modeling time.
        </p>

        <h3>Six places to look</h3>
        <ol>
          <li><strong>Inputs.</strong> Every file, web page, email, ticket and tool result is a possible prompt injection. Treat tool output as untrusted, not as the system talking to itself.</li>
          <li><strong>Tools.</strong> List every tool and its real permissions. A "read files" tool that can read your SSH keys is a credential-theft tool.</li>
          <li><strong>Credentials.</strong> Does the agent run with a user's full token, or a scoped one? Confused-deputy problems start here.</li>
          <li><strong>Memory.</strong> Can poisoned content written today steer decisions next week? Long-term memory is a persistence mechanism for attackers.</li>
          <li><strong>Execution.</strong> Is shell or code execution sandboxed, with network egress controlled? Pipe-to-shell and data exfiltration usually need both.</li>
          <li><strong>Approval loop.</strong> Which actions need a human yes? Destructive, external and irreversible actions should, and the prompt that asks should show exactly what will run.</li>
        </ol>

        <h3>Controls that actually help</h3>
        <ul>
          <li>Least-privilege tools and scoped, short-lived credentials</li>
          <li>Guards that check tool calls before they execute, not just logs after</li>
          <li>Sandboxed execution with an egress allow-list</li>
          <li>Human approval for high-impact actions, with a clear diff of what will happen</li>
          <li>Observability: every tool call, argument and result traced per session</li>
          <li>A repeatable test suite of injection and misuse cases run on every harness change</li>
        </ul>

        <h3>The one question</h3>
        <p>
          For each tool, ask: "If a malicious document convinced the agent to call this with the worst possible
          arguments, what happens?" If the answer scares you, fix the harness. Don't fix the prompt.
        </p>
      </>
    ),
  },

  "vendor-neutral-llm-red-team": {
    title: "How to Build a Vendor-Neutral LLM Red-Team Suite",
    date: "2026-11-12",
    tags: ["Red Teaming", "Prompt Injection", "LLM Evaluation", "OWASP"],
    heroImage: IMG("1526374965328-7f61d4dc18c5"),
    Content: () => (
      <>
        <p>
          Most teams red-team an LLM once, with a spreadsheet of prompts, against whichever model they use today.
          Then the model changes and the work is lost. A red-team suite is only useful if you can rerun it against any
          provider, any time, and compare results.
        </p>
        <Flow caption="One suite, any model." steps={["Prompt library", "Provider adapter", "Any model", "Judge and canary check", "Report and regression set"]} />

        <h3>The building blocks</h3>
        <ul>
          <li><strong>Provider adapters.</strong> One small interface ("send prompt, get response") with an adapter per provider. The test logic never knows which model it is talking to.</li>
          <li><strong>A curated prompt library.</strong> Organized by category and mapped to the OWASP Top 10 for LLM Applications: prompt injection, sensitive information disclosure, excessive agency, improper output handling and so on.</li>
          <li><strong>An automated judge.</strong> An LLM-as-judge scores each response against a rubric, so you are not reading thousands of outputs by hand. Spot-check the judge, because it can be wrong too.</li>
          <li><strong>Canary checks.</strong> Plant a secret string in the system prompt or context. If it appears in output, the test failed, with no judgment needed.</li>
          <li><strong>Reports.</strong> Results per category and per model, so you can see what got worse after an upgrade.</li>
        </ul>

        <h3>Lessons from building one</h3>
        <ol>
          <li><strong>Curate, don't just collect.</strong> Ten thousand near-duplicate prompts find fewer failures than a few hundred varied ones.</li>
          <li><strong>Separate detection from scoring.</strong> Canaries are binary and trustworthy; judge scores need calibration.</li>
          <li><strong>Turn found failures into regression tests.</strong> Every attack that worked once should run before every release.</li>
          <li><strong>Never publish a "this model is safe" score.</strong> A suite shows the failures it found, not the absence of all others.</li>
        </ol>
      </>
    ),
  },

  "map-elites-for-red-teaming": {
    title: "MAP-Elites for LLM Red Teaming: Finding More Kinds of Failures, Not Just More Failures",
    date: "2026-11-12",
    tags: ["Red Teaming", "MAP-Elites", "Quality Diversity", "AI Security"],
    heroImage: IMG("1518770660439-4636190af475"),
    Content: () => (
      <>
        <p>
          A fixed list of attack prompts has a blind spot: it only finds the failures you already imagined. Worse,
          if you search automatically for "the prompt that breaks the model best," you usually end up with fifty
          variations of the same trick.
        </p>
        <Flow caption="Keep the best attack in every cell, not just one winner." steps={["Seed prompts", "Mutate", "Score with judge", "Place in grid cell", "Keep best per cell"]} />
        <p>
          MAP-Elites is a quality-diversity search algorithm that fixes this. Instead of finding the single best
          attack, it fills a grid of different attack types and keeps the best attack in each cell.
        </p>

        <h3>How it works, simply</h3>
        <ol>
          <li><strong>Pick two or three dimensions that describe an attack.</strong> For example: attack style (role-play, encoding, instruction override) and target (data leak, unsafe tool use, policy bypass).</li>
          <li><strong>Make a grid.</strong> Each cell is one combination, such as "encoding attack aiming at a data leak."</li>
          <li><strong>Generate and mutate prompts.</strong> Score each one with your judge, and place it in the matching cell.</li>
          <li><strong>Keep only the best per cell.</strong> Then mutate the elites to search further.</li>
        </ol>
        <p>
          After a run you get a map: which kinds of attack work against this model, which don't, and how strong the
          best one in each area is. That map is far more useful to a defender than a single high score.
        </p>

        <h3>Practical tips</h3>
        <ul>
          <li>Start with a small grid. Two dimensions with four or five values each is plenty.</li>
          <li>Seed it with a curated prompt library so the search doesn't start from nothing.</li>
          <li>Save the elites as a regression set and rerun them on every model or prompt change.</li>
          <li>Compare maps across models to choose defenses, not to crown a "safest" model.</li>
        </ul>
      </>
    ),
  },

  "saying-no-to-a-shiny-ai-tool": {
    title: "How to Say No to a Shiny AI Security Tool (and When You Should)",
    date: "2026-11-12",
    tags: ["Vendor Evaluation", "AI Security", "Decision Making", "Security Tools"],
    heroImage: IMG("1460925895917-afdab827c52f"),
    Content: () => (
      <>
        <p>
          Every month there is a new AI product that promises to find vulnerabilities on its own. Some are great. Many
          are previews with impressive demos and open questions underneath. Part of an AI security engineer's job is
          to evaluate them calmly, and sometimes to recommend not running a pilot yet.
        </p>
        <Flow caption="A clear decision beats a pilot nobody can measure." steps={["Shiny new tool", "Ask the 7 questions", "Check your own evidence", "Go, or a documented no-go"]} />

        <h3>Questions I ask before any pilot</h3>
        <ol>
          <li><strong>Availability.</strong> Is it generally available, or a private preview that could change or disappear?</li>
          <li><strong>Scope.</strong> Which languages, repos and environments does it really cover today?</li>
          <li><strong>Auditability.</strong> Can I see why it flagged something, and reproduce the result?</li>
          <li><strong>Data handling.</strong> Where does my code or data go, and who can see it?</li>
          <li><strong>Cost model.</strong> How does token or compute use grow with repo size and scan frequency?</li>
          <li><strong>Integration.</strong> Does it fit the CI, ticketing and triage process we already run?</li>
          <li><strong>Evidence.</strong> Are the benchmark numbers the vendor's own, or something I can measure on my code?</li>
        </ol>

        <h3>Vendor benchmarks are not your results</h3>
        <p>
          A vendor's detection rate was measured on their chosen test set. Until you run it on your own code with your
          own triage, you don't know your results. Write that distinction into the evaluation so nobody quotes the
          marketing number as an internal finding.
        </p>

        <h3>A no-go is a valid outcome</h3>
        <p>
          If the product is still in preview, can't be audited, or has unclear costs, "not now" is a good decision.
          Document why and list what would change your mind, then revisit when it matures. A clear no-go saves more
          time than a pilot nobody can evaluate.
        </p>
      </>
    ),
  },

  "agents-planned-my-test-backlog": {
    title: "AI Agents Planned My Test Backlog: Jira Automation With a Human-Approved Pilot",
    date: "2026-11-12",
    tags: ["AI Agents", "Automation", "Jira", "Test Planning"],
    heroImage: IMG("1498050108023-c5249f4df085"),
    Content: () => (
      <>
        <p>
          Turning an old test plan into a real backlog is tedious work: check every case against the current system,
          fix the outdated ones, add what's missing, then create tickets, label them and assign owners. It's
          exactly the kind of work AI coding agents are good at, as long as a person stays in charge of the decisions.
        </p>
        <Flow caption="Small pilot first, then scale, then verify." steps={["Old test plan", "Agent reviews and revises", "Human approves", "Pilot tickets", "Create rest and read back"]} />

        <h3>How I ran it</h3>
        <ol>
          <li><strong>Review against the source of truth.</strong> The agent compared each test case with the current code and runbooks, and flagged cases that no longer matched.</li>
          <li><strong>Revise and extend.</strong> It corrected outdated cases and proposed new checks for gaps, each with a priority. I reviewed and approved the plan.</li>
          <li><strong>Pilot first.</strong> We created a handful of tickets through the Jira API and checked them by hand before doing the rest.</li>
          <li><strong>Create the rest, then read back.</strong> After approval, the agent created the remaining tickets and read every one back through the API to confirm parent, labels and assignee were right.</li>
        </ol>

        <h3>What I learned</h3>
        <ul>
          <li><strong>The pilot is the safety net.</strong> A small first batch catches wrong fields and labels before they multiply across dozens of tickets.</li>
          <li><strong>Read-back beats trust.</strong> Don't assume an API call did what you asked. Verify the result.</li>
          <li><strong>Planned is not executed.</strong> A well-organized backlog is progress, but the tests haven't run yet. Say so in status updates.</li>
          <li><strong>Don't claim time saved without a baseline.</strong> It felt much faster, but unless you timed the manual way too, it's an impression, not a metric.</li>
        </ul>
      </>
    ),
  },

  "main-engineer-first-ai-mvp": {
    title: "What I Learned as Main Engineer on My First Enterprise AI MVP",
    date: "2026-11-12",
    tags: ["Career", "GenAI", "Engineering Leadership", "MVP"],
    heroImage: IMG("1522075469751-3a6694fb2f61"),
    Content: () => (
      <>
        <p>
          Being the main engineer on an AI MVP is a different job from writing the code. You own the path from a
          vague business pain to something people can actually run, with product, architecture, analysts, DevOps
          and security all expecting different things. Here's what I'd tell myself at the start.
        </p>
        <Flow caption="The path from pain point to something people can run." steps={["Discovery", "Written boundaries", "Fixed pipeline", "Release runbooks", "Honest status"]} />

        <h3>1. Discovery is the real first milestone</h3>
        <p>
          Before designing anything, collect the existing scripts, the real examples of finished output, the
          templates and the categorization rules people already use. Sit with the people doing the work. Most of the
          requirements live in their heads, not in the ticket.
        </p>

        <h3>2. Write the boundaries down early</h3>
        <p>
          Decide in writing what the AI may do and what it may never do: which data it can see, what gets masked,
          which outputs need human approval. These boundaries made every later design discussion shorter.
        </p>

        <h3>3. Build a fixed pipeline before an "agent"</h3>
        <p>
          A clear, ordered pipeline of stages is easier to test, explain and debug than an open-ended agent. Use the
          model inside specific stages where it adds value, and keep the orchestration deterministic.
        </p>

        <h3>4. Release preparation is engineering work</h3>
        <p>
          Deployment guides, recovery steps, rollback plans, secret and network requirements: none of it is glamorous,
          and all of it decides whether the MVP survives contact with a real environment. Write it while the design
          is fresh.
        </p>

        <h3>5. Report status honestly</h3>
        <p>
          Be precise about what is demonstrated locally, what runs in a non-production environment, and what has
          business sign-off. Precise status builds more trust than optimistic status, especially when something blocks you.
        </p>
      </>
    ),
  },

  "non-production-is-a-real-milestone": {
    title: "Demo, Non-Production, Pilot, Production: Honest Release Language for AI Projects",
    date: "2026-11-12",
    tags: ["Career", "Release Management", "GenAI", "Resume Tips"],
    heroImage: IMG("1504639725590-34d0984388bd"),
    Content: () => (
      <>
        <p>
          In AI projects the word "deployed" gets stretched until it means nothing. A notebook demo, a container in a
          test environment and a system customers rely on all get called "in production." That hurts teams, and it
          hurts your credibility when someone asks a follow-up question.
        </p>
        <Flow caption="Four different words. Use the right one." steps={["Demo", "Non-production", "Pilot", "Production"]} />

        <h3>Four stages, four meanings</h3>
        <ul>
          <li><strong>Demo:</strong> It works on known inputs, usually locally. It proves the idea.</li>
          <li><strong>Non-production:</strong> It runs in a real environment with real infrastructure, but not for real users. It proves it can be operated: config, secrets, networking, recovery.</li>
          <li><strong>Pilot:</strong> Real users, limited scope, with agreed success criteria. It proves value.</li>
          <li><strong>Production:</strong> Approved, supported, monitored and relied on. It proves the business accepts it.</li>
        </ul>

        <h3>Non-production deserves credit</h3>
        <p>
          Getting an AI system into a non-production environment is hard: identity, network egress, proxies, TLS,
          persistent storage and integrations all show up at once. It's a genuine milestone. Call it what it is, and
          list what's left: approvals, integration fixes, reviewed trial runs.
        </p>

        <h3>How to write it on a resume</h3>
        <ol>
          <li>Name the stage: "first non-production version", "pilot with three teams", "production".</li>
          <li>Describe your part: main engineer, contributor, reviewer.</li>
          <li>Use numbers only when they were measured, and say what they measure (tests passed are not time saved).</li>
          <li>Be ready to explain what was still open. Interviewers respect that far more than inflation.</li>
        </ol>
      </>
    ),
  },

  "spec-driven-development-fast-paced": {
    title: "Spec First, Ship Fast: Spec-Driven Development With AI Coding Agents",
    date: "2026-11-12",
    tags: ["Spec-Driven Development", "AI Coding Agents", "Productivity", "Engineering Practice"],
    heroImage: IMG("1515879218367-8466d910aaa4"),
    Content: () => (
      <>
        <p>
          AI coding agents can write a lot of code very fast. That's the problem. Without a clear spec, they write a
          lot of the wrong code very fast. In fast-paced work, the thing that keeps me quick is not typing speed or a
          better model. It's writing the spec first.
        </p>
        <Flow caption="You write the intent, the agent writes the code." steps={["Spec and boundaries", "Acceptance tests", "Agent builds in small steps", "Review against spec"]} />

        <h3>What goes into the spec</h3>
        <ul>
          <li><strong>The problem and the user.</strong> Who uses this and what they do today.</li>
          <li><strong>Boundaries.</strong> What the system must never do: data it can't see, actions it can't take without approval.</li>
          <li><strong>Acceptance criteria.</strong> Concrete, testable statements of "done."</li>
          <li><strong>Interfaces.</strong> Inputs, outputs, file formats and API shapes.</li>
          <li><strong>Out of scope.</strong> What we are deliberately not building yet.</li>
        </ul>

        <h3>The loop</h3>
        <ol>
          <li>Write the spec and acceptance criteria with the stakeholders.</li>
          <li>Turn the criteria into tests before the implementation.</li>
          <li>Let the agent implement in small steps, each one running the tests.</li>
          <li>Review the diff against the spec, not just "does it run."</li>
          <li>Update the spec when reality changes, so it stays the source of truth.</li>
        </ol>

        <h3>Why it's faster overall</h3>
        <p>
          Specs cut rework, the real time sink. They also make agents safer: a written boundary such as "the analyst
          approves every release" stops a well-meaning agent from adding an auto-send feature nobody asked for. And
          when priorities change mid-week, you change one document instead of untangling code.
        </p>
        <p>
          The agent writes the code, but you write the intent. Keep that division and you can move fast without
          breaking the things that matter.
        </p>
      </>
    ),
  },
};

export default workLessonsContent;
