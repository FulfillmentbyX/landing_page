
import { Header } from "./Header"
import { HeroSection } from "./HeroSection"
import { HowItWorks } from "./HowItWorks"
import { KeyFeautures } from "./KeyFeatures"
import { TailoredSolutions } from "./TailoredSolutions"
import { FrequentlyAskedQuestions } from "./FAQ"
import { TakeControl } from "./TakeControl"
import { Footer } from "./Footer"


export const LandingPage  = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <TailoredSolutions />
            <HowItWorks />
            <KeyFeautures />
            <FrequentlyAskedQuestions />
            <TakeControl />
            <Footer />
        </div>
    )
}