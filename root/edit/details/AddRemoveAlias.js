/* eslint-disable no-negated-condition */
import React from 'react';

import formatEntityTypeName from '../../static/scripts/common/utility/formatEntityTypeName';
import DescriptiveLink from '../../static/scripts/common/components/DescriptiveLink';
import EntityLink from '../../static/scripts/common/components/EntityLink';
import isolateText from '../../static/scripts/common/utility/isolateText';
import yesNo from '../../static/scripts/common/utility/yesNo';

const AddRemoveAlias = ({edit}) => {
  const display = edit.display_data;
  const entityType = display.entity_type;
  const entity = display[entityType];
  return (
    <table className={`details ${edit.edit_kind}-${entityType}-alias`}>
      <tr>
        <th>{addColon(formatEntityTypeName(entityType))}</th>
        <td>
          <DescriptiveLink entity={entity} />
          {(entity && entity.gid) ? <EntityLink entity={entity} title={` ${bracketed(l('view all aliases'))}`} /> : null}
        </td>
      </tr>
      <tr>
        <th>{addColon(l('Alias'))}</th>
        <td>{isolateText(display.alias)}</td>
      </tr>
      {(display.sort_name !== '') ? (
        <tr>
          <th>{addColon(l('Sort name'))}</th>
          <td>{display.sort_name}</td>
        </tr>
      ) : null}
      {(display.locale !== '') ? (
        <>
          <tr>
            <td>{addColon(l('Locale'))}</td>
            <td>{display.locale}</td>
          </tr>
          <tr>
            <td>{addColon(l('Primary for locale'))}</td>
            <td>{yesNo(display.primary_for_locale)}</td>
          </tr>
        </>
      ) : null}
      {(display.type) ? (
        <tr>
          <td>{addColon(l('Type'))}</td>
          <tr>{display.type.name}</tr>
        </tr>
      ) : null}
      {(!display.begin_data.is_empty) ? (
        <tr>
          <td>{addColon(l('Begin date'))}</td>
          <td>{display.begin_data.format}</td>
        </tr>
      ) : null}
      {(!display.end_date.is_empty) ? (
        <tr>
          <td>{addColon(l('End date'))}</td>
          <td>{display.end_date.format}</td>
        </tr>
      ): null}
      <tr>
        <td>{addColon(l('Ended'))}</td>
        <td>{yesNo(display.ended)}</td>
      </tr>
    </table>
  );
};

export default AddRemoveAlias;
