window.COURSE_LIBRARY = {
  schemaVersion: 2,
  currentWeekId: "factory-data-core",
  weeks: [
    {
      id: "factory-data-core",
      title: "Factory Data Pocket Lab",
      subtitle: "A compact offline guide to manufacturing data models, traceability, and operations analysis.",
      duration: "Self-paced module",
      level: "Beginner to portfolio demo",
      outcome: "Build a small, defensible data model for material availability, lot traceability, and source-backed factory questions.",
      learningRhythm: [
        "Read one concept block and identify the entities, relationships, and constraints.",
        "Map the example to a synthetic factory process such as order, BOM, inventory, routing, and shipment.",
        "Write one review note that explains what data is required before a system can calculate or answer.",
        "Keep examples synthetic and separate from private ERP, WMS, customer, supplier, or production records."
      ],
      recordTemplates: [
        {
          title: "Data model review",
          fields: [
            "Business question",
            "Required entities",
            "Relationships",
            "Validation rules",
            "Example query",
            "Source references",
            "Known limitations"
          ]
        },
        {
          title: "Demo extension note",
          fields: [
            "Input data",
            "Expected output",
            "Calculation rule",
            "Error case",
            "Human review point"
          ]
        }
      ],
      programGoal: "Create reusable manufacturing data examples that explain how factory spreadsheets can become structured records, reliable calculations, agent-readable tools, and management-ready reports.",
      baselineDiagnosis: {
        summary: "The module focuses on general manufacturing information structure, not personal learning progress or private factory records.",
        strengths: [
          "Uses familiar manufacturing objects: materials, BOMs, lots, warehouses, routes, orders, and shipments.",
          "Keeps business rules explicit so calculations are reviewable.",
          "Connects data modeling to practical dashboards, reports, and tool calls."
        ],
        gaps: [
          "Synthetic examples do not cover every ERP or WMS export format.",
          "No production connector is included.",
          "RAG and agent examples are conceptual unless connected to a separate backend."
        ],
        targetRoles: [
          "Smart manufacturing demo",
          "Manufacturing systems analysis",
          "Factory data modeling",
          "Operations dashboard preparation"
        ],
        proofPoints: [
          "Explains why a table exists.",
          "Shows how records connect.",
          "Separates deterministic calculations from natural-language explanations.",
          "Keeps private data outside the repository."
        ]
      },
      planPrinciples: [
        "Start with the business question before designing tables.",
        "Separate master data, transaction data, rules, and derived results.",
        "Keep every calculated conclusion traceable to source rows or rule versions.",
        "Use AI or agent workflows only after data boundaries and validation rules are clear."
      ],
      roadmap: [
        {
          id: "module-boundary",
          title: "1. Define the operating boundary",
          duration: "Concept",
          goal: "Decide what the small demo system should answer and what it should intentionally leave outside.",
          mustKnow: ["business question", "scope", "source system", "source row", "data owner"],
          tasks: [
            "List the factory decision the demo should support.",
            "Separate required data from optional data.",
            "Write what the demo does not attempt to solve."
          ],
          deliverables: ["Boundary note", "Source list", "Out-of-scope list"],
          interview: "A reliable factory data tool starts by defining the operating boundary and source of truth."
        },
        {
          id: "module-entities",
          title: "2. Identify entities and relationships",
          duration: "Concept",
          goal: "Turn spreadsheet columns into stable business objects and relationships.",
          mustKnow: ["material", "BOM", "lot", "warehouse", "routing", "foreign key"],
          tasks: [
            "Separate material master data from inventory movements.",
            "Model BOM as a relationship between finished products and components.",
            "Attach source references to imported rows."
          ],
          deliverables: ["Entity list", "Relationship sketch", "Field dictionary"],
          interview: "A BOM is a relationship table: one product needs many components, and one component may be shared by many products."
        },
        {
          id: "module-calculation",
          title: "3. Add deterministic calculations",
          duration: "Concept",
          goal: "Make material availability and shortage conclusions reproducible.",
          mustKnow: ["required quantity", "available quantity", "inbound quantity", "coverage ratio", "risk status"],
          tasks: [
            "Define the shortage formula.",
            "Add edge cases such as exactly-covered demand and missing inventory rows.",
            "Return calculation traces with each result."
          ],
          deliverables: ["Calculation rule", "Edge-case list", "Result schema"],
          interview: "The system should calculate shortage quantity with deterministic code and let AI explain the result with source references."
        },
        {
          id: "module-agent",
          title: "4. Prepare tool-ready outputs",
          duration: "Concept",
          goal: "Expose narrow, reviewable outputs that an agent or dashboard can safely consume.",
          mustKnow: ["API", "payload", "tool schema", "error handling", "audit trail"],
          tasks: [
            "Define a request and response for material risk.",
            "Return clear error codes for missing product, missing BOM, or invalid quantity.",
            "Include human review points for production-facing decisions."
          ],
          deliverables: ["Tool contract", "Error examples", "Review checklist"],
          interview: "Narrow tools are safer than open-ended database access because they encode the business rule and expected return shape."
        }
      ],
      minimumOutcomes: [
        "A small schema for materials, BOMs, inventory, and orders.",
        "A clear shortage calculation rule.",
        "A source-reference pattern for imported files.",
        "A review checklist for safe manufacturing AI outputs."
      ],
      portfolioProjects: [
        {
          role: "Example module",
          name: "Material Availability Demo",
          pitch: "Combines BOM demand, stock, inbound records, and source references to explain whether production can be released.",
          strengths: ["Clear business question", "Reproducible calculation", "Traceable source rows"],
          upgrades: ["Add a small sample SQLite schema", "Add a dashboard snapshot", "Add API-shaped JSON responses"]
        },
        {
          role: "Example module",
          name: "Lot Traceability Demo",
          pitch: "Links purchase lots, warehouse movements, production consumption, and finished goods output for audit-friendly explanations.",
          strengths: ["Manufacturing-specific relationships", "Useful for quality and recall scenarios"],
          upgrades: ["Add lot genealogy examples", "Add abnormal lot handling", "Add source document citations"]
        }
      ],
      interviewBank: [
        {
          question: "Why not let an AI model read all spreadsheets directly?",
          answer60: "Spreadsheets are often inconsistent, duplicated, and missing source context. A safer workflow is to validate and normalize records first, calculate critical metrics with deterministic rules, and then use AI only to explain or summarize with source references.",
          expansion: ["Reduces hallucination", "Improves auditability", "Keeps private data boundaries clear"]
        },
        {
          question: "What makes a manufacturing data model reliable?",
          answer60: "A reliable model has clear entity boundaries, stable identifiers, validation rules, source references, and reproducible calculations for business-critical results.",
          expansion: ["Primary keys", "Foreign keys", "Constraints", "Calculation trace"]
        }
      ],
      lessons: [
        {
          id: "lesson-boundary",
          label: "Lab 1",
          title: "Operating boundary",
          duration: "20 min",
          summary: "Define the factory question before designing a table.",
          goals: ["Write the decision the system supports", "Separate included and excluded data", "Identify source systems"],
          diagram: "context",
          sections: [
            {
              heading: "From factory question to data boundary",
              paragraphs: [
                "A small manufacturing data tool should start with a concrete question, such as whether a customer order can be released based on material availability.",
                "The boundary should include the source files, the business rule, and the expected output. It should also state what is not handled, such as full scheduling optimization or live ERP synchronization."
              ],
              bullets: ["Orders define demand", "BOM defines component need", "Inventory and inbound records define supply"],
              checkpoint: "The demo boundary is clear when another person can explain what the tool answers and what it does not answer."
            }
          ]
        },
        {
          id: "lesson-relationships",
          label: "Lab 2",
          title: "Entities and relationships",
          duration: "30 min",
          summary: "Separate master data, transaction data, rules, and derived results.",
          goals: ["Identify master records", "Model BOM relationships", "Attach source references"],
          diagram: "er",
          sections: [
            {
              heading: "Model the objects, not the spreadsheet layout",
              paragraphs: [
                "A spreadsheet export may combine product codes, component quantities, warehouse names, and dates in one sheet. A data model separates those concepts so calculations can be reused.",
                "BOM lines should connect a finished product to component materials and required quantities. Inventory records should show stock by material, warehouse, lot, and date."
              ],
              example: "A finished product FG-100 can require component M-200 with quantity 2.5. That relationship belongs in a BOM table, not in a free-text note."
            }
          ]
        },
        {
          id: "lesson-calculation",
          label: "Lab 3",
          title: "Traceable calculation",
          duration: "30 min",
          summary: "Calculate shortages with reproducible logic and explain them with evidence.",
          goals: ["Define shortage formula", "Keep source refs", "Return reviewable results"],
          diagram: "query",
          sections: [
            {
              heading: "Critical logic should be deterministic",
              paragraphs: [
                "If the same order, BOM, stock, and inbound records are provided, the shortage result should be the same every time.",
                "An AI layer can write a readable explanation, but the quantity and status should come from code with a calculation trace."
              ],
              code: "required_qty = order_qty * bom_qty_per_unit\ncoverage_qty = on_hand_qty + inbound_qty\nshortage_qty = max(required_qty - coverage_qty, 0)"
            }
          ]
        }
      ],
      lessonEnglishReviews: [
        {
          lessonId: "lesson-boundary",
          terms: ["source of truth", "scope", "release decision"],
          en: "A clear scope prevents a small factory data demo from pretending to be a full ERP system.",
          zh: "清楚的范围可以避免一个小型工厂数据 demo 被误解成完整 ERP 系统。"
        },
        {
          lessonId: "lesson-relationships",
          terms: ["entity", "relationship", "foreign key"],
          en: "Relationships make spreadsheet data reusable for calculations and traceability.",
          zh: "关系建模让表格数据可以被计算和追溯重复使用。"
        },
        {
          lessonId: "lesson-calculation",
          terms: ["deterministic logic", "calculation trace", "source reference"],
          en: "Deterministic logic should calculate the result before an AI assistant explains it.",
          zh: "关键结果应先由确定性逻辑计算，再由 AI 助手解释。"
        }
      ],
      glossary: [
        { term: "Source of Truth", zh: "事实来源", category: "Data model", definition: "The trusted system or file used as the authority for a specific fact.", example: "The ERP order table is the source of truth for customer demand." },
        { term: "Master Data", zh: "主数据", category: "Data model", definition: "Stable reference data such as materials, products, warehouses, and suppliers.", example: "Material code and unit of measure belong to master data." },
        { term: "Transaction Data", zh: "事务数据", category: "Data model", definition: "Event data that records what happened over time.", example: "A warehouse receipt is transaction data." },
        { term: "BOM", zh: "物料清单", category: "Manufacturing", definition: "A structure that defines which components are required to build a product.", example: "The BOM links FG-100 to component M-200." },
        { term: "Routing", zh: "工艺路线", category: "Manufacturing", definition: "The sequence of operations or work centers used to make a product.", example: "Routing explains which process step becomes a bottleneck." },
        { term: "Traceability", zh: "追溯性", category: "Manufacturing", definition: "The ability to follow a material, lot, or decision back to source records.", example: "Traceability helps explain why a shortage warning was raised." },
        { term: "API", zh: "接口", category: "Tool/API", definition: "A stable way for systems to exchange structured requests and responses.", example: "A material-risk API returns status and source references." },
        { term: "Tool Schema", zh: "工具结构", category: "Tool/API", definition: "A machine-readable definition of tool parameters, required fields, outputs, and errors.", example: "A schema keeps an agent from calling a tool with missing product_id." },
        { term: "RAG", zh: "检索增强生成", category: "AI workflow", definition: "Retrieving source material before generating an answer.", example: "RAG can cite an SOP before answering a quality-process question." },
        { term: "Human Review", zh: "人工复核", category: "AI workflow", definition: "A control point where a person checks a system output before business action.", example: "A production release recommendation should have a human review point." }
      ],
      bilingualArticle: {
        title: "Why Factory Data Needs Structure Before AI",
        intro: "Read the short bilingual article and add useful terms to the local vocabulary list.",
        paragraphs: [
          {
            en: "A manufacturing AI assistant is only as reliable as the data boundary behind it. If orders, inventory, BOM lines, and shipment notes are mixed together without identifiers, the assistant may sound confident while losing the source of truth.",
            zh: "制造业 AI 助手的可靠性取决于背后的数据边界。如果订单、库存、BOM 行和船运备注没有标识地混在一起，助手可能表达得很自信，但已经失去事实来源。",
            terms: ["manufacturing AI assistant", "data boundary", "source of truth"]
          },
          {
            en: "A useful first step is to separate master data from transaction data. Master data explains what an object is, while transaction data explains what happened to that object.",
            zh: "有用的第一步是把主数据和事务数据分开。主数据解释对象是什么，事务数据解释对象发生了什么。",
            terms: ["master data", "transaction data", "object"]
          },
          {
            en: "Critical factory decisions should use deterministic calculations. Language models can explain the result, but shortage quantity, coverage ratio, and release status should come from reproducible logic.",
            zh: "关键工厂决策应使用确定性计算。语言模型可以解释结果，但短缺数量、覆盖率和放行状态应来自可复现逻辑。",
            terms: ["deterministic calculations", "coverage ratio", "release status"]
          },
          {
            en: "The best demo is small, honest, and traceable. It should show the input records, the rule, the output, and the limitations.",
            zh: "最好的 demo 是小而诚实、可追溯的。它应该展示输入记录、规则、输出和局限。",
            terms: ["traceable", "input records", "limitations"]
          }
        ]
      }
    }
  ]
};
