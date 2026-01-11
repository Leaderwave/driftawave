
export interface EnergyData {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  destinations: string[];
}

export interface ActivityData {
  slug: string;
  title: string;
  subtitle: string;
  content: string; // HTML/Markdown string
  destinations: string;
}

export interface LegalData {
  slug: string;
  title: string;
  lastUpdated?: string;
  content: string;
}

export const ENERGIES: Record<string, EnergyData> = {
  "creative-pulse": {
    slug: "creative-pulse",
    title: "Creative Pulse",
    subtitle: "Dance With Soul & Inspiration",
    intro: `
      <p>City jungles and graffiti walls. Stoic temples and twining vines. Medieval castle buffets. Folklore for breakfast.</p>
      <p>Raw Conversations. Fuel Strategy. Steam blown off, ideas dialing in.</p>
      <p>Creative setting? Say no more. Dance along the myths.</p>
    `,
    destinations: [
      "Barcelona à la Bohème",
      "Berlin in Full",
      "Tuscany by Ambiance",
      "Bali on the Rise",
      "Mexico City Open Air",
      "Cape Town’s Jeep Run",
      "Medellin’s Art Walls",
      "Athens Aesthetics",
      "Gran Canaria Drifts",
      "Buenos Aires’ Tango Vanity",
      "Santiago Spins",
      "Vienna’s Soundboard",
      "Cartagena on Hype",
      "Prague Cultural Hand-off",
      "India’s Sacred Chants",
      "Cusco’s Art Sparks",
      "Puglia’s Lemon Paradise"
    ]
  },
  "edge-of-comfort": {
    slug: "edge-of-comfort",
    title: "Edge of Comfort",
    subtitle: "The Ultimate Adventure Offsite Experience",
    intro: `
      <p>Looking for a high-impact team retreat that fuels adrenaline, connection, and clarity?</p>
      <p>Bold Bounding and Runway Sprints. Adrenaline shaking hands with leadership relief. → The power of letting go.</p>
      <p>Ready to freefall? We got you!</p>
    `,
    destinations: [
      "New Zealand’s Hidden Paths",
      "African Lion Twists",
      "Caribbean Adventures",
      "Deserts & Moroccan Sway",
      "Vietnamese Roadies",
      "Portuguese Safaris",
      "Brazilian Cliffhangers",
      "Peruvian Peaks Unboxed"
    ]
  },
  "mountain-air": {
    slug: "mountain-air",
    title: "Mountain Air",
    subtitle: "The Offsite That Makes You Ten Years Younger",
    intro: `
      <p>Born in ski gear? Boarder by mindset? Fresh-powder energy in your veins. Mountain views make your heart bounce like a passion drum.</p>
      <p>High-altitude clarity. Fire-side storytelling. Morning hike, strategy over lunch, cheeky boogies and après-sunset epiphanies.</p>
      <p>Whether you're here to reset leadership or bring your squad back into sync. This is where big visions become real, with a crust of belief.</p>
    `,
    destinations: [
      "Austrian Cabins & Slopes",
      "Swiss Founders Escape",
      "Montenegro’s Air & Waves",
      "Japanese Culture Sprinkles",
      "Balkan Motion Groove",
      "Italian Dolomite (Tr)action"
    ]
  },
  "ocean-flow": {
    slug: "ocean-flow",
    title: "Ocean Flow",
    subtitle: "The Balanced Hypesite",
    intro: `
      <p>Coastal waters splashing rocks. Majestic sunsets. Sunrise runs. Surfboard breaks and cold-water plunges.</p>
      <p>A rocking boat. Skies filled with laughter. There’s something about the life below and the calm above: presence like nowhere else.</p>
    `,
    destinations: [
      "Greek Whispers & Stoic Waves",
      "Croatian Highlights",
      "Italy Southbound Takeoff",
      "Panama’s Coastal Glow",
      "Costa Rica’s Jungle Ventures",
      "Australian Offbeat Getaways",
      "Aruba’s Ocean Cribs",
      "Bonaire’s Shore Dive",
      "Mexico’s Pacific Punch",
      "Gran Canaria in Flip-Flops",
      "Brazil’s Jungle Drum Beat",
      "Portugal’s Mysterious Trails",
      "Philippines' Glory Mazes",
      "Nicaragua’s Surf Sync",
      "Morocco's Wild Waves",
      "Ericeira Surf Sprint",
      "Los Cabos’ Singing Whales"
    ]
  },
  "wild-rooted": {
    slug: "wild-rooted",
    title: "Wild & Rooted",
    subtitle: "You Knew You Needed It",
    intro: `
      <p>Tree whispers and barefoot walks. Bonfire soul crackers and triple-bound journeys.</p>
      <p>Bewild. Rewild. Reset & rise. Ground in nature. Lift with intention.</p>
      <p>Digital detox or connection that lasts? Check box! You’re syncing.</p>
    `,
    destinations: [
      "Ubud Bali Blush",
      "Tulum’s Deep dives",
      "French Vineyard Estates",
      "Irish Lush",
      "Madeira’s Forrest Hikes",
      "Daintrees’ Forrest Shivers",
      "Crete’s Mountain Glory",
      "Costa Rica’s Landed Earth",
      "South African Hacks"
    ]
  }
};

export const ACTIVITIES: Record<string, ActivityData> = {
  "team-building": {
    slug: "team-building",
    title: "Culture Sparks (Team Building)",
    subtitle: "Turn Company Culture Into Your Biggest Competitive Edge",
    content: `
      <h3>The Remote Team Reality Check</h3>
      <p>Remote teams excel at digital collaboration and can absolutely build meaningful connections online. What's often missing is the deeper trust and empathy that emerges through shared physical experiences.</p>
      <p>The most successful companies are built upon a strong company culture! It influences everything from employee satisfaction to overall performance. Building this culture requires more than just occasional team activities. It needs intentional, transformative experiences that foster real connections and trust.</p>
      
      <h3>Why Traditional Team Building Fails for Remote Teams</h3>
      <p>Most companies cling to the same tired corporate playbook: rented conference rooms, icebreaker activities, and 'vulnerability' exercises that teach teams to perform authenticity rather than build it.</p>
      <p>They do not understand the needs of remote teams in depth, requiring different approaches and planning with intention. What you need is an oxytocin explosion, the bonding hormone that creates unshakeable partnerships.</p>
      
      <h3>Team Building Activities That Build Real Trust</h3>
      <p>When your team navigates mountain trails together, titles disappear and true leadership emerges. When they solve actual challenges in stunning locations, breakthrough thinking happens naturally. When they share vulnerability in the wild rather than conference rooms, bonds form that transfer directly to work performance.</p>
      
      <h3>Remote-First Data & ROI</h3>
      <ul>
        <li><strong>Retention:</strong> Your top-performing talent doesn't even dare think about leaving when culture becomes your competitive moat.</li>
        <li><strong>Engagement:</strong> Teams that forge authentic connections through adventure show measurably higher productivity.</li>
        <li><strong>Viral Recruitment:</strong> A-game talent flies through your door after employer branding built on real experiences.</li>
      </ul>
    `,
    destinations: "Costa Rica's cloud forests, Cape Town's rugged coastlines, Bali's creative energy hubs, Barcelona and Madrid's innovation districts, Tuscany's inspiring landscapes, Madeira and Porto's Atlantic coastlines."
  },
  "startup-scaleup": {
    slug: "startup-scaleup",
    title: "Startup & Scale Up Retreats",
    subtitle: "Smash Silos. Celebrate Wins!",
    content: `
      <h3>Break Silos. Ship Faster. Scale Culture.</h3>
      <p>You just closed Series A. Your team doubled. And suddenly nobody knows what anyone else is building. Sound familiar? The brutal truth: 70% of scale-ups fail not because of product-market fit, but because of people problems. Silos form. Mission dilutes.</p>
      <p>The startups that scale successfully do one thing differently: They invest in culture before it breaks.</p>
      
      <h3>From Startup Chaos to Scale-Up Systems</h3>
      <p>You don't need trust falls. You need three days where your engineering, product, and go-to-market teams actually build together instead of building walls.</p>
      <p>We design experiences that break down silos, create genuine cross-team connections, and build the communication foundations that scale-ups desperately need. When teams truly understand each other's worlds, everything accelerates.</p>
      
      <h3>What Scale Ups Achieve with Offsite Retreats</h3>
      <ul>
        <li><strong>Mission-Vision Amplification:</strong> Align everyone on where you're going and why it matters.</li>
        <li><strong>Scale-Up Operating System:</strong> Build the communication rhythms and decision frameworks that preserve startup speed at scale.</li>
        <li><strong>Cross-Functional Velocity:</strong> When silos disappear, shipping speed doubles.</li>
        <li><strong>Operational Efficiency:</strong> Stop burning cash on miscommunication and duplicated efforts.</li>
      </ul>
    `,
    destinations: "Costa Rica's 'Pura Vida', Athens' private beach, Thessaloniki's tech hub, La Dolce Vita in Tuscany, Puglia's coastal creativity, Bali co-work vibes, Barcelona to the Canary Islands, South African safaris."
  },
  "marketing-creativity": {
    slug: "marketing-creativity",
    title: "Growth Marketing Retreats",
    subtitle: "Brand Swell Wave",
    content: `
      <h3>Your Marketing Team Has Untapped Genius</h3>
      <p>60% of their creative potential remains locked while competitors gain ground. And let’s be honest, it’s not that easy while clients are scattered across multiple channels. To keep doing what you’ve always done has never been a bigger risk.</p>
      <p>The good news for marketers? Branding is finally getting the attention and credits it deserves!! Let’s get your team in the saddle and soar before the competition catches up.</p>
      
      <h3>Why Marketing Retreats Outperform Old School Workshops</h3>
      <p>Today it is all about agency, creativity and innovation. Creativity finds us when we let go, and the dots connect simultaneously. A workshop can help to understand a new tool, yet what you are looking for is a mindset shift with different perspectives, newly wired dots, AI-native skills and a team spirit that pops off any marketing channel.</p>
      
      <h3>What Legendary Growth Marketing Looks Like</h3>
      <ul>
        <li><strong>Strategies That Survive Tool Changes:</strong> Growth approaches rooted in customer psychology rather than platform features.</li>
        <li><strong>Creative Campaigns That Competitors Can't Copy:</strong> Ideas born from authentic team insight during creative marketing workshops.</li>
        <li><strong>Focus That Drives Results:</strong> Teams that discover clarity through shared adventure naturally prioritize high-impact activities.</li>
      </ul>
    `,
    destinations: "Guatemala City, Mexico City, Peru’s mysteries, Buenos Aires, Florianópolis, Cape Town's iconic Lion’s Head."
  },
  "leadership": {
    slug: "leadership",
    title: "Leadership Retreat",
    subtitle: "Visionary Leadership Fuel",
    content: `
      <h3>Visionary Leadership Fuel</h3>
      <p>Your leadership team has vision, strategy and talent. Yet we have a major leadership gap that is not spoken about widely enough. In a Western World where we are trained on rationalising our feelings, emphatic skills can get shuttered.</p>
      <p>Gallup reveals: Manager engagement dropped to 27% while costing the global economy $438 billion in lost productivity. When leadership is disengaged, it spreads like wildfire through your organization.</p>
      
      <h3>What Legendary Leadership Teams Build</h3>
      <ul>
        <li><strong>Strategic Clarity That Survives Chaos:</strong> Cut through noise to identify what actually matters.</li>
        <li><strong>Engagement That Cascades:</strong> Leaders who reconnect with purpose naturally inspire their teams.</li>
        <li><strong>Communication That Moves Fast:</strong> In rapid-moving markets, the speed of trust determines the speed of execution.</li>
        <li><strong>Diversity as Competitive Advantage:</strong> The future belongs to leaders who build on inclusion and global perspectives.</li>
      </ul>
    `,
    destinations: "The Alps, Puglia's countryside, Portugal's Atlantic edge, Queenstown's adventure capital, Cape Town's iconic landscapes, Philippines' secluded islands."
  },
  "communication-pr": {
    slug: "communication-pr",
    title: "Communication & PR Retreats",
    subtitle: "Craft Stories that Stick",
    content: `
      <h3>Craft Stories that Stick</h3>
      <p>Cheap content is flooding the market at speed. Trust will become a major differentiator when we do not know what is real anymore. What you really need in 2025 is a voice that cuts through the noise, captures attention in a heartbeat, and builds trust over time.</p>
      <p>Inspire your audience with modern techniques. Sharpen your voice into your biggest secret weapon; driving attention on social media, at conferences, podcasts, and industry events.</p>
      
      <h3>Strategic Communication To Amplify Your Messaging</h3>
      <p>When your team develops authentic communication skills, something powerful happens. Your CTO's technical insights reach developers at major conferences. Your founder's vision inspires audiences at investor events.</p>
      
      <h3>The Business Upside</h3>
      <ul>
        <li><strong>Thought Leadership That Opens Markets:</strong> Voices developed through genuine experience carry authority.</li>
        <li><strong>Strategic Storytelling That Drives Business:</strong> Organic Pipeline, inbound leads, referrals and shorter sales cycles.</li>
        <li><strong>Media Presence That Builds Credibility:</strong> Natural confidence for interviews, panels, and speaking opportunities.</li>
      </ul>
    `,
    destinations: "Puglia's inspiring countryside, Madeira’s lush off the grid venues, Queenstown's adventure capital, Philippines' private islands."
  },
  "agile-innovation": {
    slug: "agile-innovation",
    title: "Agile Innovation Retreat",
    subtitle: "Innovative Burst & Flow",
    content: `
      <h3>Innovative Burst & Flow</h3>
      <p>Your team shipped plenty of features this quarter. But are they breakthrough features or just incremental updates? Here's what separates teams building the future from teams optimizing the past: The builders at today's unicorns don't just keep up. They build differently because they think differently.</p>
      
      <h3>For Builders Ready to Ship Different</h3>
      <p>You don't need another design thinking workshop. You need three days with innovation catalysts who've actually built unicorns, scaled AI-native products, and know the difference between performative innovation and shipping features that change industries.</p>
      
      <h3>What Top-Tier Innovation Teams Build</h3>
      <ul>
        <li><strong>Next-Level AI Integration:</strong> Not “let's add ChatGPT to our app.” Multi-agent systems, custom models, AI-first architecture.</li>
        <li><strong>Rapid Breakthrough Shipping:</strong> From "what if" to working prototype in 72 hours.</li>
        <li><strong>Category Creation Thinking:</strong> Stop competing. Start creating markets others don't see yet.</li>
      </ul>
    `,
    destinations: "Swiss Alps mountain retreat, Berlin urban jungle, Heart of Italy, Barcelona, East Coast of Australia, Costa Rica."
  }
};

export const LEGAL_PAGES: Record<string, LegalData> = {
  "privacy": {
    slug: "privacy",
    title: "Privacy Policy",
    content: `
      <h2>How do we handle your personal data?</h2>
      <p>In this privacy policy we explain you how we collect and use your personal data and information. This privacy policy applies to all your personal data that we process if you travel with us, purchase our services or utilize them, visit our website or in any other way you are in touch with us.</p>
      
      <h3>Which data do we collect?</h3>
      <p>Your personal data is mainly processed by us to give you an unforgettable journey. We may collect, use, store, and transfer various types of personal information about you. This personal data will only be used for matters related to your booking. We only share data with external parties if this is necessary to carry out your trip. For example airlines, local agencies, tour guides, community managers, insurance companies, and hotels.</p>
      
      <h3>Overview of recorded information</h3>
      <ul>
        <li><strong>Personal details:</strong> first- and last name, address, gender, date of birth, meal preference.</li>
        <li><strong>Phone number:</strong> we may need to contact you about your booking.</li>
        <li><strong>Email address:</strong> for confirmations and updates.</li>
        <li><strong>Identification documents:</strong> passport/ID details for bookings and legal requirements.</li>
      </ul>
      
      <h3>Data Security</h3>
      <p>We use extensive security procedures to protect the personal data processed by us, including preventing unauthorized access to this data.</p>
    `
  },
  "terms": {
    slug: "terms",
    title: "Terms and Conditions",
    content: `
      <h2>General Terms and Conditions</h2>
      <p>General terms and conditions apply to all bookings you make with Driftawave B.V., located in Kaatsheuvel, The Netherlands.</p>
      <p>Driftawave B.V. is registered with the General Dutch Association of Travel Agencies (ANVR), Travellers Guarantee Fund (VZR Garant) and the warranty agreements included in the Calamity Fund (Calamiteitenfonds).</p>
      
      <h3>Types of Agreements</h3>
      <ol>
        <li><strong>Package Trip:</strong> If you book a package trip where Driftawave is the organizer, you enter into a package travel agreement with Driftawave B.V. The ANVR Traveler Conditions apply.</li>
        <li><strong>Third Party Organizer:</strong> If another company organizes the package, their terms apply.</li>
        <li><strong>Individual Services:</strong> If you book separate tours or tickets, the provider's terms apply.</li>
      </ol>
      
      <h3>Cancellation</h3>
      <p>If you wish or need to cancel your trip the Driftawave B.V. cancellation policy is applicable. We advise and require all travellers to obtain a health and travel insurance prior to booking.</p>
      
      <h3>Liability</h3>
      <p>In executing the agreement, Driftawave B.V. takes responsibility for being an excellent provider. However, Driftawave B.V. is not liable for actions/negligence of third-party service providers unless Driftawave B.V. is clearly at fault.</p>
    `
  },
  "cancellation-policy": {
    slug: "cancellation-policy",
    title: "Cancellation Policy",
    content: `
      <h2>Standard Cancellation</h2>
      <p>If you wish to cancel your trip, you will need to inform Driftawave B.V. as soon as possible by email (info@driftawave.com). In case of cancellation by the traveller, the following costs will be charged:</p>
      
      <ul>
        <li><strong>Till 56 days before departure:</strong> 15% of the total travel cost (minimum €250 per person).</li>
        <li><strong>From 56 to 28 days before departure:</strong> 50% of the total travel cost.</li>
        <li><strong>From 28 to 14 days before departure:</strong> 75% of the total travel cost.</li>
        <li><strong>From 14 days until departure:</strong> 100% of the total travel cost.</li>
      </ul>
      
      <h3>Payments</h3>
      <p>The first payment of 25% will have to be received by us within 3 days after booking. The remaining amount of the travel sum has to be received by us latest 6 weeks before departure.</p>
      
      <h3>Additional Costs</h3>
      <p>Per traveller we charge a booking fee of €27,50 euro (1 person), or €42,50 (2 people or more). We will also charge a special contribution of €2,50 to the calamity fund.</p>
    `
  }
};
