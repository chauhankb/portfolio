import React from 'react';
import Section from '@/components/HomePage/Section';
import ParallaxStack from '@/components/HomePage/ParallaxStack';
import linux from '@/assets/icons/skill/skill-icons--linux-light.svg';

import projectImage1 from '@/assets/images/projects/1.png';
import projectImage2 from '@/assets/images/projects/2.png';
import projectImage3 from '@/assets/images/projects/3.png';
import projectImage4 from '@/assets/images/projects/4.png';

import { StaticImageData } from 'next/image';

// Project type
interface Project {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    color: string;
    logo: StaticImageData;
    techUsed: string[];
    demoLink: string;
    codeLink: string;
}

// ✅ PROJECTS TAKEN STRICTLY FROM RESUME
const projects: Project[] = [
    {
        id: 1,
        title: 'Student Analytics System',
        description:
            'A full-stack web application designed to track and analyze student attendance and academic performance. The system manages student records, attendance, and marks with backend logic implemented in Java and SQL, and a basic React frontend integrated using REST-style APIs.',
        image: projectImage1,
        color: 'bg-card',
        logo: linux,
        techUsed: ['Java', 'SQL', 'React', 'HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://drive.google.com/your-demo-pdf',
        codeLink: 'https://github.com/chauhankb/student-analytics-system',
    },
    {
        id: 2,
        title: 'Solar Stable – Android Application',
        description:
            'An Android application developed to monitor and calculate solar panel efficiency using real-time IoT sensor data. The app processes parameters such as voltage, current, irradiance, and temperature to compute power output and efficiency, and displays historical performance records.',
        image: projectImage2,
        color: 'bg-card',
        logo: linux,
        techUsed: ['Java', 'Android Studio', 'Embedded Systems', 'IoT'],
        demoLink: 'https://drive.google.com/your-app-demo',
        codeLink: 'https://github.com/chauhankb/solar-stable-android',

    },
    {
        id: 3,
        title: 'Tata Sales & Quants – Retail Sales Analytics',
        description:
            'A data analytics project completed as part of a Tata Group mini internship. Built an interactive Power BI dashboard to analyze retail revenue, sales trends, and country-wise performance, and performed customer segmentation using RFM analysis to derive business insights.',
        image: projectImage3,
        color: 'bg-card',
        logo: linux,
        techUsed: ['Power BI', 'Data Analytics', 'Excel'],
        demoLink: 'https://app.powerbi.com/view?r=your-public-link',
        codeLink: '',

    },
    {
        id: 4,
        title: 'Gold Price Trend Analysis',
        description:
            'A data analysis project that studies 20 years of historical gold price data to identify long-term trends, volatility, and price behavior. Performed exploratory data analysis using moving averages and visualizations to derive data-driven insights.',
        image: projectImage4,
        color: 'bg-card',
        logo: linux,
        techUsed: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
        demoLink: 'https://www.kaggle.com/your-notebook',
        codeLink: 'https://github.com/chauhankb/gold-price-analysis',

    },
];

const ProjectSection: React.FC = () => {
    return (
        <div className="relative">
            <Section className={'py-10 relative'}>
                <div className="flex flex-col justify-center text-center py-10 w-2/3 mx-auto max-mobile-lg:w-full z-10">
                    <h1>Projects</h1>
                    <p>
                        A collection of academic, internship, and self-driven projects that
                        demonstrate my skills in software development, data analytics, and
                        problem-solving through practical, real-world applications.
                    </p>
                </div>

                {/* Parallax Stack */}
                <div>
                    <ParallaxStack projects={projects} />
                </div>

                {/* Gradient Blur Effect */}
                <div className="absolute top-0 inset-0 blur-[120px] -z-10">
                    <div
                        style={{
                            clipPath:
                                'polygon(0% 90.5%, 36.75% 77.5%, 73.07% 74.24%, 100% 68.25%, 92.28% 77.5%, 100% 100%, 87.37% 79.84%, 75% 75%, 57.48% 85.62%, 32.25% 58.25%, 32.25% 90.5%)',
                        }}
                        className="sticky top-0 h-[100vh] w-full object-cover -z-10 bg-gradient-to-r from-primary/60 to-destructive/50"
                    />
                </div>
            </Section>
        </div>
    );
};

export default ProjectSection;
