'use client';

import React from 'react';
import { motion } from 'motion/react'; // keep as is

// Icon imports (keep existing ones – no breaking)
import PhFileJsBold from '@/assets/icons/PhFileJsBold';
import NoniconsReact16 from '@/assets/icons/NoniconsReact16';
import MingcuteVscodeFill from '@/assets/icons/MingcuteVscodeFill';
import TeenyiconsGitSolid from '@/assets/icons/TeenyiconsGitSolid';
import HugeiconsGithub from '@/assets/icons/HugeiconsGithub';

// Skill type
interface Skill {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name: string;
}

// Categories type
interface Categories {
    [key: string]: Skill[];
}

const Skills: React.FC = () => {
    // ✅ UPDATED & PLACEMENT-HONEST SKILLS
    const categories: Categories = {
        programming: [
            { icon: PhFileJsBold, name: 'Java' },
            { icon: PhFileJsBold, name: 'Python' },
            { icon: PhFileJsBold, name: 'C' },
            { icon: PhFileJsBold, name: 'SQL' },
        ],
        web: [
            { icon: PhFileJsBold, name: 'HTML' },
            { icon: PhFileJsBold, name: 'CSS' },
            { icon: PhFileJsBold, name: 'JavaScript' },
            { icon: NoniconsReact16, name: 'React (Basics)' },
        ],
        data_ml: [
            { icon: PhFileJsBold, name: 'Pandas' },
            { icon: PhFileJsBold, name: 'NumPy' },
            { icon: PhFileJsBold, name: 'Matplotlib' },
            { icon: PhFileJsBold, name: 'Machine Learning (Basics)' },
            { icon: PhFileJsBold, name: 'NLP (Basics)' },
        ],
        tools: [
            { icon: MingcuteVscodeFill, name: 'VS Code' },
            { icon: TeenyiconsGitSolid, name: 'Git' },
            { icon: HugeiconsGithub, name: 'GitHub' },
        ],
    };

    return (
        <div className="flex flex-col gap-6 p-4">
            {Object.entries(categories).map(([category, skills]) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-semibold mb-3 capitalize">
                        {category.replace('_', ' ')}
                    </h2>

                    <div className="flex flex-wrap justify-start items-center gap-5">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true }}
                                className="bg-secondary text-secondary-foreground text-xl py-2 px-3 font-semibold flex gap-2 items-center justify-center border border-border rounded-lg hover:bg-secondary/90 hover:shadow-lg"
                            >
                                <skill.icon />
                                {skill.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Skills;
