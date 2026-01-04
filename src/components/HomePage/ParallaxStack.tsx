'use client';

import Image from 'next/image';
import * as motion from 'motion/react-client';
import { useTransform, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { SquareArrowOutUpRight, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

/* ================= TYPES ================= */

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

interface ParallaxStackProps {
    projects: Project[];
}

/* ================= MAIN COMPONENT ================= */

export default function ParallaxStack({ projects }: ParallaxStackProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <main ref={containerRef}>
            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.03;
                return (
                    <Card
                        key={project.id}
                        index={i}
                        project={project}
                        progress={scrollYProgress}
                        range={[i * 0.15, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </main>
    );
}

/* ================= CARD COMPONENT ================= */

interface CardProps {
    project: Project;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    index: number;
}

const Card: React.FC<CardProps> = ({
    project,
    progress,
    range,
    targetScale,
    index,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const scale = useTransform(progress, range, [1, targetScale]);
    const translateY = useTransform(progress, [0, 1.5], [index * 50, 15]);

    return (
        <motion.div
            ref={cardRef}
            className="sticky w-full top-20 h-screen"
            style={{ translateY }}
        >
            <motion.div
                className={`w-full max-tablet-lg:min-h-[50vh] max-mobile-lg:min-h-[60vh] rounded-2xl overflow-hidden bg-card relative shadow-lg hover:shadow-[0px_5px_20px] hover:shadow-muted border border-border ${project.color} origin-top z-10`}
                style={{ scale }}
            >
                <div className="flex max-mobile-lg:flex-col justify-between w-full relative z-20">

                    {/* IMAGE SECTION */}
                    <div className="basis-4/6 rounded-3xl p-4 max-mobile-sm:p-2 overflow-hidden">
                        <div className="w-full h-full overflow-hidden rounded-xl border border-border">
                            <Image
                                src={project.image}
                                width={1400}
                                height={1000}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* CONTENT SECTION */}
                    <div className="basis-2/6 flex flex-col gap-3 justify-between p-4 max-mobile-sm:p-2 max-mobile-sm:pt-0 relative">
                        <div>
                            <h2 className="max-mobile-sm:text-2xl">
                                {project.title}
                            </h2>

                            <p className="max-mobile-sm:text-md max-mobile-sm:max-h-[20vh] max-mobile-sm:overflow-y-auto">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.techUsed.map(tech => (
                                    <Badge
                                        key={tech}
                                        className="rounded-sm text-sm shadow-lg"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* BUTTONS SECTION (FIXED) */}
                        <div className="flex gap-2 items-end justify-between">
                            <div className="flex gap-2">

                                {project.codeLink && (
                                    <Link
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="no-underline"
                                    >
                                        <Button className="flex items-center font-bold">
                                            Code
                                            <Code className="ml-1 translate-y-[-2.5px]" />
                                        </Button>
                                    </Link>
                                )}

                                {project.demoLink && (
                                    <Link
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="no-underline"
                                    >
                                        <Button
                                            variant="outline"
                                            className="flex items-center font-bold"
                                        >
                                            Demo
                                            <SquareArrowOutUpRight className="ml-1 translate-y-[-2.5px]" />
                                        </Button>
                                    </Link>
                                )}

                            </div>

                            <Image
                                src={project.logo}
                                alt="project logo"
                                className="absolute right-2 bottom-2 w-20"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
