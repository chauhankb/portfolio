import React from 'react';
import Section from '@/components/HomePage/Section';

const FooterSection: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Section className="border-t border-border">
            <div className="text-center py-4">
                <p className="text-muted-foreground">
                    © {currentYear} Krishna Chauhan. All rights reserved.
                </p>
            </div>
        </Section>
    );
};

export default FooterSection;
