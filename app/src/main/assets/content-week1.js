window.COURSE_LIBRARY = {
  schemaVersion: 1,
  currentWeekId: "week-1",
  weeks: [
    {
      id: "week-1",
      title: "第一周：制造业数据库建模",
      subtitle: "从 Excel 台账走向可追溯、可查询、可交给 Agent 调用的数据底座",
      duration: "7 天",
      level: "入门到可交付",
      outcome: "完成一个最小库存风险系统的数据模型、样例数据、查询口径和建模评审清单。",
      learningRhythm: [
        "每天 30 分钟：术语学习，3 个词，中英解释，配工厂例子。",
        "每天 45-90 分钟：项目动作，读代码、补文档、补测试或做 demo。",
        "每天 10 分钟：记录今天学到的概念、项目动作、卡点和明天任务。",
        "每周 2-3 小时：整理本周交付物。",
        "每周末：复盘并沉淀 1 段面试表达。"
      ],
      recordTemplates: [
        {
          title: "每日学习记录",
          fields: [
            "今日主题",
            "今天掌握的 3 个术语：英文、中文、我的解释、工厂例子",
            "今天做的小任务",
            "今天用 Codex/OpenClaw 完成了什么",
            "今天我亲自判断和设计了什么",
            "今天的项目证据：文件、截图、测试、README、架构图或 demo",
            "今天没懂的地方",
            "明天要补",
            "今天新增的面试表达"
          ]
        },
        {
          title: "每周复盘",
          fields: [
            "本周主题",
            "我能讲清楚的概念",
            "我还讲不清楚的概念",
            "本周项目进展",
            "本周留下的证据：路径或链接、说明",
            "Codex/OpenClaw 帮我完成了什么",
            "我自己做出的判断",
            "本周最重要的面试表达",
            "下周重点",
            "本周评分：术语表达、项目推进、代码理解、面试表达、复盘质量"
          ]
        }
      ],
      programGoal: "8 周后，能拿着自己的项目讲清楚：如何把制造业 Excel、BOM、库存、船运、订单、节拍和生产通知单，拆成数据结构、确定性计算、Agent 工具调用、RAG 知识检索和管理层报告。",
      roadmap: [
        {
          id: "week-0-baseline",
          title: "第 0 周：整理基线，别从零开始",
          duration: "2-3 天",
          goal: "确认现有项目哪些能作为作品集，哪些只是学习材料。",
          mustKnow: ["项目定位", "输入/输出", "确定性计算", "AI/Agent 辅助", "主项目和辅助项目"],
          tasks: [
            "跑通 factory-ops-intelligence-platform、factory-production-notice-agent、factory-excel-ops-dashboard、HulunGuard 的最小验证。",
            "给每个项目写 5 行定位：业务问题、输入、输出、确定性计算、AI/Agent 辅助。",
            "把 GitHub 上公开项目分成主作品和辅助作品。"
          ],
          deliverables: ["项目基线说明", "作品集优先级", "每个项目 5 行定位"],
          interview: "我的主作品是工厂运营智能平台，PHRB 是真实业务原型，节拍模拟器证明我懂产线，生产通知单 Agent 证明我能把结构化工单转成可交付文件，HulunGuard 证明我重视 AI 任务的证据和验证。"
        },
        {
          id: "week-1-database",
          title: "第 1 周：数据库建模",
          duration: "7 天",
          goal: "把工厂 Excel 拆成系统能理解的数据结构。",
          mustKnow: ["table / row / column", "primary key / foreign key", "one-to-many / many-to-many", "schema / index / query", "source_file / source_row"],
          tasks: [
            "阅读主项目的 database/schema.sql。",
            "解释 materials、finished_products、bom_components、inventory_snapshots、customer_orders、shipment_records、production_notices、agent_traces。",
            "画出 BOM 多对多关系，并写 5 个典型查询。"
          ],
          deliverables: ["week-01_数据库建模笔记.md", "week-01_库存系统表结构.md"],
          interview: "BOM 是典型多对多关系。一个成品需要多个组件，一个组件也可能被多个成品共用，所以要拆成 finished_products、materials 和 bom_components，并保留单位用量和来源行。"
        },
        {
          id: "week-2-tool-schema",
          title: "第 2 周：API 和 Tool Schema",
          duration: "7 天",
          goal: "把“让 AI 分析 Excel”改写成稳定的工具接口。",
          mustKnow: ["API / endpoint", "request / response", "payload", "JSON schema", "parameters", "required fields", "return value", "error handling", "permission / sandbox"],
          tasks: [
            "阅读主项目 API server 和 agent_tools。",
            "设计 classify_factory_file、extract_bom_structure、calculate_inventory_risk、generate_production_notice、answer_factory_question。",
            "每个工具写清名称、参数、返回值、错误场景和权限边界。"
          ],
          deliverables: ["week-02_tool_schema设计.md", "week-02_API请求响应例子.md"],
          interview: "Agent 调工具不能只靠一句自然语言。工具必须有 schema，包括名称、参数、必填字段、返回值和错误格式。"
        },
        {
          id: "week-3-deterministic",
          title: "第 3 周：确定性计算、校验和测试",
          duration: "7 天",
          goal: "把 AI 结论可信落到公式、来源、边界条件和测试上。",
          mustKnow: ["deterministic logic", "validation rule", "unit test", "edge case", "source of truth", "audit log", "reproducibility"],
          tasks: [
            "阅读 calculate_inventory_risk。",
            "写出 required_qty、coverage_qty、shortage_qty、coverage_ratio、status 的计算链。",
            "设计库存刚好够、库存不足、库存加在途刚好够、BOM 小数、缺少库存记录、来源为空等测试。"
          ],
          deliverables: ["week-03_缺料风险计算链.md", "week-03_可信AI输出规则.md"],
          interview: "系统先用确定性代码计算订单需求、BOM 用量、当前库存、在途数量和覆盖率，再输出 source_ref 和 calculation trace。LLM 只负责解释。"
        },
        {
          id: "week-4-async",
          title: "第 4 周：异步任务和用户体验",
          duration: "7 天",
          goal: "讲清楚上传大 Excel 后为什么需要 job_id、worker 和状态轮询。",
          mustKnow: ["sync / async", "background task", "task queue", "worker", "job_id", "status polling", "timeout", "retry", "failed state"],
          tasks: [
            "复盘 PHRB 项目里的后台导入任务和非阻塞进度。",
            "设计 uploaded -> validating -> queued -> processing -> generating_report -> completed / failed。",
            "写 processing、generating_report、completed、failed 的 JSON 响应。"
          ],
          deliverables: ["week-04_异步任务流程设计.md", "week-04_job状态响应示例.md"],
          interview: "长时间 Excel 分析不应该让浏览器一直等待。上传后返回 job_id，后台 worker 处理，前端通过 status polling 查询进度。"
        },
        {
          id: "week-5-rag",
          title: "第 5 周：RAG 工厂制度问答",
          duration: "7 天",
          goal: "做一个最小但真实的 RAG demo，回答必须带来源。",
          mustKnow: ["chunk", "embedding", "vector database", "retrieval", "top-k", "source citation", "hallucination"],
          tasks: [
            "准备库存异常、安全库存、船运延迟、BOM 异常、质量瓶颈 5 份 Markdown。",
            "按 heading 和 chunk_id 切块，保存 source_file。",
            "先用 SQLite FTS 或关键词检索，再升级 embedding + vector search。"
          ],
          deliverables: ["week-05_RAG流程笔记.md", "可运行的工厂制度问答 demo", "5 个问答样例和来源引用"],
          interview: "RAG 是回答前先检索资料，再让 LLM 基于资料回答。这样可以减少幻觉，并让答案回到具体制度文件。"
        },
        {
          id: "week-6-architecture",
          title: "第 6 周：系统设计表达和架构图",
          duration: "7 天",
          goal: "从用户上传文件讲到数据库、worker、Agent、报告和前端展示。",
          mustKnow: ["frontend", "backend", "database", "file storage", "worker", "agent runtime", "LLM summary", "dashboard"],
          tasks: [
            "画 Frontend Upload -> API -> File Storage -> Database Metadata -> Job Queue -> Worker -> Parsers -> Deterministic Engines -> Agent Tools -> LLM Summary -> Report Storage -> Dashboard。",
            "写清每层职责。",
            "给主项目写 3 分钟 demo script。"
          ],
          deliverables: ["week-06_系统架构讲解.md", "week-06_demo讲稿.md"],
          interview: "前端负责上传和展示，后端负责校验和业务规则，数据库存结构化数据和元数据，worker 处理长任务，Agent runtime 负责工具选择和 trace。"
        },
        {
          id: "week-7-portfolio",
          title: "第 7 周：作品集包装",
          duration: "7 天",
          goal: "把现有项目包装成 3 个能讲的案例。",
          mustKnow: ["BOM explosion", "inventory risk", "source refs", "agent tools", "line simulation", "production notice", "deterministic engines", "adapter boundary"],
          tasks: [
            "把主项目写成完整系统案例。",
            "把 PHRB、节拍模拟器、生产通知单 Agent、HulunGuard 写成辅助案例。",
            "为每个主项目准备业务背景、输入数据、核心流程、架构、关键计算、来源追溯、测试截图、局限和下一步。"
          ],
          deliverables: ["week-07_作品集讲解卡片.md", "每个主项目一段 60 秒介绍"],
          interview: "这些项目证明我能把真实制造业问题拆成数据、规则、工具和报告，再用 AI 辅助开发快速做出可验证原型。"
        },
        {
          id: "week-8-interview",
          title: "第 8 周：面试和投递",
          duration: "7 天",
          goal: "把能力包装成岗位语言。",
          mustKnow: ["AI implementation", "digital transformation", "manufacturing", "MES", "workflow automation", "RAG", "API", "data analysis"],
          tasks: [
            "每个核心问题写 60 秒版和 3 分钟版。",
            "找 10 个 JD，标关键词。",
            "修改简历项目描述。"
          ],
          deliverables: ["week-08_面试回答.md", "week-08_JD关键词匹配.md", "简历项目经历草稿"],
          interview: "我的优势是制造业现场业务理解和 AI 应用落地能力。我能把业务问题拆成数据结构、确定性规则、Agent 工具流和管理层报告。"
        }
      ],
      minimumOutcomes: [
        "一份数据库建模说明。",
        "一套 Tool Schema 设计。",
        "一份缺料风险确定性计算链。",
        "一份异步任务流程设计。",
        "一个 RAG 工厂制度问答 demo。",
        "一张系统架构图。",
        "三个项目讲解卡片。",
        "八个核心面试问题的回答。"
      ],
      portfolioProjects: [
        {
          name: "factory-ops-intelligence-platform",
          role: "主作品，讲完整系统",
          strengths: ["FastAPI operations API", "React dashboard", "BOM、库存、订单、船运、生产通知、产线仿真、Agent trace", "deterministic domain engines", "source_ref 和 tool-backed Agent Runtime", "测试能通过"],
          upgrades: ["写数据库说明，补 FK 设计文档", "加工厂制度问答 demo", "写 job_id/worker/polling 设计", "增加库存临界、缺源、异常数据测试", "README 增加设计理由和 demo script"],
          pitch: "这个项目是制造业运营智能平台 demo，把 BOM、库存、订单、船运、生产通知、产线仿真和 Agent 工具调用放在同一条流程里。关键计算由 deterministic domain engines 完成，Agent 负责调用工具、记录 trace 和生成可读解释。"
        },
        {
          name: "phrb-stock-app",
          role: "真实业务经验，讲落地问题",
          strengths: ["真实 Excel 场景", "库存更新、BOM 查询、安全库存看板、历史记忆、趋势判断", "WPF 客户端和便携包", "处理文件改名、后台任务、Excel 卡死、WPS 异常"],
          upgrades: ["准备脱敏 demo 数据", "画 PowerShell/Python/WPF/Excel COM 关系", "把 manifest、验证报告、source trace 讲成审计链", "简历写成制造业库存风险分析和 Excel 自动化工具"],
          pitch: "PHRB 项目来自真实库存工作流，目标是把每日 Excel 更新、BOM 查询、安全库存判断和历史趋势从人工复制粘贴变成可交付的小工具。"
        },
        {
          name: "Factory_Takt_Simulator",
          role: "证明制造现场和节拍理解",
          strengths: ["React + Electron + React Flow", "产线节拍、缓存、机械手、堵料、待料、瓶颈分析", "后台仿真报告和 smoke 脚本"],
          upgrades: ["写清适用场景：轴承套圈沟磨/装配沙盘", "解释节拍、良率、稼动率、缓存逻辑", "保留关键画布截图和 smoke 结果", "面试强调瓶颈分析思维"],
          pitch: "节拍模拟器把制造现场的工序、节拍、缓存、机械手和堵料问题抽象成可视化仿真，用设备能力、运输能力和等待/堵料信号判断瓶颈。"
        },
        {
          name: "factory-production-notice-agent",
          role: "证明结构化契约和自动化交付",
          strengths: ["Python package", "从结构化 work-order payload 生成 Excel、HTML preview、manifest、agent context", "有输入契约和 pytest"],
          upgrades: ["README 明确安装方式", "把 input contract 和 agent context 解释成 tool output", "增加缺字段、异常数量、空 routing 测试"],
          pitch: "这个项目把结构化工单转换成生产通知单、网页预览和 Agent 可读上下文，体现输入契约和下游自动化上下文的价值。"
        },
        {
          name: "HulunGuard",
          role: "证明 AI 可靠性意识",
          strengths: ["关注 evidence、verification、risk、monitor", "测试覆盖没有证据不能通过验证", "和 AI 输出可信定位一致"],
          upgrades: ["定位成 AI 长任务证据监控", "用制造业 Agent 分析任务作为案例", "README 增加 final claim 必须 evidence-backed 的原因"],
          pitch: "HulunGuard 检查长期任务里是否出现目标漂移、证据不足、工具失败后继续下结论等问题，和制造业 AI 应用里的 audit log、source trace、human review 是同一类可靠性思想。"
        }
      ],
      interviewBank: [
        {
          question: "自我定位",
          answer60: "我的优势是制造业现场业务理解和 AI 应用落地能力。我熟悉库存、BOM、PMC、船运、待料风险、产线节拍和异常管理。我现在做的方向，是把这些业务问题拆成数据结构、确定性规则、Agent 工具流和管理层报告，再用 AI 辅助开发快速做出可演示、可验证的系统。",
          expansion: ["不要只说熟练掌握 AI Agent 开发。", "更稳的说法是：正在把制造业业务经验转化为 AI Agent 工作流、数据校验规则和可追溯报告系统。"]
        },
        {
          question: "你理解的 AI Agent 是什么？",
          answer60: "AI Agent 不是单纯聊天机器人，而是由 LLM、工具调用、任务规划、观察和评估组成的系统。LLM 负责理解任务和生成语言，工具负责读取文件、查询数据库、调用 API 或执行代码。",
          expansion: ["LLM 本身只生成文本，不能直接操作外部系统。", "工具让 Agent 能读 Excel、查数据库、跑计算、生成报告。", "制造业里 Agent 不应该凭感觉算库存，而是调用确定性工具。"]
        },
        {
          question: "为什么关键库存计算不能交给 LLM？",
          answer60: "库存、安全库存、BOM 用量和船运到货时间都是关键业务数据，不能交给概率模型自由生成。关键计算由确定性代码和业务规则完成，LLM 只负责解释计算结果、归纳异常原因和生成管理层摘要。",
          expansion: ["LLM 不适合作为 source of truth。", "系统要保存 source_ref、calculation trace 和 audit log。", "异常结果需要 human review。"]
        },
        {
          question: "RAG 是什么？",
          answer60: "RAG 是检索增强生成。它不是让模型记住所有资料，而是回答前先查资料。系统把文档切成 chunk，转成 embedding，存入向量库。用户提问时先 retrieval 最相关的 top-k 内容，再让 LLM 基于资料回答，并给出来源引用。",
          expansion: ["工厂例子：问船运延迟时，系统先检索船运延迟 SOP、安全库存规则和异常升级流程。", "回答必须回到来源文件和段落。"]
        },
        {
          question: "你怎么保证 AI 输出可信？",
          answer60: "我会把 AI 输出建立在可追溯的数据链上。系统先做 data validation，检查模板、字段、日期、单位和异常值；然后用确定性代码完成计算；每个结论保留 source trace、calculation trace 和 audit log。",
          expansion: ["关键词：data validation、source traceability、deterministic logic、audit log、reproducibility、human review。"]
        },
        {
          question: "你怎么设计一个 Excel 分析系统？",
          answer60: "我会把它拆成前端上传、后端校验、文件存储、数据库元数据、后台任务、Excel 解析、规则计算、LLM 摘要和报告展示。上传后返回 job_id，worker 后台处理，前端轮询状态。",
          expansion: ["标准流程：upload -> validate -> store file -> create job_id -> worker parse Excel -> save structured data -> deterministic calculation -> LLM summary -> report output -> audit log。"]
        },
        {
          question: "你做过什么 AI 项目？",
          answer60: "我做过几个制造业相关原型。主项目是工厂运营智能平台，把 BOM、库存、订单、船运、生产通知、产线仿真和 Agent 工具调用放到一个 demo 里。另一个 PHRB 库存工具来自真实 Excel 工作流，还有节拍模拟器用来分析产线设备、缓存、机械手和瓶颈。",
          expansion: ["先讲主项目。", "再讲真实业务项目。", "最后讲辅助项目证明能力宽度。"]
        },
        {
          question: "你为什么适合 AI 解决方案顾问？",
          answer60: "这个岗位需要把客户业务问题翻译成可落地系统。我有制造业现场和 PMC 业务理解，知道库存、BOM、船运、待料、产线节拍这些真实问题，也能用 AI 辅助开发做出可演示原型。",
          expansion: ["关键词：requirement analysis、stakeholder communication、workflow design、implementation、domain knowledge、proof of concept。"]
        },
        {
          question: "你目前最大的短板是什么？",
          answer60: "我目前最大的短板不是业务理解，而是工程表达和系统化基础还在补，比如数据库建模、RAG、Tool Schema 和异步任务。我已经通过项目在补这些能力，例如把 BOM 和库存拆成结构化表，把 Agent 工具定义成 schema，把关键计算放到确定性代码里。",
          expansion: ["承认短板，但要接到行动和证据。"]
        }
      ],
      lessonEnglishReviews: [
        {
          lessonId: "day-1",
          terms: ["business boundary", "business event", "master data", "metric"],
          en: "A useful data model starts with business boundaries. Before creating tables, define what the system must answer and which events provide evidence.",
          zh: "有用的数据模型从业务边界开始。建表之前，先定义系统必须回答什么问题，以及哪些事件能提供证据。"
        },
        {
          lessonId: "day-2",
          terms: ["entity", "attribute", "transaction data", "audit field"],
          en: "Entities have stable identities. Attributes describe them, while transaction data records what happened to them over time.",
          zh: "实体拥有稳定身份。属性描述实体，事务数据记录实体随时间发生了什么。"
        },
        {
          lessonId: "day-3",
          terms: ["primary key", "foreign key", "constraint", "junction table"],
          en: "Keys and constraints protect business facts. A junction table is required when both sides of a relationship can have many records.",
          zh: "键和约束保护业务事实。当关系两边都可能有多条记录时，需要中间表。"
        },
        {
          lessonId: "day-4",
          terms: ["bill of materials", "routing", "component", "work center"],
          en: "The BOM explains what components are required. Routing explains which operations and work centers are needed to make the product.",
          zh: "BOM 解释需要哪些子件。工艺路线解释制造产品需要哪些工序和工作中心。"
        },
        {
          lessonId: "day-5",
          terms: ["lot", "traceability", "evidence", "inventory transaction"],
          en: "Traceability connects conclusions to original events. A shortage warning should point back to demand, supply, stock and rule evidence.",
          zh: "追溯性把结论连接回原始事件。缺料提醒应该能回到需求、供应、库存和规则证据。"
        },
        {
          lessonId: "day-6",
          terms: ["query", "risk level", "tool interface", "structured evidence"],
          en: "A stable agent tool should return structured evidence, not just a fluent explanation. The explanation can be generated, but the facts must come from queries.",
          zh: "稳定的 Agent 工具应该返回结构化证据，而不只是流畅解释。解释可以生成，但事实必须来自查询。"
        },
        {
          lessonId: "day-7",
          terms: ["model review", "deliverable", "defensible design", "portfolio pitch"],
          en: "A defensible design can explain its boundary, identities, relationships, constraints and queries. That is what makes a project interview-ready.",
          zh: "能辩护的设计可以解释边界、身份、关系、约束和查询。这会让项目具备面试表达能力。"
        }
      ],
      updateContract: {
        weekFilePattern: "content-week{n}.js",
        registration: "window.COURSE_LIBRARY.weeks.push(weekPayload)",
        requiredFields: ["id", "title", "subtitle", "duration", "level", "outcome", "lessons", "glossary", "bilingualArticle"]
      },
      lessons: [
        {
          id: "day-1",
          label: "Day 1",
          title: "先画业务边界，再画表",
          duration: "70-90 分钟",
          summary: "数据库建模不是把 Excel 搬进数据库，而是确定系统要长期回答哪些问题，并把这些问题背后的对象、事件和规则拆清楚。",
          goals: [
            "说清楚制造业数据系统的业务边界",
            "区分业务对象、业务事件、业务规则和报表指标",
            "画出第一个库存风险系统上下文图"
          ],
          diagram: "context",
          sections: [
            {
              heading: "1.1 数据库不是高级 Excel",
              paragraphs: [
                "Excel 可以快速记录现场事实，但它很难稳定表达约束、来源、历史版本和多人协作。数据库建模要解决的是长期可靠性：同一个物料编码在不同表里只能有一个身份，同一次入库不能被重复计算，同一条风险判断要能追到它用了哪些数据。",
                "如果你只是把“物料、库存、供应商、订单”放进几张表，系统短期能跑，但很快会出现口径不一致。库存报表说 A 物料有 120 件，生产计划说只够 2 天，采购说还没到货，最后没人知道哪个数字可信。",
                "第一周的目标不是学完所有数据库理论，而是掌握一个可靠的建模顺序：先业务边界，再实体关系，再约束，再查询，再用样例数据验证。这个顺序会直接影响后面做 Agent 工具调用时的稳定性。"
              ],
              bullets: [
                "业务边界：这套系统负责什么，不负责什么。",
                "事实数据：已经发生的记录，例如入库、领料、质检、工单报工。",
                "主数据：相对稳定的对象档案，例如物料、供应商、仓库、工艺路线。",
                "规则数据：决定系统如何解释事实的参数，例如安全库存、提前期、批次有效期。",
                "指标数据：由事实和规则计算出的结论，例如可用库存、缺料风险、交付风险。"
              ],
              example: "如果你要做库存风险提醒，边界不是“管理整个工厂”，而是“在给定物料、库存、未结订单、在途采购和安全库存的条件下，识别未来 7 天可能缺料的项目”。边界清楚后，第一版模型就不会把设备保养、人事排班、财务成本全部塞进来。"
            },
            {
              heading: "1.2 从问题反推数据模型",
              paragraphs: [
                "好的模型通常从问题开始。你不需要一开始就问“我要建几张表”，而要问“系统必须回答哪些问题”。制造业里最常见的问题是：某物料现在有多少可用库存；某工单会不会缺料；某批次去了哪些成品；某个供应商的到货稳定性如何。",
                "每个问题都会逼出不同的数据结构。要回答库存数量，只记录物料和数量可能够用；要回答批次追溯，就必须记录批次、交易事件和上下游关系；要回答未来风险，就必须记录需求日期、供应日期、提前期和安全库存。",
                "你现在的项目如果要变成作品集，不能只展示页面效果。你要能解释：我为什么需要这张表，为什么这个字段不能放在另一张表，为什么这个查询能支撑业务判断。"
              ],
              bullets: [
                "问题：未来 7 天哪些物料可能缺料？",
                "对象：物料、仓库、供应商、采购订单、生产工单。",
                "事件：入库、出库、领料、订单释放、采购到货。",
                "规则：安全库存、计划提前期、可用库存口径。",
                "输出：风险等级、原因、数据来源。"
              ],
              checkpoint: "今天结束前，你应该能用 5 句话描述系统边界，并能列出 5 个系统必须回答的问题。每个问题后面至少写出需要哪些数据对象。"
            },
            {
              heading: "1.3 上下文图：把系统放回现场",
              paragraphs: [
                "上下文图不是架构图，它表达系统和外部角色之间的数据关系。对一个库存风险系统来说，外部角色至少包括生产计划、仓库、采购、质量和管理者。不同角色输入的数据不同，看的结果也不同。",
                "生产计划提供未来需求，仓库提供库存事件，采购提供在途供应，质量提供冻结或放行状态，管理者看风险汇总。你把这些关系画出来，就能避免模型只服务一个角色，最后无法解释跨部门口径。",
                "建模时要特别小心“看起来相同但含义不同”的词。计划需求、客户订单需求、生产工单需求都叫需求，但它们的来源、可取消性和时间粒度不同。模型里不能因为中文一样就合并成一个字段。"
              ],
              bullets: [
                "输入侧：谁产生数据，产生频率是多少，是否允许修改历史。",
                "处理侧：系统如何把输入转成统一口径。",
                "输出侧：谁消费结果，结果需要精确到什么粒度。",
                "审计侧：每个结论能否追溯到原始记录。"
              ],
              warning: "不要一开始就按页面布局建表。页面会变，业务事实不会轻易变。表应当围绕事实和关系，而不是围绕某个按钮或某张报表。"
            },
            {
              heading: "1.4 当天练习",
              paragraphs: [
                "选一个你熟悉的制造业场景，限定在一个小问题上。建议从库存风险开始，因为它同时涉及主数据、事件、规则和查询，是做 Agent 项目的好入口。",
                "写出系统边界后，把每个边界外的内容也写出来。比如第一周不做成本核算，不做排产优化，不做供应商评分，只保留这些对象的必要字段。明确不做什么，是避免半吊子系统的关键。"
              ],
              tasks: [
                "写一个 150 字以内的系统边界说明。",
                "列出 5 个业务问题，并标注每个问题需要的对象和事件。",
                "画一张上下文图：角色、输入、系统、输出。",
                "找出 3 个容易混淆的业务词，并写出它们的区别。"
              ]
            }
          ]
        },
        {
          id: "day-2",
          label: "Day 2",
          title: "实体、属性、主数据与事务数据",
          duration: "90-120 分钟",
          summary: "制造业系统的数据质量，首先取决于你能否区分稳定对象和发生事件。混在一起的模型，后面一定会在查询和追溯上付出代价。",
          goals: [
            "识别实体与属性的边界",
            "区分主数据、事务数据、规则数据",
            "建立物料、仓库、供应商、库存事件的第一版模型"
          ],
          diagram: "entity",
          sections: [
            {
              heading: "2.1 实体是有身份的对象",
              paragraphs: [
                "实体不是名词堆砌，而是系统需要长期识别的对象。物料是实体，因为它有唯一编码、名称、规格、单位和生命周期。供应商是实体，因为它有统一身份、联系人、供货关系和绩效记录。库存数量通常不是实体，而是事件计算后的状态。",
                "判断一个概念是否应该成为实体，可以问三个问题：它是否需要唯一身份；它是否会被多个业务过程引用；它是否有自己的生命周期。三个问题都成立，通常就应该独立建表。",
                "制造业初学者常犯的错误，是把“物料名称”当成物料身份。名称会改，规格描述也会改，但物料编码不能随便改。模型要让稳定身份和可变化描述分离。"
              ],
              bullets: [
                "Material：物料，系统识别生产和采购对象的核心主数据。",
                "Warehouse：仓库，库存事件发生的位置。",
                "Supplier：供应商，采购供应来源。",
                "InventoryTransaction：库存交易事件，记录数量变化。",
                "SafetyStockRule：安全库存规则，记录判断风险的阈值。"
              ],
              example: "“M-1001 六角螺母 M6”不是一个字段就够了。物料编码 M-1001 是身份，六角螺母是名称，M6 是规格，pcs 是基础单位，是否启用是生命周期状态。"
            },
            {
              heading: "2.2 属性不是越多越好",
              paragraphs: [
                "属性应该服务于业务问题。第一版库存风险系统不需要记录物料的全部工艺参数，但必须记录基础单位、采购提前期、安全库存口径和是否关键件。字段过少会导致模型不能回答问题，字段过多会让维护成本上升。",
                "一个实用原则是：先放入当前查询必须使用的字段，再放入能防止歧义的字段，最后放入审计字段。审计字段包括创建时间、更新时间、来源系统、数据状态。这些字段不显眼，但会决定系统是否可信。",
                "不要把多个含义塞进一个字段。比如 status 如果既表示物料是否启用，又表示质量是否冻结，还表示采购是否暂停，后面查询会很混乱。一个字段只表达一种维度。"
              ],
              bullets: [
                "必需字段：没有它就无法完成核心查询。",
                "消歧字段：帮助区分相似对象或相似事件。",
                "审计字段：记录来源、时间、修改人、状态。",
                "派生字段：可以从其他数据计算出来的值，默认不要手工维护。",
                "展示字段：只服务页面展示，不应主导模型结构。"
              ],
              warning: "如果一个字段里经常出现逗号、斜杠、多个编码或“备注里写规则”，它很可能应该拆成结构化字段或新表。"
            },
            {
              heading: "2.3 主数据和事务数据分离",
              paragraphs: [
                "主数据描述对象是谁，事务数据描述发生了什么。物料表说 M-1001 是什么；库存交易表说 M-1001 在某天从 A 仓入库 300 件。把这两类数据分开，是为了让历史事件不受主数据描述变化影响。",
                "比如物料名称从“螺母”改成“六角螺母”，历史入库记录仍然应该指向同一个物料编码。你不能因为名称变化让过去的事件找不到对象。关系数据库里，这通常依靠主键和外键来保证。",
                "规则数据也要单独看。安全库存不是物料天然属性，而是企业在特定仓库、时间、策略下给出的判断规则。它可能按仓库不同，也可能随季节或客户等级变化。"
              ],
              bullets: [
                "主数据慢变，重点是身份、状态和一致性。",
                "事务数据追加，重点是时间、数量、方向和来源。",
                "规则数据可调整，重点是生效范围和生效时间。",
                "指标数据可重算，重点是计算口径和版本。"
              ],
              checkpoint: "把你第一天列出的对象分成四类：主数据、事务数据、规则数据、指标数据。无法分类的项目先标为“待澄清”，不要硬塞进模型。"
            },
            {
              heading: "2.4 当天练习",
              paragraphs: [
                "今天要输出的是第一版字段清单。你不需要追求完美，但每个字段都要能解释为什么存在。字段解释越清楚，后面写 SQL 和工具接口越省力。",
                "字段命名建议使用英文 snake_case，这样后续接 Python、SQL、API 文档都会更自然。中文可以作为注释或展示名，但不要把中文字段名作为代码层接口。"
              ],
              tasks: [
                "为 Material、Warehouse、Supplier、InventoryTransaction 写字段清单。",
                "每张表标出主键、外键、必填字段和唯一约束。",
                "写 5 条样例库存交易，至少包括入库、出库、冻结、调整。",
                "解释为什么库存余额不应该只靠一个手填字段维护。"
              ]
            }
          ]
        },
        {
          id: "day-3",
          label: "Day 3",
          title: "关系模型、主键、外键与约束",
          duration: "90-120 分钟",
          summary: "关系模型的价值不是形式感，而是用约束保护业务事实。没有约束的数据库，只是换了皮的表格。",
          goals: [
            "理解一对一、一对多、多对多",
            "掌握主键、外键、唯一约束、检查约束",
            "把库存风险模型画成 ER 图"
          ],
          diagram: "er",
          sections: [
            {
              heading: "3.1 主键是身份，不是排序号",
              paragraphs: [
                "主键的职责是稳定识别一条记录。它可以是业务键，例如物料编码；也可以是代理键，例如自增 ID 或 UUID。制造业系统经常同时保留两者：内部用代理键关联，外部展示业务编码。",
                "业务键有可读性，但可能受企业编码规则变化影响。代理键稳定，但用户看不懂。第一版项目可以使用 code 作为业务唯一键，同时保留 id 作为技术主键，这样后续扩展更稳。",
                "不要把行号当主键。Excel 里第 5 行只是位置，不是业务身份。数据库里行的物理顺序不可靠，任何依赖行号的模型都会在导入、删除、合并时出问题。"
              ],
              bullets: [
                "Primary Key：记录的技术身份。",
                "Business Key：业务可识别的唯一编码。",
                "Unique Constraint：防止重复业务对象。",
                "Foreign Key：保证引用对象真实存在。",
                "Check Constraint：保证字段值落在合法范围。"
              ],
              example: "Material 表可以有 id 和 material_code。id 用于外键关联，material_code 加唯一约束。这样即使编码规则未来调整，内部关联也不会被轻易破坏。"
            },
            {
              heading: "3.2 外键让事件有归属",
              paragraphs: [
                "库存交易必须指向物料和仓库，否则数量变化没有业务意义。外键的作用是防止系统出现“某个不存在的物料出库了 20 件”这种事实错误。",
                "外键还会逼你思考删除策略。物料如果已经发生过交易，通常不能物理删除，只能标记停用。否则历史记录会断。制造业系统大多重视历史追溯，所以软删除或状态字段比直接删除更常见。",
                "外键不是性能负担的代名词。对学习项目来说，先把数据一致性建起来，比过早担心性能更重要。等数据量和查询压力真的上来，再讨论索引、分区和归档。"
              ],
              bullets: [
                "库存交易 material_id 外键指向 Material。",
                "库存交易 warehouse_id 外键指向 Warehouse。",
                "采购订单 supplier_id 外键指向 Supplier。",
                "安全库存规则 material_id + warehouse_id 表达适用范围。"
              ],
              warning: "如果一张事实表只有文本名称，没有外键，你很难保证名称拼写、大小写、别名和历史变更的一致性。"
            },
            {
              heading: "3.3 多对多必须拆中间表",
              paragraphs: [
                "多对多关系在制造业里非常常见。一个供应商可以供应多个物料，一个物料也可以有多个供应商。一个 BOM 里有多个子件，一个子件也可能被多个父件使用。关系数据库不能直接存多对多，必须用中间表表达。",
                "中间表不是多余设计，它承载关系本身的属性。供应商和物料之间不只是“有关联”，还会有采购提前期、最小起订量、默认供应商、价格有效期。BOM 父子件关系也会有用量、损耗率、生效日期、版本号。",
                "理解中间表，会让你后面写 Agent 工具接口时更清楚。Agent 询问“为什么这个物料风险高”，系统可以沿着中间表查到默认供应商、提前期、在途采购和替代料。"
              ],
              bullets: [
                "SupplierMaterial：供应商和物料的供货关系。",
                "BomComponent：父件和子件的组成关系。",
                "RouteOperation：工艺路线和工序的顺序关系。",
                "UserRole：用户和角色的权限关系。"
              ],
              checkpoint: "今天画 ER 图时，凡是出现“一个 A 有多个 B，一个 B 也属于多个 A”，就不要用逗号字段，直接建中间表。"
            },
            {
              heading: "3.4 当天练习",
              paragraphs: [
                "今天的产物是一张可解释的 ER 图。你可以手画，也可以用 Mermaid、draw.io、dbdiagram 或任何你顺手的工具。关键不是图漂亮，而是关系方向和约束清楚。",
                "画完之后，尝试用自然语言读图：一个物料可以有多条库存交易；一条库存交易必须属于一个物料；一个物料在一个仓库可以有一条安全库存规则。能读顺，模型才算初步成立。"
              ],
              tasks: [
                "画 Material、Warehouse、Supplier、InventoryTransaction、SafetyStockRule 的 ER 图。",
                "标出每条关系是一对多还是多对多。",
                "为每张表写出至少 2 个约束。",
                "解释为什么删除物料时应优先停用而不是物理删除。"
              ]
            }
          ]
        },
        {
          id: "day-4",
          label: "Day 4",
          title: "BOM 与工艺路线：制造业模型的骨架",
          duration: "110-140 分钟",
          summary: "只会库存表不够。制造业的核心结构是产品如何由子件组成，以及产品经过哪些工序变成成品。",
          goals: [
            "理解 BOM 的层级和版本",
            "理解工艺路线与工序",
            "建立父子件关系和工序顺序模型"
          ],
          diagram: "bom",
          sections: [
            {
              heading: "4.1 BOM 不是树状文本",
              paragraphs: [
                "BOM 是 Bill of Materials，表示一个父件由哪些子件组成。很多人第一次看 BOM 会把它当成缩进列表，但数据库里不能只存缩进文本。系统要回答“做 100 个成品需要多少子件”，就必须能递归展开父子件关系。",
                "BOM 的难点在于同一个子件可能出现在多个父件里，同一个父件也可能有多个版本。你不能只用 parent_code 和一个逗号分隔的 children 字段。正确做法是用 BomHeader 表示 BOM 版本，用 BomComponent 表示每条父子件关系。",
                "BOM 关系上通常有数量、损耗率、生效日期、替代料规则。它不是单纯的连接线，而是一条有属性的制造规则。"
              ],
              bullets: [
                "BomHeader：BOM 的版本头，属于某个父件。",
                "BomComponent：BOM 明细，记录子件、用量、单位、损耗率。",
                "effective_from / effective_to：版本生效时间。",
                "scrap_rate：生产损耗率。",
                "alternate_group：替代料分组。"
              ],
              example: "生产 1 台 P-100 控制箱，需要 1 个外壳、1 块 PCB、8 个螺丝。螺丝被多个产品共用，所以它不能只写在 P-100 的备注里，必须作为独立物料被 BomComponent 引用。"
            },
            {
              heading: "4.2 多层展开和缺料判断",
              paragraphs: [
                "缺料判断不能只看第一层 BOM。如果成品 P-100 需要半成品 S-200，而 S-200 又需要芯片 C-300，那么 C-300 缺料也会影响 P-100。多层 BOM 展开就是把父件需求一路向下分解成底层物料需求。",
                "第一周你不需要写复杂 MRP 引擎，但要理解数据模型必须支持递归查询。父子件关系如果建对了，后面可以用递归 SQL、程序遍历或图查询展开。如果关系写在文本里，后面几乎无法可靠计算。",
                "BOM 还要和版本绑定。同一个产品在 2026 年 1 月和 2026 年 6 月可能用不同 PCB。缺料判断必须使用需求日期对应的有效 BOM 版本。"
              ],
              bullets: [
                "顶层需求：成品或半成品的计划数量。",
                "展开层级：父件到子件，直到采购件或原材料。",
                "净需求：需求量减去可用库存和已确认供应。",
                "版本选择：按需求日期匹配有效 BOM。",
                "替代关系：主料不足时是否允许替代。"
              ],
              warning: "不要忽视时间。没有生效日期的 BOM 模型，只能表达当前版本，无法解释历史订单为什么用了不同物料。"
            },
            {
              heading: "4.3 工艺路线连接物料和产能",
              paragraphs: [
                "BOM 回答“用什么做”，工艺路线回答“怎么做”。工艺路线包含一组有顺序的工序，每道工序可能绑定工作中心、标准工时、准备时间、质检点和报工要求。",
                "即使第一周主攻数据库建模，也应该知道工艺路线会影响后续 Agent 能力。未来你问“这张订单为什么延期”，答案可能不是缺料，而是某道工序产能不足或质检等待过长。",
                "工艺路线和 BOM 一样也有版本。一个产品换了生产线，工序顺序或标准工时可能变化。模型里要留下版本和生效时间，否则后面无法比较历史效率。"
              ],
              bullets: [
                "RouteHeader：工艺路线版本。",
                "RouteOperation：工序明细，包含序号和工作中心。",
                "WorkCenter：工作中心或设备组。",
                "standard_time：标准加工时间。",
                "quality_gate：是否为质量检验点。"
              ],
              checkpoint: "现在先把工艺路线作为扩展表设计出来，不急着写复杂排产算法。你要留出后续周接入生产计划和产能分析的位置。"
            },
            {
              heading: "4.4 当天练习",
              paragraphs: [
                "今天用一个简单产品建 BOM：成品、一个半成品、三个采购件。你要写出 BomHeader、BomComponent 的样例数据，并解释多层展开会经过哪些关系。",
                "如果你愿意多做一步，把工艺路线也补上：成品经过装配、测试、包装三道工序；半成品经过贴片、焊接、检查三道工序。先把结构建起来，后面再用查询验证。"
              ],
              tasks: [
                "设计 BomHeader 和 BomComponent 字段。",
                "写一个两层 BOM 的样例数据。",
                "说明 BOM 版本如何按日期生效。",
                "为 RouteHeader、RouteOperation、WorkCenter 写第一版字段清单。"
              ]
            }
          ]
        },
        {
          id: "day-5",
          label: "Day 5",
          title: "库存、批次、来源追溯与可信结论",
          duration: "100-130 分钟",
          summary: "Agent 给出的结论要被现场接受，必须能说明数据来自哪里、什么时候产生、经过了哪些计算。",
          goals: [
            "建立库存事件模型",
            "理解批次追溯和质量状态",
            "为风险结论设计来源链路"
          ],
          diagram: "trace",
          sections: [
            {
              heading: "5.1 库存余额来自事件流",
              paragraphs: [
                "库存余额可以缓存，但不应该只靠手填。更可靠的做法是记录库存交易事件：入库增加，出库减少，冻结不一定改变账面数量但会改变可用数量，调整要有原因。",
                "事件流的好处是可以重算。某天报表错了，你能从原始交易重新计算余额，并定位是哪条交易异常。只有一个余额字段时，你只能看到结果，无法解释结果。",
                "库存事件要包含方向、数量、物料、仓库、批次、来源单据、发生时间和记录时间。发生时间是业务事实时间，记录时间是系统写入时间，两者不能混淆。"
              ],
              bullets: [
                "IN：采购入库、生产入库、退料入库。",
                "OUT：生产领料、销售出库、报废出库。",
                "HOLD：质量冻结、待检、隔离。",
                "ADJUST：盘点调整、差异处理。",
                "TRANSFER：仓库间转移。"
              ],
              example: "一批物料 6 月 1 日到货，但仓库 6 月 2 日才补录。风险判断如果看发生时间，供应在 6 月 1 日可用；如果看记录时间，系统直到 6 月 2 日才知道这件事。两种口径要明确。"
            },
            {
              heading: "5.2 批次让质量和追溯可落地",
              paragraphs: [
                "批次是制造业追溯的关键。没有批次，系统只能说某种物料进出过；有了批次，系统才能说哪一批供应商来料进入了哪些半成品，又进入了哪些成品。",
                "批次模型至少要记录 lot_code、material_id、supplier_id、生产日期或到货日期、质量状态和有效期。质量状态会影响可用库存：账面有货不代表可用，冻结批次不能直接用于生产。",
                "追溯查询通常分为正向和反向。正向追溯从原材料批次查到受影响成品；反向追溯从成品批次查回原材料来源。两种查询都要求你在生产投料和产出时记录批次关系。"
              ],
              bullets: [
                "Lot：一批具有共同来源或生产条件的物料。",
                "QualityStatus：合格、待检、冻结、报废。",
                "Genealogy：批次谱系，记录投入批次和产出批次之间的关系。",
                "Recall：召回场景，需要快速定位受影响产品。"
              ],
              warning: "如果系统没有批次关系，出了质量问题只能靠人工翻单据。对作品集来说，批次追溯是非常能体现专业度的模块。"
            },
            {
              heading: "5.3 结论要带来源",
              paragraphs: [
                "Agent 或报表说“未来 7 天 M-1001 高风险”，现场会追问：为什么高风险，缺多少，需求来自哪个工单，供应来自哪些采购单，库存是否有冻结。模型必须让这些追问有答案。",
                "因此风险结果表不只存 material_id 和 risk_level，还应该存计算时间、口径版本、需求来源、供应来源、库存快照来源和解释文本。解释文本可以生成，但来源 ID 必须结构化保存。",
                "这就是可审计模型和普通演示模型的差别。普通演示模型只能给结论；可审计模型能给证据链。你后面做 Agent，真正值钱的是证据链。"
              ],
              bullets: [
                "RiskRun：一次风险计算任务。",
                "RiskResult：每个物料或订单的风险结论。",
                "RiskEvidence：结论引用的需求、供应、库存、规则来源。",
                "calculation_version：计算口径版本。",
                "generated_at：计算时间。"
              ],
              checkpoint: "为每条风险结论保留至少 3 类证据：需求证据、供应证据、库存证据。只有 risk_level 没有 evidence，不算合格。"
            },
            {
              heading: "5.4 当天练习",
              paragraphs: [
                "今天要把库存事件、批次、风险结果连接起来。你不需要做完整系统，但要能写出一条风险结论背后的数据路径。",
                "建议用一条简单案例：M-1001 当前可用 80，未来 7 天需求 150，在途采购 40，其中 30 因质量待检暂不可用。这个例子能逼你区分账面库存、可用库存、冻结库存和在途供应。"
              ],
              tasks: [
                "设计 InventoryTransaction、Lot、LotGenealogy、RiskResult、RiskEvidence 字段。",
                "写一条风险样例，说明它引用了哪些来源记录。",
                "解释账面库存和可用库存的区别。",
                "画一条从采购入库到成品出货的批次追溯链。"
              ]
            }
          ]
        },
        {
          id: "day-6",
          label: "Day 6",
          title: "查询口径：把模型变成可用能力",
          duration: "100-140 分钟",
          summary: "表设计只是开始。能不能用稳定查询回答业务问题，决定这个模型是不是能交付。",
          goals: [
            "写出库存风险核心查询",
            "理解指标口径和查询边界",
            "把查询包装成 Agent 可调用工具"
          ],
          diagram: "query",
          sections: [
            {
              heading: "6.1 查询从业务问题开始",
              paragraphs: [
                "查询不是为了炫技，而是把业务问题转成可验证的数据过程。未来 7 天缺料风险可以拆成四步：计算需求、计算可用库存、计算确认供应、按规则判断缺口。",
                "每一步都要有口径。需求是否包含未释放工单？供应是否包含未确认采购订单？冻结批次是否算可用？安全库存是否要额外保留？这些口径不写清楚，查询结果就会被质疑。",
                "第一版 SQL 可以简单，但必须可解释。你要能把每个 join 和 where 条件翻译成业务语言。"
              ],
              bullets: [
                "需求窗口：未来 7 天或指定日期范围。",
                "需求来源：生产工单、销售订单、预测需求。",
                "供应来源：现有可用库存、在途采购、计划生产入库。",
                "排除项：冻结批次、报废库存、未确认供应。",
                "风险等级：缺口数量和安全库存共同决定。"
              ],
              code: "SELECT\n  m.material_code,\n  m.material_name,\n  COALESCE(stock.available_qty, 0) AS available_qty,\n  COALESCE(demand.required_qty, 0) AS required_qty,\n  COALESCE(supply.inbound_qty, 0) AS inbound_qty,\n  ss.safety_qty,\n  (COALESCE(stock.available_qty, 0) + COALESCE(supply.inbound_qty, 0)\n    - COALESCE(demand.required_qty, 0) - ss.safety_qty) AS projected_gap\nFROM material m\nLEFT JOIN stock_snapshot stock ON stock.material_id = m.id\nLEFT JOIN demand_7d demand ON demand.material_id = m.id\nLEFT JOIN confirmed_supply_7d supply ON supply.material_id = m.id\nLEFT JOIN safety_stock_rule ss ON ss.material_id = m.id\nWHERE m.is_active = true;"
            },
            {
              heading: "6.2 查询结果必须可解释",
              paragraphs: [
                "查询输出不应该只有数字。业务人员需要知道为什么风险高。你可以输出 risk_reason：需求大于可用库存、采购未确认、批次冻结、安全库存不足。原因最好来自结构化判断，不要只靠自然语言拼接。",
                "一个好的查询结果包含：对象、数值、时间窗口、风险等级、原因、证据 ID。证据 ID 能让页面点进去查看原始订单、交易或规则。后续 Agent 回答问题时，也应该引用这些证据 ID。",
                "如果查询结果不能解释，用户会回到 Excel。不是因为 Excel 更强，而是因为 Excel 让他看得见每个数字从哪里来。你的系统也必须做到这一点。"
              ],
              bullets: [
                "对象字段：material_code、warehouse_code。",
                "数量字段：available_qty、required_qty、inbound_qty、projected_gap。",
                "判断字段：risk_level、risk_reason。",
                "证据字段：demand_refs、supply_refs、stock_refs、rule_refs。",
                "时间字段：window_start、window_end、generated_at。"
              ],
              checkpoint: "把你写的查询结果拿给一个不懂代码的人看，他应该能理解风险原因，而不是只看到一堆字段名。"
            },
            {
              heading: "6.3 Agent 工具接口要窄而稳",
              paragraphs: [
                "后续你做 Agent，不要让 Agent 直接任意写 SQL。更稳的方式是把核心查询包装成固定工具，例如 get_material_risk、trace_lot、explain_shortage。工具参数少、返回结构稳定，Agent 的回答质量会明显提升。",
                "工具接口本质是数据库模型对外提供的能力边界。模型不清楚，工具就会变成万能但不可靠的接口。第一周先设计 3 个工具，足够支撑面试表达和作品集演示。",
                "每个工具都要写输入、输出、错误场景和示例。比如 trace_lot 如果批次不存在，应该返回 not_found；如果批次存在但缺少 genealogy，应该返回 incomplete_trace，而不是编一个答案。"
              ],
              bullets: [
                "get_material_risk(material_code, window_days)",
                "explain_shortage(material_code, warehouse_code, date_range)",
                "trace_lot(lot_code, direction)",
                "list_open_purchase_supply(material_code, before_date)",
                "get_bom_explosion(parent_material_code, quantity, effective_date)"
              ],
              example: "get_material_risk 返回的不只是 risk_level，还应返回 gap、主要原因、需求证据、供应证据和建议动作。这样 Agent 可以组织语言，但事实仍由工具提供。"
            },
            {
              heading: "6.4 当天练习",
              paragraphs: [
                "今天要把模型变成查询能力。建议先用纸面 SQL 或伪 SQL，不必纠结具体数据库语法。重点是把业务口径拆清楚。",
                "写完查询后，用 3 条样例数据验证：无风险、低风险、高风险。高风险必须能解释缺口从哪里来，不能只靠一个字段判断。"
              ],
              tasks: [
                "写未来 7 天库存风险查询。",
                "写批次正向追溯查询的伪 SQL。",
                "定义 3 个 Agent 工具接口的输入和输出。",
                "为每个查询写一个异常场景。"
              ]
            }
          ]
        },
        {
          id: "day-7",
          label: "Day 7",
          title: "建模评审、作品集表达与第一周交付",
          duration: "120-160 分钟",
          summary: "最后一天不是继续堆表，而是评审模型、补样例、写说明，把学习产物整理成能讲清楚的作品。",
          goals: [
            "完成模型评审清单",
            "整理第一周项目交付物",
            "准备面试级表达"
          ],
          diagram: "review",
          sections: [
            {
              heading: "7.1 模型评审看五件事",
              paragraphs: [
                "建模评审不是挑字段名，而是验证模型能不能支撑业务。第一看边界：模型是否只解决当前问题，同时给后续扩展留口子。第二看身份：核心对象是否有稳定主键和业务唯一键。第三看关系：外键和中间表是否表达真实关系。",
                "第四看约束：哪些错误数据会被系统挡住。第五看查询：模型是否能回答第一天列出的业务问题。只要这五项过关，第一周模型就不是空谈。",
                "你要习惯把模型当成可辩护的设计。别人问为什么这么建，你要能给出业务理由、数据理由和后续扩展理由。"
              ],
              bullets: [
                "边界：当前系统解决库存风险，不承诺完整 ERP。",
                "身份：物料、仓库、供应商、批次都有稳定身份。",
                "关系：库存事件指向物料、仓库、批次和来源单据。",
                "约束：数量非负、状态枚举、业务编码唯一。",
                "查询：风险、追溯、BOM 展开都能跑通。"
              ],
              checkpoint: "如果一个字段或一张表无法对应到业务问题、数据一致性或后续扩展，就先删掉或移到待办。克制也是建模能力。"
            },
            {
              heading: "7.2 第一周交付物",
              paragraphs: [
                "第一周结束时，你应该有一组能放进作品集的材料：业务边界说明、上下文图、ER 图、字段字典、样例数据、核心查询、Agent 工具接口和评审清单。它们共同证明你不是只会做页面，而是在搭系统底座。",
                "字段字典要写清楚字段含义、类型、是否必填、约束和示例。样例数据要覆盖正常和异常情况。查询要有输入输出样例。工具接口要写错误场景。这样面试官追问时，你能把话题拉回系统设计。",
                "不要把作品集写成流水账。每个交付物都要回答一个问题：为什么需要它，它解决了什么风险，它如何支撑后续 Agent。"
              ],
              tasks: [
                "整理一页业务边界说明。",
                "整理一张 ER 图和一份字段字典。",
                "准备 20 条样例数据，覆盖库存、批次、BOM、采购。",
                "写 3 个查询和 3 个 Agent 工具接口。",
                "写一段 2 分钟项目讲解。"
              ]
            },
            {
              heading: "7.3 面试表达框架",
              paragraphs: [
                "你可以这样讲第一周项目：我做的是一个制造业库存风险数据底座，目标不是替代 ERP，而是把库存、需求、供应、批次和规则整理成可查询、可追溯、可被 Agent 调用的结构。",
                "接着讲设计取舍：我把主数据、事务数据、规则数据和结果数据分开；库存余额由事件流计算；BOM 用父子件中间表表达；风险结论保留 evidence，避免 Agent 只给结论不给来源。",
                "最后讲下一步：第二周会基于这个模型做数据导入、清洗和查询 API；第三周再让 Agent 调用这些 API。这样路径清楚，别人会觉得你是在做系统，而不是拼 Demo。"
              ],
              bullets: [
                "一句话目标：让制造业数据能被可靠查询和解释。",
                "核心难点：口径、追溯、版本、证据链。",
                "关键设计：主数据/事件/规则/结果分层。",
                "可扩展点：BOM 展开、批次追溯、Agent 工具调用。",
                "交付价值：从 Excel 台账升级为可审计的数据底座。"
              ],
              example: "当被问到“你为什么不直接让大模型读 Excel”时，可以回答：Excel 可以作为输入，但模型必须先把对象、事件、规则和来源结构化。否则 Agent 只能复述表格，无法稳定追溯，也无法保证每次口径一致。"
            },
            {
              heading: "7.4 当天练习",
              paragraphs: [
                "最后一天要做复盘。把你这一周的模型拿出来，从业务边界、数据结构、查询能力、证据链和后续扩展五个角度各写 3 条检查结论。",
                "如果你发现某些表还说不清用途，不要焦虑。删掉或推迟它们，保留一条清楚的主线。第一周真正重要的是建立专业建模习惯。"
              ],
              tasks: [
                "用评审清单审查自己的模型。",
                "把 2 分钟项目讲解录音一遍。",
                "列出第二周要实现的数据导入和 API。",
                "把本周英文术语全部加入词本并复习。"
              ]
            }
          ]
        }
      ],
      glossary: [
        {
          term: "Entity",
          zh: "实体",
          definition: "系统需要长期识别和引用的业务对象。",
          example: "Material, Supplier, Warehouse and Lot are entities in a manufacturing data model."
        },
        {
          term: "Attribute",
          zh: "属性",
          definition: "描述实体或事件的字段。",
          example: "Material code, base unit and lead time are attributes of a material."
        },
        {
          term: "Primary Key",
          zh: "主键",
          definition: "用于唯一识别数据库记录的字段或字段组合。",
          example: "A primary key should remain stable even when display names change."
        },
        {
          term: "Foreign Key",
          zh: "外键",
          definition: "指向另一张表主键的字段，用来保证引用关系真实存在。",
          example: "Inventory transactions use a foreign key to reference the material."
        },
        {
          term: "Business Key",
          zh: "业务键",
          definition: "业务人员能识别的唯一编码，例如物料编码或供应商编码。",
          example: "The material code is a business key used by planners and warehouse staff."
        },
        {
          term: "Master Data",
          zh: "主数据",
          definition: "描述核心业务对象的相对稳定数据。",
          example: "Material and supplier records are master data."
        },
        {
          term: "Transaction Data",
          zh: "事务数据",
          definition: "记录已经发生的业务事件。",
          example: "A goods receipt is transaction data because it records an inventory event."
        },
        {
          term: "Bill of Materials",
          zh: "物料清单",
          definition: "描述父件由哪些子件组成的制造规则。",
          example: "A bill of materials can be exploded to calculate component demand."
        },
        {
          term: "Routing",
          zh: "工艺路线",
          definition: "描述产品经过哪些工序和工作中心完成生产。",
          example: "A routing connects the product to operations and work centers."
        },
        {
          term: "Work Center",
          zh: "工作中心",
          definition: "执行生产工序的设备、产线或资源组。",
          example: "The assembly line is modeled as a work center."
        },
        {
          term: "Inventory Transaction",
          zh: "库存交易",
          definition: "记录库存数量或状态变化的事件。",
          example: "Receipts, issues and adjustments are inventory transactions."
        },
        {
          term: "Lot",
          zh: "批次",
          definition: "具有共同来源或生产条件的一组物料。",
          example: "Lot tracking allows the factory to trace quality issues."
        },
        {
          term: "Traceability",
          zh: "追溯性",
          definition: "从结论或产品追查到来源数据和历史事件的能力。",
          example: "Traceability is required when a defective component must be recalled."
        },
        {
          term: "Evidence",
          zh: "证据",
          definition: "支撑系统结论的来源记录。",
          example: "A shortage explanation should include demand, supply and stock evidence."
        },
        {
          term: "Constraint",
          zh: "约束",
          definition: "数据库层用于阻止不合法数据的规则。",
          example: "A quantity constraint can prevent negative receipt quantities."
        },
        {
          term: "Normalization",
          zh: "规范化",
          definition: "减少重复和异常更新的数据建模方法。",
          example: "Normalization separates suppliers from purchase orders."
        },
        {
          term: "Junction Table",
          zh: "中间表",
          definition: "用于表达多对多关系的表。",
          example: "SupplierMaterial is a junction table between suppliers and materials."
        },
        {
          term: "Safety Stock",
          zh: "安全库存",
          definition: "为应对需求或供应波动而保留的库存阈值。",
          example: "Projected stock below safety stock should trigger a risk warning."
        },
        {
          term: "Lead Time",
          zh: "提前期",
          definition: "从下单、生产或补货开始到完成所需的时间。",
          example: "Long lead time increases the risk of material shortage."
        },
        {
          term: "Data Lineage",
          zh: "数据血缘",
          definition: "描述数据从来源到结果的流转路径。",
          example: "Data lineage explains how a risk score was produced."
        },
        {
          term: "Source of Truth",
          zh: "可信数据源",
          definition: "在冲突数据中被系统认定为权威来源的数据源。",
          example: "The ERP material master is often the source of truth for material codes."
        },
        {
          term: "Query",
          zh: "查询",
          definition: "从数据库中按条件获取或计算结果的语句。",
          example: "The shortage query compares demand with available supply."
        },
        {
          term: "Schema",
          zh: "模式",
          definition: "数据库对象、字段、关系和约束的结构定义。",
          example: "A clear schema makes agent tool calls more reliable."
        },
        {
          term: "Audit Trail",
          zh: "审计轨迹",
          definition: "记录数据变更、计算和访问来源的历史线索。",
          example: "An audit trail helps explain who changed a safety stock rule."
        },
        {
          term: "LLM",
          zh: "大语言模型",
          category: "Agent 基础",
          definition: "负责理解和生成语言的模型，不应负责关键业务计算。",
          example: "The LLM explains the shortage result, but deterministic code calculates the shortage quantity."
        },
        {
          term: "Prompt",
          zh: "提示词",
          category: "Agent 基础",
          definition: "给模型的任务说明、约束和输出格式要求。",
          example: "A prompt can instruct the model to summarize inventory risk with source references."
        },
        {
          term: "Context",
          zh: "上下文",
          category: "Agent 基础",
          definition: "模型当前可以参考的用户输入、工具结果、历史信息和系统约束。",
          example: "Uploaded files and tool observations become context for the agent."
        },
        {
          term: "Context Window",
          zh: "上下文窗口",
          category: "Agent 基础",
          definition: "模型一次能处理的信息容量限制。",
          example: "A context window is not large enough for every Excel file and every SOP document."
        },
        {
          term: "Planning",
          zh: "规划",
          category: "Agent 基础",
          definition: "Agent 在执行前拆分任务和选择步骤的过程。",
          example: "The agent plans to validate the file, parse the BOM and calculate risk."
        },
        {
          term: "Action",
          zh: "行动",
          category: "Agent 基础",
          definition: "Agent 实际调用工具或执行操作的一步。",
          example: "Reading an uploaded Excel file is an action."
        },
        {
          term: "Observation",
          zh: "观察结果",
          category: "Agent 基础",
          definition: "工具执行后返回给 Agent 的结果。",
          example: "The parsed inventory rows are observations."
        },
        {
          term: "Evaluation",
          zh: "评估",
          category: "Agent 基础",
          definition: "检查任务结果是否满足目标、证据和格式要求。",
          example: "Evaluation checks whether the report includes formulas and source references."
        },
        {
          term: "Memory",
          zh: "记忆",
          category: "Agent 基础",
          definition: "长期保存的用户偏好、历史状态或项目事实。",
          example: "The system may remember the last inventory snapshot for trend analysis."
        },
        {
          term: "API",
          zh: "应用程序编程接口",
          category: "Tool/API",
          definition: "前后端或系统之间稳定交换数据的接口。",
          example: "An inventory risk API returns material shortage results."
        },
        {
          term: "Endpoint",
          zh: "接口地址",
          category: "Tool/API",
          definition: "某个具体功能的访问地址。",
          example: "/api/production-notices/generate is an endpoint."
        },
        {
          term: "Request",
          zh: "请求",
          category: "Tool/API",
          definition: "调用接口或工具时发送的数据。",
          example: "A request may include product_id and quantity."
        },
        {
          term: "Response",
          zh: "响应",
          category: "Tool/API",
          definition: "接口或工具返回的数据。",
          example: "A response returns risk level and source references."
        },
        {
          term: "Payload",
          zh: "请求体",
          category: "Tool/API",
          definition: "请求中承载业务数据的主体。",
          example: "The JSON payload contains order lines and due dates."
        },
        {
          term: "Parameter",
          zh: "参数",
          category: "Tool/API",
          definition: "工具或 API 需要的输入项。",
          example: "material_code is a parameter for a material risk query."
        },
        {
          term: "Required Field",
          zh: "必填字段",
          category: "Tool/API",
          definition: "缺失后工具无法可靠执行的字段。",
          example: "product_id is required for BOM explosion."
        },
        {
          term: "Return Value",
          zh: "返回值",
          category: "Tool/API",
          definition: "工具或 API 稳定返回的数据结构。",
          example: "overall_status and source_refs are return values."
        },
        {
          term: "Error Handling",
          zh: "错误处理",
          category: "Tool/API",
          definition: "让系统失败时可解释、可恢复的设计。",
          example: "INVALID_TEMPLATE explains that the uploaded Excel is missing required columns."
        },
        {
          term: "Sandbox",
          zh: "沙盒",
          category: "Tool/API",
          definition: "限制工具执行范围和风险的隔离环境。",
          example: "A sandbox can restrict the agent to the upload directory."
        },
        {
          term: "RAG",
          zh: "检索增强生成",
          category: "RAG",
          definition: "回答前先检索资料，再让模型基于资料生成答案。",
          example: "RAG retrieves safety stock rules before answering policy questions."
        },
        {
          term: "Chunk",
          zh: "文本切块",
          category: "RAG",
          definition: "知识库检索的基本文本单位。",
          example: "An SOP document is split into chunks by section headings."
        },
        {
          term: "Embedding",
          zh: "向量表示",
          category: "RAG",
          definition: "把文本转换成可比较的数字向量。",
          example: "Embeddings help compare semantic similarity between a question and SOP chunks."
        },
        {
          term: "Vector Database",
          zh: "向量数据库",
          category: "RAG",
          definition: "存储向量并支持相似度检索的数据库。",
          example: "A vector database stores embeddings for factory SOP chunks."
        },
        {
          term: "Retrieval",
          zh: "检索",
          category: "RAG",
          definition: "回答前查找相关资料的过程。",
          example: "Retrieval finds the most relevant delay-handling policy."
        },
        {
          term: "Top-k",
          zh: "前 k 个结果",
          category: "RAG",
          definition: "检索时取最相关的 k 条内容。",
          example: "The retriever sends the top five chunks to the prompt."
        },
        {
          term: "Source Citation",
          zh: "来源引用",
          category: "RAG",
          definition: "回答中标明依据来自哪份文件或段落。",
          example: "Source citation makes an SOP answer auditable."
        },
        {
          term: "Hallucination",
          zh: "幻觉",
          category: "RAG",
          definition: "模型编造不存在事实、流程或来源的现象。",
          example: "RAG reduces hallucination by grounding answers in retrieved documents."
        },
        {
          term: "Sync",
          zh: "同步",
          category: "异步任务",
          definition: "调用方等待任务完成后才得到最终结果。",
          example: "A sync upload keeps the browser waiting until analysis finishes."
        },
        {
          term: "Async",
          zh: "异步",
          category: "异步任务",
          definition: "任务开始后先返回编号，后台继续处理。",
          example: "An async upload returns a job_id immediately."
        },
        {
          term: "Task Queue",
          zh: "任务队列",
          category: "异步任务",
          definition: "管理后台任务顺序和负载的队列。",
          example: "A task queue lets multiple Excel files wait for available workers."
        },
        {
          term: "Worker",
          zh: "工作进程",
          category: "异步任务",
          definition: "从队列中取任务并执行的后台程序。",
          example: "A worker parses Excel and generates the report."
        },
        {
          term: "Job ID",
          zh: "任务编号",
          category: "异步任务",
          definition: "用户追踪长任务状态的唯一编号。",
          example: "The frontend polls status by job_id."
        },
        {
          term: "Status Polling",
          zh: "状态轮询",
          category: "异步任务",
          definition: "前端定期查询后台任务进度。",
          example: "Status polling updates the report progress bar."
        },
        {
          term: "Timeout",
          zh: "超时",
          category: "异步任务",
          definition: "任务超过限制时间后停止或进入失败状态。",
          example: "A timeout prevents a locked Excel file from blocking the queue."
        },
        {
          term: "Retry",
          zh: "重试",
          category: "异步任务",
          definition: "临时失败后重新执行任务。",
          example: "A retry can recover from a temporary file lock."
        },
        {
          term: "Deterministic Logic",
          zh: "确定性逻辑",
          category: "可信 AI 输出",
          definition: "同样输入下应得到同样输出的规则和代码。",
          example: "Shortage quantity should be calculated by deterministic logic."
        },
        {
          term: "Rule Engine",
          zh: "规则引擎",
          category: "可信 AI 输出",
          definition: "把业务规则固定为可执行逻辑的模块。",
          example: "A rule engine classifies risk as critical, watch or covered."
        },
        {
          term: "Validation Rule",
          zh: "校验规则",
          category: "可信 AI 输出",
          definition: "用于检查输入是否完整、合法、可信的规则。",
          example: "A validation rule rejects an Excel file without material_code."
        },
        {
          term: "Unit Test",
          zh: "单元测试",
          category: "可信 AI 输出",
          definition: "验证单个函数或模块行为的测试。",
          example: "A unit test verifies BOM quantity multiplication."
        },
        {
          term: "Edge Case",
          zh: "边界情况",
          category: "可信 AI 输出",
          definition: "容易暴露规则漏洞的极端或临界输入。",
          example: "Inventory exactly equal to demand is an edge case."
        },
        {
          term: "Reproducibility",
          zh: "可复现性",
          category: "可信 AI 输出",
          definition: "同一输入重复运行时能得到一致结果。",
          example: "Reproducibility is required for an auditable risk report."
        },
        {
          term: "Explainability",
          zh: "可解释性",
          category: "可信 AI 输出",
          definition: "系统能展示公式、输入、中间结果和结论原因。",
          example: "Explainability helps managers trust shortage warnings."
        }
      ],
      bilingualArticle: {
        title: "Why Manufacturing Agents Need a Database Model First",
        intro: "先学术语，再读短文。英文段落里的关键词可以加入词本。",
        paragraphs: [
          {
            en: "A manufacturing agent is only as reliable as the data model behind it. If materials, lots, suppliers and inventory events are mixed in spreadsheets, the agent may produce fluent answers without trustworthy evidence.",
            zh: "制造业 Agent 的可靠性取决于背后的数据模型。如果物料、批次、供应商和库存事件混在表格里，Agent 可能回答得很流畅，但缺少可信证据。",
            terms: ["manufacturing agent", "data model", "materials", "lots", "suppliers", "inventory events", "evidence"]
          },
          {
            en: "The first design task is to separate master data from transaction data. Master data tells the system what an object is. Transaction data tells the system what happened to that object.",
            zh: "第一项设计任务，是把主数据和事务数据分开。主数据告诉系统对象是谁；事务数据告诉系统对象发生了什么。",
            terms: ["master data", "transaction data", "object"]
          },
          {
            en: "A good schema protects business facts with primary keys, foreign keys and constraints. These rules prevent duplicate materials, missing warehouses and invalid quantities before they damage downstream analysis.",
            zh: "好的模式会用主键、外键和约束保护业务事实。这些规则能在重复物料、缺失仓库、非法数量影响下游分析之前拦住它们。",
            terms: ["schema", "primary keys", "foreign keys", "constraints", "downstream analysis"]
          },
          {
            en: "Bill of materials and routing data make the model manufacturing-specific. The BOM explains what components are required, while routing explains which operations and work centers are needed.",
            zh: "BOM 和工艺路线让模型具备制造业特征。BOM 解释需要哪些子件，工艺路线解释需要哪些工序和工作中心。",
            terms: ["bill of materials", "routing", "components", "operations", "work centers"]
          },
          {
            en: "Traceability turns a risk warning into an accountable conclusion. When a material shortage is reported, the system should show demand records, supply records, stock status and the rule version used in the calculation.",
            zh: "追溯性会把风险提醒变成可负责的结论。当系统报告物料短缺时，应该展示需求记录、供应记录、库存状态和计算使用的规则版本。",
            terms: ["traceability", "risk warning", "demand records", "supply records", "rule version"]
          },
          {
            en: "For agent tool design, narrow and stable queries are better than unrestricted SQL access. Tools such as get_material_risk and trace_lot give the agent structured evidence without letting it guess the business logic.",
            zh: "在 Agent 工具设计中，窄而稳定的查询比开放任意 SQL 更好。get_material_risk 和 trace_lot 这类工具能给 Agent 结构化证据，同时避免它猜测业务逻辑。",
            terms: ["agent tool", "query", "SQL", "structured evidence", "business logic"]
          },
          {
            en: "The goal of the first week is not to build a full ERP system. The goal is to create a small, defensible data foundation that can answer core questions and grow into later automation work.",
            zh: "第一周的目标不是做完整 ERP，而是建立一个小而能辩护的数据底座，让它能回答核心问题，并能继续扩展到后续自动化工作。",
            terms: ["ERP system", "data foundation", "core questions", "automation"]
          }
        ]
      }
    }
  ]
};
