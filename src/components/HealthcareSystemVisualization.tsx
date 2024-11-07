export default function HealthcareSystemVisualization() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Australian Healthcare System</h1>
      <svg className="w-full" viewBox="0 0 1000 800" aria-labelledby="healthcareSystemTitle healthcareSystemDesc">
        <title id="healthcareSystemTitle">Australian Healthcare System Visualization</title>
        <desc id="healthcareSystemDesc">A 5-layer model visualizing the structure and flows within the Australian healthcare system</desc>
        
        {/* Layer 5: Governance */}
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="1000" height="120" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" />
          <text x="10" y="30" className="text-xl font-bold fill-blue-800">Layer 5: Governance</text>
          <rect x="20" y="40" width="180" height="60" fill="#bbdefb" stroke="#1e88e5" strokeWidth="1" />
          <text x="30" y="70" className="text-sm fill-blue-900">Federal Government</text>
          <rect x="210" y="40" width="180" height="60" fill="#bbdefb" stroke="#1e88e5" strokeWidth="1" />
          <text x="220" y="70" className="text-sm fill-blue-900">State/Territory Governments</text>
          <rect x="400" y="40" width="180" height="60" fill="#bbdefb" stroke="#1e88e5" strokeWidth="1" />
          <text x="410" y="70" className="text-sm fill-blue-900">Local Governments</text>
          <rect x="590" y="40" width="180" height="60" fill="#bbdefb" stroke="#1e88e5" strokeWidth="1" />
          <text x="600" y="70" className="text-sm fill-blue-900">Regulatory Bodies</text>
          <rect x="780" y="40" width="200" height="60" fill="#bbdefb" stroke="#1e88e5" strokeWidth="1" />
          <text x="790" y="70" className="text-sm fill-blue-900">Health Ministers' Meeting</text>
        </g>

        {/* Layer 4: Funding Streams */}
        <g transform="translate(0, 140)">
          <rect x="0" y="0" width="1000" height="120" fill="#e8f5e9" stroke="#4caf50" strokeWidth="2" />
          <text x="10" y="30" className="text-xl font-bold fill-green-800">Layer 4: Funding Streams</text>
          <rect x="20" y="40" width="150" height="60" fill="#c8e6c9" stroke="#43a047" strokeWidth="1" />
          <text x="30" y="70" className="text-sm fill-green-900">Medicare</text>
          <rect x="180" y="40" width="150" height="60" fill="#c8e6c9" stroke="#43a047" strokeWidth="1" />
          <text x="190" y="70" className="text-sm fill-green-900">PBS</text>
          <rect x="340" y="40" width="150" height="60" fill="#c8e6c9" stroke="#43a047" strokeWidth="1" />
          <text x="350" y="70" className="text-sm fill-green-900">Private Health Insurance</text>
          <rect x="500" y="40" width="150" height="60" fill="#c8e6c9" stroke="#43a047" strokeWidth="1" />
          <text x="510" y="70" className="text-sm fill-green-900">Out-of-pocket</text>
          <rect x="660" y="40" width="150" height="60" fill="#c8e6c9" stroke="#43a047" strokeWidth="1" />
          <text x="670" y="70" className="text-sm fill-green-900">State/Territory funding</text>
          <rect x="820" y="40" width="160" height="60" fill="#c8e6c9" stroke="#43a047" strokeWidth="1" />
          <text x="830" y="70" className="text-sm fill-green-900">Federal funding programs</text>
        </g>

        {/* Layer 3: Service Coordination */}
        <g transform="translate(0, 280)">
          <rect x="0" y="0" width="1000" height="120" fill="#f3e5f5" stroke="#9c27b0" strokeWidth="2" />
          <text x="10" y="30" className="text-xl font-bold fill-purple-800">Layer 3: Service Coordination</text>
          <rect x="20" y="40" width="230" height="60" fill="#e1bee7" stroke="#8e24aa" strokeWidth="1" />
          <text x="30" y="70" className="text-sm fill-purple-900">Primary Health Networks</text>
          <rect x="260" y="40" width="230" height="60" fill="#e1bee7" stroke="#8e24aa" strokeWidth="1" />
          <text x="270" y="70" className="text-sm fill-purple-900">Healthcare Networks</text>
          <rect x="500" y="40" width="230" height="60" fill="#e1bee7" stroke="#8e24aa" strokeWidth="1" />
          <text x="510" y="70" className="text-sm fill-purple-900">Professional Bodies</text>
          <rect x="740" y="40" width="240" height="60" fill="#e1bee7" stroke="#8e24aa" strokeWidth="1" />
          <text x="750" y="70" className="text-sm fill-purple-900">Digital Health Infrastructure</text>
        </g>

        {/* Layer 2: Service Delivery */}
        <g transform="translate(0, 420)">
          <rect x="0" y="0" width="1000" height="180" fill="#e8eaf6" stroke="#3f51b5" strokeWidth="2" />
          <text x="10" y="30" className="text-xl font-bold fill-indigo-800">Layer 2: Service Delivery</text>
          <rect x="20" y="40" width="310" height="120" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="30" y="70" className="text-sm font-semibold fill-indigo-900">Primary Care</text>
          <text x="30" y="90" className="text-xs fill-indigo-900">GPs, Community Health, Allied Health</text>
          <rect x="340" y="40" width="310" height="120" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="350" y="70" className="text-sm font-semibold fill-indigo-900">Secondary/Specialist Care</text>
          <text x="350" y="90" className="text-xs fill-indigo-900">Specialists, Diagnostic Services</text>
          <rect x="660" y="40" width="320" height="120" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="670" y="70" className="text-sm font-semibold fill-indigo-900">Tertiary/Hospital Care</text>
          <text x="670" y="90" className="text-xs fill-indigo-900">Public Hospitals, Private Hospitals</text>
        </g>

        {/* Layer 1: Support Systems */}
        <g transform="translate(0, 620)">
          <rect x="0" y="0" width="1000" height="120" fill="#eceff1" stroke="#607d8b" strokeWidth="2" />
          <text x="10" y="30" className="text-xl font-bold fill-gray-800">Layer 1: Support Systems</text>
          <rect x="20" y="40" width="230" height="60" fill="#cfd8dc" stroke="#546e7a" strokeWidth="1" />
          <text x="30" y="70" className="text-sm fill-gray-900">Education/Training</text>
          <rect x="260" y="40" width="230" height="60" fill="#cfd8dc" stroke="#546e7a" strokeWidth="1" />
          <text x="270" y="70" className="text-sm fill-gray-900">Research</text>
          <rect x="500" y="40" width="230" height="60" fill="#cfd8dc" stroke="#546e7a" strokeWidth="1" />
          <text x="510" y="70" className="text-sm fill-gray-900">Data Systems</text>
          <rect x="740" y="40" width="240" height="60" fill="#cfd8dc" stroke="#546e7a" strokeWidth="1" />
          <text x="750" y="70" className="text-sm fill-gray-900">Quality Assurance</text>
        </g>

        {/* Flows */}
        <g className="flows">
          {/* Funding Flows */}
          <path d="M110,100 L95,140" fill="none" stroke="#4caf50" strokeWidth="2" markerEnd="url(#greenArrow)" />
          <path d="M300,100 L255,140" fill="none" stroke="#4caf50" strokeWidth="2" markerEnd="url(#greenArrow)" />
          <path d="M900,100 L900,140" fill="none" stroke="#4caf50" strokeWidth="2" markerEnd="url(#greenArrow)" />
          <path d="M95,200 L95,420" fill="none" stroke="#4caf50" strokeWidth="2" markerEnd="url(#greenArrow)" />
          <path d="M255,200 L255,420" fill="none" stroke="#4caf50" strokeWidth="2" markerEnd="url(#greenArrow)" />
          <path d="M415,200 L415,420" fill="none" stroke="#4caf50" strokeWidth="2" markerEnd="url(#greenArrow)" />
          <path d="M575,200 L820,420" fill="none" stroke="#4caf50" strokeWidth="2" markerEnd="url(#greenArrow)" />

          {/* Governance Flows */}
          <path d="M980,100 L980,680" fill="none" stroke="#9c27b0" strokeWidth="2" strokeDasharray="10,5" markerEnd="url(#purpleArrow)" />
          <path d="M680,100 L680,280" fill="none" stroke="#9c27b0" strokeWidth="2" strokeDasharray="10,5" markerEnd="url(#purpleArrow)" />
          <path d="M375,280 L375,100" fill="none" stroke="#9c27b0" strokeWidth="2" strokeDasharray="10,5" markerEnd="url(#purpleArrow)" />
          <path d="M860,680 L860,100" fill="none" stroke="#9c27b0" strokeWidth="2" strokeDasharray="10,5" markerEnd="url(#purpleArrow)" />

          {/* Patient Flows */}
          <path d="M330,500 L340,500" fill="none" stroke="#f44336" strokeWidth="2" markerEnd="url(#redArrow)" />
          <path d="M650,500 L660,500" fill="none" stroke="#f44336" strokeWidth="2" markerEnd="url(#redArrow)" />
          <path d="M135,460 Q135,340 250,340" fill="none" stroke="#f44336" strokeWidth="2" markerEnd="url(#redArrow)" />

          {/* Information Flows */}
          <path d="M860,340 L860,420" fill="none" stroke="#2196f3" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#blueArrow)" />
          <path d="M860,420 L860,340" fill="none" stroke="#2196f3" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#blueArrow)" />
          <path d="M615,680 L615,600" fill="none" stroke="#2196f3" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#blueArrow)" />
          <path d="M615,600 L615,680" fill="none" stroke="#2196f3" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#blueArrow)" />
        </g>

        {/* Arrowhead markers */}
        <defs>
          <marker id="greenArrow" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#4caf50" />
          </marker>
          <marker id="purpleArrow" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#9c27b0" />
          </marker>
          <marker id="redArrow" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#f44336" />
          </marker>
          <marker id="blueArrow" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#2196f3" />
          </marker>
        </defs>

        {/* Legend */}
        <g transform="translate(20, 760)">
          <text x="0" y="0" className="text-sm font-bold">Legend:</text>
          <rect x="0" y="10" width="20" height="10" fill="#4caf50" />
          <text x="25" y="20" className="text-xs">Funding Flow</text>
          <rect x="120" y="10" width="20" height="10" fill="#9c27b0" />
          <text x="145" y="20" className="text-xs">Governance Flow</text>
          <rect x="260" y="10" width="20" height="10" fill="#f44336" />
          <text x="285" y="20" className="text-xs">Patient Flow</text>
          <rect x="380" y="10" width="20" height="10" fill="#2196f3" />
          <text x="405" y="20" className="text-xs">Information Flow</text>
        </g>
      </svg>
    </div>
  )
}