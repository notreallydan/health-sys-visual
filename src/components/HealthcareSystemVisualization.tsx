const HealthcareSystemVisualization = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Data Flows of the Australian Healthcare System</h1>
      <svg className="w-full h-auto" viewBox="-200 0 1850 800" aria-labelledby="healthcareSystemTitle healthcareSystemDesc">
        <title id="healthcareSystemTitle">Australian Healthcare System Visualization</title>
        <desc id="healthcareSystemDesc">A 5-layer model visualizing the structure and flows within the Australian healthcare system</desc>
        
        {/* Layer 5: Governance */}
        <g transform="translate(0, 0)">
          <rect x="100" y="0" width="1000" height="120" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" />
          <text x="110" y="30" className="text-xl font-bold fill-blue-800">Layer 5: Governance</text>
          
          <rect x="120" y="40" width="180" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="130" y="75" className="text-sm fill-blue-900">Federal Government</text>
          
          <rect x="310" y="40" width="180" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="320" y="65" className="text-sm fill-blue-900">
           <tspan x="320" dy="0">State/Territory</tspan>
           <tspan x="320" dy="16">Governments</tspan>
          </text>
          
          <rect x="500" y="40" width="180" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="510" y="75" className="text-sm fill-blue-900">Local Governments</text>
          
          <rect x="690" y="40" width="180" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="700" y="75" className="text-sm fill-blue-900">Regulatory Bodies</text>
          
          <rect x="880" y="40" width="200" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="890" y="75" className="text-sm fill-blue-900">Health Ministers' Meeting</text>
        </g>

        {/* Layer 4: Funding Streams */}
        <g transform="translate(0, 140)">
          <rect x="100" y="0" width="1000" height="120" fill="#e8f5e9" stroke="#4caf50" strokeWidth="2" />
          <text x="110" y="30" className="text-xl font-bold fill-green-800">Layer 4: Funding Streams</text>
          
          <rect x="120" y="40" width="150" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="130" y="75" className="text-sm fill-green-900">Medicare</text>
          
          <rect x="280" y="40" width="150" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="290" y="75" className="text-sm fill-green-900">PBS</text>
          
          <rect x="440" y="40" width="150" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="450" y="65" className="text-sm fill-green-900">
           <tspan x="450" dy="0">Private Health</tspan>
           <tspan x="450" dy="16">Insurance</tspan>
          </text>
          
          <rect x="600" y="40" width="150" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="610" y="75" className="text-sm fill-green-900">Out-of-pocket</text>
          
          <rect x="760" y="40" width="150" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="770" y="65" className="text-sm fill-green-900">
           <tspan x="770" dy="0">State/Territory</tspan>
           <tspan x="770" dy="16">funding</tspan>
          </text>
          
          <rect x="920" y="40" width="160" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="930" y="65" className="text-sm fill-green-900">
           <tspan x="930" dy="0">Federal funding</tspan>
           <tspan x="930" dy="16">programs</tspan>
          </text>
        </g>

        {/* Layer 3: Service Coordination */}
        <g transform="translate(0, 280)">
          <rect x="100" y="0" width="1000" height="120" fill="#f3e5f5" stroke="#9c27b0" strokeWidth="2" />
          <text x="110" y="30" className="text-xl font-bold fill-purple-800">Layer 3: Service Coordination</text>
          
          <rect x="120" y="40" width="230" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="130" y="75" className="text-sm fill-purple-900">Primary Health Networks</text>
          
          <rect x="360" y="40" width="230" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="370" y="75" className="text-sm fill-purple-900">Healthcare Networks</text>
          
          <rect x="600" y="40" width="230" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="610" y="75" className="text-sm fill-purple-900">Professional Bodies</text>
          
          <rect x="840" y="40" width="240" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="850" y="75" className="text-sm fill-purple-900">Digital Health Infrastructure</text>
        </g>

        {/* Layer 2: Service Delivery */}
        <g transform="translate(0, 420)">
          <rect x="100" y="0" width="1000" height="160" fill="#e8eaf6" stroke="#3f51b5" strokeWidth="2" />
          <text x="110" y="30" className="text-xl font-bold fill-indigo-800">Layer 2: Service Delivery</text>
          
          {/* Three columns */}
          <rect x="120" y="50" width="310" height="90" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="130" y="80" className="text-sm font-semibold fill-indigo-900">Primary Care</text>
          <text x="130" y="100" className="text-xs fill-indigo-900">GPs, Community Health, Allied Health</text>
          
          <rect x="445" y="50" width="310" height="90" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="455" y="80" className="text-sm font-semibold fill-indigo-900">Secondary/Specialist Care</text>
          <text x="455" y="100" className="text-xs fill-indigo-900">Specialists, Diagnostic Services</text>
          
          <rect x="770" y="50" width="310" height="90" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="780" y="80" className="text-sm font-semibold fill-indigo-900">Tertiary/Hospital Care</text>
          <text x="780" y="100" className="text-xs fill-indigo-900">Public Hospitals, Private Hospitals</text>
        </g>

        {/* Layer 1: Support Systems */}
        <g transform="translate(0, 600)">
          <rect x="100" y="0" width="1000" height="120" fill="#eceff1" stroke="#607d8b" strokeWidth="2" />
          <text x="110" y="30" className="text-xl font-bold fill-gray-800">Layer 1: Support Systems</text>
          
          <rect x="120" y="40" width="230" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="130" y="75" className="text-sm fill-gray-900">Education/Training</text>
          
          <rect x="360" y="40" width="230" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="370" y="75" className="text-sm fill-gray-900">Research</text>
          
          <rect x="600" y="40" width="230" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="610" y="75" className="text-sm fill-gray-900">Data Systems</text>
          
          <rect x="840" y="40" width="240" height="60" fill="#c5cae9" stroke="#3949ab" strokeWidth="1" />
          <text x="850" y="75" className="text-sm fill-gray-900">Quality Assurance</text>
        </g>

        {/* Connections between layers */}
        <g className="flows">
          {/* Layer 5 to 1 */}
          <path d="M1100,40 L1400,40 L1400,680 L1100,680" stroke="black" strokeWidth="2" fill="none" />
          <path d="M1105,35 L1100,40 L1105,45" fill="none" stroke="black" strokeWidth="2" />
          <path d="M1105,675 L1100,680 L1105,685" fill="none" stroke="black" strokeWidth="2" />

          {/* Data flow list between Layer 5 and 1 */}
          <g transform="translate(1410, 150)">
            <text className="text-s fill-gray-800">
              <tspan x="5" y="5">My Health Record</tspan>
            </text> 
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="30">• Primary Data Sources</tspan>
              <tspan x="5" y="50">• Primary Data Consumers</tspan>
            </text>
            <text className="text-s fill-gray-800">
              <tspan x="5" y="90">Healthcare Identifiers</tspan>
            </text> 
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="115">• Distribution Network</tspan>
              <tspan x="5" y="135">• Verification Points</tspan>
            </text>
            <text className="text-s fill-gray-800">
              <tspan x="5" y="175">Secure Messaging</tspan>
            </text> 
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="200">• Primary Communication Paths</tspan>
            </text>
            <text className="text-s fill-gray-800">
              <tspan x="5" y="240">Electronic Prescriptions</tspan>
            </text> 
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="265">• Prescriber Outputs</tspan>
              <tspan x="5" y="285">• Pharmacy Outputs</tspan>
              <tspan x="5" y="305">• PBS System Outputs</tspan>
            </text>
            <text className="text-s fill-gray-800">
              <tspan x="5" y="345">Telehealth Systems</tspan>
            </text>
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="370">• Provider platforms to patient endpoints</tspan>
              <tspan x="5" y="390">• Data Integration</tspan>
            </text>
          </g>

          {/* Layer 5 to 4 */}
          <path d="M1100,90 L1130,90 L1130,170 L1100,170" stroke="black" strokeWidth="2" fill="none" />
          <path d="M1105,165 L1100,170 L1105,175" fill="none" stroke="black" strokeWidth="2" />
          
          <path d="M100,170 L70,170 L70,90 L100,90" stroke="black" strokeWidth="2" fill="none" />
          <path d="M95,85 L100,90 L95,95" fill="none" stroke="black" strokeWidth="2" />

          {/* Data flow list between Layer 5 and 4 */}
          <g transform="translate(1140, 90)">
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="15">• Performance Requirements Data</tspan>
              <tspan x="5" y="35">• Authorization Data</tspan>
              <tspan x="5" y="55">• System Configuration Data</tspan>
              <tspan x="5" y="75">• Alert & Update Data</tspan>
            </text>
          </g>

          {/* Data flow list between Layer 4 and 5 */}
          <g transform="translate(-120, 90)">
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="15">• Transaction Data</tspan>
              <tspan x="5" y="35">• Performance Analytics</tspan>
              <tspan x="5" y="55">• Compliance Data</tspan>
              <tspan x="5" y="75">• Forecasting Data</tspan>
            </text>
          </g>

          {/* Layer 4 to 3 */}
          <path d="M1100,230 L1130,230 L1130,310 L1100,310" stroke="black" strokeWidth="2" fill="none" />
          <path d="M1105,305 L1100,310 L1105,315" fill="none" stroke="black" strokeWidth="2" />
          
          <path d="M100,310 L70,310 L70,230 L100,230" stroke="black" strokeWidth="2" fill="none" />
          <path d="M95,225 L100,230 L95,235" fill="none" stroke="black" strokeWidth="2" />

          {/* Data flow list between Layer 4 and 3 */}
          <g transform="translate(1140, 230)">
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="15">• Resource Allocation Data</tspan>
              <tspan x="5" y="35">• Transaction Parameters</tspan>
              <tspan x="5" y="55">• Program Data</tspan>
            </text>
          </g>

          {/* Data flow list between Layer 3 and 4 */}
          <g transform="translate(-120, 230)">
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="15">• Service Utilization Data</tspan>
              <tspan x="5" y="35">• Financial Performance Data</tspan>
              <tspan x="5" y="55">• Demand Data</tspan>
            </text>
          </g>

          {/* Layer 3 to 2 */}
          <path d="M1100,370 L1130,370 L1130,450 L1100,450" stroke="black" strokeWidth="2" fill="none" />
          <path d="M1105,445 L1100,450 L1105,455" fill="none" stroke="black" strokeWidth="2" />
          
          <path d="M100,450 L70,450 L70,370 L100,370" stroke="black" strokeWidth="2" fill="none" />
          <path d="M95,365 L100,370 L95,375" fill="none" stroke="black" strokeWidth="2" />

          {/* Data flow list between Layer 3 and 2 */}
          <g transform="translate(1140, 370)">
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="15">• Service Coordination Data</tspan>
              <tspan x="5" y="35">• Clinical Systems Data</tspan>
              <tspan x="5" y="55">• Operational Data</tspan>
            </text>
          </g>

          {/* Data flow list between Layer 2 and 3 */}
          <g transform="translate(-120, 370)">
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="15">• Clinical Activity Data</tspan>
              <tspan x="5" y="35">• Resource Usage Data</tspan>
              <tspan x="5" y="55">• Integration Data</tspan>
            </text>
          </g>

          {/* Layer 2 to 1 */}
          <path d="M1100,550 L1130,550 L1130,630 L1100,630" stroke="black" strokeWidth="2" fill="none" />
          <path d="M1105,625 L1100,630 L1105,635" fill="none" stroke="black" strokeWidth="2" />
          
          <path d="M100,630 L70,630 L70,550 L100,550" stroke="black" strokeWidth="2" fill="none" />
          <path d="M95,545 L100,550 L95,555" fill="none" stroke="black" strokeWidth="2" />
        </g>

          {/* Data flow list between Layer 2 and 1 */}
          <g transform="translate(1140, 550)">
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="15">• Service Performance Data</tspan>
              <tspan x="5" y="35">• System Requirements Data</tspan>
              <tspan x="5" y="55">• Research & Quality Data</tspan>
            </text>
          </g>

          {/* Data flow list between Layer 1 and 2 */}
          <g transform="translate(-120, 550)">
            <text className="text-xs fill-gray-800">
              <tspan x="5" y="15">• Infrastructure Data</tspan>
              <tspan x="5" y="35">• Knowledge Base Data</tspan>
              <tspan x="5" y="55">• System Support Data</tspan>
            </text>
          </g>

        {/* Legend */}
        <g transform="translate(100, 745)">
          <text x="0" y="0" className="text-sm font-bold">Legend:</text>
          <path d="M0,10 L30,10" stroke="black" strokeWidth="2" />
          <path d="M25,5 L30,10 L25,15" fill="none" stroke="black" strokeWidth="2" />
          <text x="40" y="15" className="text-xs">Data Flow</text>
        </g>
      </svg>
    </div>
  );
};

export default HealthcareSystemVisualization;