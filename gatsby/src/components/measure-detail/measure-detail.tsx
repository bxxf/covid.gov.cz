import React from 'react';

import I18n from '@/components/i18n';

import { IMeasureDetailFragment } from 'graphql-types';
import { graphql } from 'gatsby';
import TopicDetail from '../topic-detail';
import { RegionsMarker, TimeMarker } from '../marker';

interface IProps {
  measure: IMeasureDetailFragment;
}

const MeasureDetail: React.FC<IProps> = ({ measure }) => {
  const hasRegion = Boolean(measure.relationships.region.length);
  const hasTimeConstraint = Boolean(measure.valid_from || measure.valid_to);
  return (
    <TopicDetail
      breadcrumbItems={[
        { title: I18n('home'), url: '/' },
        {
          title: I18n('current_measures'),
          url: I18n(`slug_measures`),
        },
        {
          title: measure.relationships?.situation_type?.name,
          url: measure.relationships?.situation_type?.path?.alias,
        },
        measure.title,
      ]}
      title={measure.title}
      subtitle={measure.norm}
      processedContent={measure?.content?.processed}
    >
      {(hasRegion || hasTimeConstraint) && (
        <div className="mt-2">
          <h3 className="mb-1 color-blue-dark">{I18n('location_validity')}</h3>
          {hasRegion && (
            <RegionsMarker regions={measure.relationships.region} />
          )}
          {hasTimeConstraint && (
            <TimeMarker
              validFrom={measure.valid_from}
              validTo={measure.valid_to}
            />
          )}
        </div>
      )}
    </TopicDetail>
  );
};

export const query = graphql`
  fragment MeasureDetail on measure {
    title
    norm
    content: description {
      processed
    }
    links: source {
      uri
      title
    }
    relationships {
      region {
        name
      }
      situation_type: field_measure_type {
        name
        path {
          alias
        }
      }
      related_situations: situation {
        title
      }
    }
    path {
      alias
    }
    changed
    valid_from
    valid_to
  }
`;

export default MeasureDetail;