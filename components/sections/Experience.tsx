import { Section } from "@/components/ui/section";
import { profileData } from "@/app/data/profile";
import { Calendar, Building, Globe } from "lucide-react";

export function Experience() {
    const education = profileData.experiences.filter(exp => exp.category === 'education');
    const international = profileData.experiences.filter(exp => exp.category === 'international');
    const activities = profileData.experiences.filter(exp => ['activity', 'volunteering'].includes(exp.category));

    return (
        <Section id="experience" className="bg-secondary-50">
            <div className="space-y-16">

                {/* Education & International */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-heading font-bold text-primary-900 border-b border-secondary-200 pb-4">
                            Education
                        </h2>
                        <div className="space-y-6">
                            {education.map((exp) => (
                                <Card key={exp.id} item={exp} icon={<Building size={18} />} />
                            ))}
                        </div>
                    </div>

                    {/* International Column */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-heading font-bold text-primary-900 border-b border-secondary-200 pb-4">
                            International
                        </h2>
                        <div className="space-y-6">
                            {international.map((exp) => (
                                <Card key={exp.id} item={exp} icon={<Globe size={18} />} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Activities & Volunteering */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-heading font-bold text-primary-900 border-b border-secondary-200 pb-4">
                        Activities & Volunteering
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activities.map((exp) => (
                            <Card key={exp.id} item={exp} />
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}

function Card({ item, icon }: { item: any, icon?: React.ReactNode }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-100 hover:shadow-md transition-all hover:border-primary-200 group h-full">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-700 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-secondary-600 font-medium flex items-center gap-2 mt-1">
                        {icon}
                        {item.organization}
                    </p>
                </div>
                <span className="text-sm text-secondary-500 bg-secondary-50 px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                    <Calendar size={12} />
                    {item.period}
                </span>
            </div>

            <p className="text-secondary-700 mb-4">{item.description}</p>

            <ul className="space-y-2">
                {item.details.map((detail: string, idx: number) => (
                    <li key={idx} className="text-sm text-secondary-600 flex items-start gap-2">
                        <span className="text-accent-500 mt-1.5">•</span>
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    );
}
