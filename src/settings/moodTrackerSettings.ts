import { defaultEmotions as defaultEmotionSections } from "src/data/defaultEmotions";
import { EmotionSection } from "src/entities/IEmotionSection";


export class MoodTrackerSettings {
    folderPath = "";
    emotionSections: EmotionSection[] = [];
    moodRatingLabelDict: { [key: number]: string };
    template: string;
    trackerModalTitle: string;
}

export const DEFAULT_SETTINGS: MoodTrackerSettings = {
    folderPath: "./data/",
    emotionSections: defaultEmotionSections,
    moodRatingLabelDict: { 
        1: "😨",
        2: "☹️",
        3: "😐",
        4: "🙂",
        5: "😊",
    },
    template: "- {{ICON}} {{NOTE}}",
    trackerModalTitle: "How are you feeling?"
}