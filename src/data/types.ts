export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ContentItem {
  title: string;
  tags: string[];
  bigTags: string[];
  text: string;
  link: string;
}

export interface ContactLink {
  name: string;
  url: string;
}

export interface ContactInfo {
  description: string;
  links: ContactLink[];
}

export interface Data {
  personal: PersonalInfo;
  education: ContentItem[];
  competitions: ContentItem[];
  projects: ContentItem[];
  contact: ContactInfo;
}

export interface NavItem {
  id: string;
  label: string;
}