export const site = {
	name: 'Adiyo',
	tagline: 'Generative AI for sales managers',
	url: 'https://adiyo.pages.dev',
	email: 'hello@adiyo.ai',
	phone: '+1 (415) 555-0132'
};

export const navGroups = [
	{
		label: 'Product',
		links: [
			{ label: 'Features', href: '/features' },
			{ label: 'How It Works', href: '/how-it-works' },
			{ label: 'Integrations', href: '/integrations' },
			{ label: 'Security', href: '/security' },
			{ label: 'Compare', href: '/compare' },
			{ label: 'Changelog', href: '/changelog' }
		]
	},
	{
		label: 'Solutions',
		links: [
			{ label: 'Overview', href: '/solutions' },
			{ label: 'Sales Teams', href: '/solutions/sales-teams' },
			{ label: 'Sales Managers', href: '/solutions/sales-managers' },
			{ label: 'Revenue Leaders', href: '/solutions/revenue-leaders' }
		]
	},
	{ label: 'Pricing', href: '/pricing' },
	{
		label: 'Customers',
		links: [
			{ label: 'Overview', href: '/customers' },
			{ label: 'Nimbus', href: '/customers/nimbus' },
			{ label: 'Fieldset', href: '/customers/fieldset' },
			{ label: 'Loopwork', href: '/customers/loopwork' }
		]
	},
	{
		label: 'Resources',
		links: [
			{ label: 'Overview', href: '/resources' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'ROI Calculator', href: '/roi-calculator' },
			{ label: 'Help Center', href: '/help' }
		]
	},
	{
		label: 'Company',
		links: [
			{ label: 'About Us', href: '/about' },
			{ label: 'Careers', href: '/careers' },
			{ label: 'Contact', href: '/contact' }
		]
	}
];

export const heroStats = {
	closedWon: '$45B',
	closedWonLabel: 'Closed-won deals influenced by deal insights',
	winRate: '50%',
	winRateLabel: 'Improved win-rates across customer'
};

export const managers = [
	{ name: 'Lucas Jones', role: 'CEO', photo: '/images/lucas-jones.webp', initials: 'LJ' },
	{ name: 'Jane Miller', role: 'Chief Operations Officer', photo: '/images/jane-miller.webp', initials: 'JM' },
	{ name: 'Amy Koto', role: 'CFO', photo: null, initials: 'AK' }
];

export const crmContact = {
	name: 'Mia Carter',
	role: 'Sales Director, Northwind',
	photo: '/images/mia-carter.webp',
	engagement: 80
};

export const insightFeatures = [
	{
		icon: 'gpt',
		title: 'Proprietary GPT-4 model',
		text: 'Adiyo is built on a proprietary GPT-4 model that ingests all of your sales communications.'
	},
	{
		icon: 'signals',
		title: '100+ data signals',
		text: 'Deep, contextual understanding and analysis of over 100 data signals.'
	},
	{
		icon: 'alert',
		title: 'High-value insights, surfaced',
		text: 'Surfacing of high-value insights when a deal trajectory has changed.'
	}
];

export const howItWorksSteps = [
	{
		step: '01',
		title: 'Connect your stack',
		text: 'Adiyo plugs into your CRM, email, calendar and call tools in minutes — Salesforce, Gmail, Slack, WhatsApp and more. No rip-and-replace.'
	},
	{
		step: '02',
		title: 'Adiyo reads every signal',
		text: 'Our proprietary GPT-4 model ingests every sales conversation — emails, calls, transcripts — and analyses 100+ contextual data signals.'
	},
	{
		step: '03',
		title: 'Insights surface in real time',
		text: 'When a deal trajectory changes, managers get the insight at the exact moment it matters — before a deal is lost, not after.'
	},
	{
		step: '04',
		title: 'Coach reps, close more',
		text: 'Managers coach with evidence, not gut feel. Teams report up to 50% improved win-rates across the pipeline.'
	}
];

export const features = [
	{
		icon: 'gpt',
		title: 'Proprietary GPT-4 engine',
		text: 'A model trained on sales conversations, not generic text — it understands pipeline language, objections and buying signals.'
	},
	{
		icon: 'signals',
		title: '100+ data signals',
		text: 'Engagement, sentiment, stakeholder changes, competitor mentions and timing — fused into one contextual view of every deal.'
	},
	{
		icon: 'alert',
		title: 'Trajectory-change alerts',
		text: 'Adiyo flags the moment a deal drifts — a champion goes quiet, a deadline slips, a new stakeholder appears.'
	},
	{
		icon: 'crm',
		title: 'Two-way CRM sync',
		text: 'Insights write back to your CRM automatically, so the pipeline view your managers already live in stays current.'
	},
	{
		icon: 'coach',
		title: 'Real-time coaching cues',
		text: 'Short, specific coaching prompts for 1:1s — what to ask, what to check, and which deal needs attention this week.'
	},
	{
		icon: 'forecast',
		title: 'Forecast you can trust',
		text: 'Deal health scored from evidence, not optimism — so the number you commit is the number you hit.'
	}
];

export const testimonials = [
	{
		quote:
			'Adiyo flagged our biggest at-risk deal three weeks before the close date. We saved it — that one save paid for a year of Adiyo.',
		name: 'Sarah Chen',
		role: 'VP Sales, Nimbus',
		initials: 'SC'
	},
	{
		quote:
			'My managers stopped guessing. Every 1:1 now starts with what Adiyo surfaced — coaching got specific overnight.',
		name: 'Marcus Webb',
		role: 'Sales Director, Fieldset',
		initials: 'MW'
	},
	{
		quote:
			'Forecast accuracy went from hopeful to reliable. The board finally trusts the number we commit.',
		name: 'Priya Nair',
		role: 'Chief Revenue Officer, Loopwork',
		initials: 'PN'
	}
];

export const pricingTiers = [
	{
		name: 'Starter',
		price: 49,
		unit: 'per user / month',
		blurb: 'For small teams getting their first AI co-pilot.',
		features: ['Up to 10 seats', 'CRM + email sync', 'Deal health scores', 'Weekly insight digest', 'Email support'],
		cta: 'Start free trial',
		highlight: false
	},
	{
		name: 'Growth',
		price: 99,
		unit: 'per user / month',
		blurb: 'For frontline managers coaching every week.',
		features: [
			'Unlimited seats',
			'100+ data signals',
			'Real-time trajectory alerts',
			'Coaching cues for 1:1s',
			'Forecast confidence scoring',
			'Priority support'
		],
		cta: 'Request early access',
		highlight: true
	},
	{
		name: 'Enterprise',
		price: null,
		unit: 'custom pricing',
		blurb: 'For global sales orgs with custom needs.',
		features: [
			'Custom GPT-4 tuning',
			'SSO / SCIM & audit logs',
			'Dedicated success manager',
			'Custom data residency',
			'99.9% uptime SLA'
		],
		cta: 'Talk to sales',
		highlight: false
	}
];

export const faqs = [
	{
		q: 'What is Adiyo?',
		a: 'Adiyo is Generative AI built for frontline sales managers. It ingests all of your sales communications — emails, calls and transcripts — and surfaces high-value insights the moment a deal trajectory changes, so managers can coach reps in real time.'
	},
	{
		q: 'Which tools does Adiyo connect to?',
		a: 'Adiyo connects to your CRM (Salesforce and others), Gmail, Slack, WhatsApp, Instagram and your calendar and call tools. Setup takes minutes and there is no rip-and-replace of your existing stack.'
	},
	{
		q: 'Is my sales data used to train models?',
		a: 'No. Your data stays yours. Adiyo runs on a proprietary GPT-4 model and your communications are never used to train shared models. Enterprise plans add custom data residency and audit logs.'
	},
	{
		q: 'How is Adiyo different from a CRM dashboard?',
		a: 'A dashboard shows you what already happened. Adiyo reads the conversations behind the numbers and tells you what is changing right now — and what to do about it — before the deal is lost.'
	},
	{
		q: 'Can I try Adiyo before buying?',
		a: 'Yes. Request early access and our team will set up a pilot on your live pipeline, usually within a week. Starter includes a 14-day free trial.'
	}
];

export const integrations = [
	{ name: 'Salesforce', category: 'CRM', blurb: 'Two-way sync of deals, accounts and activities. Insights write back automatically.', setup: '2-min setup' },
	{ name: 'HubSpot', category: 'CRM', blurb: 'Pipeline, contacts and deal stages stay in sync — no duplicate entry, ever.', setup: '2-min setup' },
	{ name: 'Gmail', category: 'Email', blurb: 'Every sales thread ingested and scored for engagement, sentiment and timing.', setup: '1-click connect' },
	{ name: 'Outlook', category: 'Email', blurb: 'Microsoft 365 mail and calendar signals, with the same 100+ signal analysis.', setup: '1-click connect' },
	{ name: 'Slack', category: 'Messaging', blurb: 'Trajectory alerts land in the channel where your managers already live.', setup: '1-click connect' },
	{ name: 'WhatsApp', category: 'Messaging', blurb: 'Deal updates and coaching nudges on the channel reps actually answer.', setup: '2-min setup' },
	{ name: 'Instagram', category: 'Social', blurb: 'Social touchpoints folded into the engagement picture for consumer-facing teams.', setup: '2-min setup' },
	{ name: 'Zoom', category: 'Calls', blurb: 'Call recordings and transcripts analysed for buying signals and next steps.', setup: '1-click connect' },
	{ name: 'Google Calendar', category: 'Calendar', blurb: 'Meeting cadence, attendance and follow-up timing become forecast signals.', setup: '1-click connect' },
	{ name: 'Microsoft Teams', category: 'Messaging', blurb: 'Alerts, digests and coaching cues delivered inside Teams channels.', setup: '1-click connect' },
	{ name: 'Outreach', category: 'Sales engagement', blurb: 'Sequences and reply data enrich deal health — see which touches move deals.', setup: '2-min setup' },
	{ name: 'DocuSign', category: 'Documents', blurb: 'Contract-sent and signature events feed the timing signals on late-stage deals.', setup: '2-min setup' }
];

export const integrationCategories = ['All', 'CRM', 'Email', 'Messaging', 'Calls', 'Calendar', 'Social', 'Sales engagement', 'Documents'];

export const solutions = [
	{
		slug: 'sales-teams',
		role: 'Sales Teams',
		title: 'For frontline sales teams',
		subtitle: 'Every rep knows which deal needs attention today — and exactly what to do about it.',
		pains: ['Reps guess which deals to chase', 'Follow-ups slip through the cracks', 'CRM updates eat selling time'],
		outcomes: ['A prioritised deal list every morning', 'Next-step prompts on every deal', 'CRM updates written by Adiyo, not reps'],
		stat: { value: '50%', label: 'improved win-rates across customer teams' }
	},
	{
		slug: 'sales-managers',
		role: 'Sales Managers',
		title: 'For frontline sales managers',
		subtitle: 'Coach with evidence, not gut feel. Every 1:1 starts with what changed — and what to do.',
		pains: ['1:1s run on rep optimism, not evidence', 'At-risk deals surface too late', 'Coaching is generic, not deal-specific'],
		outcomes: ['Real-time trajectory-change alerts', 'Specific coaching cues per deal', 'Forecast calls backed by 100+ signals'],
		stat: { value: '3 wks', label: 'earlier warning on at-risk deals' }
	},
	{
		slug: 'revenue-leaders',
		role: 'Revenue Leaders',
		title: 'For CROs and VP Sales',
		subtitle: 'Commit a number the board trusts — built on what buyers did, not what sellers hope.',
		pains: ['Forecasts miss at quarter-end', 'The board asks for a second version', 'No early view of pipeline risk'],
		outcomes: ['Evidence-scored forecast confidence', 'Pipeline risk visible weeks ahead', 'One number, defensible in the boardroom'],
		stat: { value: '$45B', label: 'closed-won deals influenced by Adiyo insights' }
	}
];

export const caseStudies = [
	{
		slug: 'nimbus',
		company: 'Nimbus',
		industry: 'B2B SaaS · 45 reps',
		person: 'Sarah Chen',
		role: 'VP Sales, Nimbus',
		quote:
			'Adiyo flagged our biggest at-risk deal three weeks before the close date. We saved it — that one save paid for a year of Adiyo.',
		metrics: [
			{ value: '32%', label: 'lift in forecast accuracy in two quarters' },
			{ value: '3 wks', label: 'earlier warning on the at-risk deal' },
			{ value: '1 deal', label: 'saved — covering a full year of Adiyo' }
		],
		story: [
			'Nimbus sells a cloud analytics platform to mid-market finance teams. With 45 reps and a six-figure average deal, the forecast call had become the most stressful hour of the week — and the least accurate. Reps reported confidence; the quarter reported otherwise.',
			'The turning point was a single enterprise deal. Adiyo flagged it three weeks before the close date: the champion had gone quiet, a new stakeholder had appeared, and reply latency had doubled. The old process would have found out at the QBR — after the loss.',
			'Sarah’s team ran the play Adiyo suggested: a direct check-in with the champion, a revised mutual close plan, and a second thread into the new stakeholder. The deal closed on the original date.',
			'Two quarters in, Nimbus runs its forecast call off Adiyo’s confidence scores. The call is shorter, the number is more accurate, and the board has stopped asking for a second version.'
		]
	},
	{
		slug: 'fieldset',
		company: 'Fieldset',
		industry: 'Field services software · 28 reps',
		person: 'Marcus Webb',
		role: 'Sales Director, Fieldset',
		quote:
			'My managers stopped guessing. Every 1:1 now starts with what Adiyo surfaced — coaching got specific overnight.',
		metrics: [
			{ value: '50%', label: 'improved win-rates across the team' },
			{ value: '15 min', label: 'of prep per 1:1, down from an hour' },
			{ value: '2×', label: 'more deals coached per week' }
		],
		story: [
			'Fieldset’s sales directors were drowning in 1:1 prep. Each manager owned eight reps, and every Monday meant an hour per rep just figuring out which deals to talk about. Coaching was generic because the preparation was guesswork.',
			'Adiyo changed the starting point. Instead of opening the CRM and scanning, managers open a short list: the three deals that moved this week, the one trajectory change that matters, and the coaching cue for each.',
			'The 1:1s got shorter and sharper. Managers ask one pointed question per deal, agree a single next step with a date, and check the signal again in 48 hours.',
			'Win-rates are up 50% across the team — and managers say the bigger change is cultural: reps now expect specific coaching, and they bring evidence to the conversation instead of optimism.'
		]
	},
	{
		slug: 'loopwork',
		company: 'Loopwork',
		industry: 'Workflow automation · 60 reps',
		person: 'Priya Nair',
		role: 'Chief Revenue Officer, Loopwork',
		quote:
			'Forecast accuracy went from hopeful to reliable. The board finally trusts the number we commit.',
		metrics: [
			{ value: '94%', label: 'forecast accuracy, up from 71%' },
			{ value: '0', label: 'surprise misses in the last two quarters' },
			{ value: '40%', label: 'shorter forecast calls' }
		],
		story: [
			'Loopwork had outgrown its forecast. At 60 reps across three regions, the CRO was stitching together regional numbers that disagreed with each other — and with reality. Two consecutive quarters ended with a miss nobody had seen coming.',
			'Priya’s team connected Adiyo to Salesforce, Gmail and Zoom in a single afternoon. Within a week, the model was scoring every open deal on 100+ signals, and the regional numbers started to agree — with each other, and with the close.',
			'The change showed up first in the forecast call: 40% shorter, because the argument about “whose number” disappeared. The score was the score, and everyone could see the signals behind it.',
			'Forecast accuracy now runs at 94%, up from 71%. The board gets one number, committed with confidence, and Loopwork has had zero surprise misses in the last two quarters.'
		]
	}
];

export const changelog = [
	{
		version: 'v2.4',
		date: 'Nov 12, 2026',
		title: 'Trajectory alerts, rebuilt',
		changes: [
			'Alerts now explain themselves — every flag shows the three signals that moved it',
			'Slack and Teams alerts include a one-tap “coach this deal” action',
			'Forecast confidence scores now update intraday instead of overnight'
		]
	},
	{
		version: 'v2.3',
		date: 'Oct 28, 2026',
		title: 'Coaching cues for 1:1s',
		changes: [
			'Weekly coaching brief per rep: top 3 deals, one question each, one next step',
			'Cues now link straight to the call transcript moment they came from',
			'New digest email for managers who prefer inbox over dashboard'
		]
	},
	{
		version: 'v2.2',
		date: 'Oct 7, 2026',
		title: 'WhatsApp and Instagram signals',
		changes: [
			'Messaging touchpoints now count toward engagement scoring',
			'New signal: reply latency across every channel, not just email',
			'Two-way sync extended to HubSpot deal stages'
		]
	},
	{
		version: 'v2.1',
		date: 'Sep 18, 2026',
		title: 'Forecast confidence, explained',
		changes: [
			'Every forecast number now ships with its evidence trail',
			'Managers can override a score — and Adiyo learns from the override',
			'New pipeline risk view: deals grouped by drift, not just by stage'
		]
	},
	{
		version: 'v2.0',
		date: 'Aug 26, 2026',
		title: 'The 100-signal engine',
		changes: [
			'Signal coverage expanded from 40 to 100+ contextual signals',
			'Stakeholder-change detection: new buyers, champions going quiet',
			'Competitor-mention tracking across calls and emails'
		]
	},
	{
		version: 'v1.9',
		date: 'Jul 30, 2026',
		title: 'Faster setup, cleaner sync',
		changes: [
			'Salesforce and Gmail connect in under two minutes',
			'CRM write-back now includes the insight summary, not just the score',
			'Fixed: duplicate alerts when a deal moved stages twice in a day'
		]
	}
];

export const careers = [
	{
		title: 'Senior Frontend Engineer',
		team: 'Product',
		location: 'Remote · US',
		type: 'Full-time',
		blurb: 'Own the manager dashboard — Svelte, charts that explain themselves, and motion that respects the user.'
	},
	{
		title: 'Sales Engineer',
		team: 'Go-to-Market',
		location: 'Austin, TX · Hybrid',
		type: 'Full-time',
		blurb: 'Run pilots on live pipelines and show sales leaders what their forecast looks like with evidence.'
	},
	{
		title: 'Customer Success Manager',
		team: 'Customer',
		location: 'Remote · US',
		type: 'Full-time',
		blurb: 'Help new teams get their first trajectory alert in week one — and their first saved deal in month one.'
	}
];

export const helpArticles = [
	{ category: 'Getting started', title: 'Connect your CRM in under two minutes', excerpt: 'Salesforce or HubSpot, one OAuth click, and Adiyo starts reading your pipeline the same day.' },
	{ category: 'Getting started', title: 'Invite your managers and set up teams', excerpt: 'Roles, regions and deal ownership — how to mirror your sales org inside Adiyo.' },
	{ category: 'Insights', title: 'What is a trajectory-change alert?', excerpt: 'The moment a deal drifts, Adiyo flags it — and shows the three signals that moved.' },
	{ category: 'Insights', title: 'How the 100+ signals are weighted', excerpt: 'No black box: every score shows its working, and managers can disagree with it.' },
	{ category: 'Integrations', title: 'Which tools does Adiyo connect to?', excerpt: 'CRM, email, calendar, calls and messaging — the full list, and how two-way sync works.' },
	{ category: 'Billing', title: 'How per-user pricing works', excerpt: 'Starter, Growth and Enterprise — what counts as a seat, and how trials and pilots are billed.' },
	{ category: 'Billing', title: 'Cancel, pause or change your plan', excerpt: 'Change plans anytime from Settings. No lock-in, no cancellation calls.' },
	{ category: 'Security', title: 'How Adiyo handles your sales data', excerpt: 'Encryption, residency, retention — and why your data never trains shared models.' }
];

export const comparisonRows = [
	{ feature: 'Reads every sales conversation', adiyo: 'Yes', sheets: 'No', crm: 'No' },
	{ feature: 'Flags deals the moment they drift', adiyo: 'Yes', sheets: 'No', crm: 'Partial' },
	{ feature: '100+ contextual data signals', adiyo: 'Yes', sheets: 'No', crm: 'No' },
	{ feature: 'Specific coaching cue per deal', adiyo: 'Yes', sheets: 'No', crm: 'No' },
	{ feature: 'Forecast confidence, with evidence', adiyo: 'Yes', sheets: 'No', crm: 'Partial' },
	{ feature: 'CRM updates written automatically', adiyo: 'Yes', sheets: 'No', crm: 'No' },
	{ feature: 'Setup time', adiyo: 'Minutes', sheets: 'Hours / week', crm: 'Weeks' },
	{ feature: 'Knows why a deal was lost', adiyo: 'Yes', sheets: 'No', crm: 'Partial' }
];

export const blogPosts = [
	{
		slug: 'generative-ai-sales-forecasting',
		title: 'Why Generative AI Is the End of the Guessed Forecast',
		excerpt:
			'Forecasts built on rep optimism miss. Forecasts built on 100+ signals from real conversations don’t. Here is how managers are using GenAI to commit numbers they actually hit.',
		date: 'Nov 10, 2026',
		readTime: '6 min read',
		category: 'Forecasting',
		body: [
			'Every sales leader has lived the same Monday: the forecast call, the confident numbers, and then the end-of-quarter surprise. The problem was never effort — it was evidence. Reps report what they believe, and belief is a lagging indicator.',
			'Generative AI changes the input. Instead of asking reps how a deal feels, Adiyo reads the deal itself — every email, call and transcript — and scores trajectory from over 100 contextual signals: stakeholder engagement, response latency, competitor mentions, champion behaviour and more.',
			'The result is a forecast built on what buyers actually did, not what sellers hope. Managers we work with describe the shift the same way: the forecast call got shorter, the number got more accurate, and the board stopped asking for a second version.',
			'Three practices make it work. First, surface trajectory changes the day they happen, not at the weekly review. Second, coach on the specific deal, not the generic skill. Third, let the model write the CRM update — reps sell, Adiyo documents.',
			'Forecasting will never be perfect. But it can stop being a guess. That is the whole point of Adiyo.'
		]
	},
	{
		slug: 'coach-reps-in-real-time',
		title: 'Real-Time Coaching: The 15 Minutes That Save a Deal',
		excerpt:
			'Deals are not lost in the QBR. They are lost in the quiet week nobody noticed. Real-time insight turns managers into coaches at the exact moment it matters.',
		date: 'Oct 28, 2026',
		readTime: '5 min read',
		category: 'Coaching',
		body: [
			'Most coaching happens too late. A manager reviews a lost deal, finds the moment it slipped, and explains what should have happened. The rep nods. The next deal slips the same way.',
			'The fix is timing. Adiyo surfaces an insight when the trajectory changes — a champion goes quiet, a deadline moves, a new stakeholder appears — and hands the manager a specific coaching cue for that deal, that week.',
			'The best managers we see do three things with that cue. They ask one sharp question in the 1:1 instead of ten vague ones. They agree a single next step with a date. And they check the signal again in 48 hours, not next quarter.',
			'Coaching is not a skill problem. It is an attention problem. Generative AI gives managers their attention back — pointed at the right deal, at the right time.'
		]
	},
	{
		slug: '100-data-signals-explained',
		title: '100+ Data Signals, Explained: What Adiyo Actually Reads',
		excerpt:
			'“Deep contextual understanding” sounds like marketing. Here is the concrete list — engagement, sentiment, stakeholders, timing — and how each signal changes a deal score.',
		date: 'Oct 14, 2026',
		readTime: '7 min read',
		category: 'Product',
		body: [
			'When we say Adiyo analyses over 100 data signals, we mean it literally — and every one of them is readable in the product. No black box, no “trust the AI”.',
			'Engagement signals cover reply latency, meeting attendance and multi-threading: is the deal getting wider inside the account, or narrower? Sentiment signals track language shifts in calls and emails — enthusiasm cooling is measurable weeks before a rep feels it.',
			'Stakeholder signals watch for champion changes, new economic buyers and ghosting. Timing signals track deadline drift, procurement mentions and budget-cycle language.',
			'No single signal decides a deal. The model weighs them together, the way a great manager would — and shows its working, so a manager can disagree with it. That disagreement is a feature: the manager stays in charge, the AI stays honest.',
			'One hundred signals sounds like a lot. In practice it feels like one thing: a manager who read everything, and remembered what mattered.'
		]
	},
	{
		slug: 'ai-sales-coaching-playbook',
		title: 'The AI Sales Coaching Playbook: 5 Moves That Actually Work',
		excerpt:
			'Coaching is not a skill problem, it is a timing problem. Five plays managers run the week Adiyo flags a deal — and the one question that replaces ten vague ones.',
		date: 'Nov 12, 2026',
		readTime: '6 min read',
		category: 'Coaching',
		body: [
			'Every manager knows coaching matters. Few can say what their coaching changed this week — because most coaching happens after the fact, on a deal already lost.',
			'The playbook starts with timing. When Adiyo flags a trajectory change, the manager has a 48-hour window where a single question can still change the outcome. The play is not a speech; it is one sharp question, one agreed next step, one date.',
			'The five moves: check the champion first, widen the thread before you chase the close, name the drift out loud in the 1:1, agree the next step with a date attached, and re-check the signal in 48 hours — not next quarter.',
			'What makes it work is specificity. “Push harder on this deal” is not coaching. “The champion has not replied in nine days — what do we know about the new stakeholder?” is coaching. Adiyo supplies the specific fact; the manager supplies the judgement.',
			'Run the playbook for a month and the 1:1 changes shape: shorter, sharper, and built around evidence. That is the whole job of a frontline manager — and the whole point of the product.'
		]
	},
	{
		slug: 'forecast-accuracy-metrics-that-matter',
		title: 'Forecast Accuracy: The 4 Metrics That Actually Matter',
		excerpt:
			'Win rate is a lagging indicator. If you want to know whether your forecast is trustworthy, watch these four numbers instead — and what each one tells you to fix.',
		date: 'Nov 4, 2026',
		readTime: '5 min read',
		category: 'Forecasting',
		body: [
			'Most teams measure forecast accuracy once a quarter, after the miss. By then the metric is an autopsy. The teams with trustworthy forecasts watch four numbers weekly — and each one points at a different fix.',
			'First, forecast variance: the gap between the committed number and the closed number, tracked weekly, not quarterly. A variance that narrows over the quarter is a healthy pipeline; one that jumps in the final week is a team reporting hope.',
			'Second, deal drift: how many open deals changed trajectory this week, and in which direction. Drift is normal; unnoticed drift is the killer. Adiyo surfaces drift the day it happens.',
			'Third, champion health: the share of late-stage deals with an engaged champion in the last seven days. When this number falls, the forecast is already wrong — it just does not know it yet.',
			'Fourth, next-step coverage: the share of deals with a dated next step. A pipeline without next steps is a wish list, and wish lists do not close.',
			'None of these metrics needs a new dashboard. They need a model that reads the conversations and tells you the truth early. That is what the forecast is for.'
		]
	},
	{
		slug: 'crm-hygiene-ai-fix',
		title: 'Why CRM Hygiene Is a Manager Problem — and How AI Fixes It',
		excerpt:
			'You cannot coach reps into updating the CRM. You can remove the job entirely: let AI read the conversations and write the update itself.',
		date: 'Oct 21, 2026',
		readTime: '5 min read',
		category: 'Product',
		body: [
			'Every sales org has the same fight: the CRM is out of date, the forecast is built on it anyway, and managers spend their week nagging reps to update fields instead of coaching deals.',
			'The fight is unwinnable because the premise is wrong. Reps do not update the CRM because updating the CRM is not selling. It is admin, and admin loses to the next call every single time.',
			'The fix is to remove the job, not enforce it. Adiyo reads the emails, calls and transcripts directly — then writes the CRM update itself: stage, next step, stakeholder changes, and the insight summary. The rep sells; the system documents.',
			'Managers feel the change first. The forecast call stops being an argument about whose fields are stale, and starts being a conversation about which deals moved. Data hygiene stops being a people problem and becomes a pipeline feature.',
			'If your CRM hygiene program is a training program, it will fail. If it is an automation program, it already worked.'
		]
	}
];
