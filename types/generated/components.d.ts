import type { Schema, Attribute } from '@strapi/strapi';

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
    icon: 'shield';
  };
  attributes: {
    jobTitle: Attribute.String;
    company: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    responsibilities: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'experience.experience': ExperienceExperience;
    }
  }
}
