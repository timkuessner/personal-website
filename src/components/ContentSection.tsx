import React from 'react';
import { Card, CardTitle, CardDescription } from './Card';
import type { ContentItem } from '../data/types';

interface ContentSectionProps {
  sectionId: string;
  title: string;
  items: ContentItem[];
}

export const ContentSection: React.FC<ContentSectionProps> = ({ sectionId, title, items }) => {
  return (
    <section id={sectionId} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center mb-12 sm:mb-16 tracking-tight">
          {title}
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {items.map((item, index) => (
            <Card key={index}>
              <CardTitle href={item.link}>
                {item.title}
              </CardTitle>
              {item.tags.length > 0 && (
                <div className="flex flex-wrap justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <React.Fragment key={tagIndex}>
                      <span>{tag}</span>
                      {tagIndex < item.tags.length - 1 && (
                        <span className="hidden sm:inline">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
              <CardDescription>{item.text}</CardDescription>
              {item.bigTags.length > 0 && (
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                  {item.bigTags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1.5 bg-gray-700 text-gray-300 text-sm rounded-md hover:bg-gray-600 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
