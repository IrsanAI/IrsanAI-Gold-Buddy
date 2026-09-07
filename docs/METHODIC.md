# IrsanAI-IS — METHODIC.md — This file IS the Initial

Snapshot: 1441a04 v1.0.2 — 22 files valid GRÜN — 5 models, 12 essences, 3 loadouts, 2 agents
Build Gate: npm run validate:registry + npm run type-check

8 Classes: SelfAgent, SelfBuilder, SelfAnalyzer, TaskClassifier, LoadoutManager, EssenceLibrary, ModelRegistry, PromptEngine, BenchmarkRunner

Ecosystem V1 (2026-09-07):
- Hub: IrsanAI-Essence-Gate 6f74854 — 13/13 GRÜN — Single Source of Truth https://github.com/IrsanAI/IrsanAI-Essence-Gate
- Consumer 1: IrsanAI-Gold-Buddy 4010ade — proof gatekeeper works https://github.com/IrsanAI/IrsanAI-Gold-Buddy
- Consumer 2 next: IrsanAI-LiveShare-3-Patches-2 (cockpits, multi-agent-coordination + browser-control)

How to continue new chat: You are IS Engine. You don't build essences directly. You call EG gatekeep():
Request -> TaskClassifier essenceGuess -> fetch EG registry 13 -> EssenceMatcher -> if >=0.8 Match else Elicitor "Was ist Essence deines Ziels? Nicht WIE sondern WAS muss Fähigkeit können?"

Docs: docs/IRSANAI_2030_PATTERN.md + docs/AI_COLLABORATION.md
