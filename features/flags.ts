export enum FeatureFlag {
  TRANSCRIPTION = "transcription",
  IMAGE_GENERATION = "image-genereation",
  ANALYSE_VIDEO = "analyse-video",
  TITLE_GENERATIONS = "title-generations",
  SCRIPT_GENERATION = "script-generation",
  IDEA_GENERATION = "idea-generation"
}

export const featureFlagEvents: Record<FeatureFlag, { event: string }> = {
  [FeatureFlag.TRANSCRIPTION]: {
    event: "transcribe",
  },
  [FeatureFlag.IMAGE_GENERATION]: {
    event: "generate-image",
  },
  [FeatureFlag.ANALYSE_VIDEO]: {
    event: "analyse-video",
  },
  [FeatureFlag.TITLE_GENERATIONS]: {
    event: "generate-title",
  },
  [FeatureFlag.IDEA_GENERATION]: {
    event: "generate-idea",
  },
  [FeatureFlag.SCRIPT_GENERATION]: {
    event: "",
  },
};
