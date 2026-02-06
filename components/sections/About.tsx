import { Section } from "@/components/ui/section";
import { profileData } from "@/app/data/profile";

export function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900">
                        About Me
                    </h2>
                    <div className="w-16 h-1 bg-accent-500 rounded-full" />

                    <div className="prose text-secondary-600 leading-relaxed whitespace-pre-line">
                        {profileData.introduction.long}
                    </div>

                    <div className="pt-6">
                        <h3 className="text-xl font-bold text-secondary-800 mb-4">Core Competencies</h3>
                        <div className="flex flex-wrap gap-2">
                            {profileData.skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-100"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-secondary-100 shadow-xl mx-auto w-full max-w-md">
                    <img
                        src="/images/profile.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </Section>
    );
}
