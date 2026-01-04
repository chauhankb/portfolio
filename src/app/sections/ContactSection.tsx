import React from 'react';
import ContactForm from '@/components/HomePage/ContactForm';
import Section from '@/components/HomePage/Section';
import HugeiconsMailOpen from '@/assets/icons/HugeiconsMailOpen';
import SiPhoneDuotone from '@/assets/icons/SiPhoneDuotone';
import AkarIconsLocation from '@/assets/icons/AkarIconsLocation';
import JamLinkedinCircle from '@/assets/icons/JamLinkedinCircle';
import RaphaelGithubalt from '@/assets/icons/RaphaelGithubalt';
import contact from '@/assets/elements/contact.gif';
import Image from 'next/image';

const ContactSection: React.FC = () => {
    return (
        <Section className={'relative z-20 min-h-screen flex items-center'}>
            <div className="text-center py-10 mobile-lg:w-9/12 mx-auto">
                <h1>Contact</h1>
                <p>
                    I am open to internship and placement opportunities, collaborations,
                    and professional discussions. Feel free to reach out and connect.
                </p>
            </div>

            <div className="flex gap-4 max-tablet-lg:flex-col">
                
                {/* Contact Info Card */}
                <div className="basis-1/3 bg-card p-4 border border-border rounded-xl">
                    <Image src={contact} alt="Contact" className="w-[50%] mx-auto" />

                    <div className="flex flex-col gap-3 mt-4">
                        <span className="flex items-center text-primary text-xl gap-2 font-bold">
                            <HugeiconsMailOpen />
                            <a
                                href="mailto:chauhankb264@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline font-bold hover:text-primary/90 translate-y-1"
                            >
                                chauhankb264@gmail.com
                            </a>
                        </span>

                        <span className="flex items-center text-primary text-xl gap-2 font-bold">
                            <SiPhoneDuotone />
                            <span className="translate-y-1">
                                +91-9518334295
                            </span>
                        </span>

                        <span className="flex items-center text-primary text-xl gap-2 font-bold">
                            <AkarIconsLocation />
                            <span className="translate-y-1">
                                Nagpur, Maharashtra, India
                            </span>
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 text-4xl mt-4">
                        <a
                            href="https://www.linkedin.com/in/chauhankb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <JamLinkedinCircle />
                        </a>
                        <a
                            href="https://github.com/chauhankb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RaphaelGithubalt />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="basis-2/3">
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
};

export default ContactSection;
