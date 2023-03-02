import { Modal } from '../../UI/Modal/Modal';
import classes from './UserModal.module.css';

const UserInfo = ({ info }) => {
  const mappedInfo = info.map(([name, value], idx) => {
    let valueToRender;

    if (Array.isArray(value) || typeof value === 'boolean') {
      const stringFromValue = value.toString();
      if (stringFromValue.includes('[object Object]')) {
        valueToRender = value.map((obj) => obj.name).toString();
      } else {
        valueToRender = stringFromValue;
      }
    } else {
      valueToRender = value;
    }
    return (
      <p key={name} className={classes.field}>
        <span>{idx + 1}) </span>
        <span className={classes.type}>{name}: </span>
        <span>{valueToRender}</span>
      </p>
    )
  });

  return (
    <div className={classes.info}>
      {mappedInfo}
    </div>
  )
}

export const UserModal = ({ user, onClose }) => {
  const _dataBlackList = ['_id', 'index', 'guid', 'latitude', 'registered', 'longitude', 'picture'];
  const userInfo = Object.entries(user).filter(([key, entry]) => !(_dataBlackList.includes(key)))

  return (
    <Modal title={user.name} onClose={onClose}>
      <UserInfo info={userInfo} />
    </Modal>
  )
}