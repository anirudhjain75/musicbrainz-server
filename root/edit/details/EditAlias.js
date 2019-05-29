// @flow

import React from 'react';

import formatEntityTypeName from '../../static/scripts/common/utility/formatEntityTypeName';
import bracketed from '../../static/scripts/common/utility/bracketed';
import DescriptiveLink from '../../static/scripts/common/components/DescriptiveLink';
import EntityLink from '../../static/scripts/common/components/EntityLink';
import isolateText from '../../static/scripts/common/utility/isolateText';
import Diff from '../../static/scripts/edit/components/edit/Diff';
import FullChangeDiff from '../../static/scripts/edit/components/edit/FullChangeDiff';
import formatDate from '../../static/scripts/common/utility/formatDate';

type StrCompT = {
  new: string,
  old: string,
};

type DateCompT = {
  new: PartialDateT,
  old: PartialDateT,
};

type OnlyNameT = {
  name: string,
};

type DisplayDataT = {
  alias: StrCompT,
  artist: OnlyNameT,
  begin_date: DateCompT,
  end_date: DateCompT,
  ended: StrCompT,
  entity_type: string,
  locale: StrCompT,
  primary_for_locale: StrCompT,
  sort_name: StrCompT,
  type: {
    new: OnlyNameT,
    old: OnlyNameT,
  },
};

type EditAliasT = {
  locale: string,
  name: string,
  primary_for_locale: boolean,
};

type Props = {
  ...EditT,
  alias: EditAliasT,
  display_data: DisplayDataT,
};

const EditAlias = (edit: Props) => {
  const display = edit.display_data;
  const entityType = display.entity_type;
  const entity = display[entityType];
  console.log(edit);
  const aliasName = edit.alias.name;
  return (
    <table className={`details edit-${entityType}-alias`}>
      <tr>
        <th>{addColon(formatEntityTypeName(entityType))}</th>
        <td colSpan="2">
          <DescriptiveLink entity={entity} />
          {' '}
          {(entity && entity.gid) ? bracketed(<EntityLink content={l('view all aliases')} entity={entity} subPath="aliases" />) : null}
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
      <Diff label={addColonText(l('Alias'))} newText={display.alias.new} oldText={display.alias.old} split="\s+" />
      <Diff label={addColonText(l('Sort name'))} newText={display.sort_name.new} oldText={display.sort_name.old} split="\s+" />
      <FullChangeDiff label={addColonText(l('Locale'))} newText={display.locale.new} oldText={display.locale.old} />
      <FullChangeDiff label={addColonText(l('Primary for locale'))} newText={display.primary_for_locale.new} oldText={display.primary_for_locale.old} />
      <FullChangeDiff label={addColonText(l('Type'))} newText={display.type.new ? display.type.new.name : ''} oldText={display.type.old ? display.type.old.name : ''} />
      <Diff label={addColonText(l('Begin date'))} newText={formatDate(display.begin_date.new)} oldText={formatDate(display.begin_date.old)} split="\s+" />
      <Diff label={addColonText(l('End date'))} newText={formatDate(display.end_date.new)} oldText={formatDate(display.end_date.old)} split="\s+" />
      <FullChangeDiff label={addColonText(l('Ended'))} newText={display.ended.new} oldText={display.ended.old} />
    </table>
  );
};

export default EditAlias;
