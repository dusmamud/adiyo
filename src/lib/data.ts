export const site = {
	name: 'Adiyo',
	tagline: 'Generative AI for sales managers',
	url: 'https://adiyo.pages.dev',
	email: 'hello@adiyo.ai',
	phone: '+1 (415) 555-0132'
};

export const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'How It Works', href: '/how-it-works' },
	{ label: 'About Us', href: '/about' },
	{ label: 'Pricing', href: '/pricing' },
	{ label: 'Features', href: '/features' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Contact', href: '/contact' }
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
	}
];
