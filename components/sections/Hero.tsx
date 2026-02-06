import { profileData } from "@/app/data/profile";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-50/30">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#4a984a_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
                <h2 className="text-secondary-600 font-medium tracking-wider mb-4 uppercase text-sm md:text-base animate-slide-up-fade">
                    {profileData.university} {profileData.major}
                </h2>

                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-900 mb-6 tracking-tight">
                    {profileData.name}
                    <span className="block text-xl md:text-2xl mt-4 font-normal text-secondary-500 font-sans tracking-wide">
                        {profileData.englishName} · {profileData.title}
                    </span>
                </h1>

                <p className="text-secondary-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    {profileData.introduction.short}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#about"
                        className="px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                    >
                        프로필 보기
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white text-secondary-700 border border-secondary-200 rounded-full font-medium hover:bg-secondary-50 transition-colors"
                    >
                        연락하기
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-secondary-400">
                <ArrowDown size={24} />
            </div>
        </div>
    );
}
