import { createBrowserRouter } from "react-router";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { CreateAccountScreen } from "./screens/auth/CreateAccountScreen";
import { SignUpScreen } from "./screens/auth/SignUpScreen";
import { MainLayout } from "./components/MainLayout";
import { HomeScreen } from "./screens/main/HomeScreen";
import { ProfileScreen } from "./screens/main/ProfileScreen";

// Feature 1
import { Feature1LandingScreen } from "./screens/main/feature1/Feature1LandingScreen";
import { ScanResultScreen } from "./screens/main/feature1/ScanResultScreen";
import { ModelLibraryScreen } from "./screens/main/feature1/ModelLibraryScreen";
import { ARAssemblyScreen } from "./screens/main/feature1/ARAssemblyScreen";
import { CompletionScreen } from "./screens/main/feature1/CompletionScreen";

// Feature 2
import { Feature2LandingScreen } from "./screens/main/feature2/Feature2LandingScreen";
import { MissionLevelsScreen } from "./screens/main/feature2/MissionLevelsScreen";
import { HintScreen } from "./screens/main/feature2/HintScreen";
import { MissionCompletionScreen } from "./screens/main/feature2/MissionCompletionScreen";

// Feature 3
import { Feature3LandingScreen } from "./screens/main/feature3/Feature3LandingScreen";
import { ImagePromptScreen } from "./screens/main/feature3/ImagePromptScreen";
import { ARAnimationScreen } from "./screens/main/feature3/ARAnimationScreen";
import { SaveScreen } from "./screens/main/feature3/SaveScreen";

export const router = createBrowserRouter([
  { path: "/", Component: WelcomeScreen },
  { path: "/auth/create", Component: CreateAccountScreen },
  { path: "/auth/signup", Component: SignUpScreen },
  { 
    path: "/main", 
    Component: MainLayout,
    children: [
      { path: "home", Component: HomeScreen },
      { path: "profile", Component: ProfileScreen },
      
      // Feature 1 Flow
      { path: "feature1", Component: Feature1LandingScreen },
      { path: "feature1/scan", Component: ScanResultScreen },
      { path: "feature1/library", Component: ModelLibraryScreen },
      { path: "feature1/assembly", Component: ARAssemblyScreen },
      { path: "feature1/completion", Component: CompletionScreen },

      // Feature 2 Flow
      { path: "feature2", Component: Feature2LandingScreen },
      { path: "feature2/levels", Component: MissionLevelsScreen },
      { path: "feature2/hint", Component: HintScreen },
      { path: "feature2/completion", Component: MissionCompletionScreen },

      // Feature 3 Flow
      { path: "feature3", Component: Feature3LandingScreen },
      { path: "feature3/prompt", Component: ImagePromptScreen },
      { path: "feature3/animation", Component: ARAnimationScreen },
      { path: "feature3/save", Component: SaveScreen },
    ]
  }
]);
