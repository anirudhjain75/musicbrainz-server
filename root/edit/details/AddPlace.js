import React from 'react';

import DescriptiveLink from '../../static/scripts/common/components/DescriptiveLink';
import isDateEmpty from '../../static/scripts/common/utility/isDateEmpty';
import {formatCoordinates} from '../../utility/coordinates';
import formatDate from '../../static/scripts/common/utility/formatDate';
import yesNo from '../../static/scripts/common/utility/yesNo';

const AddPlace = ({edit}) => {
  const display = edit.display_data;
  const entity = display.place;
  return (
    <>
      <table className="details">
        <tbody>
          <tr>
            <th>{l('Place:')}</th>
            <td><DescriptiveLink allowNew entity={entity} /></td>
          </tr>
        </tbody>
      </table>
      <table className="details add-place">
        <tbody>
          <tr>
            <th>{l('Name:')}</th>
            <td>{display.name}</td>
          </tr>
          {display.comment ? (
            <tr>
              <th>{addColon(l('Disambiguation'))}</th>
              <td>{display.comment}</td>
            </tr>
          ) : null}
          {display.type ? (
            <tr>
              <th>{l('Type:')}</th>
              <td>{display.type.name}</td>
            </tr>
          ) : null}
          {display.address ? (
            <tr>
              <th>{l('Address:')}</th>
              <td>{display.address}</td>
            </tr>
          ) : null}
          {display.area.gid === '' ? null : (
            <tr>
              <th>{l('Area:')}</th>
              <td><DescriptiveLink entity={display.area} /></td>
            </tr>
          )}
          {display.coordinates ? (
            <tr>
              <th>{l('Coordinates:')}</th>
              <td>{formatCoordinates(display.coordinates)}</td>
            </tr>
          ) : null}
          {isDateEmpty(display.begin_date) ? null : (
            <tr>
              <th>{l('Begin date:')}</th>
              <td>{formatDate(display.begin_date)}</td>
            </tr>
          )}
          {isDateEmpty(display.end_date) ? null : (
            <tr>
              <th>{l('End date:')}</th>
              <td>{formatDate(display.end_date)}</td>
            </tr>
          )}

          <tr>
            <th>{l('Ended:')}</th>
            <td>{yesNo(display.ended)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AddPlace;
