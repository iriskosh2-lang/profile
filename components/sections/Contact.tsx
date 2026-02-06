import { Section } from "@/components/ui/section";
import { profileData } from "@/app/data/profile";
import { Mail, MapPin } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="bg-primary-900 text-white !py-24">
            <div className="text-center max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Connect With Me
                </h2>
                <p className="text-primary-100 text-lg leading-relaxed mb-12">
                    한의학 연구, 협업 제안, 혹은 단순한 커피챗 제안 모두 환영합니다.<br />
                    언제든지 연락해 주세요.
                </p>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <a
                        href={`mailto:${profileData.email}`}
                        className="flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-6 rounded-2xl transition-all w-full md:w-auto min-w-[300px]"
                    >
                        <div className="p-3 bg-accent-500 rounded-full text-white shrink-0">
                            <Mail size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-primary-200 text-sm font-medium uppercase tracking-wider">Email</p>
                            <p className="text-xl font-bold">{profileData.email}</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-8 py-6 rounded-2xl w-full md:w-auto min-w-[300px]">
                        <div className="p-3 bg-primary-700 rounded-full text-white shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-primary-200 text-sm font-medium uppercase tracking-wider">Location</p>
                            <p className="text-xl font-bold">Chungbuk, South Korea</p>
                        </div>
                    </div>
                </div>

                <footer className="mt-24 pt-8 border-t border-primary-800 text-primary-400 text-sm">
                    © {new Date().getFullYear()} {profileData.englishName}. All rights reserved.
                </footer>
            </div>
        </Section>
    );
}
