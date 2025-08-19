import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { AboutSection } from '../components/AboutSection';
import { ContentSection } from '../components/ContentSection';
import { ContactSection } from '../components/ContactSection';
import { data } from '../data/data';

type SectionId = 'about' | 'education' | 'competitions' | 'projects' | 'contact';

export const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        const navHeight = 80;
        const offsetTop = element.offsetTop - navHeight;
        
        window.scrollTo({ 
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string): void => {
    setActiveSection(sectionId as SectionId);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const sections: SectionId[] = ['about', 'education', 'competitions', 'projects', 'contact'];
      const scrollY = window.scrollY;
      const scrollPosition = scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Check if user is at the bottom of the page
      if (scrollPosition >= pageHeight - 10) {
        setActiveSection('contact');
        return;
      }

      // Loop through sections in reverse to find the last visible one
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollY + 100 >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation 
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onNavClick={handleNavClick}
      />
      
      <main className="pt-16 md:pt-20">
        <AboutSection />
        
        <ContentSection 
          sectionId="education"
          title="Education"
          items={data.education}
        />
        
        <ContentSection 
          sectionId="competitions"
          title="Competitions"
          items={data.competitions}
        />
        
        <ContentSection 
          sectionId="projects"
          title="Projects"
          items={data.projects}
        />
        
        <ContactSection />
      </main>
    </div>
  );
};