import React from 'react';

import formatEntityTypeName from '../../static/scripts/common/utility/formatEntityTypeName';
import bracketed from '../../static/scripts/common/utility/bracketed';
import DescriptiveLink from '../../static/scripts/common/components/DescriptiveLink';
import EntityLink from '../../static/scripts/common/components/EntityLink';
import isolateText from '../../static/scripts/common/utility/isolateText';

const displayDiff = ({label, previous, current, split}) => {
  if (previous !== current) {
    split = split || '';
    return (
      <tr>
        <th>{label}</th>
        <td className="old"></td>
        <td className="new"></td>
      </tr>
    );
  }
};

const EditAlias = ({edit}) => {
  const display = edit.display_data;
  const entityType = display.entity_type;
  const entity = display[entityType];
  const aliasName = edit.alias.name;

  return (
    <table className={`details edit-${entityType}-alias`}>
      <tr>
        <th>{addColon(formatEntityTypeName(entityType))}</th>
        <td colSpan="2">
          <DescriptiveLink entity={entity} />
          {(entity && entity.gid) ? <EntityLink entity={entity} title={` ${bracketed(l('view all aliases'))}`} /> : null}
        </td>
      </tr>
      {(entity && entity.gid) ? (
        <tr>
          <th>{addColon(l('Alias'))}</th>
          <td colSpan="2">
            {aliasName ? <span className="deleted">{l('[removed]')}</span> : (
              <>
                {isolateText(aliasName)}
                {' '}
                {bracketed(edit.alias.primary_for_locale ? l(`primary for ${edit.alias.locale}`) : edit.alias.locale)}
              </>
            )}
          </td>
        </tr>) : null}
    </table>
  );
};

export default EditAlias;
